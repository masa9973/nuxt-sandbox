// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    hooks: {
        "nitro:config"(nitroConfig) {
            const piyoRenderingIDArr = [0, 1, 2]; // 存在するpiyoページのID
            if (!nitroConfig.prerender) {
                return;
            } else {
                console.log("routes", nitroConfig.prerender.routes);
                nitroConfig.prerender.routes = piyoRenderingIDArr.map((item) => {
                    return `/piyo/${item}`;
                });
                // /hogeと/piyo/0はprerenderingしない
                nitroConfig.prerender.ignore = ["/hoge", "/piyo/0"];
            }
        },
    },
});
