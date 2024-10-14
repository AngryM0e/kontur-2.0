// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
	alias:{
		"@": "./src",
		"~~": "/<rootDir>",
		"@@": "/<rootDir>",
		"assets": "/<srcDir>/assets",
		"public": "/<srcDir>/public",
	},
	modules: [
		'@pinia/nuxt',
	],
	pinia: {
		storesDirs: ['./src/stores/**']
	},
	dir: {
		pages: './src/pages',
		layouts: './src/layouts/'
	},
	components: [
		{
			path: './src/components/',
			pathPrefix: false
		}
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern',
				}
			}
		}
	},
	css: ['./src/styles/styles.scss']
})