export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/adventurer.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-8a78fed2.js","imports":["_app/immutable/start-8a78fed2.js","_app/immutable/chunks/index-051b0af1.js","_app/immutable/chunks/singletons-58656d9c.js","_app/immutable/chunks/index-eef229f7.js","_app/immutable/chunks/parse-b67c4dc9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/aggregator",
				pattern: /^\/aggregator\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/api/movie",
				pattern: /^\/api\/movie\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/movie/_server.js')
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/auth/signup",
				pattern: /^\/auth\/signup\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/auth/verify",
				pattern: /^\/auth\/verify\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/avatars",
				pattern: /^\/avatars\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/avatars/[lastName]",
				pattern: /^\/avatars\/([^/]+?)\/?$/,
				params: [{"name":"lastName","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/movies",
				pattern: /^\/movies\/?$/,
				params: [],
				page: { layouts: [0,5], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/pokemon",
				pattern: /^\/pokemon\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
