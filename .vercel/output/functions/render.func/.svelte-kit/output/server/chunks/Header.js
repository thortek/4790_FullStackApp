import { c as create_ssr_component, b as subscribe, e as escape, f as each, d as add_attribute } from "./index3.js";
import "devalue";
import { t as theme } from "./theme.js";
import { Auth } from "aws-amplify";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => value);
  let themeOptions = ["light", "dark", "cupcake", "aqua", "dracula", "winter"];
  let localUser;
  console.log("About to try and authenticate user...");
  Auth.currentAuthenticatedUser().then((user) => localUser = user).catch((err) => console.log("Checking for user... ", err));
  $$unsubscribe_theme();
  return `<header class="${"navbar bg-base-100"}"><div class="${"flex-1"}"><a href="${"/"}" class="${"btn btn-ghost"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-8 w-8"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}"></path></svg></a>
		<a href="${"/avatars"}" class="${"btn btn-ghost normal-case text-xl"}">Avatars</a>
		<a href="${"/movies"}" class="${"btn btn-ghost normal-case text-xl"}">Movies</a>
		<a href="${"/dashboard"}" class="${"btn btn-ghost normal-case text-xl"}">Dashboard</a>
		<a href="${"/aggregator"}" class="${"btn btn-ghost normal-case text-xl"}">News Aggregator</a></div>
	<div><form method="${"POST"}" action="${"/movies?/search"}"><div class="${"form-control"}"><input class="${"input input-bordered input-lg w-80"}" type="${"search"}" name="${"searchTerms"}" placeholder="${"Movie Search"}"></div></form></div>
	<div class="${"dropdown dropdown-end"}">
		<label tabindex="${"0"}" class="${"btn btn-ghost btn-circle avatar m-1"}" for="${"userIcon"}"><div class="${"w-16 rounded-full"}"><img id="${"userIcon"}" src="${"https://placeimg.com/90/90/people"}" alt="${"User icon"}"></div></label>
		
		<ul tabindex="${"0"}" class="${"mt-3 p-2 dropdown-content bg-base-100 menu menu-compact shadow rounded-box w-36"}">${localUser ? `<li>Welcome ${escape(localUser.attributes.name)}!</li>` : ``}
			<li><a href="${"/user/profile"}">Profile</a></li>
			<li><a href="${"/user/settings"}">Settings</a></li>
			<li><select class="${"select w-full max-x-xs"}"><option disabled selected value="${"Theme"}">Theme</option>${each(themeOptions, (theme2) => {
    return `<option${add_attribute("value", theme2, 0)}>${escape(theme2)}
						</option>`;
  })}</select></li>
			<li><a>Logout</a></li></ul></div></header>`;
});
export {
  Header as H
};
