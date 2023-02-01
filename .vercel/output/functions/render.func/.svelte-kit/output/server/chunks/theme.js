import { w as writable } from "./index2.js";
const defaultValue = "light";
const initialValue = defaultValue;
const theme = writable(initialValue);
theme.subscribe((value) => {
});
export {
  theme as t
};
