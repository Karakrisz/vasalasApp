const sources = [
    {
        "sourceType": "user",
        "fetch": "/api/sitemap"
    },
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/adatvedelmi-tajekoztato"
            },
            {
                "loc": "/ajanlatkeres"
            },
            {
                "loc": "/arlista"
            },
            {
                "loc": "/egyeni-igenyek"
            },
            {
                "loc": "/galeria"
            },
            {
                "loc": "/hidden-blog"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/javitas"
            },
            {
                "loc": "/kapcsolat"
            },
            {
                "loc": "/kolcsonzes"
            },
            {
                "loc": "/meretre-szabas-igazitas"
            },
            {
                "loc": "/mosas"
            },
            {
                "loc": "/nagy-mennyiseg"
            },
            {
                "loc": "/rolunk"
            },
            {
                "loc": "/szolgaltatasok"
            },
            {
                "loc": "/tisztitas"
            },
            {
                "loc": "/varras"
            },
            {
                "loc": "/vasalas"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/"
            },
            {
                "loc": "/rolunk"
            },
            {
                "loc": "/ajanlatkeres"
            },
            {
                "loc": "/javitas"
            },
            {
                "loc": "/tisztitas"
            },
            {
                "loc": "/nagy-mennyiseg"
            },
            {
                "loc": "/meretre-szabas-igazitas"
            },
            {
                "loc": "/galeria"
            },
            {
                "loc": "/adatvedelmi-tajekoztato"
            },
            {
                "loc": "/kapcsolat"
            },
            {
                "loc": "/varras"
            },
            {
                "loc": "/arlista"
            },
            {
                "loc": "/szolgaltatasok"
            },
            {
                "loc": "/vasalas"
            },
            {
                "loc": "/egyeni-igenyek"
            },
            {
                "loc": "/kolcsonzes"
            },
            {
                "loc": "/mosas"
            },
            {
                "loc": "/posts/mosas-es-vasalas-haztol-hazig-budapest-1-keruleteben-oltony-es-ing-tisztitas"
            },
            {
                "loc": "/posts/ing-mosas-vasalas-es-oltony-tisztitas-haztol-hazig-a-13-keruletben"
            },
            {
                "loc": "/posts/ing-oltony-mosas-tisztitas-es-vasalas-haztol-hazig-a-2-keruletben"
            },
            {
                "loc": "/hidden-blog"
            },
            {
                "loc": "/posts/adatvedelmi-tajekoztato"
            },
            {
                "loc": "/posts/ajanlatkeres"
            },
            {
                "loc": "/posts/arlista"
            },
            {
                "loc": "/posts/ingek-mosasa-es-vasalasa-budapesten-bizza-a-vasalas-mesterere"
            },
            {
                "loc": "/posts/professzionalis-ingmosas-es-vasalas-budapesten-a-vasalas-mester-minden-ingrol-gondoskodik"
            },
            {
                "loc": "/posts/ingek-professzionalis-mosasa-es-vasalasa-budapesten-miert-bizza-a-vasalas-mesterre"
            },
            {
                "loc": "/posts/ingek-mosasa-es-vasalasa-budapesten"
            },
            {
                "loc": "/posts/ingek-mosasa-es-vasalasa-a-3-keruletben-bizza-a-vasalas-mesterere"
            },
            {
                "loc": "/posts/mosas-es-vasalas-haztol-hazig-ing-es-zako-tisztitas-kenyelmesen"
            },
            {
                "loc": "/posts/ingek-mosasa-es-vasalasa-a-2-keruletben-professzionalis-szolgaltatasok-a-vasalas-mesternel"
            },
            {
                "loc": "/posts/ruhatisztitas-budapesten-haztol-hazig-mosas-es-vasalas-kenyelmesen-profi-kezekben"
            },
            {
                "loc": "/posts/mosas-es-vasalas-haztol-hazig-budapesten-kenyelmes-es-megbizhato-ruhatisztito-szolgaltatas"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
