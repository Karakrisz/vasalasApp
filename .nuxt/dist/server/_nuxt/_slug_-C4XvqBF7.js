import { d as useRoute, c as useRuntimeConfig, a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { u as useAsyncData } from "./asyncData-bDMPQB53.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const route = useRoute();
    const { data: post, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "post",
      () => $fetch(`${config.public.apiBaseUrl}/json-posts/${route.params.slug}`)
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-slug-content supage-content supage-content--services position-relative" }, _attrs))}>`);
      if (unref(error)) {
        _push(`<div>Hiba történt: ${ssrInterpolate(unref(error).message)}</div>`);
      } else if (!unref(post)) {
        _push(`<div>Betöltés...</div>`);
      } else {
        _push(`<div><h2 class="slug-blog__h2">${ssrInterpolate(unref(post).title)}</h2><img class="slug-blog__img"${ssrRenderAttr("src", `${unref(config).public.apiBaseUrl}/storage/${unref(post).image}`)}${ssrRenderAttr("alt", unref(post).title)}><div>${unref(post).body ?? ""}</div></div>`);
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "go-back-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="go-back-button__icon"${_scopeId}>←</span><span class="go-back-button__text"${_scopeId}>Vissza a főoldalra</span>`);
          } else {
            return [
              createVNode("span", { class: "go-back-button__icon" }, "←"),
              createVNode("span", { class: "go-back-button__text" }, "Vissza a főoldalra")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-C4XvqBF7.js.map
