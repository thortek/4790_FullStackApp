import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import { H as Header } from "../../../chunks/Header.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
