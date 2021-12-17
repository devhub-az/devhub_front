import languages from "./languages"
import {resolve} from 'path'

const config = {
    isDev: true,
    isProd: false,
    useBaseUrl: true
}

export default {
    head: {
        title: 'DevHub',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script: [
            {src: 'https://code.iconify.design/2/2.1.0/iconify.min.js', body: true},
        ],
    },

    server: {
        port: 3000,
        host: '0.0.0.0'
    },

    loading: false,

    alias: {
        'components': resolve(__dirname, './components'),
        'assets': resolve(__dirname, './assets'),
    },

    css: [
        '@/assets/css/tailwind.css',
    ],

    plugins: ['~/plugins/axios'],

    components: true,

    buildModules: [
        '@nuxt/postcss8',
    ],

    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/toast",
        "@nuxtjs/i18n",
        "@nuxtjs/robots",
        "@nuxtjs/sitemap",
        '@nuxtjs/auth-next',
        'cookie-universal-nuxt',
        '@nuxtjs/toast',
    ],

    auth: {
        redirect: false,
        localStorage: false,
        strategies: {
            local: {
                url:'/',
                endpoints: {
                    csrf:{
                        url: 'http://127.0.0.1:8090/sanctum/csrf-cookie'
                    },
                    login: {
                        url: '/auth/login'
                    },
                    logout: {
                        url: '/auth/logout'
                    },
                    user: {
                        url: '/auth/user'
                    }
                },
                user: {
                    property: 'data',
                    // autoFetch: true
                },
                token: {
                    property: 'token',
                    maxAge: 15768000
                }
            },
        }
    },

    axios: {
        baseURL: config.isProd ? 'https://mashin.al/api' : 'http://api/api',
        browserBaseURL: 'http://127.0.0.1:8090/api',
        credentials: true,
    },


    pwa: {
        manifest: {
            lang: 'az'
        }
    },

    toast: {
        position: 'bottom-center',
        fullWidth: false,
        duration: 3000,
        singleton: false
    },

    i18n: {
        locales: languages,
        defaultLocale: "az",
        vueI18n: {
            fallbackLocale: "az",
        },
        lazy: true,
        langDir: "locales/",
        detectBrowserLanguage: {
            alwaysRedirect: true,
            fallbackLocale: "az",
        }
    },

    build: {
        extend(config, {isDev, isClient}) {
            if (isDev) {
                config.mode = "development"
            }

            config.node = {
                fs: "empty",
            }

            if (isClient) {
                config.module.rules.unshift({
                    test: /\.worker\.(c|m)?js$/i,
                    use: {loader: "worker-loader"},
                    exclude: /(node_modules)/,
                })

                config.module.rules.push({
                    test: /\.md$/i,
                    use: {loader: "raw-loader"},
                    exclude: /(node_modules)/,
                })

                config.module.rules.push({
                    test: /\.geojson$/i,
                    use: {loader: "json-loader"},
                    exclude: /(node_modules)/,
                })

                config.module.rules.push({
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: "javascript/auto",
                })

                config.module.rules.push({
                    test: /\.js$/,
                    include: /(node_modules)/,
                    exclude: /(node_modules)\/(@firebase)/,
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-proposal-nullish-coalescing-operator",
                            "@babel/plugin-proposal-optional-chaining",
                        ],
                    },
                })
            }
        },
        parallel: true,
        cache: true,
        terser: {
            terserOptions: {
                compress: {
                    pure_funcs: ["console.log", "console.debug", "console.warn"],
                },
            },
        },
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },
}
