import { c as create_ssr_component, e as escape, f as each, d as add_attribute } from "../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let storyContent = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"drawer overflow-x-hidden overflow-y-auto"}"><input id="${"my-drawer-2"}" type="${"checkbox"}" class="${"drawer-toggle"}">
	<div class="${"drawer-content flex flex-col items-center justify-center"}">
		<label for="${"my-drawer-2"}" class="${"btn btn-primary drawer-button"}">Open drawer</label>
		<div class="${"flex content-center justify-center w-1/2 "}"><h4 class="${"bg-slate-100"}">${escape(storyContent)}</h4></div></div>
	<div class="${"drawer-side "}"><label for="${"my-drawer-2"}" class="${"drawer-overlay "}"></label>
		<ul class="${"menu p-4 w-80 bg-base-100 text-base-content"}">
			${each(data.topStories, (story) => {
    return `<li class="${"card"}"><figure class="${"flex flex-col bg-yellow-500 m-1"}"><img${add_attribute("src", story.urlToImage, 0)} alt="${"Story pic"}">
						<figcaption>${escape(story.title)}</figcaption></figure>
				</li>`;
  })}</ul></div></div>`;
});
export {
  Page as default
};
