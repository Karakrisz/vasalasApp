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
                "loc": "/galeria"
            },
            {
                "loc": "/rolunk"
            },
            {
                "loc": "/vasalas"
            },
            {
                "loc": "/mosas"
            },
            {
                "loc": "/tisztitas"
            },
            {
                "loc": "/nagy-mennyiseg"
            },
            {
                "loc": "/kolcsonzes"
            },
            {
                "loc": "/javitas"
            },
            {
                "loc": "/ajanlatkeres"
            },
            {
                "loc": "/szolgaltatasok"
            },
            {
                "loc": "/adatvedelmi-tajekoztato"
            },
            {
                "loc": "/arlista"
            },
            {
                "loc": "/egyeni-igenyek"
            },
            {
                "loc": "/meretre-szabas-igazitas"
            },
            {
                "loc": "/varras"
            },
            {
                "loc": "/kapcsolat"
            },
            {
                "loc": "/posts/ingek-mosasa-es-vasalasa-budapesten"
            },
            {
                "loc": "/posts/ingek-mosasa-es-vasalasa-a-3-keruletben-bizza-a-vasalas-mesterere"
            },
            {
                "loc": "/posts/ingek-mosasa-es-vasalasa-a-2-keruletben-professzionalis-szolgaltatasok-a-vasalas-mesternel"
            },
            {
                "loc": "/hidden-blog"
            },
            {
                "loc": "/posts/ajanlatkeres"
            },
            {
                "loc": "/posts/arlista"
            },
            {
                "loc": "/posts/adatvedelmi-tajekoztato"
            },
            {
                "loc": "/posts/ingek-mosasa-es-vasalasa-budapesten-bizza-a-vasalas-mesterere"
            },
            {
                "loc": "/posts/professzionalis-ingmosas-es-vasalas-budapesten-a-vasalas-mester-minden-ingrol-gondoskodik"
            },
            {
                "loc": "/posts/ingek-professzionalis-mosasa-es-vasalasa-budapesten-miert-bizza-a-vasalas-mesterre"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
