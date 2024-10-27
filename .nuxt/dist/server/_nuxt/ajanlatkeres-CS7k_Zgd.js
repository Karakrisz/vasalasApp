import { u as useHead, b as _sfc_main$1 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
import "destr";
import "klona";
const _sfc_main = {
  __name: "ajanlatkeres",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Ajánlatkérés"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="subpage-imgBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/contact.webp",
        alt: "Vasalás Mester",
        class: "slug-blog__img",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><div class="supage-content supage-content--mobileW pr bg-color-w"><h2 class="supage-content__h2 text-transform-uppercase"> ÍRJON NEKÜNK, HAMAR VÁLASZOLUNK </h2><p class="supage-content__p"> Amennyiben bármilyen kérdése merülne fel, ne habozzon kapcsolatba lépni velünk! Írjon nekünk bátran, és csapatunk igyekszik a lehető legrövidebb időn belül válaszolni minden érdeklődésre. Várjuk, hogy halljunk Ön felől! </p><h2 class="supage-content__h2">Kapcsolatfelvételi űrlap:</h2><ul class="supage-content__ul"><li class="supage-content__ul__li"><strong class="supage-content__ul__li__strong">Név:</strong> Kérjük, adja meg a nevét, hogy személyre szabottan válaszolhassunk. </li><li class="supage-content__ul__li"><strong class="supage-content__ul__li__strong">Email cím:</strong> Ide küldjük a válaszunkat és minden további információt. </li><li class="supage-content__ul__li"><strong class="supage-content__ul__li__strong">Telefonszám:</strong>Ha telefonon szeretne kapcsolatba lépni, kérjük, adja meg telefonszámát. </li><li class="supage-content__ul__li"><strong class="supage-content__ul__li__strong">Legalkalmasabb időpont a telefonhívásra:</strong> Tüntesse fel, mikor kereshetjük meg Önt telefonon. </li><li class="supage-content__ul__li"><strong class="supage-content__ul__li__strong">Tárgy:</strong> Adjon meg egy rövid tárgyat, hogy gyorsabban feldolgozhassuk kérdését. </li><li class="supage-content__ul__li"><strong class="supage-content__ul__li__strong">Üzenet:</strong> Írja le kérdését vagy kérését részletesen. </li></ul><p class="supage-content__p"><i class="supage-content__p__i">A küldés gombra kattintva automatikusan elfogadja az Adatvédelmi Szabályzatot. </i></p><div class="blog-slug-content__psychologicalBox text-center"><p class="blog-slug-content__psychologicalBox__p"><i class="blog-slug-content__psychologicalBox__i f-500">Nem szeretne írni? Csak egy hívásra vagyunk, hogy mindent elintézzünk Önnek!</i></p></div><div class="blog-slug-content__linkBox text-center"><a href="tel:+36307777609" class="blog-slug-content__linkBox__link text-color-w f-700"> IGEN, hívás most! </a></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ajanlatkeres.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ajanlatkeres-CS7k_Zgd.js.map
