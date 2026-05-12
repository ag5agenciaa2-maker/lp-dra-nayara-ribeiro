#!/usr/bin/env python3
"""
Otimiza o index.html da LP Nayara Ribeiro:
1. Troca PNGs por WebPs
2. Adiciona srcset + sizes nas imagens principais
3. Adiciona loading="lazy" onde falta (exceto hero/logo)
4. Atualiza preload do hero com imagesrcset
5. Adiciona defer no script.js
"""
import re

HTML_PATH = "index.html"

with open(HTML_PATH, 'r', encoding='utf-8') as f:
    html = f.read()

# ============================================================
# 1. TROCAR PNGs POR WEBPs
# ============================================================
html = html.replace('assets/nayara-ribeiro-dor-documentos.png', 'assets/nayara-ribeiro-dor-documentos.webp')
html = html.replace('assets/nayara-ribeiro-solucao-escritura.png', 'assets/nayara-ribeiro-solucao-escritura.webp')

print("✅ PNGs trocados por WebPs")

# ============================================================
# 2. ATUALIZAR PRELOAD DO HERO COM IMAGESRCSET
# ============================================================
old_preload = '<link rel="preload" as="image" href="assets/nayara-ribeiro-advogada-livros-direito.webp" type="image/webp" fetchpriority="high">'
new_preload = '<link rel="preload" as="image" href="assets/nayara-ribeiro-advogada-livros-direito.webp" type="image/webp" fetchpriority="high" imagesrcset="assets/mobile/nayara-ribeiro-advogada-livros-direito.webp 600w, assets/tablet/nayara-ribeiro-advogada-livros-direito.webp 900w, assets/nayara-ribeiro-advogada-livros-direito.webp 1200w" imagesizes="(max-width: 640px) 100vw, 50vw">'
html = html.replace(old_preload, new_preload)
print("✅ Preload do hero atualizado com imagesrcset")

# ============================================================
# 3. ADICIONAR SRCSET + SIZES NAS IMAGENS PRINCIPAIS
# ============================================================

# Mapeamento: arquivo -> (largura_mobile, largura_tablet, sizes)
# sizes depende do contexto da imagem na página
SRCSET_CONFIG = {
    # Hero (LCP) - já tem fetchpriority="high", não deve ter lazy
    'assets/nayara-ribeiro-advogada-livros-direito.webp': {
        'mobile_w': '600w',
        'tablet_w': '900w',
        'original_w': '1200w',
        'sizes': '(max-width: 640px) 100vw, 50vw',
        'lazy': False,
    },
    # Logo
    'assets/logo-nr-advocacia-desktop.webp': {
        'mobile_w': '150w',
        'tablet_w': '250w',
        'original_w': '400w',
        'sizes': '180px',
        'lazy': False,
    },
    # Impact cards (PNG -> WebP agora)
    'assets/nayara-ribeiro-dor-documentos.webp': {
        'mobile_w': '400w',
        'tablet_w': '600w',
        'original_w': '1200w',
        'sizes': '(max-width: 640px) 100vw, 600px',
        'lazy': True,
    },
    'assets/nayara-ribeiro-solucao-escritura.webp': {
        'mobile_w': '400w',
        'tablet_w': '600w',
        'original_w': '1200w',
        'sizes': '(max-width: 640px) 100vw, 600px',
        'lazy': True,
    },
    # About portrait
    'assets/nayara-ribeiro-advogada-retrato-preto-branco.webp': {
        'mobile_w': '500w',
        'tablet_w': '800w',
        'original_w': '1200w',
        'sizes': '(max-width: 640px) 90vw, 45vw',
        'lazy': True,
    },
    # Gallery strip items
    'assets/nayara-ribeiro-advogada-analisando-planta.webp': {
        'mobile_w': '200w',
        'tablet_w': '350w',
        'original_w': '800w',
        'sizes': '(max-width: 640px) 20vw, 120px',
        'lazy': True,
    },
    'assets/nayara-ribeiro-advogada-atendimento-cliente.webp': {
        'mobile_w': '200w',
        'tablet_w': '350w',
        'original_w': '800w',
        'sizes': '(max-width: 640px) 20vw, 120px',
        'lazy': True,
    },
    'assets/nayara-ribeiro-advogada-certificados.webp': {
        'mobile_w': '200w',
        'tablet_w': '350w',
        'original_w': '800w',
        'sizes': '(max-width: 640px) 20vw, 120px',
        'lazy': True,
    },
    'assets/nayara-ribeiro-advogada-xicara-cafe-1.webp': {
        'mobile_w': '200w',
        'tablet_w': '350w',
        'original_w': '800w',
        'sizes': '(max-width: 640px) 20vw, 120px',
        'lazy': True,
    },
    # Moção / Câmara
    'assets/nayara-ribeiro-escadaria-camara-municipal-mocao.webp': {
        'mobile_w': '700w',
        'tablet_w': '1100w',
        'original_w': '1500w',
        'sizes': '(max-width: 640px) 100vw, 80vw',
        'lazy': True,
    },
    'assets/nayara-ribeiro-mocao-camara-municipal-rj.webp': {
        'mobile_w': '500w',
        'tablet_w': '800w',
        'original_w': '1200w',
        'sizes': '(max-width: 640px) 45vw, 350px',
        'lazy': True,
    },
    'assets/nayara-ribeiro-certificado-mocao-camara-municipal.webp': {
        'mobile_w': '500w',
        'tablet_w': '800w',
        'original_w': '1200w',
        'sizes': '(max-width: 640px) 45vw, 350px',
        'lazy': True,
    },
    # Outras fotos
    'assets/nayara-ribeiro-advogada-analisando-planta-mesa.webp': {
        'mobile_w': '500w',
        'tablet_w': '800w',
        'original_w': '1200w',
        'sizes': '(max-width: 640px) 100vw, 600px',
        'lazy': True,
    },
    'assets/nayara-ribeiro-advogada-reuniao-mesa.webp': {
        'mobile_w': '500w',
        'tablet_w': '800w',
        'original_w': '1200w',
        'sizes': '(max-width: 640px) 100vw, 600px',
        'lazy': True,
    },
    'assets/nayara-ribeiro-lider-comissao-usucapiao.webp': {
        'mobile_w': '400w',
        'tablet_w': '600w',
        'original_w': '900w',
        'sizes': '(max-width: 640px) 100vw, 500px',
        'lazy': True,
    },
}

