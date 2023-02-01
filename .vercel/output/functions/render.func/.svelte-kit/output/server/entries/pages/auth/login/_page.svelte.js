import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const credentials = { email: "", password: "" };
  return `<div class="${"hero min-h-screen bg-base-200"}"><div class="${"hero-content text-center"}"><div class="${"card shadow-xl bg-slate-400"}"><form class="${"card-body"}"><div class="${"form-control"}"><h1 class="${"text-4xl font-bold m-4 text-primary-content"}">Log in</h1>
                    <h4 class="${"m-2 text-primary-focus"}">Sign in to my demo app</h4>
                    <label class="${"label"}" for="${"email"}">Email Address</label>
					<input class="${"input input-bordered input-lg w-96"}" type="${"email"}" name="${"email"}" placeholder="${"Email"}" required autocomplete="${"email"}"${add_attribute("value", credentials.email, 0)}>
                    <label class="${"label"}" for="${"password"}">Password</label>
                    <input class="${"input input-bordered input-lg w-96"}" type="${"password"}" name="${"password"}" placeholder="${"Password"}" required autocomplete="${"password"}" minlength="${"8"}" maxlength="${"80"}"${add_attribute("value", credentials.password, 0)}>
                    <button class="${"btn btn-primary btn-lg mt-8"}" type="${"submit"}">Log In</button></div></form></div></div></div>`;
});
export {
  Page as default
};
