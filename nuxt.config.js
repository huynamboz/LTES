export default {
    ssr: false,
    router:{
    //   base: "/e-commerce-client/dist/",
		middleware: ['router-log','auth']
    },
	server: {
		port: 8000,
		host: '0.0.0.0'
		// host: 'localhost'
		// https: {
		//   key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
		//   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
		// }
	},
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'client',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	env: {
		ApiKey: 'AIzaSyCV4RPrPpXge5_0mINOM6IWfL7Nu043UOI'
	},
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		//make global file css from assets/css/global.css
		"~static/global.css",
		"~assets/css/main.css",
		"~static/css/uicons-regular-rounded.css",
		"~static/icons/uicons-bold-rounded.css",
		'vue-toastification/dist/index.css',
	],
	auth: {
		redirect: {
			login: '/login',
			logout: '/',
			callback: '/login',
			home: '/'
		  },
		strategies: {
			local: {
				scheme: 'refresh',
				user: {
					property: false,
					},
				token: {
					property: 'accessToken',
					maxAge: 1800
				},
				refreshToken: {
					property: 'refreshToken',
					data: 'refresh_token',
					maxAge: 60 * 60 * 24
				},
				endpoints: {
					login: { url: '/auth/login', method: 'post', propertyName: 'accessToken' },
					user: {url: '/users/me', method: 'get', propertyName: false},
					refresh: { url: '/auth/refresh-token', method: 'post' ,
					propertyName: 'refreshToken',
					},
					logout :false
				},
			},
		},
		// redirect: {
		// 	login: '/login',
		// },
		// redirect: false,

	},
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: "~plugins/toast", ssr: false },
		{ src: '~plugins/vuesax', mode: 'client' },
	],
	axios: {
		baseURL: process.env.BASE_URL_API,
	},
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		['@nuxtjs/dotenv'],
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/auth-next',
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
		loaders: {
			sass: {
				implementation: require('sass'),
			},
			scss: {
				implementation: require('sass'),
			},
		},
	},
}
