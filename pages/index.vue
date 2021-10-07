<template>
  <div>
    <home-banner />

    <div class="flex items-center container mx-auto relative bottom-72px z-10">
      <div
        class="
          p-7
          rounded-xl
          navBlock-shadow
          mr-8
          bg-white
          flex-1
          animate__animated animate__bounceInUp
        "
      >
        <div class="navBlock bg-no-repeat bg-right">
          <div class="text-2xl mb-8 font-semibold">EasyYa易芽选品免费使用</div>
          <div>
            <a href="/dataBi" class="flex items-center text-primaryColor">
              <span class="mr-2">立即体验</span>
              <img
                class="w-5 h-5"
                src="~/assets/images/index/Group 344.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div
        class="
          p-7
          rounded-xl
          navBlock-shadow
          mr-8
          bg-white
          flex-1
          animate__animated animate__bounceInUp
        "
      >
        <div class="navBlock bg-no-repeat bg-right">
          <div class="text-2xl mb-8 font-semibold">易选厂精品供应链直达</div>
          <div>
            <a
              href="/productAndServices/Supply"
              class="flex items-center text-primaryColor"
            >
              <span class="mr-2">立即体验</span>
              <img
                class="w-5 h-5"
                src="~/assets/images/index/Group 344.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div
        class="
          p-7
          rounded-xl
          navBlock-shadow
          bg-white
          flex-1
          animate__animated animate__bounceInUp
        "
      >
        <div class="navBlock bg-no-repeat bg-right">
          <div class="text-2xl mb-8 font-semibold">易账期精品账期服务</div>
          <div>
            <a
              href="/productAndServices/Accounting"
              class="flex items-center text-primaryColor"
            >
              <span class="mr-2">立即体验</span>
              <img
                class="w-5 h-5"
                src="~/assets/images/index/Group 344.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-10 container mx-auto">
      <div class="text-center mb-16">
        <div class="text-4xl font-semibold mb-3">EasyYa易芽选品</div>
        <div class="text-2xl">全面覆盖亚马逊、沃尔玛两大平台</div>
      </div>

      <div class="flex">
        <div class="flex-1 flex flex-col items-center pr-24">
          <div
            class="
              text-3xl text-white
              w-56
              h-12
              flex
              items-center
              justify-center
              bg-primaryColor
              rounded-3xl
              shadow-md
            "
            >沃尔玛选品</div
          >

          <div
            class="
              mt-8
              py-10
              w-full
              flex-1 flex flex-col
              items-center
              rounded-3xl
            "
            style="box-shadow: 0px 2px 7px 2px rgb(0 0 0 / 10%)"
          >
            <div class="text-4xl font-bold mb-8">掘金沃土，先人一步</div>

            <div class="text-2xl">
              <div class="mb-3">抢先捕捉市场情报</div>

              <div class="mb-3">快速挖掘潜力新品</div>

              <div class="mb-3">充分识别竞争形式</div>

              <div>有效提高运营效率</div>
            </div>

            <div class="mt-10 flex items-center justify-center">
              <a
                :href="resetLinkHandler('/help')"
                class="
                  w-40
                  h-12
                  flex
                  items-center
                  justify-center
                  border border-black
                  rounded-3xl
                  mr-8
                "
                >免费使用</a
              >

              <a
                href="/WMTDataBi"
                class="
                  w-40
                  h-12
                  flex
                  items-center
                  justify-center
                  border border-black
                  rounded-3xl
                "
                >了解更多</a
              >
            </div>
          </div>
        </div>

        <div class="flex-1 flex flex-col items-center pl-24">
          <div
            class="
              text-3xl text-white
              w-56
              h-12
              flex
              items-center
              justify-center
              bg-primaryColor
              rounded-3xl
              shadow-md
            "
            >亚马逊选品</div
          >

          <div
            class="
              mt-8
              py-10
              w-full
              flex-1 flex flex-col
              items-center
              rounded-3xl
            "
            style="box-shadow: 0px 2px 7px 2px rgb(0 0 0 / 10%)"
          >
            <div class="text-4xl font-bold mb-8">换个角度看市场</div>

            <div class="text-2xl flex-1">
              <div class="mb-3">洞察买家喜好，精准定款备货</div>

              <div class="mb-3">知晓评论来源，掌控留评节奏</div>

              <div>深扒竞品优劣，挖掘市场机会</div>
            </div>

            <div class="mt-10 flex items-center justify-center">
              <a
                :href="resetLinkHandler('/help')"
                class="
                  w-40
                  h-12
                  flex
                  items-center
                  justify-center
                  border border-black
                  rounded-3xl
                  mr-8
                "
                >免费使用</a
              >

              <a
                href="/AMZDataBi"
                class="
                  w-40
                  h-12
                  flex
                  items-center
                  justify-center
                  border border-black
                  rounded-3xl
                "
                >了解更多</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-bgColor py-16">
      <div class="container mx-auto flex justify-center">
        <div class="flex-1 h-96 pr-24">
          <img
            src="~/assets/images/index/3000外贸工厂.jpg"
            alt="跨境供应链平台_易芽供应链商城"
            class="w-full h-full"
          />
        </div>

        <div class="flex-1 flex justify-center flex-col">
          <div class="line bg-primaryColor w-10 h-1.5 text-left mb-6"></div>

          <div class="text-2xl mb-6">
            <div>3000+ 品牌外贸工厂</div>
            <div>以精品赋能品牌出海</div>
          </div>

          <div class="text-base text-textColorSecondary mb-12"
            >整合3000+品牌外贸代工厂，为卖家提供资质齐全的新品设计开发、品质管控、爆品专供、现货采购等服务。</div
          >

          <a
            class="
              bg-primaryColor
              text-white
              rounded-3xl
              w-32
              h-11
              flex
              items-center
              justify-center
            "
            :href="account_host"
            >立即体验</a
          >
        </div>
      </div>
    </div>

    <div class="py-16">
      <div class="container mx-auto flex justify-center">
        <div class="flex-1 flex justify-center flex-col pr-24">
          <div class="line bg-primaryColor w-10 h-1.5 text-left mb-6"></div>

          <div class="text-2xl mb-6">
            <div>90天无抵押账期</div>
            <div>提升爆款备货能力</div>
          </div>

          <div class="text-base text-textColorSecondary mb-12"
            >综合信保评估，提供最长90天账期，降低卖家采购付款的资金压力。</div
          >

          <a
            class="
              bg-primaryColor
              text-white
              rounded-3xl
              w-32
              h-11
              flex
              items-center
              justify-center
            "
            href="/productAndServices/Accounting"
            target="_blank"
            >了解详情</a
          >
        </div>

        <div class="flex-1 h-96">
          <img
            src="~/assets/images/index/90天无抵押.jpg"
            alt="跨境账期服务周期_跨境电商备货能力时长"
            class="w-full h-full"
          />
        </div>
      </div>
    </div>

    <div class="py-16 bg-bgColor">
      <div class="text-center text-4xl mb-20"
        >三大服务板块，立体化覆盖跨境供应链需求</div
      >

      <div class="container flex mx-auto">
        <div
          class="flex-1 mx-4 bg-white rounded-xl"
          style="box-shadow: 0 4px 20px rgb(52 6 6 / 8%)"
        >
          <div
            class="
              px-6
              flex
              items-center
              text-2xl
              h-88px
              border-b border-gray-200
            "
          >
            <img
              src="~/assets/images/index/供应链数据软件.png"
              alt="供应链数据软件"
              class="h-12 w-12 mr-3"
            />
            <span>供应链数据软件</span>
          </div>

          <div class="mb-14">
            <div class="px-6 my-6">
              <div class="mb-2">易芽选品插件</div>
              <div class="text-sm text-textColor"
                >轻量运行，简单易用，锁定行业趋势，洞察市场先机。</div
              >
            </div>

            <div class="px-6 my-6">
              <div class="mb-2">跨境运营BI</div>
              <div class="text-sm text-textColor"
                >帮助卖家随时随地精准掌控店铺经营数据。</div
              >
            </div>

            <div class="px-6 my-6">
              <div class="mb-2">大数据BI</div>
              <div class="text-sm text-textColor"
                >为政府、企业提供SaaS化大数据BI引擎。</div
              >
            </div>
          </div>

          <div class="px-6 mb-8">
            <a
              class="
                w-full
                text-sm
                flex
                items-center
                justify-center
                border border-textColor
                text-textColor
                h-8
                rounded-3xl
                hover:text-primaryColor hover:border-primaryColor
              "
              href="/dataBi"
              >了解更多</a
            >
          </div>
        </div>

        <div
          class="flex-1 mx-4 bg-white rounded-xl"
          style="box-shadow: 0 4px 20px rgb(52 6 6 / 8%)"
        >
          <div
            class="
              px-6
              flex
              items-center
              text-2xl
              h-88px
              border-b border-gray-200
            "
          >
            <img
              src="~/assets/images/index/精品供应链采购.png"
              alt="精品供应链采购"
              class="h-12 w-12 mr-3"
            />
            <span>精品供应链采购</span>
          </div>

          <div class="mb-14">
            <div class="px-6 my-6">
              <div class="mb-2">新品设计开发</div>
              <div class="text-sm text-textColor"
                >3000+品牌代工厂，外贸资质齐全，开发效率高。</div
              >
            </div>

            <div class="px-6 my-6">
              <div class="mb-2">精品爆款专卖</div>
              <div class="text-sm text-textColor"
                >市场数据和供应链深度结合，提供精品爆款。</div
              >
            </div>

            <div class="px-6 my-6">
              <div class="mb-2">跨境现货采购</div>
              <div class="text-sm text-textColor"
                >每月500+跨境精品，覆盖亚马逊8大热门品类。</div
              >
            </div>
          </div>

          <div class="px-6 mb-8">
            <a
              class="
                w-full
                text-sm
                flex
                items-center
                justify-center
                border border-textColor
                text-textColor
                h-8
                rounded-3xl
                hover:text-primaryColor hover:border-primaryColor
              "
              href="/productAndServices/Supply"
              >了解更多</a
            >
          </div>
        </div>

        <div
          class="flex-1 mx-4 bg-white rounded-xl"
          style="box-shadow: 0 4px 20px rgb(52 6 6 / 8%)"
        >
          <div
            class="
              px-6
              flex
              items-center
              text-2xl
              h-88px
              border-b border-gray-200
            "
          >
            <img
              src="~/assets/images/index/供应链账期服务.png"
              alt="供应链账期服务"
              class="h-12 w-12 mr-3"
            />
            <span>供应链账期服务</span>
          </div>

          <div class="mb-14">
            <div class="px-6 my-6">
              <div class="mb-2">易账期</div>
              <div class="text-sm text-textColor"
                >综合保险评估，纯账期，无担保，最长90天账期服务。</div
              >
            </div>

            <div class="px-6 my-6">
              <div class="mb-2">快捷账期</div>
              <div class="text-sm text-textColor"
                >低门槛，无抵押，30万快捷账期，支持30天循环。</div
              >
            </div>

            <div class="px-6 my-6">
              <div class="mb-2">风险评估</div>
              <div class="text-sm text-textColor"
                >自研跨境风险评估模型，专业赋能跨境出口。</div
              >
            </div>
          </div>

          <div class="px-6 mb-8">
            <a
              class="
                w-full
                text-sm
                flex
                items-center
                justify-center
                border border-textColor
                text-textColor
                h-8
                rounded-3xl
                hover:text-primaryColor hover:border-primaryColor
              "
              href="/productAndServices/Accounting"
              >了解更多</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="py-16">
      <div class="text-center text-4xl mb-14">合作案例</div>

      <div
        class="container mx-auto bg-white rounded-xl overflow-hidden"
        style="box-shadow: 0 4px 20px rgb(52 6 6 / 8%)"
      >
        <el-carousel height="366px">
          <el-carousel-item>
            <div class="flex">
              <div
                style="width: 540px; height: 366px; flex: 0 0 540px"
                class="rounded-xl overflow-hidden"
              >
                <img
                  class="w-full h-full"
                  src="~/assets/images/index/1K6IQsQbizI 2.jpg"
                  alt="选品服务案例配图"
                />
              </div>

              <div class="mt-16 px-10">
                <div class="mb-6 font-semibold text-2xl text-left"
                  >选品赋能案例</div
                >

                <div class="mb-4 text-base text-headingColor font-medium">
                  <span class="mr-16">坐标：浙江</span>
                  <span>卖家规模：1亿美元</span>
                </div>

                <div class="text-base text-textColor"
                  >浙江某卖家，通过易芽闭门选品会推荐，买断某一小品类疫情产品，实现半年70000+销量，200万美元营收。</div
                >
              </div>
            </div>
          </el-carousel-item>

          <el-carousel-item>
            <div class="flex">
              <div
                style="width: 540px; height: 366px; flex: 0 0 540px"
                class="rounded-xl overflow-hidden"
              >
                <img
                  class="w-full h-full"
                  src="~/assets/images/index/1K6IQsQbizI.jpg"
                  alt="选品服务案例配图"
                />
              </div>

              <div class="mt-16 px-10">
                <div class="mb-6 font-semibold text-2xl text-left"
                  >账期服务案例</div
                >

                <div class="mb-4 text-base text-headingColor font-medium">
                  <span class="mr-16">坐标：江苏</span>
                  <span>卖家规模：2亿美元</span>
                </div>

                <div class="text-base text-textColor"
                  >卖家将原有采购业务迁移到易芽平台，在易芽账期业务的帮助下，通过4个月的合作，累计节约资金和运营成本约12万。</div
                >
              </div>
            </div>
          </el-carousel-item>

          <el-carousel-item>
            <div class="flex">
              <div
                style="width: 540px; height: 366px; flex: 0 0 540px"
                class="rounded-xl overflow-hidden"
              >
                <img
                  class="w-full h-full"
                  src="~/assets/images/index/1K6IQsQbizI (1).jpg"
                  alt="选品服务案例配图"
                />
              </div>

              <div class="mt-16 px-10">
                <div class="mb-6 font-semibold text-2xl text-left"
                  >新品开发案例</div
                >

                <div class="mb-4 text-base text-headingColor font-medium">
                  <span class="mr-16">坐标：广东</span>
                  <span>卖家规模：6500万美元</span>
                </div>

                <div class="text-base text-textColor"
                  >客户通过易芽平台进行新品定制开发，10天内完成打样并确认样品，月内新品上架赶上了销量爆发期，5个月内连续追加订单，采购量达50万美元，实现单品利润近20万美元。</div
                >
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { resetLink } from '~/utils'
export default {
  components: {
    HomeBanner: () => import('~/components/HomeBanner.vue')
  },
  data() {
    return {
      account_host: process.env.account_host
    }
  },
  methods: {
    resetLinkHandler(val) {
      return resetLink(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.navBlock {
  background-image: url('~/assets/images/index/Mask Group.png');
  background-size: 100px;
}

.navBlock-shadow {
  box-shadow: 0 8px 40px rgba(52, 6, 6, 0.1);
}
.bottom-72px {
  bottom: 72px;
}

.h-88px {
  height: 88px;
}

::v-deep .el-carousel__button {
  background-color: black;
}
</style>