def add_srcset_to_img(match):
    full = match.group(0)
    src_match = re.search(r'src="([^"]+)"', full)
    if not src_match:
        return full
    src = src_match.group(1)
    
    if src not in SRCSET_CONFIG:
        return full
    
    config = SRCSET_CONFIG[src]
    fname = src.split('/')[-1]
    
    # Verifica se já tem srcset
    if 'srcset=' in full:
        return full
    
    mobile = f"assets/mobile/{fname} {config['mobile_w']}"
    tablet = f"assets/tablet/{fname} {config['tablet_w']}"
    original = f"{src} {config['original_w']}"
    
    srcset_attr = f' srcset="{mobile}, {tablet}, {original}"'
    sizes_attr = f' sizes="{config["sizes"]}"'
    
    # Adicionar loading="lazy" se necessário e ainda não tiver
    lazy_attr = ''
    if config['lazy'] and 'loading=' not in full:
        lazy_attr = ' loading="lazy"'
    
    # Inserir antes do fechamento da tag
    if full.endswith('>'):
        # Encontrar a posição do último '>'
        full = full[:-1] + srcset_attr + sizes_attr + lazy_attr + '>'
    
    return full

# Regex para capturar tags <img> completas
img_pattern = re.compile(r'<img[^>]*>', re.IGNORECASE)
html = img_pattern.sub(add_srcset_to_img, html)

print("✅ srcset + sizes + lazy loading adicionados às imagens")

# ============================================================
# 4. ADICIONAR DEFER NO SCRIPT.JS
# ============================================================
html = html.replace('<script src="script.js"></script>', '<script src="script.js" defer></script>')
html = html.replace('<script src="cookie-banner.js"></script>', '<script src="cookie-banner.js" defer></script>')

print("✅ defer adicionado aos scripts")

# ============================================================
# 5. ADICIONAR CSS CRÍTICO INLINE (mínimo para evitar FOUC)
# ============================================================
# Procurar o fechamento do </head> e adicionar CSS crítico antes
critical_css = '''<style>html{scroll-behavior:smooth}body{font-family:'DM Sans',system-ui,sans-serif;margin:0;padding:0;background:#FAF7F4;color:#1C1007}img{max-width:100%;height:auto;display:block}</style>'''

# Inserir após a tag <head> ou antes do fechamento </head>
if '<style>html{scroll-behavior:smooth}' not in html:
    html = html.replace('</head>', critical_css + '\n</head>')
    print("✅ CSS crítico inline adicionado")

# ============================================================
# SALVAR
# ============================================================
with open(HTML_PATH, 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\n🎉 Otimização concluída! Arquivo salvo: {HTML_PATH}")

# Contar estatísticas
srcset_count = html.count('srcset=')
lazy_count = html.count('loading="lazy"')
print(f"📊 Estatísticas:")
print(f"   - Imagens com srcset: {srcset_count}")
print(f"   - Imagens com lazy loading: {lazy_count}")
print(f"   - Scripts com defer: {html.count('defer></script>')}")
