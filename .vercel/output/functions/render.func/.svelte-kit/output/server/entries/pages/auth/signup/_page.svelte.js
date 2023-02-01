import { c as create_ssr_component, b as subscribe, d as add_attribute } from "../../../../chunks/index3.js";
import { l as localUser } from "../../../../chunks/localUser.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_localUser;
  $$unsubscribe_localUser = subscribe(localUser, (value) => value);
  const credentials = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  $$unsubscribe_localUser();
  return `<div class="${"hero min-h-screen bg-base-200"}"><div class="${"hero-content text-center"}"><div class="${"card shadow-xl bg-slate-400"}"><form class="${"card-body"}"><div class="${"form-control"}"><h1 class="${"text-4xl font-bold m-4"}">Sign up</h1>
                    <h4 class="${"m-2"}">Sign up to experience my demo app</h4>
					<label class="${"label"}" for="${"firstName"}">First name</label>
                    <input class="${"input input-bordered input-lg w-96"}" type="${"text"}" name="${"firstName"}" placeholder="${"First name"}" required autocomplete="${"given-name"}" minlength="${"2"}" maxlength="${"80"}"${add_attribute("value", credentials.firstName, 0)}>
					<label class="${"label"}" for="${"lastName"}">Last name</label>
                    <input class="${"input input-bordered input-lg w-96"}" type="${"text"}" name="${"lastName"}" placeholder="${"Last name"}" required autocomplete="${"family-name"}" minlength="${"2"}" maxlength="${"80"}"${add_attribute("value", credentials.lastName, 0)}>
                    <label class="${"label"}" for="${"email"}">Email Address</label>
					<input class="${"input input-bordered input-lg w-96"}" type="${"email"}" name="${"email"}" placeholder="${"Email"}" required autocomplete="${"email"}"${add_attribute("value", credentials.email, 0)}>
                    ${``}
                    <label class="${"label"}" for="${"password"}">Password</label>
                    <input class="${"input input-bordered input-lg w-96"}" type="${"password"}" name="${"password"}" placeholder="${"Password"}" required autocomplete="${"password"}" minlength="${"8"}" maxlength="${"80"}"${add_attribute("value", credentials.password, 0)}>
                    ${``}
                    <button class="${"btn btn-primary btn-lg mt-8"}" type="${"submit"}">Sign up</button></div></form></div></div></div>`;
});
export {
  Page as default
};
