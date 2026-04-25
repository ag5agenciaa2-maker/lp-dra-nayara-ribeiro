# Script de correcao de encoding
with open('index.html', 'r', encoding='utf-8', errors='replace') as f:
    text = f.read()

# Mapa de substituicoes dos caracteres corrompidos (UTF-8 mal interpretado como latin-1)
replacements = [
    ('Ã¡', 'á'),
    ('Ã ', 'à'),
    ('Ã¢', 'â'),
    ('Ã£', 'ã'),
    ('Ã©', 'é'),
    ('Ã¨', 'è'),
    ('Ãª', 'ê'),
    ('Ã­', 'í'),
    ('Ã³', 'ó'),
    ('Ã´', 'ô'),
    ('Ãµ', 'õ'),
    ('Ãº', 'ú'),
    ('Ã§', 'ç'),
    ('Ã‡', 'Ç'),
    ('Ã\x81', 'Á'),
    ('Ã\x89', 'É'),
    ('Ã\x8d', 'Í'),
    ('Ã\x93', 'Ó'),
    ('Ã\x9a', 'Ú'),
    ('Ã\x82', 'Â'),
    ('Ã\x8a', 'Ê'),
    ('Ã\x94', 'Ô'),
    ('Ã\x95', 'Õ'),
    ('Ã\x83', 'Ã'),
    ('â€™', "'"),
    ('â€œ', '"'),
    ('â€\x9d', '"'),
    ('â€"', '-'),
    ('Â·', '·'),
    ('Â©', '©'),
    ('Â®', '®'),
    ('Â°', '°'),
    ('Â»', '»'),
    ('Â«', '«'),
]

for wrong, right in replacements:
    text = text.replace(wrong, right)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print('DONE')
print('Amostra titulo:', text[text.find('<title>'):text.find('</title>')+8])
