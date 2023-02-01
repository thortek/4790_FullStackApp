import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".box.svelte-ik81j4{padding:0.25rem;margin:1.5rem;color:red;box-shadow:4px 5px 11px 2px lightgray}.box.svelte-ik81j4:hover{box-shadow:4px 5px 11px 10px lightgray}img.svelte-ik81j4{width:8rem;object-fit:contain}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="${"flex flex-wrap justify-center"}">${each(data.allNames, ({ lastName, avatar }) => {
    return `<a${add_attribute("href", `/avatars/${lastName}`, 0)} class="${"box svelte-ik81j4"}"><img${add_attribute("src", avatar, 0)} alt="${"An avatar"}" class="${"svelte-ik81j4"}">
			<h2>${escape(lastName)}</h2>
		</a>`;
  })}
</main>`;
});
export {
  Page as default
};
