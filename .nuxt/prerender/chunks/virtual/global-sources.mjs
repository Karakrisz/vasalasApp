const sources = [
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
                "loc": "/galeria"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/kapcsolat"
            },
            {
                "loc": "/rolunk"
            },
            {
                "loc": "/szolgaltatasok"
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
                "loc": "/rolunk"
            },
            {
                "loc": "/ajanlatkeres"
            },
            {
                "loc": "/arlista"
            },
            {
                "loc": "/szolgaltatasok"
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
                "loc": "/"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
