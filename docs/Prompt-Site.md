Quero que você crie o Site institucional "Cobre \& Sépia Jurídico" em 3 arquivos (index.html, style.css e script.js), usando APENAS HTML5 semântico, CSS3 (Flexbox, Grid, variáveis CSS) e JavaScript Vanilla ES6, sem qualquer framework ou biblioteca externa.

REGRA: Use imagens genéricas premium (Unsplash) relacionadas ao nicho caso não haja imagens reais. Inclua URLs diretas das imagens.

IDENTIDADE VISUAL BASE:

Paleta: #6B2D1F (Borgonha-Café principal), #C8A882 (Caramelo dourado), #F5F0EB (Creme quente), #1C1007 (Quase-preto com subtom quente), #8B4B34 (Marrom médio de apoio)

Tipografia: Cormorant Garamond (700/400 — títulos e destaques editoriais) + DM Sans (400/500 — corpo e UI)

Estilo: Luxury Legal Branding feminino — editorial quente, autoridade jurídica sofisticada, sem frieza corporativa

Sensação: Segurança afetiva. A advogada que resolve com firmeza e acolhimento. Cálida, competente, de confiança.

LAYOUT ESCOLHIDO:

Hero: A) Split assimétrico 55/45 — coluna esquerda com título editorial grande (Cormorant 7vw), subtítulo, CTA duplo (WhatsApp + "Saiba mais"); coluna direita com foto da Dra. (fundo quente do escritório) com clip-path diagonal em #6B2D1F cobrindo 30% lateral, e logo NR flutuando sobre a diagonal com opacity 0.15.

Serviços: F) Numeração grande (01–11) como elemento visual dominante em Cormorant 10vw cor #C8A882 com opacity 0.3, nome do serviço à frente em bold, breve descrição e linha separadora — listagem vertical elegante em 2 colunas no desktop.

Depoimentos: E) Carrossel fade com cards cream/off-white + logo Google oficial visível + nota ⭐ 5.0 (29 avaliações) destacada acima dos cards.

Sobre/Credenciais: D) Split 50/50 com imagem fixada (sticky) — lado esquerdo: foto editorial P\&B da Dra. Nayara (imagem 3); lado direito: texto rolável com 13 anos de advocacia, áreas de atuação, counters animados (29 avaliações ⭐5.0 / 13 anos / 100% online+presencial), linha do tempo simplificada.

ANIMAÇÕES DO PROJETO:



Logo NR na navbar → de opacity:0, translateY(-20px) para opacity:1, translateY(0) em 600ms, easing: cubic-bezier(0.22,1,0.36,1), trigger: load

Título hero H1 (cada palavra) → de opacity:0, translateY(40px) para opacity:1, translateY(0) em 800ms, stagger: 120ms por palavra, easing: ease-out, trigger: load

Foto hero → de scale(1.08), opacity:0 para scale(1), opacity:1 em 1000ms, easing: ease-out, trigger: load

Clip-path diagonal hero → de inset(0 100% 0 0) para inset(0 0% 0 0) em 1200ms, trigger: load, delay: 300ms

Numeração de serviços (01, 02…) → de translateX(-60px), opacity:0 para translateX(0), opacity:0.3 em 700ms, trigger: IntersectionObserver, stagger: 80ms

Cards de serviços → de translateY(30px), opacity:0 para translateY(0), opacity:1 em 600ms, easing: ease-out, trigger: IntersectionObserver

Counters (13 anos, 29 avaliações) → count-up animado de 0 ao valor final em 1800ms, trigger: IntersectionObserver

Imagem sticky sobre/credenciais → parallax suave translateY calculado em scroll (max ±20px), usando IntersectionObserver + requestAnimationFrame

Cards de depoimentos → fade crossfade entre slides em 500ms, easing: ease-in-out, autoplay: 5000ms, pausa on hover

FAQ acordeão → maxHeight: 0→auto em 400ms, opacity:0→1, ícone + rotate(45deg) em 300ms, trigger: click

Barra horizontal animada → marquee infinito de "NR Advocacia · Direito Imobiliário · Divórcio · Inventário · Usucapião · Campo Grande/RJ · Zona Oeste ·" em 30s loop contínuo

