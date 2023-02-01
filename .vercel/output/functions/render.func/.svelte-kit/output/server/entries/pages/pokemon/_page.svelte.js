import { c as create_ssr_component, d as add_attribute, v as validate_component, f as each, e as escape } from "../../../chunks/index3.js";
const IntersectionObserver_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-1c44y5p{width:100%;height:100%}",
  map: null
};
const IntersectionObserver_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { once = false } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { left = 0 } = $$props;
  let { right = 0 } = $$props;
  let intersecting = false;
  let container;
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  $$result.css.add(css$1);
  return `<div class="${"svelte-1c44y5p"}"${add_attribute("this", container, 0)}>${slots.default ? slots.default({ intersecting }) : ``}
</div>`;
});
const Image_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1ijqaae{height:200px;opacity:0;transition:opacity 1200ms ease-out}img.loaded.svelte-1ijqaae{opacity:1}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let thisImage;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  $$result.css.add(css);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} loading="${"lazy"}" onerror="${"onerror = null; this.src='favicon.png';"}" class="${["svelte-1ijqaae", ""].join(" ").trim()}"${add_attribute("this", thisImage, 0)}>`;
});
let nativeLoading = false;
const ImageLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render($$result, { once: true }, {}, {
    default: ({ intersecting }) => {
      return `${intersecting || nativeLoading ? `${validate_component(Image, "Image").$$render($$result, { alt, src }, {}, {})}` : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let allPokemon = [];
  return `<h1 class="${"text-xl"}">Pokemon Grid</h1>

<div class="${"w-full grid grid-cols-6 gap-2 p-2"}">${allPokemon.length ? each(allPokemon, (pokemon) => {
    return `<figure>${validate_component(ImageLoader, "ImageLoader").$$render(
      $$result,
      {
        src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`,
        alt: pokemon.name
      },
      {},
      {}
    )}
			<figcaption>${escape(pokemon.name)}</figcaption>
		</figure>`;
  }) : `<p>Loading...</p>`}</div>`;
});
export {
  Page as default
};
