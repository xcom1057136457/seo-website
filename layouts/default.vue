<template>
  <div>
    <app-header />

    <ad-float />

    <nuxt />

    <app-footer />
  </div>
</template>

<script>
import metaConfig from '@/utils/metaConfig'
export default {
  components: {
    appHeader: () => import('./Header'),
    appFooter: () => import('./Footer'),
    adFloat: () => import('./ADFloat')
  },
  head() {
    return {
      title: metaConfig[this.$route.path] ? metaConfig[this.$route.path].title : metaConfig.default.title,
      meta: [
        { hid: 'description', name: 'description', content: metaConfig[this.$route.path] ? metaConfig[this.$route.path].description : metaConfig.default.description },
        { hid: 'keywords', name: 'keywords', content: metaConfig[this.$route.path] ? metaConfig[this.$route.path].keywords : metaConfig.default.keywords}
      ]
    }
  }
}
</script>

<style></style>
