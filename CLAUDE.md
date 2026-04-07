# CLAUDE.md — Hadassah Perez · Aigency

Guia de desenvolvimento para o site da Hadassah Perez.
Stack: **Next.js 15 + Tailwind CSS v4 · TypeScript · sem banco de dados.**

---

## CONTEXTO DO PROJETO

- **Cliente:** Hadassah Perez — Coach · Mentora · Cantora Cristã
- **Agência:** Aigency
- **Audiência:** Mulheres cristãs — 88K seguidores no Instagram
- **Escopo:** 3 páginas estáticas (sem banco de dados, sem autenticação)
- **Idioma:** Português (pt-BR)
- **Briefing:** `BRIEFING-DEV.html` · **Checklist Página 1:** `CHECKLIST-LINK-BIO.html`
- **Status do projeto (Mar/2026):** Fase 1 em andamento — Página 1 (Link na Bio)

---

## PÁGINAS

### Página 1 — Link na Bio
- **Rota:** `/` (arquivo: `app/page.tsx`)
- **Propósito:** Link fixado no bio do Instagram — hub de todos os links
- **Descrição:** Mobile-first, centrada, max-width 420px
- **Detalhes:** ver seção `PÁGINA 1` abaixo

### Página 2 — Mentoria Individual
- **Rota:** `/mentoria` (arquivo: `app/mentoria/page.tsx`)
- **Propósito:** Página de apresentação da mentoria — convite, não pressão
- **Detalhes:** ver seção `PÁGINA 2` abaixo

### Página 3 — Devocional Alinhamento (Sales Page)
- **Rota:** `/alinhamento` (arquivo: `app/alinhamento/page.tsx`)
- **Propósito:** Página de vendas do produto digital R$97
- **Detalhes:** ver seção `PÁGINA 3` abaixo

---

## IDENTIDADE VISUAL

### Paleta de Cores (validada Mar/2026)

```
--bg:         #F7F1E8   Creme quente — fundo principal
--bg-alt:     #EDE3D4   Bege mais profundo
--dark:       #16100C   Preto quente — hero, cards em destaque
--caramel:    #B8784A   Acento primário (botões, CTAs, bordas ativas, links)
--gold:       #C9996A   Ouro médio
--gold-light: #DFB98A   Ouro claro — texto em fundos escuros (NUNCA branco puro)
--olive:      #6B7558   Acento secundário (badges, categorias)
--text-dark:  #1C1410   Texto escuro
--text-mid:   #5E4535   Texto médio
--text-light: #9A8070   Texto claro / legendas
--border:     rgba(94, 69, 53, 0.13)
```

