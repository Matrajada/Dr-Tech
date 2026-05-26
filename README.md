# Dr.Tech -- Site Institucional

## Sobre o projeto

Este projeto é uma **landing page institucional moderna** desenvolvida
para a **Dr.Tech**, empresa focada em:

-   Segurança eletrônica
-   CFTV e monitoramento
-   Controle de acesso
-   Scanner facial
-   Automação
-   Infraestrutura tecnológica

O objetivo do site é apresentar os serviços da empresa de forma
profissional, moderna e responsiva, oferecendo uma experiência visual
forte e intuitiva.

------------------------------------------------------------------------

## Tecnologias utilizadas

### Front-end

-   HTML5
-   CSS3
-   JavaScript (Vanilla JS)

### Recursos implementados

-   Layout responsivo
-   Hero carousel (carrossel principal)
-   Carrossel de reviews com drag e foco central
-   Lazy loading automático de imagens
-   Navegação suave
-   Hover animations
-   Scroll reveal / efeitos visuais
-   Estrutura preparada para upgrades futuros

------------------------------------------------------------------------

## Estrutura do projeto

``` bash
DrTech/
│
├── index.html
├── css/
│   └── style.css
│
├── java/
│   └── script.js
│
├── imgs/
│   ├── logo.png
│   ├── camera.png
│   ├── scanner.png
│   └── ...
│
└── README.md
```

------------------------------------------------------------------------

## Funcionalidades

## Hero Carousel

Carrossel principal do topo do site.

### Recursos

-   Navegação por setas
-   Slides independentes
-   Troca por classe `.active`
-   Estrutura escalável para novos slides
-   Preparado para autoplay e fade transitions

Slides atuais: 1. Câmeras de Segurança 2. Scanner Facial para Controle
de Acesso

------------------------------------------------------------------------

## Carrossel de Reviews

Carrossel horizontal interativo com foco visual.

### Recursos

-   Drag desktop
-   Swipe mobile
-   Loop infinito com clonagem de cards
-   Card em destaque central (`is-focused`)
-   Barra de progresso dinâmica
-   Scroll suave

------------------------------------------------------------------------

## Responsividade

O projeto foi desenvolvido com foco mobile-first adaptado para:

-   Desktop
-   Notebook
-   Tablet
-   Smartphone

Recursos responsivos: - Grid adaptável - Ajuste de tipografia - Layout
flexível - Preparação para menu hambúrguer

------------------------------------------------------------------------

## Performance

O site utiliza práticas de otimização:

### Lazy Loading

As imagens secundárias utilizam:

``` html
loading="lazy"
```

ou aplicação automática via JavaScript.

Benefícios: - Menor tempo de carregamento - Melhor UX mobile - Melhor
performance geral - Melhor avaliação Lighthouse

------------------------------------------------------------------------

## Identidade Visual

### Fonte

Poppins (Google Fonts)

### Paleta predominante

-   Preto
-   Branco
-   Azul tecnológico

Objetivo: Transmitir tecnologia, confiança e segurança.

------------------------------------------------------------------------

## Melhorias planejadas

Roadmap futuro do projeto:

-   [ ] Autoplay no hero
-   [ ] Fade transition
-   [ ] Menu hamburguer mobile
-   [ ] Integração AOS / GSAP
-   [ ] Formulário funcional (EmailJS)
-   [ ] Deploy Vercel / Netlify
-   [ ] SEO avançado
-   [ ] Analytics

------------------------------------------------------------------------

## Como executar

Clone ou baixe o projeto.

Abra:

``` bash
index.html
```

em qualquer navegador moderno.

Ou utilize extensão como:

-   Live Server (VS Code)

------------------------------------------------------------------------

## Autor

Projeto desenvolvido por Mathias Rajão.

Front-end focado em experiência visual moderna, segurança e usabilidade.
