import { u as useHead, b as __nuxt_component_0, a as __nuxt_component_0$1 } from "../server.mjs";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _sfc_main = {
  __name: "rolunk",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Rólunk - Vasalás Mester",
      meta: [
        {
          name: "description",
          content: "Professzionális ingvasalási szolgáltatások Budapesten és környékén a Vasalás Mesterrel. Környezetbarát eljárások és csomagolás."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><div class="subpage-imgBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage.webp",
        alt: "Vasalás Mester",
        class: "slug-blog__img",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><div class="supage-content supage-content--services bg-color-w pr"><h2 class="supage-content__h2 text-transform-uppercase"> Rólunk - Vasalás Mester </h2><p class="supage-content__p"> A Vasalás Mester <strong>naponta több száz inget mos és vasal</strong> professzionális ipari gépekkel, hogy minden ruhadarab tökéletes minőségben érkezzen meg ügyfeleihez. Szolgáltatásunk három alapelven nyugszik: szakértelem, fenntarthatóság és kényelem. </p><h3 class="supage-content__h3"> Ingek Vasalása - Professzionális Ipari Technológia és Precizitás </h3><p class="supage-content__p"> Az ingek vasalása a Vasalás Mester egyik specialitása, amely különös figyelmet és szaktudást igényel. Minden inghez egyedi megközelítést alkalmazunk, figyelembe véve az anyag típusát, a szabást és az ügyfél egyedi igényeit. Tudjuk, hogy az ingek tiszta és rendezett megjelenése fontos szerepet játszik az első benyomások kialakításában, ezért különös figyelmet fordítunk a precíz vasalásra, a gombok körüli gondos kezelésre és a varratok alapos kisimítására. </p><h6 class="supage-content__h6">Miért válassza a Vasalás Mestert?</h6><ul class="supage-content__ul"><li class="supage-content__ul__li"><strong>1. Kiemelkedő szakértelem:</strong> Minden egyes inget precíz figyelemmel kezelünk, figyelembe véve az anyag típusát és a szabást. Ipari szintű gépeink biztosítják, hogy a vasalás minden alkalommal makulátlan eredménnyel záruljon. </li><li class="supage-content__ul__li"><strong>2. Környezetbarát megoldások:</strong> Környezetbarát tisztítószereket és energiahatékony technológiát alkalmazunk, hogy csökkentsük a környezeti terhelést, miközben ruhái a lehető legnagyobb gondosságban részesülnek. </li><li class="supage-content__ul__li"><strong>3. Kényelmes háztól-házig szolgáltatás:</strong> Nemcsak a belvárosban, hanem Budapest egész területén elérhetőek vagyunk, és kényelmes háztól-házig szállítást biztosítunk. Önnek csak annyi a dolga, hogy leadja a rendelést – a többit mi intézzük! </li></ul><p class="supage-content__p"><strong class="supage-content__p__strong">Lépjen kapcsolatba velünk</strong>, és tapasztalja meg a Vasalás Mester professzionális vasalási szolgáltatásait, amelyek egyszerre biztosítanak kiváló minőséget és környezetbarát megoldásokat. Bízza ránk a vasalást, és élvezze a tökéletesen sima és friss ruhák nyújtotta kényelmet! </p><div class="blog-slug-content__psychologicalBox text-center"><p class="blog-slug-content__psychologicalBox__p"><i class="blog-slug-content__psychologicalBox__i f-500">Már csak egy lépés választ el a tökéletes tisztaságtól és frissességtől! <br> Nyomd meg az alábbi gombot az igenhez!</i></p></div><div class="blog-slug-content__linkBox text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ajanlatkeres",
        class: "blog-slug-content__linkBox__link text-color-w f-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` IGEN, kérem a tisztaságot! `);
          } else {
            return [
              createTextVNode(" IGEN, kérem a tisztaságot! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rolunk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=rolunk-KOP5ww3y.js.map
