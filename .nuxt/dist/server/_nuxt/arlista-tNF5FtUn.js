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
  __name: "arlista",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Árlista"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="page-information-content--subpage-about"><div class="prices-content prices-content--subpage-format"><h3 class="prices-content__h3 prices-content__h3--mt0 text-center text-transform-uppercase f-700"> ÁRAINK </h3><div class="prices-content__iTextBox grid-6"><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/action.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__actionImg pa"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> VEGYES RUHA VASALÁS </h6><div class="prices-content__iTextBox__div__prices-box prices-content__iTextBox__div__prices-box--actionBG pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 1990 Ft/kg </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices2.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> ING-BLÚZ VASALÁS </h6><div class="prices-content__iTextBox__div__prices-box pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 800 Ft/db </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices3.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> MOSÁS-VASALÁS </h6><div class="prices-content__iTextBox__div__prices-box pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 2250 Ft/kg </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/action.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__actionImg pa"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices4.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> MOSÁS </h6><div class="prices-content__iTextBox__div__prices-box prices-content__iTextBox__div__prices-box--actionBG pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 1200 Ft/kg </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices5.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> CIPZÁRCSERE </h6><div class="prices-content__iTextBox__div__prices-box pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 2000 Ft-tól </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices6.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> LAKÁSTEXTIL VEGYTISZTÍTÁS </h6><div class="prices-content__iTextBox__div__prices-box pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 1400 Ft-tól </h3></div></div></div><div class="prices-content__lBox text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "page-link page-link--format text-color f-600" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Teljes árlista `);
          } else {
            return [
              createTextVNode(" Teljes árlista ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/arlista.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=arlista-tNF5FtUn.js.map
