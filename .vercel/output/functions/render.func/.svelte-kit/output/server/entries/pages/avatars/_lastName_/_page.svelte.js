import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-e4r6p7{width:15rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="${"m-8"}"><h2>${escape(data.firstName)} ${escape(data.lastName)}</h2>
    <img${add_attribute("src", data.avatar, 0)} alt="${"An avatar"}" class="${"svelte-e4r6p7"}">
    <ul><li>Title: ${escape(data.title)}</li>
        <li>Phone: ${escape(data.phone)}</li>
        <li>Email: ${escape(data.email)}</li></ul>
</main>`;
});
export {
  Page as default
};
