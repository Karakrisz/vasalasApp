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
                "loc": "/ajanlatkeres"
            },
            {
                "loc": "/vasalas"
            },
            {
                "loc": "/szolgaltatasok"
            },
            {
                "loc": "/tisztitas"
            },
            {
                "loc": "/arlista"
            },
            {
                "loc": "/mosas"
            },
            {
                "loc": "/javitas"
            },
            {
                "loc": "/kolcsonzes"
            },
            {
                "loc": "/kapcsolat"
            },
            {
                "loc": "/galeria"
            },
            {
                "loc": "/egyeni-igenyek"
            },
            {
                "loc": "/rolunk"
            },
            {
                "loc": "/meretre-szabas-igazitas"
            },
            {
                "loc": "/adatvedelmi-tajekoztato"
            },
            {
                "loc": "/varras"
            },
            {
                "loc": "/nagy-mennyiseg"
            },
            {
                "loc": "/posts/ingek-professzionalis-mosasa-es-vasalasa-budapesten-miert-bizza-a-vasalas-mesterre"
            },
            {
                "loc": "/posts/ingek-mosasa-es-vasalasa-budapesten-bizza-a-vasalas-mesterere"
            },
            {
                "loc": "/posts/professzionalis-ingmosas-es-vasalas-budapesten-a-vasalas-mester-minden-ingrol-gondoskodik"
            },
            {
                "loc": "/posts/ajanlatkeres"
            },
            {
                "loc": "/posts/adatvedelmi-tajekoztato"
            },
            {
                "loc": "/posts/arlista"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