**Regras de cor:**
- `--caramel` é o acento de ação: botões, CTAs, hover de bordas, links ativos
- `--gold` / `--gold-light` para texto em fundos escuros
- `--olive` para badges, categorias, elementos secundários
- `--dark` (#16100C) para hero e cards em destaque
- **NUNCA** azul, cinza frio ou preto puro (#000) — tudo mantém temperatura quente

### Tipografia (sistema de 2 fontes)

Importar do Google Fonts:
```
Libre Baskerville: wght@400,700 + italic
DM Sans: wght@300,400,500
Playfair Display: wght@400,500,600 (Páginas 2 e 3)
Cormorant Garamond: ital,wght@1,400;1,500;1,600 (Páginas 2 e 3)
```

**Regra de ouro — CRÍTICO:**
`Libre Baskerville` aparece **UMA ÚNICA VEZ por página** — apenas no nome/título principal.
- Página 1: somente em "Hadassah Perez" no hero
- Quando aparece em múltiplos lugares, perde impacto — economia cria efeito

**Escala tipográfica:**

| Elemento | Tamanho | Fonte | Peso |
|---|---|---|---|
| H1 / Hero | 52–56px | Playfair Display | 500 |
| H2 / Seção | 32–36px | Playfair Display | 500 |
| H3 / Card | 22–24px | Playfair Display | 400 |
| H4 / Sub | 17–18px | Playfair Display | 400 |
| Body Large | 16–17px | DM Sans | 400 |
| Body | 14–15px | DM Sans | 400 |
| Caption / Label | 11–12px | DM Sans | 500 |
| Micro | 10–11px | DM Sans | 400 |
| Pull Quote | 22–28px | Cormorant Garamond | 400 italic |
| Cargo / Label | 10px | DM Sans | 400 (letter-spacing 0.24em, uppercase) |
| Link Card Title | 14px | DM Sans | 500 |
| Nome hero (Pág. 1) | 36–44px | Libre Baskerville | 400 |

---

## COMPONENTES BASE

### Botão Primário (CTA)
- Fundo caramel sólido, texto branco
- Padding: 14px 32px · border-radius: 100px (pill)
- Font: DM Sans 14px weight 500 · letter-spacing: 0.02em
- Shadow: `0 4px 16px rgba(196, 137, 90, 0.28)`
- Hover: escurece 10% + `translateY(-1px)`
- Transition: 0.2s ease-out

### Botão Secundário
- Outline transparente · borda 1.5px caramel · texto caramel
- Padding: 13px 30px · border-radius: 100px
- Hover: tint de fundo 8%

### Link Card — Destaque (fundo escuro)
- Background: `#16100C`
- Borda: `1px solid rgba(201, 153, 106, 0.25)`
- Linha decorativa topo: gradiente (transparent → #C9996A → transparent), 1px, opacity 0.55
- Título: DM Sans 14px, cor #F5EDD8 (creme)
- Subtítulo: #DFB98A (gold-light)
- Container de ícone: 40×40px, `rgba(255,255,255,0.07)` background
- Ícone: SVG Lucide 16px, cor #DFB98A
- Seta: #C9996A

### Link Card — Padrão (glassmorphism)
- Background: `rgba(255,255,255,0.55)` + `backdrop-filter: blur(10px)`
- Borda: `1px solid rgba(94,69,53,0.13)` · border-radius: 12px
- Hover: borda esquerda caramel 3px + `translateY(-2px)` + box-shadow quente
- Transition: 0.2s ease-out

### Ornamento Separador (3 diamantes)
- 3 quadrados rotacionados 45deg com linhas de gradiente
- Central: 6px, opacity 0.55 · Laterais: 5px, opacity 0.30
- Cor: #C9996A (gold)
- Uso: entre logo e cards de links na Página 1

### Badge
- Background: `rgba(122, 130, 96, 0.12)` · borda: `1px solid rgba(122, 130, 96, 0.25)`
- border-radius: 100px · DM Sans 11px weight 500 · cor olive #6B7558
- letter-spacing: 0.04em · indicador ponto 5px antes do texto

---

## SISTEMA DE ESPAÇAMENTO (base 8px)

```
s1:  8px   — gap mínimo, micro padding
s2:  16px  — gap entre elementos inline
s3:  24px  — padding de card
s4:  32px  — gap entre cards, seções internas
s5:  40px  — padding lateral mobile
s6:  48px  — padding vertical seção pequena
s8:  64px  — padding vertical seção padrão
s10: 80px  — padding vertical hero
```

## BORDER-RADIUS

```
Botões:            100px (pill)
Cards grandes:     20px
Cards médios:      14px
Badges / tags:     100px (pill)
Containers ícone:  10–12px
Inputs:            10px
Imagens seção:     16–20px
Fotos perfil:      50% (círculo)
```

## SOMBRAS (sempre quentes, nunca cinza/azul)

```
Small:      0 2px 8px rgba(107,77,55, 0.06)
Medium:     0 4px 16px rgba(107,77,55, 0.10)
Large:      0 8px 32px rgba(107,77,55, 0.14)
XL:         0 16px 48px rgba(107,77,55, 0.18)
Botão CTA:  0 4px 16px rgba(196,137,90, 0.28)
```

---

## ANIMAÇÕES & SCROLL

**Regra obrigatória:** toda página entregue pela Aigency DEVE ter efeito de scroll diferenciado. Página sem efeito de scroll = página sem alma.

### Três técnicas obrigatórias
1. Parallax no hero
2. Reveal por IntersectionObserver
3. Stagger progressivo em elementos sequenciais

**Nunca** usar animação CSS fixa em elementos abaixo da dobra — usar IntersectionObserver para ativar só quando visível.
**Nunca** aplicar `.reveal` em elementos do hero ou above-the-fold.

### Classes Reveal CSS

```css
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--delay, 0ms);
}
.reveal.visible { opacity: 1; transform: translateY(0); }

.reveal-scale {
  opacity: 0;
  transform: scale(0.94) translateY(16px);
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--delay, 0ms);
}
.reveal-scale.visible { opacity: 1; transform: scale(1) translateY(0); }

.reveal-line {
  opacity: 0;
  transform: scaleX(0);
  transform-origin: center;
  transition: opacity 0.5s ease,
              transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--delay, 0ms);
}
.reveal-line.visible { opacity: 1; transform: scaleX(1); }
```

### IntersectionObserver

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-scale, .reveal-line')
  .forEach(el => observer.observe(el));
```

### Parallax no Hero

```javascript
const heroBg = document.querySelector('.hero-bg img');
function onScroll() {
  const y = window.scrollY;
  if (heroBg) heroBg.style.transform = `translateY(${y * 0.38}px)`;
}
window.addEventListener('scroll', onScroll, { passive: true });
```

### Tabela de Transitions

| Elemento | Propriedades | Duração | Easing |
|---|---|---|---|
| Botões (hover) | background, transform, box-shadow | 200ms | ease-out |
| Link cards (hover) | border-color, box-shadow, transform | 200ms | ease-out |
| Navbar on scroll | background, border-color | 300ms | ease |
| FAQ Accordion | max-height, opacity | 250ms | ease-out |
| Entrada de seção | opacity, translateY | 400ms | ease-out |
| Links / navegação | color, opacity | 150ms | ease |

---

## REGRAS DE EXCELÊNCIA — OBRIGATÓRIO / PROIBIDO

### NUNCA FAZER
- Emojis como ícones (use SVG Lucide/Heroicons, stroke 1.5px)
- Logo PNG com fundo branco no hero escuro
- `mix-blend-mode` para "resolver" logo
- Fonte especial em mais de 1 elemento por página
- Azul, cinza frio, preto puro (#000)
- Animação CSS fixa em elementos below-the-fold
- Stagger acima de 600ms
- Começar a Página 1 sem foto no hero

### SEMPRE FAZER
- Ícones: SVG Lucide/Heroicons, stroke 1.5px, 16px no container 36×36px
- Logo em fundo escuro: PNG transparente ou SVG
- `Libre Baskerville`: 1 vez por página — apenas no nome
- Estrutura Link na Bio: Hero foto → Links
- Temperatura de cor: sempre quente
- Testar em 375px (iPhone SE) e 390px (iPhone 14)
- `{ passive: true }` em scroll listeners

---

## PÁGINA 1 — LINK NA BIO

**Rota:** `/links`
**URL final:** hadassahperez.com.br/links
**Estrutura:** Mobile-first, centrada, max-width 420px — validada em sessão Mar/2026

### Seção 1 — Hero (100dvh, full-viewport)

- Background: foto da Hadassah como `background-image` CSS (NÃO como `<img>`)
  - Asset: `public/moodboard/foto-hadassah.jpg` (recebido)
  - `background-size: cover · background-position: center 15%`
- Overlay: pseudo-elemento `::after` position absolute inset 0
  - `linear-gradient(180deg, rgba(16,10,6,0.25) 0%, rgba(16,10,6,0.15) 35%, rgba(16,10,6,0.55) 70%, rgba(16,10,6,0.88) 100%)`
- Conteúdo alinhado ao fundo (`padding: 40px 24px`):
  - Linha dourada decorativa: 32px largura, 1px altura, #DFB98A
  - Nome: Libre Baskerville 36–44px, weight 400, cor #F5EDD8
  - Cargo: ornamento 3 diamantes + "COACH · MENTORA · CANTORA Cristã" (DM Sans 10px, letter-spacing 0.24em, uppercase, #DFB98A)
  - Seta scroll animada (bounce, 24px), cor gold-light, link para `#links`
- Animação de entrada:
  - Nome: fadeUp 400ms, delay 0ms
  - Cargo: fadeUp 400ms, delay 80ms
  - Seta: fadeUp 400ms, delay 160ms
- Pendente: logo PNG com fundo transparente para uso no hero (branco não funciona em fundo escuro)

### Seção 2 — Links (fundo creme #F7F1E8)

- Padding: 40px 24px · max-width: 420px centralizado
- **Logo** (topo): `public/logo-olive.png` centralizado, height 48px, width auto
  - Versão dark/olive para fundo creme #F7F1E8 (recebida)
- **Ornamento separador:** 3 diamantes + linhas gradiente
- **Cards (ordem obrigatória do checklist):**
  1. **Devocional Alinhamento** — card em DESTAQUE (dark background) · produto principal
  2. **Mentoria "O Caminho de Ester"** — Identidade, propósito e posicionamento
  3. **Coach Life** — Individual · Grupos · Igrejas, células e empresas
  4. **Produtos Digitais** — Ebook Jejum + Devocional Voltando à Essência
  5. **Música & YouTube** — Música + Série "Esperança" no YouTube
  6. **Comunidade de Mulheres** — Grupo no WhatsApp (link para entrar)
  7. **Parcerias** — Email/formulário de contato no rodapé
  8. **Devocional Esperança — 60 dias** — card "EM BREVE" (lançamento futuro)
- **Players Spotify** — embutidos diretamente na página (NÃO redirecionar para fora)
  - Artista Hadassah: `open.spotify.com/intl-pt/artist/0xGcz3etCHBOf6ZmZB6YAb`
  - Pendente: cliente precisa informar quais músicas/playlists e seus IDs
  - Usar iframe embed do Spotify: `open.spotify.com/embed/track/[ID]` ou `/embed/playlist/[ID]`
- **Ícones sociais** (rodapé): Instagram, YouTube, Spotify, WhatsApp — SVGs 20px, cor #9A8070, hover: #B8784A
- **Rodapé:** "Hadassah Perez" DM Sans 11px, cor #9A8070

### Stagger dos cards (Página 1)

| Elemento | Classe | --delay |
|---|---|---|
| Logo | `.reveal` | 0ms |
| Ornamento separador | `.reveal-line` | 120ms |
| Card destaque (Devocional) | `.reveal-scale` | 180ms |
| Card 1 | `.reveal-scale` | 260ms |
| Card 2 | `.reveal-scale` | 320ms |
| Card 3 | `.reveal-scale` | 380ms |
| Players Spotify | `.reveal-scale` | 440ms |
| Social / Redes | `.reveal` | 440ms |
| Rodapé | `.reveal` | 500ms |

### Breakpoints (Página 1)
- Mobile (padrão): ≤420px — coluna única, padding 20–24px, centralizado
- Desktop: centralizado com body background #F7F1E8, max-width 420px

---

## PÁGINA 2 — MENTORIA INDIVIDUAL

**Rota:** `/mentoria`
**URL final:** hadassahperez.com.br/mentoria
**Filosofia:** Página de apresentação — convite, não pressão — elegância antes da conversão

### Estrutura (8 seções)

1. **Navbar (~64px)** — Logo/nome esquerda (Playfair 18px), links direita: "Devocional", "Fale comigo" (DM Sans 13px). Transparente no topo, fundo creme no scroll. Sem shadow — apenas border-bottom 1px sutil no scroll.

2. **Hero (~90vh)** — Texto esquerda 55%, foto direita 45%. Badge olive "Mentoria Individual", H1 Playfair 52px, tagline Cormorant italic 20px, parágrafo DM Sans 16px/1.7, botão CTA primário. Fundo #F0E8DC.

3. **O que é (~300px)** — Centralizado, max-width 680px. H2 Playfair 36px, parágrafos DM Sans 16px. Fundo branco.

4. **Para quem é (~400px)** — Fundo #F9F4ED. Grid 2 colunas (desktop). Cards com ícone sutil, título DM Sans 15px/500, descrição 13px. Personas-alvo: mulheres que sentem chamado para mais, clareza de propósito, transição de carreira/vida.

5. **O que você recebe (~320px)** — Lista visual com checkmark caramel (✓). DM Sans 15px. Exemplos: reuniões mensais ao vivo, acompanhamento WhatsApp, plano de ação personalizado, materiais exclusivos. Fundo branco.

6. **Credenciais (~360px)** — Fundo #F0E8DC. H2 "Formação e Credenciais" Playfair 32px. Grid 4 cards: Hillsong Leadership College (Austrália), Dallas Baptist University (EUA), Coaching Sistêmico Integral, Análise Comportamental. Cards com `border-left: 3px solid caramel`. Badges olive para cada área.

7. **CTA Final (~320px)** — Centralizado. Fundo escuro #1C1410. H1 Playfair 40px creme, subtítulo DM Sans 16px, botão CTA caramel. Texto abaixo: "Vagas limitadas · Seleção por alinhamento de propósito" DM Sans 12px opacity 60%.

8. **Footer (~200px)** — Fundo escuro. Logo/nome, links rápidos de navegação, ícones sociais. Copyright DM Sans 11px opacity 40%.

### Notas de implementação (Página 2)
- Max-width conteúdo: 1160px com padding 40px (desktop), 24px (mobile)
- Hero: parallax sutil na foto — ratio 0.3x de scroll, CSS transform only
- WhatsApp CTA: `href="https://wa.me/[NÚMERO]?text=Olá+Hadassah..."`
  Placeholder: `<!-- WHATSAPP_LINK -->`
- Mobile: hero vira coluna única, foto acima do texto, min-height auto
- Pendente: foto hero mentoria (JPG, mín. 1200×800px) + textos completos (formato, duração, preço)

---

## PÁGINA 3 — DEVOCIONAL ALINHAMENTO (Sales Page)

**Rota:** `/alinhamento`
**URL final:** hadassahperez.com.br/alinhamento
**Produto:** 21 Devocionais de Alinhamento · R$97 · Produto digital
**Compra:** Link Kiwify — placeholder: `<!-- KIWIFY_LINK -->`

### Estrutura (12 seções)

1. **Hero / Ativação (~100vh)** — Fundo gradiente escuro. Badge olive "21 Devocionais", H1 Playfair 56px creme "Alinhamento", subtítulo Cormorant italic 22px, parágrafo DM Sans 17px/1.7, botão CTA, preço "R$97 · Investimento único" DM Sans 14px gold. Foto/mockup do produto direita (desktop) ou abaixo (mobile). Sem navbar distrativa.

2. **Prova Social (~100px)** — Barra horizontal com 3 números em destaque: "88K seguidores no Instagram", "[X] alunas transformadas", "3 ciclos de formação". Fundo #F0E8DC.

3. **Problema / Identificação (~400px)** — H2 Playfair 36px, parágrafos DM Sans 16px/1.8, pull quote Cormorant italic grande. Linguagem espiritual, sem clichês. Fundo branco.

4. **Solução — O Produto (~480px)** — H2 Playfair, descrição: 21 dias, estrutura diária (reflexão, versículo, pergunta de ativação, oração guiada), mockup do produto, lista de benefícios com ícone checkmark caramel. Fundo #F7F1E8.

5. **Os 3 Ciclos (~420px)** — H2 "A Jornada de 21 Dias" Playfair 36px. 3 cards (grid desktop / empilhados mobile), cada um com `border-top: 3px solid caramel`, numerais romanos Cormorant italic como decoração. Ciclo I: "Alinhamento · Dias 1–7" / Ciclo II: "Direção · Dias 8–14" / Ciclo III: "Ação com Fé · Dias 15–21". Fundo #EDE3D4.

6. **Para Quem É (~320px)** — Lista 2 colunas com checkmarks. Personas: mulher que se sente chamada mas sem clareza, quer prática devocional com profundidade, em transição, quer entender os planos de Deus. DM Sans 15px. Fundo branco.

7. **Hadassah — Autoridade (~460px)** — Foto grande + texto ao lado. "Quem é Hadassah Perez" — 3 parágrafos bio pessoal. Badges credenciais: Hillsong · DBU · Coaching · Análise Comportamental. Tom pessoal e acolhedor. Fundo #F7F1E8.

8. **Depoimentos (~400px)** — H2 "O que quem já caminhou diz". Grid 3 cards, foto circular 40px, nome, texto Cormorant italic 18px. Se sem depoimentos: placeholders com comentário `<!-- TESTIMONIAL -->`. Fundo #EDE3D4.

9. **Oferta + Garantia (~480px)** — Box central, borda caramel 2px, border-radius 20px. Título Playfair 28px, lista do que está incluso, preço R$97 Playfair 52px caramel, botão CTA largo. Garantia com ícone shield: "7 dias de garantia incondicional — se não for para você, reembolso integral" DM Sans 13px.

10. **FAQ (~400px)** — Accordion simples, 5–7 perguntas. Pure JavaScript, sem jQuery — máx. 20 linhas de JS. Arrow → rotaciona 180deg ao abrir. Transition: max-height 0→auto, 0.25s ease-out. Exemplos: "Como acesso após a compra?", "É livro físico?", "Quanto tempo por dia?". Fundo branco.

11. **CTA Final (~340px)** — Fundo escuro. H1 Playfair 44px creme, subtítulo Cormorant italic 20px #D4A96A, botão CTA, preço. "Acesso liberado imediatamente após a compra".

12. **Footer (~160px)** — Nome, links legais (política de privacidade, termos), copyright. Fundo escuro ou #F0E8DC.

### Notas de implementação (Página 3)
- Botão de compra aparece 3 vezes: hero, seção de oferta, CTA final — manter consistência
- Contrast mínimo 4.5:1 para textos em fundo escuro
- Placeholder pixel: `<!-- META_PIXEL -->` no head
- Tempo de carregamento: abaixo de 3s em 4G — sem animações pesadas no hero
- Mockup do produto: se sem imagem, placeholder CSS (box bege, shadow, texto "Devocional")

---

## ASSETS

### Recebidos
| Asset | Caminho | Uso |
|---|---|---|
| Foto Hadassah | `public/moodboard/foto-hadassah.jpg` | Hero Link na Bio |
| Logo olive | `public/logo-olive.png` | Seção links (fundo creme) |
| Logo dourada | `public/logo-gold.png` | Variação em fundo creme |

### Pendentes (críticos)
| Asset | Pendência | Observação |
|---|---|---|
| Logo fundo transparente | Solicitar à cliente | PNG transparente ou SVG — CRÍTICO para hero escuro |
| IDs músicas/playlists Spotify | Solicitar à cliente | Para embeds na Página 1 |
| Links redes sociais | Solicitar à cliente | Instagram, YouTube, Spotify, WhatsApp |
| WhatsApp link | Solicitar à cliente | `wa.me/55[DDD][NÚMERO]?text=...` |
| Foto hero Mentoria | Solicitar à cliente | JPG, mín. 1200×800px |
| Textos Mentoria | Solicitar à cliente | O que é, para quem, o que inclui, formato, preço |
| Link Kiwify | Solicitar à cliente | URL de checkout do Devocional |
| Depoimentos | Solicitar à cliente | Mín. 3 para Página 3 |

### Pendentes (podem usar placeholder)
| Asset | Placeholder |
|---|---|
| Foto/mockup Devocional | Box CSS bege com texto "Devocional" |
| Foto autoridade "Quem é" | Mesma foto do hero com crop diferente |
| Tagline / bio curta (Pág. 1) | "Conectando mulheres ao chamado que Deus preparou" |

---

## FASES DE ENTREGA

**Fase 1 (Em andamento):** Página 1 — Link na Bio
Assets recebidos: foto-hadassah.jpg, logo-olive.png, logo-gold.png
Pendente: logo com fundo transparente + links reais + domínio

**Fase 2:** Página 2 — Mentoria Individual
Aguardando: foto hero mentoria + textos completos

**Fase 3:** Página 3 — Devocional Alinhamento
Aguardando: copy final do Devocional + link Kiwify

**Fase 4:** Revisão conjunta, ajustes finais, publicação

**Hospedagem confirmada:** Vercel (padrão Next.js)
**Domínio:** hadassahperez.com.br

---

## ESTRUTURA DE ARQUIVOS (Next.js)

```
app/
  links/page.tsx          — Página 1: Link na Bio
  mentoria/page.tsx       — Página 2: Mentoria Individual
  alinhamento/page.tsx    — Página 3: Sales Page Devocional
  layout.tsx              — Layout raiz (fontes Google, metadata)
  globals.css             — Variáveis CSS, classes reveal, reset

public/
  moodboard/
    foto-hadassah.jpg     — Foto hero (recebida)
  logo-olive.png          — Logo para fundo creme (recebida)
  logo-gold.png           — Logo dourada (recebida)
  logo-white.png          — Logo para fundo escuro (PENDENTE)

components/
  LinkCard.tsx            — Card de link (destaque e padrão)
  SpotifyPlayer.tsx       — Embed Spotify
  OrnamentDivider.tsx     — Separador 3 diamantes
  RevealWrapper.tsx       — Wrapper de animação com IntersectionObserver
```

---

## REGRAS TÉCNICAS (Next.js + Tailwind)

- Usar CSS Variables no `globals.css` para toda a paleta — não hardcodar hex no JSX
- Animações de scroll via `useEffect` + `IntersectionObserver` (não GSAP, não Framer Motion para animações simples)
- Parallax via `addEventListener('scroll', ..., { passive: true })` — não via CSS `background-attachment: fixed` (desabilitado em iOS)
- Embeds Spotify: `<iframe>` com `allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"`
- Imagens: `next/image` para fotos otimizadas, `object-fit: cover` no hero
- Fonte no hero (fundo escuro): nunca usar variação com fundo branco — sempre transparente ou SVG
- Meta tags básicas em cada page (title, description, og:image) — sem biblioteca externa
- Sem banco de dados, sem API routes, sem autenticação
- TypeScript estrito — sem `any`
