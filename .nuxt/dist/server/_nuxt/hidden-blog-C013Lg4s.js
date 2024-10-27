import { a as __nuxt_component_0, b as __nuxt_component_0$1 } from "../server.mjs";
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { f as fetchPosts, t as truncateContent } from "./utils-De1eUnj5.js";
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
import "./asyncData-bDMPQB53.js";
import "destr";
import "klona";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "hidden-blog",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const itemsPost = ([__temp, __restore] = withAsyncContext(() => fetchPosts()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="supage-content supage-content--blog-format position-relative"><div class="page-information-content__blog-content"><h3 class="page-information-content__blog-content__h3 text-center text-transform-uppercase f-700"> BLOG </h3><div class="page-information-content__blog-content__gBox pr grid-3"><!--[-->`);
      ssrRenderList(unref(itemsPost), (post) => {
        _push(`<div class="page-information-content__blog-content__gBox__iTextBox">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "blog-box__link-box__Nuxtlink",
          to: `/posts/${post.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                height: "100%",
                loading: "lazy",
                class: "page-information-content__blog-content__gBox__iTextBox__img",
                src: `${_ctx.$config.public.apiBaseUrl}/storage/${post.image}`,
                alt: "{{ post.title }}"
              }, null, _parent2, _scopeId));
              _push2(`<div class="page-information-content__blog-content__gBox__iTextBox__tBox"${_scopeId}><h5 class="page-information-content__blog-content__gBox__iTextBox__tBox__h5 text-color-w"${_scopeId}>${ssrInterpolate(post.title)}</h5><p class="page-information-content__blog-content__gBox__iTextBox__tBox__p text-color-w"${_scopeId}>${unref(truncateContent)(post.body, 150) ?? ""}</p></div>`);
            } else {
              return [
                createVNode(_component_NuxtImg, {
                  height: "100%",
                  loading: "lazy",
                  class: "page-information-content__blog-content__gBox__iTextBox__img",
                  src: `${_ctx.$config.public.apiBaseUrl}/storage/${post.image}`,
                  alt: "{{ post.title }}"
                }, null, 8, ["src"]),
                createVNode("div", { class: "page-information-content__blog-content__gBox__iTextBox__tBox" }, [
                  createVNode("h5", { class: "page-information-content__blog-content__gBox__iTextBox__tBox__h5 text-color-w" }, toDisplayString(post.title), 1),
                  createVNode("p", {
                    class: "page-information-content__blog-content__gBox__iTextBox__tBox__p text-color-w",
                    innerHTML: unref(truncateContent)(post.body, 150)
                  }, null, 8, ["innerHTML"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hidden-blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=hidden-blog-C013Lg4s.js.map
