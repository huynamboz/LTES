require('dotenv').config()
export default {
	publicRuntimeConfig: {
		ID_ADMIN: process.env.ID_ADMIN,
		SOCKETIO_URL: process.env.SOCKETIO_URL,
	  },
    ssr: false,
    router:{
		// base: "ltesletsflyhigh.github.io",
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
		title: 'LTES - Lets Fly High',
		htmlAttrs: {
			lang: 'vi'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ hid: 'description', name: 'description', content: 'LTES là tổ chức phi lợi nhuận do các bạn trẻ tại Quảng Nam thành lập và điều hành, hướng tới mục tiêu phát triển các dự án cộng đồng và rèn luyện các kĩ năng cho các học sinh trung học' },
			{ hid: 'keywords', name: 'keywords', content: 'ltes, ltes viet nam' },
			{ hid: 'og:title', property: 'og:title', content: 'LTES - Lets Fly High' },
			{ hid: 'og:description', property: 'og:description', content: 'LTES là tổ chức phi lợi nhuận do các bạn trẻ tại Quảng Nam thành lập và điều hành, hướng tới mục tiêu phát triển các dự án cộng đồng và rèn luyện các kĩ năng cho các học sinh trung học' },
			{ hid: 'og:image', property: 'og:image', content: 'https://i.imgur.com/Kgk6U5B.jpg' },
			{ hid: 'og:site_name', property: 'og:site_name', content: 'LTES - Lets Fly High' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/icons/fav.png' }
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
		'vue-toastification/dist/index.css',
	],
	auth: {
		redirect: {
			// login: '/login',
			// logout: '/',
			// callback: '/login',
			// home: '/'
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
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-analytics'
	],
	googleAnalytics: {
		// Options
		id: 'G-EG6K6YHNMT'
	  },
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/dotenv',
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
