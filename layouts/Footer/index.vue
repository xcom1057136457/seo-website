<template>
  <div>
    <div
      class="py-10 bg-no-repeat bg-cover foot-box flex flex-col items-center"
    >
      <div class="text-4xl text-white text-center mb-5"
        >加入易芽，直面跨境出海新机遇</div
      >
      <a
        :href="account_host"
        class="
          bg-white
          text-primaryColor
          w-44
          h-11
          flex
          items-center
          justify-center
          rounded-3xl
          mt-10
          transition-all
          duration-300
          hover:bg-primaryBg hover:text-white
        "
        >立即注册</a
      >
    </div>

    <div class="bg-black">
      <div class="container py-10 text-white mx-auto flex">
        <div
          class="
            flex-1 flex
            justify-between
            pr-28
            border-r border-white border-opacity-20
          "
        >
          <ul>
            <li class="font-medium text-base mb-6 text-white085Color"
              >商务合作</li
            >
            <li>
              <a
                href="/businessCooperation#section1"
                class="text-white065Color text-sm mb-3 inline-block"
                >优质源头工厂合作</a
              >
            </li>
            <li>
              <a
                href="/businessCooperation#section2"
                class="text-white065Color text-sm mb-3 inline-block"
                >跨境卖家业务合作</a
              >
            </li>
            <li>
              <a
                href="/businessCooperation#section4"
                class="text-white065Color text-sm"
                >市场和媒体合作</a
              >
            </li>
          </ul>

          <ul>
            <li class="font-medium text-base mb-6 text-white085Color"
              >关于我们</li
            >
            <li>
              <span class="text-white065Color text-sm mb-3 inline-block"
                >关于易芽</span
              >
            </li>
            <li>
              <span class="text-white065Color text-sm mb-3 inline-block"
                >联系我们</span
              >
            </li>
            <li>
              <span class="text-white065Color text-sm">加入我们</span>
            </li>
          </ul>

          <ul>
            <li class="font-medium text-base mb-6 text-white085Color"
              >操作指南</li
            >
            <li>
              <span class="text-white065Color text-sm mb-3 inline-block"
                >账号注册</span
              >
            </li>
            <li>
              <span class="text-white065Color text-sm mb-3 inline-block"
                >购物指南</span
              >
            </li>
            <li>
              <span class="text-white065Color text-sm">常见问题</span>
            </li>
          </ul>
        </div>
        <div class="flex-1 flex justify-between pl-28">
          <div>
            <div class="w-32 h-6 mb-7">
              <img
                class="w-full h-full"
                src="~/assets/logo/logo1.png"
                alt="Easyya易芽品牌LOGO"
              />
            </div>
            <div class="text-sm mb-3 text-white065Color"
              >易芽华东中心：0571-85055117</div
            >
            <div class="text-sm mb-3 text-white065Color"
              >易芽华南中心：0755-89588079</div
            >
            <div class="text-sm mb-3 text-white065Color"
              >E-mail：cs@easyya.com</div
            >
            <div class="text-sm text-white065Color"
              >地址：广州市天河区方圆E时光1301</div
            >
          </div>

          <div>
            <img
              src="~/assets/qrCode/底部二维码20210825.png"
              alt="Easyya易芽公众号二维码"
              class="w-32 h-32 mb-3"
            />
            <div class="text-center text-white065Color text-sm"
              >上精品 找易芽</div
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      account_host: process.env.account_host
    }
  },
  mounted() {
    this.setAccountHost()
  },
  methods: {
    setAccountHost() {
      const ag = Cookies.get('yc-channel-tag')
      const agList = ['410605', '410608', '410615']
      if (ag && agList.includes(ag)) {
        this.account_host = process.env.account_host
      } else {
        this.account_host = `${process.env.account_host}?_ag=410615`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.foot-box {
  background-image: url('~/assets/images/index/Group 96.jpg');
}

.ff675e {
  background-color: #ff675e;
}
</style>
