import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "minDoc",
  description: "IA Doc Generator",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Fastpay API Hub",
        items: [
          // { text: 'Runtime API Examples', link: '/api-examples' },
          { text: "Introduction", link: "/code/introduction" },
          // { text: "API Reference", link: "/api" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
