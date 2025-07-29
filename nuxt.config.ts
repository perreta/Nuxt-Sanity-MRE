// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
        sanityProjectId: process.env.SANITY_PROJECT_ID,
        sanityDataset: process.env.SANITY_PROJECT_DATASET,
        sanityApiVersion: process.env.SANITY_API_VERSION,
        shopifyDomain: process.env.SHOPIFY_DOMAIN,
        storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        dev: process.env.DEV
    }
  },
  modules: [
    '@nuxtjs/sanity',
  ],
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_PROJECT_DATASET,
    apiVersion: process.env.SANITY_API_VERSION,
    useCdn: false,
    minimal: true,
    withCredentials: true,
    additionalClients: {
        preview: {
            useCdn: false,
            withCredentials: true,
        },
    },
},
})
