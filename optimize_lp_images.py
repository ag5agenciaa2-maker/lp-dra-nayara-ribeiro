#!/usr/bin/env python3
"""
Otimiza imagens da LP Nayara Ribeiro:
1. Gera mobile/tablet para imagens que não existem nessas pastas
2. Converte PNGs para WebP
"""
import os
from PIL import Image

ASSETS_DIR = "assets"
MOBILE_DIR = os.path.join(ASSETS_DIR, "mobile")
TABLET_DIR = os.path.join(ASSETS_DIR, "tablet")

os.makedirs(MOBILE_DIR, exist_ok=True)
os.makedirs(TABLET_DIR, exist_ok=True)

# Imagens que precisam de versões mobile/tablet (larguras aproximadas para LP)
# Baseado no layout da LP (hero maior, galeria menor, etc.)
IMAGES_TO_OPTIMIZE = {
    # Imagens da LP que não estavam no Link 360
    "nayara-ribeiro-advogada-analisando-planta.webp": (600, 1000),
    "nayara-ribeiro-advogada-certificados-alt.webp": (500, 900),
    "nayara-ribeiro-advogada-certificados.webp": (500, 900),
    "nayara-ribeiro-advogada-escritorio-campo-grande.webp": (700, 1200),
    "nayara-ribeiro-advogada-imobiliaria-foto-perfil.webp": (500, 900),
    "nayara-ribeiro-advogada-livro-usucapiao.webp": (400, 700),
    "nayara-ribeiro-advogada-reuniao-mesa.webp": (600, 1000),
    "nayara-ribeiro-advogada-rosto-perfil.webp": (500, 900),
    "nayara-ribeiro-advogada-xicara-cafe-2.webp": (500, 900),
    "nayara-ribeiro-advogada-xicara-cafe-3.webp": (500, 900),
    # Hero da LP (nome diferente no Link 360)
    "hero.webp": (900, 1400),
}

# PNGs para converter para WebP
PNGS_TO_CONVERT = [
    "nayara-ribeiro-dor-documentos.png",
    "nayara-ribeiro-solucao-escritura.png",
]

def resize_and_save(src_path, dst_path, max_width, quality=82):
    try:
        img = Image.open(src_path)
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        w, h = img.size
        if w > max_width:
            ratio = max_width / w
            new_h = int(h * ratio)
            img = img.resize((max_width, new_h), Image.LANCZOS)
        img.save(dst_path, 'WEBP', quality=quality, method=6)
        orig_size = os.path.getsize(src_path)
        new_size = os.path.getsize(dst_path)
        saved = (1 - new_size / orig_size) * 100
        print(f"  OK: {os.path.basename(dst_path)} ({orig_size//1024}KiB -> {new_size//1024}KiB, {saved:.0f}% saved)")
        return True
    except Exception as e:
        print(f"  ERRO: {os.path.basename(src_path)}: {e}")
        return False

def convert_png_to_webp(src_path, dst_path, quality=82):
    try:
        img = Image.open(src_path)
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        img.save(dst_path, 'WEBP', quality=quality, method=6)
        orig_size = os.path.getsize(src_path)
        new_size = os.path.getsize(dst_path)
        saved = (1 - new_size / orig_size) * 100
        print(f"  WebP: {os.path.basename(dst_path)} ({orig_size//1024}KiB -> {new_size//1024}KiB, {saved:.0f}% saved)")
        return True
    except Exception as e:
        print(f"  ERRO PNG: {os.path.basename(src_path)}: {e}")
        return False

def main():
    total_orig = 0
    total_new = 0

    # 1. Gerar mobile/tablet para imagens faltantes
    print("=== GERANDO VERSÕES MOBILE/TABLET ===")
    for filename, (mobile_w, tablet_w) in IMAGES_TO_OPTIMIZE.items():
        src = os.path.join(ASSETS_DIR, filename)
        if not os.path.exists(src):
            print(f"SKIP: {filename} não encontrado")
            continue

        total_orig += os.path.getsize(src)

        mobile_dst = os.path.join(MOBILE_DIR, filename)
        tablet_dst = os.path.join(TABLET_DIR, filename)

        print(f"Processando: {filename}")
        resize_and_save(src, mobile_dst, mobile_w)
        resize_and_save(src, tablet_dst, tablet_w)

        total_new += os.path.getsize(mobile_dst)
        total_new += os.path.getsize(tablet_dst)

    # 2. Converter PNGs para WebP
    print("\n=== CONVERTENDO PNGs PARA WEBP ===")
    for png_file in PNGS_TO_CONVERT:
        src = os.path.join(ASSETS_DIR, png_file)
        if not os.path.exists(src):
            print(f"SKIP: {png_file} não encontrado")
            continue

        webp_name = png_file.replace('.png', '.webp')
        webp_path = os.path.join(ASSETS_DIR, webp_name)

        print(f"Convertendo: {png_file}")
        convert_png_to_webp(src, webp_path)

        # Também gerar mobile/tablet para os WebPs convertidos
        mobile_dst = os.path.join(MOBILE_DIR, webp_name)
        tablet_dst = os.path.join(TABLET_DIR, webp_name)
        resize_and_save(webp_path, mobile_dst, 600)
        resize_and_save(webp_path, tablet_dst, 1000)

    print(f"\n=== RESUMO ===")
    print(f"Total original processado: {total_orig//1024} KiB")
    print(f"Total novos (mobile+tablet): {total_new//1024} KiB")

if __name__ == "__main__":
    main()
