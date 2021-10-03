<template>
  <div class="fixed bottom-5 right-5 z-50" style="width: 360px; height: 100px">
    <a
      :href="resetLinkHandler('/help')"
      class="inline-block w-full h-full bg-no-repeat bg-cover bg-center ad-float"
    ></a>
  </div>
</template>

<script>
import { resetLink } from '~/utils'
export default {
  methods: {
    resetLinkHandler(val) {
      return resetLink(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.ad-float {
  background-image: url('~/assets/images/index/WechatIMG657.png');
}
</style>
