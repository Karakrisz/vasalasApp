import { d as useRoute, c as useRuntimeConfig, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/vue/server-renderer/index.mjs';
import { u as useAsyncData } from './asyncData-bDMPQB53.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/h3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/devalue/index.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/ufo/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/destr/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/hookable/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/klona/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/scule/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/defu/dist/defu.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/ohash/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unstorage/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/pathe/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/ipx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unhead/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unctx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/vue-router/dist/vue-router.node.mjs';

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
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-slug-content supage-content supage-content--services position-relative" }, _attrs))}>`);
      if (unref(error)) {
        _push(`<div>Hiba t\xF6rt\xE9nt: ${ssrInterpolate(unref(error).message)}</div>`);
      } else if (!unref(post)) {
        _push(`<div>Bet\xF6lt\xE9s...</div>`);
      } else {
        _push(`<div><h2 class="slug-blog__h2">${ssrInterpolate(unref(post).title)}</h2><img class="slug-blog__img"${ssrRenderAttr("src", `${unref(config).public.apiBaseUrl}/storage/${unref(post).image}`)}${ssrRenderAttr("alt", unref(post).title)}><div>${(_a = unref(post).body) != null ? _a : ""}</div></div>`);
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "go-back-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="go-back-button__icon"${_scopeId}>\u2190</span><span class="go-back-button__text"${_scopeId}>Vissza a f\u0151oldalra</span>`);
          } else {
            return [
              createVNode("span", { class: "go-back-button__icon" }, "\u2190"),
              createVNode("span", { class: "go-back-button__text" }, "Vissza a f\u0151oldalra")
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

export { _sfc_main as default };
//# sourceMappingURL=_slug_-C4XvqBF7.mjs.map
