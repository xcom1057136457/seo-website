<template>
  <div>
    <div class="h-640 w-full bg-no-repeat bg-center bg-cover top-banner">
      <div class="container mx-auto flex flex-col justify-center h-full">
        <div class="text-44px mb-3 text-headingColor font-semibold"
          >EasyYa易芽选品 换个角度看市场</div
        >
        <div class="text-xl mb-10 text-headingColor"
          >倾听消费者声音，全方位洞察消费者观点与喜好，助力卖家优化产品、开拓市场和提升口碑。</div
        >
        <ul class="m-0 p-0 list-none">
          <li class="relative mb-3 pl-5 text-black065Color text-base leading-6"
            >知晓评论来源，掌控留评节奏</li
          >
          <li class="relative mb-3 pl-5 text-black065Color text-base leading-6"
            >了解买家偏好，高效定款备货</li
          >
          <li class="relative mb-3 pl-5 text-black065Color text-base leading-6"
            >深扒竞品优劣，洞察市场机会</li
          >
        </ul>
        <div class="mt-12">
          <a
            :href="resetLinkHandler('/help')"
            class="
              use-btn
              inline-block
              h-11
              w-32
              text-white text-center
              leading-11
              rounded-3xl
            "
            >免费使用</a
          >
        </div>
      </div>
    </div>

    <div class="bg-white py-20">
      <div class="container mx-auto">
        <div class="mb-16 font-medium text-4xl text-center text-black085Color"
          >倾听消费者声音，全方位辅助卖家营销决策</div
        >

        <div class="flex justify-center">
          <div class="flex w-300px px-5 flex-col items-center">
            <div
              class="
                box-border
                w-32
                h-32
                mb-6
                bg-white
                rounded-full
                image-shadow
                overflow-hidden
                flex
                items-center
                justify-center
              "
            >
              <img
                src="~/assets/images/productAndServices/DataBi/产品开发.png"
                alt="新品开发_产品优化_竞品分析_品质把关"
                class="w-20 h-auto"
              />
            </div>

            <div class="mb-3 text-black085Color font-medium text-2xl"
              >产品开发</div
            >

            <div class="text-black045Color text-sm text-center"
              >洞察消费者反馈，为产品开发阶段中的产品优化、竞品分析、品质把关、新品研发等环节提供数据支持。</div
            >
          </div>

          <div class="flex w-300px px-5 flex-col items-center">
            <div
              class="
                box-border
                w-32
                h-32
                mb-6
                bg-white
                rounded-full
                image-shadow
                overflow-hidden
                flex
                items-center
                justify-center
              "
            >
              <img
                src="~/assets/images/productAndServices/DataBi/市场运营.png"
                alt="市场运营策略"
                class="w-20 h-auto"
              />
            </div>

            <div class="mb-3 text-black085Color font-medium text-2xl"
              >市场布局</div
            >

            <div class="text-black045Color text-sm text-center"
              >帮助卖家明确产品优劣势、聚焦消费者关注点、挖掘产品使用人群/场景，从而制定精准运营策略。</div
            >
          </div>

          <div class="flex w-300px px-5 flex-col items-center">
            <div
              class="
                box-border
                w-32
                h-32
                mb-6
                bg-white
                rounded-full
                image-shadow
                overflow-hidden
                flex
                items-center
                justify-center
              "
            >
              <img
                src="~/assets/images/productAndServices/DataBi/运营优化图标.png"
                alt="运营优化图标"
                class="w-20 h-auto"
              />
            </div>

            <div class="mb-3 text-black085Color font-medium text-2xl"
              >运营优化</div
            >

            <div class="text-black045Color text-sm text-center"
              >基于海外买家真实书写习惯，锁定流量关键词，帮助Listing、PPC等运营环节优化，实现降本增效。</div
            >
          </div>

          <div class="flex w-300px px-5 flex-col items-center">
            <div
              class="
                box-border
                w-32
                h-32
                mb-6
                bg-white
                rounded-full
                image-shadow
                overflow-hidden
                flex
                items-center
                justify-center
              "
            >
              <img
                src="~/assets/images/productAndServices/DataBi/舆情监控.png"
                alt="舆情监控"
                class="w-20 h-auto"
              />
            </div>

            <div class="mb-3 text-black085Color font-medium text-2xl"
              >异动追踪</div
            >

            <div class="text-black045Color text-sm text-center"
              >实时追踪分析评论观点，第一时间发现消费者评价，掌控异动信息。</div
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { resetLink } from '~/utils'
export default {
  data() {
    return {}
  },
  methods: {
    resetLinkHandler(val) {
      return resetLink(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.h-640 {
  height: 640px;
}

.text-44px {
  font-size: 44px;
}

.top-banner {
  background-image: url('~/assets/images/productAndServices/DataBi/banner背景.jpg');
}

ul {
  li {
    &::after {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 12px;
      height: 12px;
      background: linear-gradient(180deg, #fa7124 0%, #f22222 100%);
      border-radius: 10px;
      content: '';
    }
  }
}

.use-btn {
  background: linear-gradient(90deg, #fa7124 0%, #f22222 100%);
}

.leading-11 {
  line-height: 44px;
}

.image-shadow {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.w-300px {
  flex: 0 0 300px;
}
</style>
