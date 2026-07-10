# NP Hub OS

> O sistema operacional da NP Hub dentro do Claude Code.

**NP Hub** — marketing, tecnologia e automação para o mercado imobiliário.
Tagline: **"Pensamos o problema. Criamos o caminho."**

Este repositório é o cérebro da operação: a memória do negócio, a identidade
visual aplicada em tudo que o sistema gera, o design system sincronizado com o
Claude Design, e as skills que fazem marketing, SEO, ads e produção rodarem.

---

## Estrutura

```
NP Hub/
├── CLAUDE.md              # regras de operação (lidas em toda sessão)
├── README.md             # este arquivo
├── .claude/skills/       # skills do dia a dia (viram /comandos)
├── _memoria/             # o cérebro — empresa, estratégia, preferências
├── identidade/           # o rosto da marca
│   ├── design-guide.md   # cores, fontes, estilo (fonte da verdade visual)
│   ├── logo/             # logo (.ai, .svg, .png)
│   └── artes/            # artes-fonte (.psd)
├── site/                 # site institucional (Next.js 14) + design-sync
│   └── .design-sync/     # inputs do sync com o Claude Design (marca → componentes)
├── site-legado/          # versão estática antiga do site (arquivo)
├── templates/            # modelos de skill/perfil pra criar coisas novas
├── marketing/            # peças de marketing geradas
├── saidas/               # outputs gerais
├── dados/                # drop zone — arquivos pra ler uma vez
└── scripts/              # utilitários (geração de imagem, publicação, etc.)
```

---

## O sistema

**Núcleo** — o jeito de operar o dia a dia
`/abrir` carrega o contexto antes de cada sessão · `/salvar` faz commit + push no
GitHub · `/atualizar` varre o projeto e atualiza a memória · `/novo-projeto` cria
pasta isolada por cliente ou iniciativa · `/mapear-rotinas` descobre o que você
repete e transforma em skill.

**Conteúdo e SEO** — vitrine pública da empresa
`/carrossel` cria carrosséis 1080×1350 com a identidade da marca · `/publicar-tema`
pega um tema e entrega artigo de blog + carrossel + 3 legendas · `/seo` roda o
fluxo completo de 8 passos · `/responder-avaliacoes` escreve respostas pras reviews
do Google · `/aprovar-post` publica blog + Instagram + Facebook num comando.

**Anúncios pagos** — onde o dinheiro entra
`/anuncio-google` monta a campanha em CSV pronto pro Google Ads Editor ·
`/relatorio-ads` lê os exports de Google + Meta e devolve relatório semanal.

**Produção** — ferramentas do dia a dia
`/analisar-dados` lê CSV/XLSX/PDF e gera resumo executivo · `/email-profissional`
rascunha email a partir de contexto livre.

---

## Design system (Claude Design)

O site (`site/`) tem seus componentes de marca sincronizados com o Claude Design
via `/design-sync`. Assim, quando pedimos designs no Claude, eles saem com os
**componentes reais da NP Hub** — já na marca, alinhados à evolução dela ao longo
do tempo.

Os inputs do sync moram em `site/.design-sync/` (config, previews, docs, fontes,
convenções). Pra re-sincronizar depois de evoluir a marca ou os componentes,
rode `/design-sync` a partir de `site/`.

---

## Como o NP Hub OS pensa

`_memoria/` é o cérebro. Tudo que importa do negócio mora aqui — quem é a empresa,
como ela fala, o que está em foco. O Claude lê isso antes de cada resposta.

`identidade/` é o rosto. Cores, fontes, logo, padrão visual. Todo carrossel, slide
e peça que o sistema gera respeita isso.

`marketing/`, `saidas/` e `scripts/` são o resultado. O sistema produz, versiona no
GitHub, fica tudo seu.

---

## A tese

IA não é uma ferramenta que a empresa usa. É o sistema operacional em que ela roda.

A diferença não é velocidade — é capacidade nova. Cada processo que hoje roda em
open loop (decide → executa → não mede → repete cego) vira closed loop dentro do
NP Hub OS (decide → executa → captura → realimenta → ajusta). O sistema não
substitui você: vira parte da empresa.
