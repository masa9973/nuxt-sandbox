// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    routeRules: {
        "/": {
            prerender: false,
        },
        "/hoge": {
            prerender: process.env.HOGE_DIR_PRERENDERING === "true",
        },
        "/fuga": {
            prerender: process.env.FUGA_DIR_PRERENDERING === "true",
        },
    },
});
