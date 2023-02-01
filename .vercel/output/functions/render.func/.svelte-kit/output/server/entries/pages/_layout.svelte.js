import { c as create_ssr_component, b as subscribe, d as add_attribute } from "../../chunks/index3.js";
import { t as theme } from "../../chunks/theme.js";
import { Amplify } from "aws-amplify";
const app = "";
const awsmobile = {
  "aws_project_region": "us-west-2",
  "aws_cognito_identity_pool_id": "us-west-2:0363d53b-7ad5-4401-a7b9-90eb6c9abe23",
  "aws_cognito_region": "us-west-2",
  "aws_user_pools_id": "us-west-2_UOsz3ZHvO",
  "aws_user_pools_web_client_id": "26e2pljfs22mnddjecpqhn7e4i",
  "oauth": {},
  "aws_cognito_username_attributes": [
    "EMAIL"
  ],
  "aws_cognito_social_providers": [],
  "aws_cognito_signup_attributes": [
    "EMAIL"
  ],
  "aws_cognito_mfa_configuration": "OFF",
  "aws_cognito_mfa_types": [
    "SMS"
  ],
  "aws_cognito_password_protection_settings": {
    "passwordPolicyMinLength": 8,
    "passwordPolicyCharacters": []
  },
  "aws_cognito_verification_mechanisms": [
    "EMAIL"
  ]
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  Amplify.configure(awsmobile);
  $$unsubscribe_theme();
  return `<div${add_attribute("data-theme", $theme, 0)}>${slots.default ? slots.default({}) : ``}

<footer class="${"footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0"}"><div><p>Copyright © 2022 Thor Anderson Designs</p></div></footer></div>`;
});
export {
  Layout as default
};
