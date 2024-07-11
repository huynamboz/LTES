import __nuxt_component_0 from './index-C-aHh4V_.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './vue.f36acd1f-DMiTBOOi.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'fs';
import 'path';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed z-50 top-8 left-0 w-full flex justify-center items-center" }, _attrs))}><div class="flex items-center max-md:flex-col max-md:gap-2 gap-8 w-fit"><p class="text-4xl font-[&#39;Permanent_Marker&#39;]"> LTES </p><ul class="flex items-center gap-1 px-3 w-full h-14 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-2xl"><li class="inline-block rounded-lg cursor-pointer hover:bg-[rgba(255,255,255,0.15)] px-4 py-2 text-white"> Trang ch\u1EE7 </li><li class="max-md:hidden inline-block rounded-lg cursor-pointer hover:bg-[rgba(255,255,255,0.15)] px-4 py-2 text-white"> Gi\u1EDBi thi\u1EC7u </li><li class="max-md:hidden inline-block rounded-lg cursor-pointer hover:bg-[rgba(255,255,255,0.15)] px-4 py-2 text-white"> Li\xEAn h\u1EC7 </li><li class="inline-flex items-center gap-1 pr-2 rounded-lg cursor-pointer bg-[rgba(255,255,255,0.15)] hover:bg-[#43ddce] hover:text-black px-4 py-2 text-white"> Kh\xE1m ph\xE1 ngay `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "svg-spinners:pulse-2",
        class: "text-lg"
      }, null, _parent));
      _push(`</li></ul></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutsHeader = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_LayoutsHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CrTzSbH6.mjs.map
