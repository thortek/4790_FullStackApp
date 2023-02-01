import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute } from "../../../../chunks/index3.js";
import { l as localUser } from "../../../../chunks/localUser.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_localUser;
  $$unsubscribe_localUser = subscribe(localUser, (value) => value);
  let code;
  $$unsubscribe_localUser();
  return `<div class="${"hero min-h-screen bg-base-200"}"><div class="${"hero-content text-center"}"><div class="${"card p-16 w-full bg-slate-400 max-w-xl space-y-8"}"><div><h2 class="${"mt-6 text-center text-3xl font-bold tracking-tight text-white"}">LOGO</h2>
				<h2 class="${"mt-6 text-center text-5xl font-bold tracking-tight text-white"}">Verify</h2></div>
			<form class="${"mt-8 space-y-6"}"><div class="${"-space-y-px rounded-md shadow-sm"}"><div><label for="${"verification-code"}" class="${"text-primary"}">6 digit verification code sent to your email address:</label>
						<input id="${"verification-code"}" name="${"code"}" type="${"number"}" inputmode="${"numeric"}" pattern="${"[0-9]" + escape(6, true)}" title="${"Verification code should be exactly 6 digits"}" required class="${"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"}" placeholder="${"Verification code"}"${add_attribute("value", code, 0)}></div></div>
				<div><button type="${"submit"}" style="${"background-color: #8C6AE2"}" class="${"group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}">Verify
					</button></div></form></div></div></div>`;
});
export {
  Page as default
};
