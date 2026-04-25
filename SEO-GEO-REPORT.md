# Relatório de Auditoria e Otimização SEO / GEO

**Projeto:** NR Advocacia — Nayara Ribeiro  
**Data:** 2026-04-24  
**Escopo:** Landing Page + Páginas Auxiliares

---

## ✅ O que foi implementado

### 1. Arquivos Técnicos Criados

| Arquivo | Status | Descrição |
|---------|--------|-----------|
| `robots.txt` | ✅ Criado | Permite indexação geral, bloqueia `/assets/`, aponta sitemap |
| `sitemap.xml` | ✅ Criado | Lista as 4 páginas do projeto com prioridades e frequências |

### 2. Meta Tags e Social Cards

| Elemento | Páginas | Status |
|----------|---------|--------|
| `lang="pt-BR"` + `UTF-8` | Todas | ✅ OK |
| Viewport mobile | Todas | ✅ OK |
| Title otimizado (front-loading) | `index.html`, `sobre-nayara.html` | ✅ Ajustado |
| Meta description (150-160 chars) | Todas | ✅ OK |
| Canonical URL | Todas | ✅ Atualizado para domínio padrão |
| Favicon | Todas | ✅ Linkado |
| Open Graph (og:title, og:description, og:url, og:image, og:type) | `index.html`, `sobre-nayara.html` | ✅ Completo |
| Twitter Cards | `index.html`, `sobre-nayara.html` | ✅ Adicionado |
| Geo tags (geo.region, geo.placename, geo.position, ICBM) | `index.html`, `sobre-nayara.html` | ✅ Adicionado |
| Robots meta (`index, follow`) | Todas | ✅ Adicionado |

### 3. Performance & Core Web Vitals

| Métrica | Ação | Status |
|---------|------|--------|
| **LCP** | Preload da imagem Hero + `fetchpriority="high"` | ✅ Aplicado em ambas as páginas principais |
| **CLS** | `width` e `height` explícitos em **TODAS** as `<img>` | ✅ Aplicado em `index.html` e `sobre-nayara.html` |
| **INP** | Scripts com `defer` onde aplicável | ✅ Verificado |
| Fontes Google | `display=swap` + preconnect + preload do CSS | ✅ Aplicado |
| Imagens | Formato `.webp` em uso | ✅ OK |
| Lazy loading | `loading="lazy"` em imagens abaixo da dobra | ✅ OK |

### 4. Schema.org (JSON-LD)

| Tipo de Schema | Página | Conteúdo |
|----------------|--------|----------|
| `LegalService` + `AggregateRating` | `index.html` | Dados do escritório, endereço, telefone, horário, nota 5.0 (29 avaliações) |
| `FAQPage` | `index.html` | 6 perguntas e respostas estruturadas |
| `Person` | `sobre-nayara.html` | Perfil da Dra. Nayara, credenciais, prêmios, sameAs (redes sociais) |

### 5. Estrutura Semântica & Conteúdo

| Critério | Status |
|----------|--------|
| Apenas **1 H1** por página | ✅ `index.html` (hero title) / `sobre-nayara.html` (1 h1) |
| Hierarquia H2-H6 coerente | ✅ OK |
| Estrutura semântica (`<nav>`, `<main>`, `<section>`, `<footer>`) | ✅ OK |
| NAP visível em texto puro | ✅ Endereço, telefone e nome presentes no HTML |
| FAQ section presente | ✅ 6 perguntas com respostas diretas |
| Credenciais e autoridade visíveis | ✅ OAB, Moção da Câmara, 13 anos de experiência |
| Alt texts descritivos | ✅ Todos as imagens possuem descrições contextualizadas |
| Links internos entre páginas | ✅ `index.html` → `sobre-nayara.html`, `termos`, `política` |

---

## ⚠️ Tarefas Externas / Off-Page (não aplicáveis via código)

> O agente de código **não consegue** executar estas ações. Elas devem ser realizadas manualmente pelo cliente/equipe responsável.

### Google & Ferramentas

- [ ] **Google Business Profile (GMB)**: Verificar e otimizar o perfil de "Nayara Ribeiro Advocacia". Garantir que o NAP (Nome, Endereço, Telefone) seja **idêntico** ao do site.
- [ ] **Google Search Console**: Cadastrar o domínio `www.nayararibeiroadvocacia.ag5agencia.site`, enviar o `sitemap.xml` e solicitar indexação das URLs.
- [ ] **Google Analytics 4 / Tag Manager**: Inserir o código de rastreamento no `<head>` se houver necessidade de métricas de tráfego.
- [ ] **PageSpeed Insights**: Testar a URL publicada para validar LCP, INP e CLS reais em ambiente de produção.

### Backlinks & Autoridade

- [ ] **Diretórios locais**: Cadastrar o escritório em sites como Apontador, Bondfaro Legal, OAB Digital, etc.
- [ ] **Parcerias**: Solicitar backlinks de imobiliárias parceiras (ex: Lopes) ou da OAB Campo Grande.
- [ ] **Redes sociais**: Garantir que Instagram, LinkedIn e Google Business tenham link para o site e que os perfis estejam ativos.

### Conteúdo & Mídia

- [ ] **og:image 1200×630**: Criar uma imagem de compartilhamento no formato horizontal (1200×630 px) para melhor exibição no WhatsApp, Facebook e LinkedIn. A imagem atual da Hero é 900×1600 (vertical).
- [ ] **Blog/Conteúdo**: Publicar artigos periódicos sobre Direito Imobiliário, Usucapião e Regularização para aumentar indexação e autoridade temática.

### Infraestrutura

- [ ] **HTTPS/SSL**: Confirmar que o servidor de hospedagem força HTTPS e que o certificado SSL está válido.
- [ ] **Redirecionamentos**: Configurar redirecionamento de `http` → `https` e `non-www` → `www`.
- [ ] **Hospedagem**: Preferir servidor com baixa latência no Brasil para melhorar LCP real.

---

## 📊 Resumo de Impacto Esperado

| Área | Antes | Depois |
|------|-------|--------|
| Indexação técnica | ❌ Sem robots/sitemap/schema | ✅ Estrutura completa |
| CLS (layout shift) | ⚠️ Imagens sem dimensões | ✅ Todas as imagens dimensionadas |
| LCP (largest paint) | ⚠️ Sem preload prioritário | ✅ Hero preload + fetchpriority |
| Rich Snippets | ❌ Sem dados estruturados | ✅ FAQ + LocalBusiness + AggregateRating |
| GEO (AI citations) | ❌ Sem entidades estruturadas | ✅ Schema + FAQ + credenciais visíveis |

---

> **Nota:** As melhorias on-page foram aplicadas diretamente nos arquivos-fonte. Para que os efeitos sejam percebidos nos motores de busca, é necessário publicar as alterações e executar as tarefas externas listadas acima.
