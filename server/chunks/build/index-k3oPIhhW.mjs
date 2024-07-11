import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, ref, computed, h, useSSRContext, mergeProps, withCtx, unref, openBlock, createBlock, Fragment, renderList, resolveDirective, watch, onMounted, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, createElementVNode, renderSlot, resolveComponent, createVNode } from 'vue';
import { u as useHead } from './vue.f36acd1f-DMiTBOOi.mjs';
import { l as useNuxtApp, i as encodeParam$1, h as hasProtocol, e as withLeadingSlash, j as joinURL, f as parseURL$1, g as defu, b as useRuntimeConfig, _ as _export_sfc, k as encodePath$1 } from './server.mjs';
import __nuxt_component_0$2 from './index-C-aHh4V_.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrGetDirectiveProps } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:net';
import 'node:path';

function unpackToArray(input, options) {
  const unpacked = [];
  const kFn = options.resolveKeyData || ((ctx) => ctx.key);
  const vFn = options.resolveValueData || ((ctx) => ctx.value);
  for (const [k2, v] of Object.entries(input)) {
    unpacked.push(...(Array.isArray(v) ? v : [v]).map((i) => {
      const ctx = { key: k2, value: i };
      const val = vFn(ctx);
      if (typeof val === "object")
        return unpackToArray(val, options);
      if (Array.isArray(val))
        return val;
      return {
        [typeof options.key === "function" ? options.key(ctx) : options.key]: kFn(ctx),
        [typeof options.value === "function" ? options.value(ctx) : options.value]: val
      };
    }).flat());
  }
  return unpacked;
}
function unpackToString(value, options) {
  return Object.entries(value).map(([key, value2]) => {
    if (typeof value2 === "object")
      value2 = unpackToString(value2, options);
    if (options.resolve) {
      const resolved = options.resolve({ key, value: value2 });
      if (typeof resolved !== "undefined")
        return resolved;
    }
    if (typeof value2 === "number")
      value2 = value2.toString();
    if (typeof value2 === "string" && options.wrapValue) {
      value2 = value2.replace(new RegExp(options.wrapValue, "g"), `\\${options.wrapValue}`);
      value2 = `${options.wrapValue}${value2}${options.wrapValue}`;
    }
    return `${key}${options.keyValueSeparator || ""}${value2}`;
  }).join(options.entrySeparator || "");
}
const p = (p2) => ({ keyValue: p2, metaKey: "property" });
const k = (p2) => ({ keyValue: p2 });
const MetaPackingSchema = {
  appleItunesApp: {
    unpack: {
      entrySeparator: ", ",
      resolve({ key, value }) {
        return `${fixKeyCase(key)}=${value}`;
      }
    }
  },
  articleExpirationTime: p("article:expiration_time"),
  articleModifiedTime: p("article:modified_time"),
  articlePublishedTime: p("article:published_time"),
  bookReleaseDate: p("book:release_date"),
  charset: {
    metaKey: "charset"
  },
  contentSecurityPolicy: {
    unpack: {
      entrySeparator: "; ",
      resolve({ key, value }) {
        return `${fixKeyCase(key)} ${value}`;
      }
    },
    metaKey: "http-equiv"
  },
  contentType: {
    metaKey: "http-equiv"
  },
  defaultStyle: {
    metaKey: "http-equiv"
  },
  fbAppId: p("fb:app_id"),
  msapplicationConfig: k("msapplication-Config"),
  msapplicationTileColor: k("msapplication-TileColor"),
  msapplicationTileImage: k("msapplication-TileImage"),
  ogAudioSecureUrl: p("og:audio:secure_url"),
  ogAudioUrl: p("og:audio"),
  ogImageSecureUrl: p("og:image:secure_url"),
  ogImageUrl: p("og:image"),
  ogSiteName: p("og:site_name"),
  ogVideoSecureUrl: p("og:video:secure_url"),
  ogVideoUrl: p("og:video"),
  profileFirstName: p("profile:first_name"),
  profileLastName: p("profile:last_name"),
  profileUsername: p("profile:username"),
  refresh: {
    metaKey: "http-equiv",
    unpack: {
      entrySeparator: ";",
      resolve({ key, value }) {
        if (key === "seconds")
          return `${value}`;
      }
    }
  },
  robots: {
    unpack: {
      entrySeparator: ", ",
      resolve({ key, value }) {
        if (typeof value === "boolean")
          return `${fixKeyCase(key)}`;
        else
          return `${fixKeyCase(key)}:${value}`;
      }
    }
  },
  xUaCompatible: {
    metaKey: "http-equiv"
  }
};
const openGraphNamespaces = [
  "og",
  "book",
  "article",
  "profile"
];
function resolveMetaKeyType(key) {
  var _a;
  const fKey = fixKeyCase(key).split(":")[0];
  if (openGraphNamespaces.includes(fKey))
    return "property";
  return ((_a = MetaPackingSchema[key]) == null ? void 0 : _a.metaKey) || "name";
}
function resolveMetaKeyValue(key) {
  var _a;
  return ((_a = MetaPackingSchema[key]) == null ? void 0 : _a.keyValue) || fixKeyCase(key);
}
function fixKeyCase(key) {
  const updated = key.replace(/([A-Z])/g, "-$1").toLowerCase();
  const fKey = updated.split("-")[0];
  if (openGraphNamespaces.includes(fKey) || fKey === "twitter")
    return key.replace(/([A-Z])/g, ":$1").toLowerCase();
  return updated;
}
function changeKeyCasingDeep(input) {
  if (Array.isArray(input)) {
    return input.map((entry) => changeKeyCasingDeep(entry));
  }
  if (typeof input !== "object" || Array.isArray(input))
    return input;
  const output = {};
  for (const [key, value] of Object.entries(input))
    output[fixKeyCase(key)] = changeKeyCasingDeep(value);
  return output;
}
function resolvePackedMetaObjectValue(value, key) {
  const definition = MetaPackingSchema[key];
  if (key === "refresh")
    return `${value.seconds};url=${value.url}`;
  return unpackToString(
    changeKeyCasingDeep(value),
    {
      keyValueSeparator: "=",
      entrySeparator: ", ",
      resolve({ value: value2, key: key2 }) {
        if (value2 === null)
          return "";
        if (typeof value2 === "boolean")
          return `${key2}`;
      },
      ...definition == null ? void 0 : definition.unpack
    }
  );
}
const ObjectArrayEntries = ["og:image", "og:video", "og:audio", "twitter:image"];
function sanitize(input) {
  const out = {};
  Object.entries(input).forEach(([k2, v]) => {
    if (String(v) !== "false" && k2)
      out[k2] = v;
  });
  return out;
}
function handleObjectEntry(key, v) {
  const value = sanitize(v);
  const fKey = fixKeyCase(key);
  const attr = resolveMetaKeyType(fKey);
  if (ObjectArrayEntries.includes(fKey)) {
    const input = {};
    Object.entries(value).forEach(([k2, v2]) => {
      input[`${key}${k2 === "url" ? "" : `${k2.charAt(0).toUpperCase()}${k2.slice(1)}`}`] = v2;
    });
    return unpackMeta(input).sort((a, b) => {
      var _a, _b;
      return (((_a = a[attr]) == null ? void 0 : _a.length) || 0) - (((_b = b[attr]) == null ? void 0 : _b.length) || 0);
    });
  }
  return [{ [attr]: fKey, ...value }];
}
function unpackMeta(input) {
  const extras = [];
  const primitives = {};
  Object.entries(input).forEach(([key, value]) => {
    if (!Array.isArray(value)) {
      if (typeof value === "object" && value) {
        if (ObjectArrayEntries.includes(fixKeyCase(key))) {
          extras.push(...handleObjectEntry(key, value));
          return;
        }
        primitives[key] = sanitize(value);
      } else {
        primitives[key] = value;
      }
      return;
    }
    value.forEach((v) => {
      extras.push(...typeof v === "string" ? unpackMeta({ [key]: v }) : handleObjectEntry(key, v));
    });
  });
  const meta = unpackToArray(primitives, {
    key({ key }) {
      return resolveMetaKeyType(key);
    },
    value({ key }) {
      return key === "charset" ? "charset" : "content";
    },
    resolveKeyData({ key }) {
      return resolveMetaKeyValue(key);
    },
    resolveValueData({ value, key }) {
      if (value === null)
        return "_null";
      if (typeof value === "object")
        return resolvePackedMetaObjectValue(value, key);
      return typeof value === "number" ? value.toString() : value;
    }
  });
  return [...extras, ...meta].map((m) => {
    if (m.content === "_null")
      m.content = null;
    return m;
  });
}
function useSeoMeta(input, options) {
  const { title, titleTemplate, ...meta } = input;
  return useHead({
    title,
    titleTemplate,
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t) {
      const meta2 = unpackMeta({ ...t._flatMeta });
      delete t._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t,
        meta: meta2
      };
    }
  });
}
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('./index-CLRNvoHr.mjs').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL$1(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam$1(key) + "_" + encodeParam$1(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath$1(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$LM4si58TUh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$LM4si58TUh, defaults: {} }
};
const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, default: void 0 },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: {
    type: [Boolean, Object],
    default: void 0
  },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: {
    type: String,
    default: void 0,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], default: void 0 }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 },
  placeholderClass: { type: String, default: void 0 }
};
const __nuxt_component_0$1 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs,
      class: props.placeholder && !placeholderLoaded.value ? [props.placeholderClass] : void 0,
      src: src.value
    });
  }
});
const _imports_0$3 = "" + buildAssetsURL("bg-tech.CUms9Vrd.png");
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hero",
        class: "max-md:pt-40 md:min-h-screen flex w-full justify-center overflow-hidden"
      }, _attrs))}><div class="w-full flex flex-col items-center relative"><div class="max-md:w-[80%] w-[70%] relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "w-full relative z-10",
        preload: "",
        src: "/assets/images/logo-com.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "w-full absolute top-0 left-0 z[-1] animate-spin-slow",
        preload: "",
        src: "/assets/images/rounded-com.png"
      }, null, _parent));
      _push(`</div><img style="${ssrRenderStyle({ "mix-blend-mode": "lighten" })}" class="w-full absolute top-0 left-0 z[-1] opacity-80"${ssrRenderAttr("src", _imports_0$3)} alt=""><button class="flex items-center gap-1 border border-white hover:bg-white hover:text-black transition-all duration-100 h-10 px-5 -translate-y-10 rounded-3xl font-semibold cursor-pointer z-10"> \u0110\u0103ng k\xFD ngay `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols:arrow-right-alt-rounded",
        class: "text-lg"
      }, null, _parent));
      _push(`</button></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Hero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _imports_0$2 = "" + buildAssetsURL("lasimi.DaqviT1_.jpg");
const _imports_1$1 = "" + buildAssetsURL("dol-english.huioBiqB.jpg");
const _sfc_main$8 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "sponsor",
    class: "mt-20 overflow-hidden"
  }, _attrs))}><div class="flex flex-col items-center"><h2 class="text-2xl text-gray-500 font-bold"> Nh\xE0 t\xE0i tr\u1EE3 </h2><div class="flex justify-center max-md:flex-col items-center gap-8 mt-8"><div class="flex shadow-xl w-[340px] gap-2 p-2 rounded-xl bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.15)]"><img class="min-w-32 w-32 h-28 object-cover rounded-md"${ssrRenderAttr("src", _imports_0$2)} alt=""><div><p class="font-bold"> Tr\xE0 S\u1EEFa \xD4 Long Lasimi </p><p class="text-sm mt-2 text-gray-400">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ic:round-location-on",
    color: "black"
  }, null, _parent));
  _push(` B59 L\xEA Du\u1EA9n ( N10 c\u0169 g\u1EA7n h\u1ED3 Nguy\u1EC5n Du) , An M\u1EF9, Tam K\u1EF3, Qu\u1EA3ng Nam </p></div></div><div class="flex shadow-xl w-[340px] gap-2 p-2 rounded-xl bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.15)]"><img class="min-w-32 w-32 h-28 object-cover rounded-md"${ssrRenderAttr("src", _imports_1$1)} alt=""><div><p class="font-bold"> DOL English </p><p class="text-sm mt-2 text-gray-400">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ic:round-location-on",
    color: "black"
  }, null, _parent));
  _push(` 458/14 \u0110\u01B0\u1EDDng 3 th\xE1ng 2, Ph\u01B0\u1EDDng 12, Qu\u1EADn 10, Ho Chi Minh City, Vietnam </p></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Sponsor.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$7 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [EffectCards, Autoplay]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = resolveComponent("Swiper", true);
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  _push(ssrRenderComponent(_component_Swiper, mergeProps({
    autoplay: {
      delay: 1800,
      pauseOnMouseEnter: true,
      stopOnLastSlide: true
    },
    effect: "cards",
    "grab-cursor": true,
    modules: $setup.modules,
    class: "mySwiper"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(9, (n) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, { key: n }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img class="h-full object-cover w-full"${ssrRenderAttr("src", `/assets/images/recap/small/${n}.jpg`)} alt=""${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    class: "h-full object-cover w-full",
                    src: `/assets/images/recap/small/${n}.jpg`,
                    alt: ""
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(), createBlock(Fragment, null, renderList(9, (n) => {
            return createVNode(_component_SwiperSlide, { key: n }, {
              default: withCtx(() => [
                createVNode("img", {
                  class: "h-full object-cover w-full",
                  src: `/assets/images/recap/small/${n}.jpg`,
                  alt: ""
                }, null, 8, ["src"])
              ]),
              _: 2
            }, 1024);
          }), 64))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/SwiperGallery/Swiper.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$1 = "" + buildAssetsURL("lookback.CNH4iduS.mp4");
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_LandingSwiperGallerySwiper = __nuxt_component_0;
  const _directive_motion = resolveDirective("motion");
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "mt-32 px-5 h-fit scroll-my-40"
  }, _attrs))}><div class="flex max-md:flex-col max-md:gap-10"><div class="flex-1"><h2${ssrRenderAttrs(mergeProps({
    initial: { opacity: 0, x: -100 },
    "visible-once": { opacity: 1, x: 0, scale: 1 },
    delay: 200,
    class: "max-md:text-3xl text-5xl font-bold"
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))}> Gi\u1EDBi thi\u1EC7u v\u1EC1 LTES <br> <span class="bg-green-stroke bg-no-repeat bg-contain bg-bottom"> Let&#39;s Fly High</span></h2><div${ssrRenderAttrs(mergeProps({
    initial: { opacity: 0, x: -100 },
    "visible-once": { opacity: 1, x: 0, scale: 1 },
    delay: 400,
    class: "max-md:text-sm text-slate-300"
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><p class="mt-5"> LTES - Let\u2019s Fly High l\xE0 t\u1ED5 ch\u1EE9c tr\u1EA1i h\xE8 nh\u1EB1m n\xE2ng t\u1EA7m gi\xE1 tr\u1ECB nh\xE2n t\xE0i th\xF4ng qua vi\u1EC7c gi\xE1o d\u1EE5c k\u1EF9 n\u0103ng. </p><p> LTES \u0111\u01B0\u1EE3c h\xECnh th\xE0nh v\xE0 ph\xE1t tri\u1EC3n nh\u01B0 m\u1ED9t s\xE2n ch\u01A1i cho c\xE1c b\u1EA1n tr\u1EBB mu\u1ED1n th\u1ECFa s\u1EE9c t\u1ED5 ch\u1EE9c ch\u01B0\u01A1ng tr\xECnh tr\u1EA1i h\xE8 c\u0169ng nh\u01B0 c\xE1c b\u1EA1n mu\u1ED1n tham tr\u1EA1i h\xE8 \u0111\u1EC3 tr\u1EA3i nghi\u1EC7m c\xE1c ho\u1EA1t \u0111\u1ED9ng r\xE8n luy\u1EC7n ki\u1EBFn th\u1EE9c - k\u1EF9 n\u0103ng. </p><p> H\u01A1n 07 n\u0103m ho\u1EA1t \u0111\u1ED9ng, LTES \u0111\xE3 t\u1ED5 ch\u1EE9c nhi\u1EC1u d\u1EF1 \xE1n tr\u1EA1i h\xE8 th\xE0nh c\xF4ng v\u1EDBi \u0111a d\u1EA1ng h\xECnh th\u1EE9c t\u1ED5 ch\u1EE9c t\u1EEB team building \u0111\u1EBFn workshop gi\xE1o d\u1EE5c - r\xE8n luy\u1EC7n k\u1EF9 n\u0103ng nh\u01B0: 4 m\xF9a tr\u1EA1i UP, D\u1EF1 \xE1n <br> <span class="text-primary text-lg font-bold">\u201CSUMMER CAMP FUN\u201D</span>, D\u1EF1 \xE1n tr\u1EA1i h\xE8 2 ng\xE0y 1 \u0111\xEAm <br> <span class="text-primary text-lg font-bold">\u201CWarriors Wanderlust\u201D</span> v\xE0 g\u1EA7n nh\u1EA5t v\u1EDBi d\u1EF1 \xE1n tr\u1EA1i h\xE8 3 ng\xE0y 2 \u0111\xEAm <span class="text-primary text-lg font-bold">\u201CThe Outcasts Academy\u201D</span> v\u1EDBi s\u1EF1 tham gia \u0111\xF4ng \u0111\u1EA3o t\u1EEB c\xE1c b\u1EA1n tr\u1EBB tr\xEAn \u0111\u1ECBa b\xE0n t\u1EC9nh Qu\u1EA3ng Nam. </p></div></div><div class="flex-1">`);
  _push(ssrRenderComponent(_component_LandingSwiperGallerySwiper, null, null, _parent));
  _push(`</div></div><div class="flex flex-col items-center mt-28"><h2 class="text-4xl max-md:text-3xl font-bold text-gray-200 text-center"> Look back Warriors Wanderlust </h2><p class="max-md:text-sm text-center mt-5 text-gray-300 w-[70%]"> D\u1EF1 \xE1n tr\u1EA1i h\xE8 2 ng\xE0y 1 \u0111\xEAm <span class="text-primary font-bold">\u201CWarriors Wanderlust\u201D</span> \u0111\xE3 di\u1EC5n ra v\xE0o ng\xE0y 20-21/06/2020 t\u1EA1i huy\u1EC7n Ti\xEAn Ph\u01B0\u1EDBc, t\u1EC9nh Qu\u1EA3ng Nam. </p><video class="rounded-xl object-cover mt-10"${ssrRenderAttr("src", _imports_0$1)} controls></video></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/About.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const E = /* @__PURE__ */ defineComponent({
  __name: "Marquee",
  props: {
    style: { default: () => () => ({}) },
    class: { default: "" },
    autoFill: { type: Boolean, default: false },
    play: { type: Boolean, default: true },
    pauseOnHover: { type: Boolean, default: false },
    pauseOnClick: { type: Boolean, default: false },
    direction: { default: "left" },
    speed: { default: 50 },
    delay: { default: 0 },
    loop: { default: 0 },
    gradient: { type: Boolean, default: false },
    gradientColor: { default: "white" },
    gradientWidth: { default: 200 }
  },
  emits: ["finish", "cycleComplete"],
  setup(e, { emit: o }) {
    const k2 = o, u = ref(), c = ref(), h2 = ref(0), y = ref(0), s = ref(1), g = ref(false), v = ref(), b = computed(() => e.autoFill ? y.value * s.value / e.speed : y < h2 ? h2.value / e.speed : y.value / e.speed), M = computed(() => ({
      ...e.style,
      "--pause-on-hover": !e.play || e.pauseOnHover ? "paused" : "running",
      "--pause-on-click": !e.play || e.pauseOnHover && !e.pauseOnClick || e.pauseOnClick ? "paused" : "running",
      "--width": e.direction === "up" || e.direction === "down" ? "100vh" : "100%",
      "--transform": e.direction === "up" ? "rotate(-90deg)" : e.direction === "down" ? "rotate(90deg)" : "none"
    })), S = computed(() => ({
      "--gradient-color": e.gradientColor,
      "--gradient-width": typeof e.gradientWidth == "number" ? `${e.gradientWidth}px` : e.gradientWidth
    })), B = computed(() => ({
      "--play": e.play ? "running" : "paused",
      "--direction": e.direction === "left" ? "normal" : "reverse",
      "--duration": `${b.value}s`,
      "--delay": `${e.delay}s`,
      "--iteration-count": e.loop ? `${e.loop}` : "infinite",
      "--min-width": e.autoFill ? "auto" : "100%"
    })), C = computed(() => ({
      "--transform": e.direction === "up" ? "rotate(90deg)" : e.direction === "down" ? "rotate(-90deg)" : "none"
    })), R = () => {
      if (c.value && u.value) {
        const t = u.value.getBoundingClientRect(), n = c.value.getBoundingClientRect();
        let a = t.width, f = n.width;
        (e.direction === "up" || e.direction === "down") && (a = t.height, f = n.height), e.autoFill && a && f ? s.value = f < a ? Math.ceil(a / f) : 1 : s.value = 1, h2.value = a, y.value = f;
      }
    }, W = (t) => [
      ...Array(Number.isFinite(t) && t >= 0 ? t : 0)
    ];
    return watch([() => e.autoFill, () => e.direction, g, u], () => {
      g.value && (R(), c.value && u.value && (v.value && v.value.disconnect(), v.value = new ResizeObserver(() => R()), v.value.observe(u.value), v.value.observe(c.value)));
    }), onMounted(() => {
      g.value = true;
    }), (t, n) => g.value ? (openBlock(), createElementBlock("div", {
      key: 0,
      ref_key: "containerRef",
      ref: u,
      class: normalizeClass(["vfm-marquee-container", e.class]),
      style: normalizeStyle(M.value)
    }, [
      t.gradient ? (openBlock(), createElementBlock("div", {
        key: 0,
        style: normalizeStyle(S.value),
        class: "vfm-overlay"
      }, null, 4)) : createCommentVNode("", true),
      createElementVNode("div", {
        class: "vfm-marquee",
        style: normalizeStyle(B.value),
        onAnimationiteration: n[0] || (n[0] = (a) => k2("cycleComplete")),
        onAnimationend: n[1] || (n[1] = (a) => k2("finish"))
      }, [
        createElementVNode("div", {
          style: normalizeStyle(C.value),
          class: "vfm-parent",
          ref_key: "marqueeRef",
          ref: c
        }, [
          renderSlot(t.$slots, "default")
        ], 4),
        (openBlock(true), createElementBlock(Fragment, null, renderList(W(s.value - 1), (a) => (openBlock(), createElementBlock("div", {
          style: normalizeStyle(C.value),
          class: "vfm-parent"
        }, [
          renderSlot(t.$slots, "default")
        ], 4))), 256))
      ], 36),
      createElementVNode("div", {
        class: "vfm-marquee",
        style: normalizeStyle(B.value)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(W(s.value), (a) => (openBlock(), createElementBlock("div", {
          style: normalizeStyle(C.value),
          class: "vfm-parent"
        }, [
          renderSlot(t.$slots, "default")
        ], 4))), 256))
      ], 4)
    ], 6)) : createCommentVNode("", true);
  }
});
const _sfc_main$5 = {
  name: "NuxtMarquee",
  emits: ["finish", "cycleComplete"],
  props: [
    "style",
    "class",
    "autoFill",
    "play",
    "pauseOnHover",
    "pauseOnClick",
    "direction",
    "speed",
    "delay",
    "loop",
    "gradient",
    "gradientColor",
    "gradientWidth"
  ],
  setup(props, { slots, emit }) {
    return () => h(
      E,
      {
        ...props,
        onCycleComplete: () => emit("cycleComplete"),
        onFinish: () => emit("finish")
      },
      slots
    );
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt-marquee@1.0.4_magicast@0.3.4_rollup@4.18.0_vue@3.4.31_typescript@5.5.3_/node_modules/nuxt-marquee/dist/runtime/components/NuxtMarquee.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    image: {},
    year: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[320px] h-[335px] p-2" }, _attrs))}><div class="w-full h-full border border-[#212344] overflow-hidden rounded-2xl bg-[#161528]"><div class="w-full h-[65%] relative"><img class="w-full h-full object-cover"${ssrRenderAttr("src", _ctx.image)} alt=""><div class="absolute top-4 left-4 bg-[#FFD700] px-2 py-1 rounded-full"><span class="text-[12px] font-bold text-black">${ssrInterpolate(_ctx.year)}</span></div></div><div class="h-[35%]"><div class="p-4"><h3 class="text-[20px] font-bold text-white">${ssrInterpolate(_ctx.title)}</h3><p class="text-[13px] text-gray-400 mt-2">${ssrInterpolate(_ctx.description)}</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/MarqueeItem/Card.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Marquee",
  __ssrInlineRender: true,
  setup(__props) {
    const listSummer = ref([
      {
        title: "M\xF9a tr\u1EA1i UP 1",
        description: "Lorem ipsum dolor sit amet, ",
        image: "/assets/images/summer/up1.jpg",
        year: 2017
      },
      {
        title: "M\xF9a tr\u1EA1i UP 2",
        description: "Lorem ipsum dolor sit amet, ",
        image: "/assets/images/summer/up2.jpg",
        year: 2018
      },
      {
        title: "M\xF9a tr\u1EA1i UP 3",
        description: "Lorem ipsum dolor sit amet, ",
        image: "/assets/images/summer/up3.jpeg",
        year: 2019
      },
      {
        title: "M\xF9a tr\u1EA1i UP 4",
        description: "Lorem ipsum dolor sit amet, ",
        image: "/assets/images/summer/up4.jpeg",
        year: 2020
      },
      {
        title: "WARRIORS WANDERLUST",
        description: "Lorem ipsum dolor sit amet, ",
        image: "/assets/images/summer/warrios.jpg",
        year: 2022
      },
      {
        title: "THE OUTCASTS ACADEMY",
        description: "Lorem ipsum dolor sit amet, ",
        image: "/assets/images/summer/outcast.jpeg",
        year: 2023
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtMarquee = _sfc_main$5;
      const _component_LandingMarqueeItemCard = _sfc_main$4;
      _push(ssrRenderComponent(_component_NuxtMarquee, mergeProps({ "auto-fill": true }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(listSummer), (summer) => {
              _push2(ssrRenderComponent(_component_LandingMarqueeItemCard, mergeProps({ ref_for: true }, summer, {
                key: summer.title
              }), null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(listSummer), (summer) => {
                return openBlock(), createBlock(_component_LandingMarqueeItemCard, mergeProps({ ref_for: true }, summer, {
                  key: summer.title
                }), null, 16);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Marquee.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_LandingMarquee = _sfc_main$3;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "our-summer",
    class: "mt-20 w-full"
  }, _attrs))}><h2 class="text-center text-2xl font-bold mb-10 text-gray-600">S\u1EF1 ki\u1EC7n \u0111\xE3 t\u1ED5 ch\u1EE9c</h2>`);
  _push(ssrRenderComponent(_component_LandingMarquee, null, null, _parent));
  _push(`</section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/OurSummer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + buildAssetsURL("hoian.BI6KayDU.jpg");
const _imports_1 = "" + buildAssetsURL("tech2.CFRwYlJR.webp");
const _imports_2 = "" + buildAssetsURL("tech3.CWSP6b7c.gif");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_motion = resolveDirective("motion");
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "summer",
    class: "mt-36 px-5 scroll-my-40"
  }, _attrs))}><div><h2 class="max-md:text-4xl text-center text-5xl font-black italic"><div${ssrRenderAttrs(mergeProps({
    initial: { opacity: 0, x: -200 },
    "visible-once": { opacity: 1, x: 0, scale: 1 },
    delay: 300
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))}> D\u1EF1 \xE1n tr\u1EA1i h\xE8 </div><div${ssrRenderAttrs(mergeProps({
    initial: { opacity: 0, x: 200 },
    "visible-once": { opacity: 1, x: 0, scale: 1 },
    delay: 300
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))}> The <span class="bg-green-stroke bg-no-repeat bg-contain bg-bottom"> Codebreakers </span> 2024 </div></h2><div class="max-md:flex-col flex max-md:h-[800px] h-[500px] overflow-hidden border border-gray-border-primary bg-[rgb(19,19,19)] rounded-[30px] mt-20"><div class="flex-1"><div class="flex flex-col justify-between h-full p-20 px-12"><div><h3 class="text-[40px] font-bold"> Codebreakers 2024 </h3><p class="text-gray-400"> D\u1EF1 \xE1n \u201CThe Codebreakers\u201D l\xE0 ch\u01B0\u01A1ng tr\xECnh tr\u1EA1i h\xE8 gi\xE1o d\u1EE5c k\u1EF9 n\u0103ng th\u1EE9 07 do LTES t\u1ED5 ch\u1EE9c. Ch\u01B0\u01A1ng tr\xECnh s\u1EBD di\u1EC5n ra t\u1EA1i <span class="font-bold text-white">H\u1ED9i An</span> v\xE0o th\xE1ng 08/2024. </p><span class="bg-[rgb(0_208_255/26%)] text-[rgb(38_215_255)] inline-block mt-4 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">#hoian</span><span class="bg-[rgb(0_208_255/26%)] text-[rgb(38_215_255)] inline-block mt-4 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">#thecodebreakers</span></div><button${ssrRenderAttrs(mergeProps({
    initial: { opacity: 0, scale: 0.5 },
    "visible-once": { opacity: 1, scale: 1 },
    delay: 300,
    class: "bg-[#30a963] w-fit text-sm h-10 px-4 rounded-xl"
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))}> Ti\u1EBFp t\u1EE5c kh\xE1m ph\xE1 </button></div></div><div class="flex-1"><img loading="lazy" class="w-full h-full object-cover"${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="max-md:flex-col flex mt-32"><div class="flex-1"><img style="${ssrRenderStyle({ "mix-blend-mode": "lighten" })}" class="w-full"${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="flex-1 flex justify-end"><div class="flex w-[80%] flex-col items-end"><h3 class="text-4xl font-bold"> B\u1ED1i c\u1EA3nh </h3><p class="text-gray-400 mt-4 text-end"> B\u1ED1i c\u1EA3nh \u0111\u01B0\u1EE3c l\u1EA5y t\u1EEB gian ph\xF2ng th\xED nghi\u1EC7m v\xE0 con t\xE0u du h\xE0nh th\u1EDDi gian c\u1EE7a Ti\u1EBFn s\u0129 Wisdom, tr\u1EA1i sinh s\u1EBD \u0111\xF3ng vai nh\u1EEFng ng\u01B0\u1EDDi gi\u1EA3i m\xE3, kh\xE1m ph\xE1 c\xE1c h\u1EC7 th\u1ED1ng m\u1EADt m\xE3 v\xE0 manh m\u1ED1i \u0111\u1EC3 t\xECm ra v\u1ECB tr\xED ch\xEDnh x\xE1c c\u1EE7a b\u1EA3n thi\u1EBFt k\u1EBF t\xE0u v\u0169 tr\u1EE5 b\u1ECB \u0111\xE1nh c\u1EAFp b\u1EDFi KKid. </p></div></div></div><div class="max-md:flex-col flex mt-32"><div class="flex-1 flex justify-start"><div class="flex w-[80%] flex-col items-start"><h3 class="text-4xl font-bold"> Kh\xE1m ph\xE1 v\xF9ng \u0111\u1EA5t m\u1EDBi </h3><p class="text-gray-400 mt-4 text-start"> Tham gia tr\u1EA1i h\xE8, c\xE1c b\u1EA1n s\u1EBD c\xF3 c\u01A1 h\u1ED9i kh\xE1m ph\xE1 ti\u1EC1m n\u0103ng, nh\u1EADn di\u1EC7n nh\u1EEFng h\u1EA1n ch\u1EBF c\u1EE7a b\u1EA3n th\xE2n, t\u1EEB \u0111\xF3, h\u1ECDc c\xE1ch gi\u1EA3i quy\u1EBFt hi\u1EC7u qu\u1EA3 c\xE1c v\u1EA5n \u0111\u1EC1 kh\xF3 kh\u0103n v\xE0 v\u01B0\u1EE3t qua nh\u1EEFng tr\u1EDF ng\u1EA1i trong cu\u1ED9c s\u1ED1ng. Tr\u1EA1i h\xE8 n\xE0y kh\xF4ng ch\u1EC9 l\xE0 cu\u1ED9c phi\xEAu l\u01B0u t\xECm ki\u1EBFm v\xE0 gi\u1EA3i m\xE3 c\xE1c manh m\u1ED1i v\u1EADt ch\u1EA5t, m\xE0 c\xF2n l\xE0 h\xE0nh tr\xECnh t\u1EF1 kh\xE1m ph\xE1 v\xE0 ph\xE1t tri\u1EC3n b\u1EA3n th\xE2n \u0111\u1EA7y \xFD ngh\u0129a \u0111\u1ED1i v\u1EDBi m\u1ED7i tr\u1EA1i sinh. </p></div></div><div class="flex-1"><img style="${ssrRenderStyle({ "mix-blend-mode": "lighten" })}" class="w-full"${ssrRenderAttr("src", _imports_2)} alt=""></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Summer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "LTES - Let's Fly High",
      ogTitle: "LTES - Let's Fly High",
      description: "LTES - Let's Fly High l\xE0 t\u1ED5 ch\u1EE9c tr\u1EA1i h\xE8 nh\u1EB1m n\xE2ng t\u1EA7m gi\xE1 tr\u1ECB nh\xE2n t\xE0i th\xF4ng qua vi\u1EC7c gi\xE1o d\u1EE5c k\u1EF9 n\u0103ng. ",
      ogDescription: "LTES - Let's Fly High l\xE0 t\u1ED5 ch\u1EE9c tr\u1EA1i h\xE8 nh\u1EB1m n\xE2ng t\u1EA7m gi\xE1 tr\u1ECB nh\xE2n t\xE0i th\xF4ng qua vi\u1EC7c gi\xE1o d\u1EE5c k\u1EF9 n\u0103ng.",
      ogImage: "/assets/images/thumb.png"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingHero = _sfc_main$9;
      const _component_LandingSponsor = __nuxt_component_1;
      const _component_LandingAbout = __nuxt_component_2;
      const _component_LandingOurSummer = __nuxt_component_3;
      const _component_LandingSummer = __nuxt_component_4;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center w-full" }, _attrs))}><section class="fixed top-0 left-0 h-screen w-full z-[-1] bg-dot opacity-75"><div class="bg-purple-blur w-full h-full"></div></section>`);
      _push(ssrRenderComponent(_component_LandingHero, null, null, _parent));
      _push(`<div class="w-full max-w-[1024px]">`);
      _push(ssrRenderComponent(_component_LandingSponsor, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingAbout, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_LandingOurSummer, null, null, _parent));
      _push(`<div class="w-full max-w-[1024px]">`);
      _push(ssrRenderComponent(_component_LandingSummer, null, null, _parent));
      _push(`</div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-k3oPIhhW.mjs.map
