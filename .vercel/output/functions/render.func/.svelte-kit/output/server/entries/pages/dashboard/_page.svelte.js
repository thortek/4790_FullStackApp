import { o as onDestroy, c as create_ssr_component, h as spread, i as escape_object, d as add_attribute, v as validate_component, e as escape, j as assign, k as now, l as loop, p as identity, b as subscribe, f as each } from "../../../chunks/index3.js";
import { Chart as Chart$1, LineController, DoughnutController } from "chart.js";
import "chart.js/auto";
import { faker } from "@faker-js/faker";
import { w as writable } from "../../../chunks/index2.js";
const eventPrefix = /^on/;
const events = [];
Object.keys(globalThis).forEach((key) => {
  if (eventPrefix.test(key)) {
    events.push(key.replace(eventPrefix, ""));
  }
});
function useForwardEvents(getRef) {
  const destructors = [];
  onDestroy(() => {
    while (destructors.length) {
      destructors.pop()();
    }
  });
}
function clean(props) {
  let { data, type, options, plugins, children, $$scope, $$slots, ...rest } = props;
  return rest;
}
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { data = { datasets: [] } } = $$props;
  let { options = {} } = $$props;
  let { plugins = [] } = $$props;
  let { updateMode = void 0 } = $$props;
  let { chart = null } = $$props;
  let canvasRef;
  let props = clean($$props);
  onDestroy(() => {
    if (chart)
      chart.destroy();
    chart = null;
  });
  useForwardEvents();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0)
    $$bindings.plugins(plugins);
  if ($$props.updateMode === void 0 && $$bindings.updateMode && updateMode !== void 0)
    $$bindings.updateMode(updateMode);
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  return `<canvas${spread([escape_object(props)], {})}${add_attribute("this", canvasRef, 0)}></canvas>`;
});
const Line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart$1.register(LineController);
  let { chart = null } = $$props;
  let props;
  let baseChartRef;
  useForwardEvents();
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    props = $$props;
    $$rendered = `${validate_component(Chart, "Chart").$$render(
      $$result,
      Object.assign({}, { type: "line" }, props, { this: baseChartRef }, { chart }),
      {
        this: ($$value) => {
          baseChartRef = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Doughnut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart$1.register(DoughnutController);
  let { chart = null } = $$props;
  let props;
  let baseChartRef;
  useForwardEvents();
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    props = $$props;
    $$rendered = `${validate_component(Chart, "Chart").$$render(
      $$result,
      Object.assign({}, { type: "doughnut" }, props, { this: baseChartRef }, { chart }),
      {
        this: ($$value) => {
          baseChartRef = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: true,
      lineTension: 0.3,
      backgroundColor: "rgba(225, 204,230, .3)",
      borderColor: "rgb(205, 130, 158)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(205, 130,1 58)",
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(0, 0, 0)",
      pointHoverBorderColor: "rgba(220, 220, 220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "My Second dataset",
      fill: true,
      lineTension: 0.3,
      backgroundColor: "rgba(184, 185, 210, .3)",
      borderColor: "rgb(35, 26, 136)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(35, 26, 136)",
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(0, 0, 0)",
      pointHoverBorderColor: "rgba(220, 220, 220, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
};
const donutData = {
  labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
  datasets: [
    {
      data: [300, 50, 100, 40, 120],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
      hoverBackgroundColor: [
        "#FF5A5E",
        "#5AD3D1",
        "#FFC870",
        "#A8B3C5",
        "#616774"
      ]
    }
  ]
};
const Stats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"stats shadow-xl m-4"}"><div class="${"stat"}"><div class="${"stat-figure text-primary"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" class="${"inline-block w-8 h-8 stroke-current"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}"></path></svg></div>
		<div class="${"stat-title"}">Total Likes</div>
		<div class="${"stat-value text-primary"}">${escape(faker.random.numeric(2))}.${escape(faker.random.numeric())}K</div>
		<div class="${"stat-desc"}">${escape(faker.random.numeric(2))}% more than last month</div></div>

	<div class="${"stat"}"><div class="${"stat-figure text-secondary"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" class="${"inline-block w-8 h-8 stroke-current"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M13 10V3L4 14h7v7l9-11h-7z"}"></path></svg></div>
		<div class="${"stat-title"}">Page Views</div>
		<div class="${"stat-value text-secondary"}">2.6M</div>
		<div class="${"stat-desc"}">21% more than last month</div></div>

	<div class="${"stat"}"><div class="${"stat-figure text-secondary"}"><div class="${"avatar online"}"><div class="${"w-16 rounded-full"}">
					<a href="${"#"}"><img src="${"https://placeimg.com/128/128/people"}" alt="${"Statistics person"}"></a></div></div></div>
		<div class="${"stat-value"}">86%</div>
		<div class="${"stat-title"}">Tasks done</div>
		<div class="${"stat-desc text-secondary"}">31 tasks remaining</div></div>

	
	
	<div class="${["modal", ""].join(" ").trim()}"><div class="${"modal-box"}"><h3 class="${"font-bold text-lg"}">Congratulations random Internet user!</h3>
			<p class="${"py-4"}">You&#39;ve been selected for a chance to get one year of subscription to use Wikipedia for free!
			</p>
			<div class="${"modal-action"}"><label for="${"my-modal"}" class="${"btn"}">Yay!</label></div></div></div></div>`;
});
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_progress;
  let { data } = $$props;
  let pics = data.nasa_pics;
  const companyName = faker.company.name();
  const progress = tweened(Number.parseInt(faker.finance.amount(1, 100, 0)), { duration: 400, easing: cubicOut });
  $$unsubscribe_progress = subscribe(progress, (value) => value);
  let stepList = [
    {
      id: faker.random.numeric(16),
      text: faker.company.bsBuzz()
    }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_progress();
  return `<div class="${"flex flex-wrap bg-slate-300 h-screen"}">
	<div class="${"card w-full bg-base-100 shadow-xl m-4 h-28"}"><div class="${"card-body"}"><h2 class="${"card-title"}">${escape(companyName)} Mission Statement</h2>
			<p>Our company ${escape(companyName)} exists to ${escape(faker.company.bsBuzz())}
				${escape(faker.company.bsAdjective())}
				${escape(faker.company.bsNoun())} using what we refer to as our &quot;${escape(faker.company.catchPhrase())}&quot;!
			</p></div></div>
	<div class="${"carousel carousel-center p-4 h-96 max-w-md m-4 space-x-4 bg-neutral rounded-box"}">${each(pics, (pic) => {
    return `<div class="${"carousel-item"}"><img class="${"rounded-box"}"${add_attribute("src", pic.url, 0)} alt="${"Nasa pic"}">
			</div>`;
  })}</div>
	<div class="${"w-96 flex items-center"}">${validate_component(Line, "Line").$$render($$result, { data: chartData }, {}, {})}</div>
	<div class="${"w-96"}">${validate_component(Doughnut, "Doughnut").$$render($$result, { class: "p-16", data: donutData }, {}, {})}</div>
	<div class="${"h-fit"}"><div class="${"m-4"}"><button class="${"btn"}">Add Step</button>

			<ul class="${"steps steps-vertical lg:steps-horizontal"}">${each(stepList, (step) => {
    return `<li class="${"step step-primary"}">${escape(step.text)}</li>`;
  })}</ul>
			<ul>${each(stepList, (step) => {
    return `<li class="${"bg-green-700 rounded-md w-48 p-1 text-center m-1"}">${escape(step.text)}</li>`;
  })}</ul></div>
		
		${validate_component(Stats, "Stats").$$render($$result, {}, {}, {})}
		<button class="${"btn"}">${escape("Show")} Financial Performance</button>
		${``}</div></div>`;
});
export {
  Page as default
};