Botão WhatsApp flutuante → pulse suave scale(1)→scale(1.08)→scale(1) em 2000ms infinito, color: #25D366



SEÇÕES OBRIGATÓRIAS:

Navbar | Hero \[Split 55/45] | Seção de alto impacto: dor e solução do público-alvo | Serviços/Áreas de Atuação \[Numeração grande 01–11] | Barra horizontal animada | Seção de encantamento com imagens de resultado/segurança/pessoas | Sobre/Credenciais \[Split 50/50 sticky] | Depoimentos Google \[Carrossel fade + nota 5.0] | FAQ | Localização: endereço + mapa + botão "Como Chegar" + contatos e redes sociais | CTA com formulário ao lado | Rodapé + Créditos

RODAPÉ — coluna de contato (com ícones, todos clicáveis):

Nome → link Google Business: https://share.google/MTPn3cXZPAXJzzaVX

Endereço → link Google Maps rota: https://www.google.com/maps/dir//Nayara+Ribeiro...

Telefone/WhatsApp → (21) 98811-6618

CRÉDITOS:

Esquerda: © NR Advocacia 2026

Direita: Desenvolvido por AG5 Agência (AG5 em destaque na cor #C8A882, link para www.ag5agencia.com.br)

DIRETRIZES ANTI-GENÉRICO:

Sem hero centralizado com fundo escuro e texto branco genérico / Sem fade-up igual em todas as seções / Sem paleta azul + branco + cinza / Sem 3 colunas de ícone + título + texto

QUALIDADE DE CÓDIGO:

HTML semântico + IDs de ancoragem em todas as seções / Variáveis CSS no :root para cores, fontes e espaçamentos / Mobile-first com media queries / IntersectionObserver para animações de scroll (nunca scroll event direto) / will-change: transform, @media (prefers-reduced-motion), lazy loading / Formulário com validação real

OPCIONAL (fazem sentido para o nicho):

✅ Barra animada horizontal: "NR Advocacia · Direito Imobiliário · Divórcio · Inventário · Usucapião · Campo Grande RJ · Zona Oeste"

✅ Seção de avaliações Google com logo oficial e cards animados (29 avaliações ⭐ 5.0)



1 — MÍDIAS PRINCIPAIS

✅ Fotos da proprietária/advogada disponíveis (6 fotos reais):



Foto 1 — Dra. Nayara com kimono marrom/branco, segurando xícara NR, logotipo ao fundo (tom quente, vertical)

Foto 2 — Dra. Nayara de vestido verde-teal ao lado da cadeira de couro, placa NR ao fundo (quadrada)

Foto 3 — Retrato editorial P\&B, pose contemplativa com mão no queixo (alto impacto visual)

Foto 4 — Dra. debruçada sobre mapa imobiliário na mesa, prateleira com livros jurídicos ao fundo

Foto 5 — Mesma cena, olhando diretamente para a câmera (pose de autoridade)

Foto 6 — Variação da Foto 1, angulação ligeiramente diferente

Logo — NR monograma branco sobre fundo borgonha-café



✅ Fotos internas do escritório: Capturadas indiretamente nas fotos da Dra. (placa NR, prateleira iluminada com livros de Direito Imobiliário e Controladoria Jurídica, cadeira de couro, xícaras NR branded, pastas laranja)

✅ Vídeos disponíveis (8): Conteúdo do escritório, dicas jurídicas e 1 treinamento realizado para corretores da Imobiliária Lopes

❌ Ausências:



Foto externa/fachada do escritório (não enviada)

Equipe (escritório individual — não se aplica)





2 — INFORMAÇÕES DA EMPRESA

Nome: NR Advocacia — Nayara Ribeiro Advocacia e Consultoria Jurídica

Nicho: Advocacia — Direito Imobiliário, Família, Civil, Consumidor e Sucessões

Descrição institucional: Escritório de advocacia com atendimento presencial em Campo Grande/RJ e atendimento virtual em todo o estado do Rio de Janeiro. Referência em Direito Imobiliário e regularização fundiária na Zona Oeste carioca.

Proposta de valor: Solução jurídica completa para quem precisa regularizar imóvel, encerrar uma herança, se divorciar ou garantir seus direitos — com atendimento acessível, ético e disponível além do horário comercial.

Público-alvo: Homens e mulheres a partir de 35 anos, moradores da Zona Oeste do RJ, em processos de transição de vida (herança, divórcio, compra de imóvel, regularização fundiária).

Experiência: 13 anos de advocacia

Diferenciais: Atendimento virtual até as 22h; especialização sólida em Direito Imobiliário; realização de treinamentos para corretores imobiliários (parceria com Imobiliária Lopes); clareza e transparência com clientes; sinceridade sobre viabilidade dos casos; nota 5.0 no Google com 29 avaliações.

Principais serviços:

01\. Divórcio Extrajudicial e Judicial

02\. Pensão Alimentícia e Exoneração de Pensão

03\. Inventário Extrajudicial e Judicial

04\. Adjudicação Extrajudicial e Judicial

05\. Usucapião Extrajudicial e Judicial

06\. Ações Possessórias

07\. Análise e Assessoria para Compra e Venda de Imóveis

08\. Assessoria para Imobiliárias e Condomínios

09\. Ações de Defesa do Consumidor

10\. Testamento

11\. Doação com Usufruto

FAQ disponível:

P: Posso entrar com a usucapião?

R: Depende. Para analisar a viabilidade é necessário recolher dados sobre a história da posse, analisar a matrícula do imóvel e demais documentos. Após a análise, será possível falar sobre honorários e despesas com cartório e certidões. O serviço de Estudo de Viabilidade é realizado pelo escritório.

Contato:

WhatsApp: (21) 98811-6618

Site atual: www.nayararibeiro.adv.br

Endereço: R. Anísio Gonçalves, 36 — Campo Grande, Rio de Janeiro — RJ, 23045-310

Horário: Segunda a sexta, 9h às 18h (presencial) | Atendimento virtual até as 22h

Redes Sociais:

Instagram: https://www.instagram.com/advnayararibeiro/

LinkedIn: https://www.linkedin.com/in/nayara-ribeiro-72a0a4a6/

Google Business: https://share.google/MTPn3cXZPAXJzzaVX

Link de avaliação: https://search.google.com/local/writereview?placeid=ChIJqQWFCzrnmwARdS7CiwudlfU

Mapa embed:

html<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.9107924902523!2d-43.55662462468936!3d-22.91666097924808..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

Tour virtual embed disponível: Sim



3 — AVALIAÇÕES

Plataforma: Google | Total: 29 avaliações | Nota: ⭐ 5.0



Gustavo Arraes — 2 avaliações — 1 mês atrás — ⭐⭐⭐⭐⭐

Advogada excelente que sempre está a nossa disposição para as atualizações ou qualquer dúvida!



Michele Araujo — 1 avaliação — 2 meses atrás — ⭐⭐⭐⭐⭐

Excelente profissional! foi muito atenciosa, competente e resolveu nosso caso com muita dedicação e responsabilidade. Nos passou segurança em todo o processo e sempre esteve disponível para esclarecer nossas dúvidas. Super recomendo!



Beatriz Nogueira — 2 avaliações — 5 meses atrás — ⭐⭐⭐⭐⭐

Participei de um treinamento com a Dra. Nayara sobre documentação imobiliária e foi muito bom!! Ela nos ensinou a interpretar matrículas e transcrições, nos mostrou também um projeto de PAL, assuntos que normalmente são difíceis de entender, mas que com ela foi de uma forma simples e leve, porém mostrando muita experiência na área do Direito Imobiliário. Recomendo demais o trabalho dela!!!



Elis Carvalho — 1 avaliação — 5 meses atrás — ⭐⭐⭐⭐⭐

Durante o nosso encontro, tivemos a oportunidade de analisar uma matrícula de loteamento, compreender um projeto de PAL, e estudar as diferenças entre transcrição e matrícula, entre outros pontos fundamentais para o dia a dia do corretor.



Juliana Campos — 2 avaliações — 5 meses atrás — ⭐⭐⭐⭐⭐

Adorei a palestra da Nayara! O conteúdo sobre documentação foi extremamente esclarecedor e contribuiu muito para ampliar meu conhecimento na área.



Nathalia Leonardo — Local Guide · 24 avaliações · 7 fotos — 5 meses atrás — ⭐⭐⭐⭐⭐

Dra Nayara foi super atenciosa, prestativa, muito competente e muito clara em suas condutas. Super recomendado.



Luiz Fernandes — 7 avaliações — 6 meses atrás — ⭐⭐⭐⭐⭐

Foi ótima experiência. Profissional muito qualificada, experiente, dedicada, com vasto conhecimento na área de advocacia, educada, compreensiva e atenciosa.



Vilma Pinto de Andrade Silva — 3 avaliações — 7 meses atrás — ⭐⭐⭐⭐⭐

A minha experiência com a administração da doutora Nayara é muito positiva, uma excelente profissional que me dá suporte todas as vezes que preciso. Eu super indico essa excelente profissional, podem confiar.



Bruno Silva — Local Guide · 10 avaliações · 1 foto — 7 meses atrás — ⭐⭐⭐⭐⭐

Ótima dra. Todos os casos que preciso de acionar a justiça, eu faço uso dos serviços da Dra. Obtendo êxito em todos, graças ao empenho e a dedicação desta excelente profissional.



Marcelo Cardoso — 5 avaliações — 8 meses atrás — ⭐⭐⭐⭐⭐

Excelente profissional. Já me atendeu em dois processos. Ambos finalizados com êxito. Em uma questão específica que não era a área dela, me indicou outra colega que sanou minhas dúvidas. Em outro processo, foi sincera em dizer que no momento não teria como me atender. Achei muito legal da parte dela, não querer "agarrar o mundo sem ter braços para isso". Parabéns Nayara, que continue a profissional que tem sido.



4 — ANÁLISE DE BRANDING

Nicho: Advocacia — Direito Imobiliário, Família e Sucessões

Posicionamento: Premium acessível — autoridade técnica com calor humano

Estilo visual predominante: Luxury Branding Jurídico Feminino — Editorial Quente

Paleta de cores recomendada:

PapelNomeHexPrincipalBorgonha-Café (da logo NR)#6B2D1FApoioMarrom Médio#8B4B34DestaqueCaramelo Dourado#C8A882BackgroundCreme Quente#F5F0EBTextoQuase-preto Quente#1C1007Contraste suaveOff-white#FAF7F4

Direção estética: As fotos entregues já revelam a identidade: tons de chocolate, couro escuro, livros jurídicos iluminados, xícaras NR brandadas, iluminação quente de abajur. O P\&B editorial da foto 3 confirma o caminho de autoridade com sensibilidade. O site deve respirar essa paleta — nunca ficar frio ou asséptico como os clichês jurídicos de azul-marinho.

Sensação de marca: Confiança sem distância. A Dra. Nayara é acessível, disponível (atende até 22h), mas altamente técnica. O site deve transmitir: "Você está em boas mãos. Eu entendo o seu problema e sei como resolver."

Tipografia:



Títulos/Hero: Cormorant Garamond (peso 700, itálico seletivo) — elegância jurídica editorial

Corpo/UI: DM Sans (peso 400/500) — leitura clara, moderna, sem serifa

Numeração decorativa: Cormorant Garamond (peso 300, grande) — elemento editorial de distinção



Referências premium do mesmo nicho:



Sérgio Castro Advocacia (advocacia imobiliária SP — editorial mínimo)

Coelho da Rocha Advogados (RJ — luxury corporativo)

Lefosse Advogados (tipografia editorial grande, imagem autoral)





5 — CHECKLIST DE PENDÊNCIAS

Mídias:



❌ Foto externa/fachada do escritório (não fornecida — usar Unsplash como fallback para seção de localização)

⚠️ Vídeos (8 disponíveis) — não enviados como arquivo acessível; confirmar quais são autorizados para embed no site e em que seção cada um será usado



Contato:



❌ Telefone fixo / segunda linha (formulário pediu, não foi respondido — só WhatsApp disponível)

❌ E-mail institucional (não informado)

❌ Facebook (não informado)



Documentação:



❌ Número OAB (registro profissional — recomendado incluir no rodapé para credibilidade)

❌ CNPJ (não informado)



Conteúdo:



❌ História pessoal da Dra. Nayara (campo do formulário não respondido — recomenda-se solicitar 3–5 frases sobre sua trajetória)

❌ Descrição detalhada dos serviços (campo não respondido — pode ser construído a partir dos serviços listados + dados do Google)

⚠️ FAQ incompleto — apenas 1 pergunta respondida; solicitar mais 4–6 perguntas frequentes sobre divórcio, inventário e compra de imóvel





6 — ANÁLISE DE REFERÊNCIAS WEBFLOW

TEMPLATE 1 — Dorbar (https://webflow.com/templates/html/advocix-website-template | Preview: dorbar.webflow.io)

HERO: Split assimétrico aproximado 55/45 — coluna esquerda dominada por texto em serif grande com subtítulo e CTA; coluna direita com imagem de alta qualidade do advogado/escritório com overlay escuro parcial. Linha divisória vertical sutil. Elemento diferenciador: tag de credencial flutuante ("20+ Anos de Experiência") sobreposta à imagem. Animação de entrada: texto → translateY de baixo para posição em 700ms; imagem → fade-in com leve scale de 1.05→1 em 900ms.

NAV: Fundo transparente no topo; muda para fundo escuro sólido ao rolar. Links com underline animado de largura 0→100% no hover (easing ease-out, 250ms). Logo NR alinhado à esquerda.

TIPOGRAFIA: Títulos em serif clássico (estilo Playfair/Cormorant) peso 700, \~5.5vw desktop. Corpo em sans-serif neutro 1rem/1.6 line-height. Uso criativo: número de anos de experiência em display gigante com opacity 0.08 como elemento decorativo de fundo.

CORES APLICÁVEIS: Substituir paleta original por #6B2D1F (principal), #C8A882 (destaque dourado), #F5F0EB (background), #1C1007 (texto).

SERVIÇOS/CARDS: Grade de 2 colunas com cards de área de atuação, borda fina, ícone discreto, título em serif, breve descrição. Espaçamento generoso (padding 40px). Hover: card eleva com box-shadow sutil + borda na cor principal.

ANIMAÇÕES:



Cards de prática → opacity:0, translateY(30px) para opacity:1, translateY(0) em 600ms, easing: ease-out, trigger: IntersectionObserver (threshold 0.2), stagger: 100ms

Número decorativo de fundo → parallax vertical suave (move 15px no scroll) via requestAnimationFrame

CTA button → scale(1)→scale(1.03) em 200ms hover, background-color transition 300ms



MICRO-INTERAÇÕES: Botão CTA com background-color fill da esquerda para direita (pseudo-elemento ::before com width 0→100%); cards com cursor pointer e transform translateY(-4px) no hover.

ELEMENTOS DECORATIVOS: Linha horizontal fina em #C8A882 acima de títulos de seção; forma geométrica quadrada em #6B2D1F (opacity 0.06) como fundo decorativo na seção Sobre.

RESUMO CONSTRUTIVO: Recriar este estilo construindo um layout em duas colunas no hero onde a coluna de texto ocupa 55% e tem z-index maior, com a imagem à direita recebendo clip-path diagonal. Usar tipografia serif grande como âncora visual de autoridade. Navegar para tons quentes de borgonha/caramelo substituindo completamente qualquer azul ou cinza frio. O segredo deste template está na generosidade do espaçamento branco (cream) e na hierarquia tipográfica serif/sans contrastando.



TEMPLATE 2 — Justicia by BRIX Templates (https://brixtemplates.com/templates/law-firm-lawyer-attorney-webflow-template)

HERO: Fullscreen com imagem de fundo em modo overlay escuro controlado (\~60% opacity) — porém, para NR Advocacia adaptar-se-á para fundo em creme/off-white com imagem da Dra. em destaque à direita sem overlay escuro. Título editorial grande centralizado verticalmente à esquerda (Cormorant, 8vw). Badge de avaliação Google ⭐5.0 posicionado inline abaixo do subtítulo. CTA duplo: botão sólido + botão ghost.

NAV: Logo à esquerda, links ao centro, CTA à direita. Fundo branco/cream fixo. Underline de cor no hover com transição 200ms. Sticky com sombra leve ao scroll.

TIPOGRAFIA: Títulos: Cormorant Garamond ou similar, 700, espaçamento de letras -0.02em para elegância. Corpo: Inter ou DM Sans, 16px, line-height 1.7. Destaque criativo: citação de cliente em itálico grande (2rem) na seção de depoimentos.

CORES APLICÁVEIS: Paleta NR: #6B2D1F no CTA e elementos de destaque; #C8A882 nos ícones/numeração decorativa; #F5F0EB como background dominante; #1C1007 para texto.

SERVIÇOS/CARDS: Lista vertical elegante com numeração (01, 02, 03…) em display grande e cor dourada à esquerda (opacity 0.3), nome do serviço em bold à direita, linha divisória horizontal entre itens. 2 colunas no desktop. Expandível ao click (acordeão leve com seta rotacionando 180°).

ANIMAÇÕES:



Números grandes → translateX(-40px), opacity:0 → translateX(0), opacity:0.3 em 700ms, trigger: IntersectionObserver, stagger: 80ms por item

Linhas divisórias → width:0→100% em 500ms, easing: ease-out, trigger: IntersectionObserver

Seção de sobre → imagem com sticky position, texto rola ao lado; fade progressivo das linhas de texto a cada scroll-step (threshold 0.1 cada)

Badge Google → bounce-in (scale:0.5→1.05→1) em 600ms, trigger: IntersectionObserver



MICRO-INTERAÇÕES: Ícone WhatsApp flutuante com pulso CSS (keyframes: scale 1→1.1→1, 2s infinito); FAQ com seta SVG rotacionando 45° no open.

ELEMENTOS DECORATIVOS: Linha fina vertical em #C8A882 separando as 2 colunas de serviços; monograma NR em opacity 0.04 como watermark de fundo na seção hero; tag "13 anos de experiência" em pill-shape bordado com #6B2D1F.

RESUMO CONSTRUTIVO: Este template instrui a trabalhar com tipografia como protagonista visual. Para recriar o estilo NR Advocacia: construir a lista de serviços com a numeração grande (01–11) em Cormorant 10vw na cor #C8A882 com opacity 0.3 como elemento decorativo de fundo; sobrepor o nome do serviço em DM Sans 500 18px; usar linha de 1px em #C8A882 como separador. A seção Sobre deve ter a foto P\&B da Dra. Nayara em sticky scroll à esquerda e o texto correndo à direita — técnica que cria profundidade sem JavaScript complexo. Todos os elementos decorativos são apenas tipografia e linhas finas, nunca shapes ou blobs — condizente com o posicionamento jurídico premium.



7 — SISTEMA DE VARIAÇÃO DE LAYOUT

HERO:

✅ A) Split assimétrico 55/45 — texto esquerda em Cormorant 7vw com subtítulo DM Sans 1.1rem, CTA duplo (WhatsApp sólido #6B2D1F + "Ver Serviços" ghost); imagem direita da Dra. Nayara (foto 1 ou 6) com clip-path diagonal em borgonha cobrindo faixa lateral; logo NR em watermark sobre a diagonal.

SERVIÇOS:

✅ F) Numeração grande (01, 02, 03) — 01 a 11 em Cormorant 10vw, cor #C8A882 opacity 0.3 como fundo decorativo; nome do serviço em DM Sans Bold 18px sobrepost; separadores horizontais 1px; 2 colunas desktop / 1 coluna mobile.

DEPOIMENTOS:

✅ E) Carrossel fade + nota Google visível — background #F5F0EB; logo Google oficial topo da seção; nota "⭐ 5.0 · 29 avaliações" em destaque; cards cream com nome, tempo, estrelas e depoimento; autoplay 5s, pause on hover; botões de navegação minimalistas.

SOBRE/CREDENCIAIS:

✅ D) Split 50/50 com imagem fixada (sticky) — lado esquerdo: foto editorial P\&B (imagem 3) sticky durante o scroll da seção; lado direito: texto com 13 anos de advocacia, counters animados (29 avaliações / 13 anos / Zona Oeste RJ), áreas de atuação, linha do tempo simplificada.

