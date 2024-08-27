import { u as useHead, b as __nuxt_component_0, a as __nuxt_component_0$1 } from "../server.mjs";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "ufo";
import "devalue";
const _sfc_main = {
  __name: "rolunk",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Rólunk"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="page-information-content page-information-content--subpage-about pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/page-information/page-information.webp",
        alt: "Vasalás Mester",
        class: "page-information-content__img"
      }, null, _parent));
      _push(`<div class="page-information-content__iTextBox bg-color-w pa"><h4 class="page-information-content__iTextBox__h4 text-transform-uppercase f-700"> RÓLUNK </h4><p class="page-information-content__iTextBox__p f-500"> A vasalás.net 100%-ig magyar tulajdonban álló vállalkozás, amely 2011-ben jelent meg a ruhatisztító piacon. Fő profiljába tartozik az otthonokban felgyülemlett szennyes ruházat mosása, vasalása; a különleges kezelést igénylő kabátok, öltönyök, és kosztümök tisztítása; valamint a ruhák, huzatok, textilanyagok varrása és javítása. </p><p class="page-information-content__iTextBox__p f-500"> Ha már Ön is unja a vasalást, mosást és a házimunkát; ha nincs ideje és már jó ideje tornyosul a szennyes; ha egy megbízható ruhatisztítót, ruhaklinikát keres, akkor nézze meg a vasalás.net ajánlatát! </p><div class="page-information-content__iTextBox__link-box">`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "page-link page-link--format text-color f-600" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Leadom a rendelésem `);
          } else {
            return [
              createTextVNode(" Leadom a rendelésem ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
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
//# sourceMappingURL=rolunk-DZ_0fkm4.js.map
