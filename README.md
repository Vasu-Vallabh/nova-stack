# Modern React Starter Template

A production-ready React starter template with best practices built in. Features lightning-fast development, type safety, and modern styling out of the box.

![Hero Section](/public/landing-page.png)

## ✨ Key Features

- ⚡️ **Lightning Fast Development** - Built on Vite for instant HMR and optimized builds
- 🔒 **Type-Safe by Default** - TypeScript and ESLint configured for robust code quality
- 🎨 **Modern Styling** - TailwindCSS and shadcn/ui for beautiful, responsive UIs
- 📱 **Responsive Design** - Mobile-first approach with flexible layouts
- 🧪 **Quality Tooling** - ESLint, Prettier, Husky, and lint-staged for code quality
- 📦 **Production Optimized** - Optimized build setup with best practices

## 🚀 Quick Start

```sh
# Clone the repository
git clone https://github.com/Vasu-Vallabh/nova-stack.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Tech Stack

- [vite](https://vitejs.dev/)
- [react](https://reactjs.org/)
- [shadcn ui](https://ui.shadcn.com/)
- [react-lucide](https://lucide.dev/)
- [react-query](https://tanstack.com/query/latest/)
- [tailwindcss](https://tailwindcss.com/)
- [less](http://lesscss.org/)
- [postcss](https://postcss.org/)
- [react-router-dom](https://reactrouter.com/en/6.16.0)
- [eslint](https://eslint.org/)/[stylelint](https://stylelint.io/)
- [prettier](https://prettier.io/)
- [svgr](https://react-svgr.com/)
- [editorconfig](https://editorconfig.org/)
- [husky](https://typicode.github.io/husky/#/)/[lint-staged](https://github.com/okonet/lint-staged)
- [commitlint](https://commitlint.js.org/)

## 📝 Available Scripts

```sh
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format

# Check types
npm run type-check
```

## 📁 Project Structure

```
├── public/              # Static assets
├── src/
│   ├── app.tsx         # App entry point
│   ├── main.tsx        # Application initialization
│   ├── router.tsx      # Route definitions
│   ├── components/     # Reusable UI components
│   │   ├── hero/      # Hero section components
│   │   ├── layout/    # Layout components
│   │   └── ui/        # Base UI components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utilities and helpers
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   └── types/         # TypeScript type definitions
└── [Configuration Files]
```

## 🚀 Deployment

[Cloudflare Pages](https://pages.cloudflare.com/) is my first option to deploy React App，follow [this documentation](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/#deploying-with-cloudflare-pages) to deploy your site. Don't forget build directory should choose `dist`

[Vercel](https://pages.cloudflare.com/) is a good option too，Go to [Vercel](https://vercel.com/new) and link to your Git Repo

Enjoy building.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.