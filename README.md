# MoveEDuo - Website de Mobilidade Estudantil

Bem-vindo ao website da MoveEDuo! Este é um website moderno e responsivo dedicado a facilitar a mobilidade estudantil e conectar estudantes a oportunidades globais.

## 📋 Conteúdo do Projeto

O projeto inclui:

- **Website Completo**: Homepage com todas as secções principais (Hero, Sobre, Serviços, Destinos, Testemunhos, FAQ, Contactos).
- **Design Moderno**: Paleta de cores profissional (Azul Profundo, Verde Esmeralda, Laranja Quente), tipografia elegante e animações suaves.
- **Responsivo**: Totalmente adaptado para mobile, tablet e desktop.
- **Estratégia de Redes Sociais**: Guia completo com calendário de conteúdo, tipos de posts e métricas.

## 🎨 Design e Branding

### Filosofia de Design

O website segue uma abordagem de **Modernismo Dinâmico**, caracterizada por:

- **Assimetria Inteligente**: Layouts não-centrados que criam movimento visual.
- **Tipografia Hierárquica**: Contraste entre títulos expressivos (Poppins) e corpo legível (Inter).
- **Cores Vibrantes**: Azul Profundo (#0F3A7D) para confiança, Verde Esmeralda (#10B981) para crescimento, Laranja Quente (#FF8C42) para energia.
- **Espaçamento Generoso**: Respiração visual que evita sensação de aglomeração.

### Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Azul Profundo | #0F3A7D | Primária, Headers, Títulos |
| Verde Esmeralda | #10B981 | Secundária, Acentos, Botões |
| Laranja Quente | #FF8C42 | Acentos, CTAs, Destaques |
| Branco | #FFFFFF | Fundo, Texto em Dark Mode |
| Cinzento Claro | #F9FAFB | Fundos de Secções |
| Cinzento Escuro | #1F2937 | Texto Principal |

## 🚀 Como Começar

### Instalação

```bash
cd /home/ubuntu/global-pathways
pnpm install
pnpm dev
```

O website estará disponível em `http://localhost:3000/`.

### Estrutura de Ficheiros

```
client/
  public/           # Ficheiros de configuração (favicon, robots.txt)
  src/
    pages/          # Páginas principais (Home.tsx)
    components/     # Componentes reutilizáveis (Header, Footer)
    contexts/       # React contexts (ThemeContext)
    lib/            # Utilitários
    App.tsx         # Roteador e layout principal
    index.css       # Estilos globais e tema
    main.tsx        # Entry point
  index.html        # HTML principal
```

## 🎯 Personalização

### Alterar Informações da Empresa

Edite o ficheiro `client/src/pages/Home.tsx` para atualizar:

- Nome da empresa
- Descrição dos serviços
- Informações de contacto
- Testemunhos de estudantes
- Destinos populares

### Alterar Cores

Edite o ficheiro `client/src/index.css` na secção `:root` para alterar a paleta de cores:

```css
:root {
  --primary: #0F3A7D;           /* Cor primária */
  --secondary: #10B981;         /* Cor secundária */
  --accent: #FF8C42;            /* Cor de acentos */
  /* ... outras cores ... */
}
```

### Alterar Tipografia

As fontes estão definidas em `client/index.html` e `client/src/index.css`:

- **Títulos**: Poppins (Bold, SemiBold)
- **Corpo**: Inter (Regular, Medium)

Para alterar, atualize o link do Google Fonts em `client/index.html` e as regras CSS em `client/src/index.css`.

### Adicionar Imagens

As imagens estão hospedadas em CDN. Para adicionar novas imagens:

1. Gere ou procure a imagem desejada.
2. Faça upload para o CDN usando `manus-upload-file --webdev`.
3. Copie a URL do CDN e adicione ao código.

Exemplo:
```tsx
<img src="https://d2xsxph8kpxj0f.cloudfront.net/..." alt="Descrição" />
```

## 📱 Redes Sociais

Consulte o ficheiro `SOCIAL_MEDIA_STRATEGY.md` para:

- Estratégia completa de redes sociais
- Calendário de conteúdo mensal
- Tipos de posts recomendados
- Hashtags e métricas
- Boas práticas de engajamento

### Plataformas Recomendadas

- **Instagram & TikTok**: Conteúdo visual e vídeos curtos para estudantes.
- **LinkedIn**: Artigos e parcerias B2B com instituições de ensino.
- **Facebook**: Comunidade, eventos e suporte a pais e estudantes.

## 🔧 Componentes Disponíveis

O website utiliza componentes do **shadcn/ui** e **Lucide Icons**. Componentes principais:

- **Button**: Botões com variantes (default, outline, etc.)
- **Card**: Cartões para conteúdo estruturado
- **Input**: Campos de entrada para formulários
- **Icons**: Ícones de alta qualidade

## 📊 Secções do Website

### 1. Hero Section
Apresentação principal com imagem de estudantes internacionais e chamada à ação.

### 2. Stats Section
Estatísticas sobre estudantes apoiados, universidades parceiras, países e satisfação.

### 3. About Section
Informações sobre missão, visão e valores da empresa.

### 4. Services Section
Descrição dos serviços oferecidos (Assistência Candidatura, Alojamento, Vistos, Apoio Contínuo).

### 5. Destinations Section
Destinos populares com emojis e descrições.

### 6. Testimonials Section
Testemunhos de estudantes com avaliações de 5 estrelas.

### 7. FAQ Section
Perguntas frequentes com respostas detalhadas.

### 8. CTA Section
Chamada à ação final para agendar consulta.

### 9. Contact Section
Formulário de contacto para mensagens diretas.

## 🎬 Animações

O website inclui animações suaves:

- **Fade-in**: Elementos aparecem com fade ao carregar a página.
- **Slide-up**: Elementos deslizam para cima ao carregar.
- **Hover Effects**: Botões e cards ganham elevação e escala ao passar o rato.
- **Scroll Animations**: Elementos ganham opacidade conforme entram no viewport.

## 🌐 Deployment

Para publicar o website:

1. Crie um checkpoint: `webdev_save_checkpoint`.
2. Clique no botão "Publish" na UI de gestão.
3. O website será publicado em `https://global-pathways.manus.space` (ou domínio personalizado).

## 📞 Contacto

Para questões sobre o website ou estratégia de redes sociais, consulte:

- **Email**: info@globalpathways.pt
- **Telefone**: +351 XXX XXX XXX
- **Localização**: Portugal

## 📄 Licença

Este projeto é propriedade da MoveEDuo. Todos os direitos reservados.

## 🙏 Agradecimentos

Desenvolvido com ❤️ usando React, Tailwind CSS e shadcn/ui.

---

**Versão**: 1.0.0  
**Última Atualização**: Abril 2026
