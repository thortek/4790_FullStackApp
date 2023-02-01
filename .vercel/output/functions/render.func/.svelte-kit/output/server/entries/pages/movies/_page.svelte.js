import { c as create_ssr_component, e as escape, f as each, v as validate_component, d as add_attribute } from "../../../chunks/index3.js";
import "devalue";
const MovieModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movieDetails, showModal, toggleModal } = $$props;
  if ($$props.movieDetails === void 0 && $$bindings.movieDetails && movieDetails !== void 0)
    $$bindings.movieDetails(movieDetails);
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.toggleModal === void 0 && $$bindings.toggleModal && toggleModal !== void 0)
    $$bindings.toggleModal(toggleModal);
  return `<div class="${["modal", showModal ? "modal-open" : ""].join(" ").trim()}"><div class="${"modal-box"}"><h3 class="${"font-bold text-lg text-center"}">${escape(movieDetails.Title)}</h3>

		<p class="${"py-4 text-base text-blue-800"}">${escape(movieDetails.Plot)}</p>
		<p class="${"py-2 text-sm text-green-900"}">Actors: ${escape(movieDetails.Actors)}</p>
		<p class="${"py-2 text-sm text-red-900"}">Director: ${escape(movieDetails.Director)}</p>
		<h2 class="${"text-base text-gray-700"}">${escape(movieDetails.Year)}</h2>
		<div class="${"modal-action"}"><label for="${"my-modal"}" class="${"btn btn-primary"}">Close</label></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form, errors } = $$props;
  let showModal = false;
  let movieDetails = {};
  function toggleModal() {
    showModal = !showModal;
  }
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  return `${errors?.title ? `<p class="${"error"}">${escape(errors.title)}</p>` : ``}

<main class="${"flex flex-wrap justify-center"}">${!form ? `<div class="${"card"}"><div class="${"card-body"}">
				<h2 class="${"card-title"}">No movies loaded. Enter a valid movie title in the search box.</h2></div></div>` : `${each(form, (movie) => {
    return `<div class="${"card w-96 bg-base-100 shadow-xl m-4"}"><figure><form id="${"posterForm"}" method="${"POST"}" action="${"?/details"}"><input type="${"image"}" name="${"movieID"}"${add_attribute("value", movie.imdbID, 0)} id="${"posterMovieID"}"${add_attribute("src", movie.Poster, 0)} alt="${"Submit"}">
						
					</form></figure>
				<div class="${"card-body"}"><h2 class="${"card-title"}">${escape(movie.Title)}</h2>
					<p>${escape(movie.Year)}</p>
					<div class="${"card-actions justify-end"}"><button class="${"btn btn-primary"}">Buy Now</button>
					</div></div>
			</div>`;
  })}`}
	${validate_component(MovieModal, "MovieModal").$$render($$result, { movieDetails, showModal, toggleModal }, {}, {})}</main>`;
});
export {
  Page as default
};
