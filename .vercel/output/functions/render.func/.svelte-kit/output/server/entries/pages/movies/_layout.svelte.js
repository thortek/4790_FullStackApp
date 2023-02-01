import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../../chunks/index3.js";
import { H as Header } from "../../../chunks/Header.js";
import { t as theme } from "../../../chunks/theme.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return `<div${add_attribute("data-theme", $theme, 0)} class="${"h-screen"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
