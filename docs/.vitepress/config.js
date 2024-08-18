import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Gooey",
  description:
    "A private collection of Vue components for use in Coding Labs projects, based on Shadcn and others.",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",

    nav: [{ text: "Docs", link: "/guide" }],

    sidebar: [
      {
        text: "Introduction",
        collapsible: true,
        items: [
          { text: "Installation", link: "/installation" },
          { text: "Usage", link: "/usage" },
          { text: "Theme", link: "/theme" },
          { text: "Contribution Guide", link: "/contribution-guide" },
        ],
      },
      {
        text: "Layout",
        collapsible: true,
        items: [
        ],
      },
      {
        text: "Navigation",
        collapsible: true,
        items: [
        ],
      },
      {
        text: "Overlays",
        collapsible: true,
        items: [
          { text: "Notifications", link: "/notifications" },
        ],
      },
      {
        text: "UI",
        collapsible: true,
        items: [
          { text: "Dropdown", link: "/dropdown" },
        ],
      },
      {
        text: "Buttons",
        collapsible: true,
        items: [
        ],
      },
      {
        text: "Forms",
        collapsible: true,
        items: [
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/codinglabsau/gooey" }],

    footer: {
      message: "Proprietary License.",
      copyright: "Copyright © 2022-present Coding Labs Pty Ltd",
    },
  },
})
