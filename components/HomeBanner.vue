<template>
  <el-carousel
    height="640px"
    class="w-full"
    :interval="4000"
    @change="bannerChange"
  >
    <el-carousel-item
      class="flex justify-center banner-wrapper1 bg-no-repeat bg-cover flex-col"
    >
      <div class="container mx-auto">
        <div
          :class="
            bannerIndex == 0
              ? 'animate__animated animate__fadeInLeft'
              : 'animate__animated'
          "
        >
          <div class="text-3xl font-semibold">先人一步，把“沃”新机遇</div>

          <div class="w-10 h-1 my-6 text-left bg-primaryColor"></div>
        </div>

        <div
          :class="
            bannerIndex == 0
              ? 'animate__animated animate__fadeInLeft animate_delay-3ms'
              : 'animate__animated'
          "
        >
          <div class="text-4xl mb-4">
            <span class="mr-1 text-primaryColor font-bold">免费领取</span>
            <span>沃尔玛选品插件</span>
          </div>

          <div class="text-4xl mb-16">
            <span>即刻享基础版</span>
            <span class="mr-1 text-primaryColor font-bold">“永久免费”</span>
            <span>特权</span>
          </div>
        </div>

        <div class="flex">
          <a
            :href="resetLinkHandler('/help')"
            class="
              w-40
              h-12
              mr-8
              text-white text-lg
              bg-primaryColor
              flex
              items-center
              justify-center
              rounded-3xl
              cursor-pointer
            "
            >免费使用</a
          >
          <a
            href="/WMTDataBi"
            class="
              w-40
              h-12
              mr-8
              text-white text-lg
              bg-primaryColor
              flex
              items-center
              justify-center
              rounded-3xl
            "
            >了解更多</a
          >
        </div>
      </div>
    </el-carousel-item>

    <el-carousel-item
      class="flex justify-center banner-wrapper2 bg-no-repeat bg-cover flex-col"
    >
      <div class="container mx-auto text-white">
        <div
          :class="
            bannerIndex == 1
              ? 'animate__animated animate__fadeInLeft visible'
              : 'animate__animated invisible'
          "
        >
          <div class="text-3xl font-semibold">“选品-采购-账期”供应链赋能</div>

          <div class="w-10 h-1 my-6 text-left bg-primaryColor"></div>
        </div>

        <div
          :class="
            bannerIndex == 1
              ? 'animate__animated animate__fadeInLeft animate_delay-3ms visible'
              : 'invisible animate__animated'
          "
          class="text-xl leading-8"
        >
          <div>基于3000+优质外贸大厂，整合跨境选品、账期服务等资源</div>
          <div>以“AI+大数据”为引擎，赋能卖家，提供跨境精品供应链服务</div>
        </div>

        <div class="flex mt-16">
          <a
            href="/dataBi"
            class="
              w-40
              h-12
              mr-8
              text-white text-lg
              bg-primaryColor
              flex
              items-center
              justify-center
              rounded-3xl
            "
            >了解更多</a
          >
        </div>
      </div>
    </el-carousel-item>

    <el-carousel-item
      class="flex justify-center banner-wrapper3 bg-no-repeat bg-cover flex-col"
    >
      <div class="container mx-auto text-white">
        <div
          :class="
            bannerIndex == 2
              ? 'animate__animated animate__fadeInLeft visible'
              : 'animate__animated invisible'
          "
        >
          <div class="text-3xl font-semibold">3000+ 优质外贸大厂</div>

          <div class="w-10 h-1 my-6 text-left bg-primaryColor"></div>
        </div>

        <div
          :class="
            bannerIndex == 2
              ? 'animate__animated animate__fadeInLeft animate_delay-3ms visible'
              : 'invisible animate__animated'
          "
          class="text-xl leading-8"
        >
          <div>全面合作3000+品牌代工厂，深入工厂排单、品控</div>
          <div>支持新品开发，帮卖家直达精品货源！</div>
        </div>

        <div class="flex mt-16">
          <a
            href="/productAndServices/Supply"
            class="
              w-40
              h-12
              mr-8
              text-white text-lg
              bg-primaryColor
              flex
              items-center
              justify-center
              rounded-3xl
            "
            >了解更多</a
          >
        </div>
      </div>
    </el-carousel-item>

    <el-carousel-item
      class="flex justify-center banner-wrapper4 bg-no-repeat bg-cover flex-col"
    >
      <div class="container mx-auto text-white">
        <div
          :class="
            bannerIndex == 3
              ? 'animate__animated animate__fadeInLeft visible'
              : 'animate__animated invisible'
          "
        >
          <div class="text-3xl font-semibold">最长90天无抵押账期</div>

          <div class="w-10 h-1 my-6 text-left bg-primaryColor"></div>
        </div>

        <div
          :class="
            bannerIndex == 3
              ? 'animate__animated animate__fadeInLeft animate_delay-3ms visible'
              : 'invisible animate__animated'
          "
          class="text-xl leading-8"
        >
          <div>从易芽平台采购，最长提供90天账期，评估快，无抵押</div>
          <div>助力卖家快速抢占蓝海市场！</div>
        </div>

        <div class="flex mt-16">
          <a
            href="/productAndServices/Accounting"
            class="
              w-40
              h-12
              mr-8
              text-white text-lg
              bg-primaryColor
              flex
              items-center
              justify-center
              rounded-3xl
            "
            >了解更多</a
          >
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { mapActions } from 'vuex'
import { resetLink } from '~/utils'
export default {
  data() {
    return {
      bannerIndex: ''
    }
  },
  mounted() {
    this.bannerChange(0)
  },
  destroyed() {
    this.getBannerIndex(0)
  },
  methods: {
    ...mapActions('banner', ['getBannerIndex']),
    bannerChange(val) {
      this.bannerIndex = val
      this.getBannerIndex(val)
    },
    resetLinkHandler(val) {
      return resetLink(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-wrapper1 {
  background-image: url('~/assets/banner/banner1.jpg');
  // z-index: -1;
}

.banner-wrapper2 {
  background-image: url('~/assets/banner/banner10.jpg');
}

.banner-wrapper3 {
  background-image: url('~/assets/banner/banner2.jpg');
}

.banner-wrapper4 {
  background-image: url('~/assets/banner/banner3.jpg');
}

.animate_delay-3ms {
  animation-delay: 0.3s;
}

::v-deep .el-carousel__item {
  display: flex !important;
}
</style>
