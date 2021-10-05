<template>
  <div
    class="w-full h-20 bg-transparent fixed top-0 z-50"
    :class="{ isFixed: fixed }"
  >
    <div
      class="
        inner-nav
        container
        mx-auto
        h-full
        flex
        items-center
        justify-between
      "
    >
      <a
        href="/"
        class="w-44 h-full cursor-pointer"
        :class="fixed || bannerIndex == 0 ? 'logo-image' : 'logo-image2'"
      ></a>

      <div class="menu h-full items-center hidden md:hidden lg:flex xl:flex 2xl:flex">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          :class="fixed || bannerIndex == 0 ? 'white' : 'black'"
          mode="horizontal"
          active-text-color="#D8362C"
          router
        >
          <el-menu-item index="/">首页</el-menu-item>

          <el-submenu index="SubMenu1">
            <template slot="title">产品与服务</template>
            <el-submenu index="2-4">
              <template slot="title">EasyYa易芽选品</template>
              <el-menu-item index="/AMZDataBi">亚马逊选品</el-menu-item>
              <el-menu-item index="/WMTDataBi">沃尔玛选品</el-menu-item>
            </el-submenu>
            <el-menu-item index="/productAndServices/Supply"
              >供应链服务</el-menu-item
            >
            <el-menu-item index="/productAndServices/Accounting"
              >账期服务</el-menu-item
            >
          </el-submenu>

          <el-submenu index="SubMenu2">
            <template slot="title">跨境出口孵化</template>

            <el-menu-item index="/incubator/Incubator">跨境孵化器</el-menu-item>
            <el-menu-item index="/incubator/College">跨境商学院</el-menu-item>
          </el-submenu>

          <el-menu-item index="/successFulCases">成功案例</el-menu-item>

          <el-menu-item index="/news">内容资讯</el-menu-item>

          <el-menu-item index="/aboutUs">关于我们</el-menu-item>

          <el-menu-item index="/businessCooperation">商务合作</el-menu-item>

          <el-menu-item index="/addUs">关于我们</el-menu-item>
        </el-menu>
      </div>

      <div class="relative text-sm">
        <div class="flex items-center">
          <!-- 未注册 -->
          <template v-if="!accountId">
            <a
              class="mr-6 cursor-pointer"
              :class="fixed || bannerIndex == 0 ? 'text-black' : 'text-white'"
              :href="registerAccountURL"
              >注册</a
            >

            <a
              class="
                rounded-3xl
                w-28
                h-8
                flex
                items-center
                justify-center
                cursor-pointer
              "
              :class="
                fixed || bannerIndex == 0
                  ? 'text-primaryColor border border-primaryColor'
                  : 'text-white border border-white'
              "
              :href="loginAccountURL"
              >登录易芽平台</a
            >
          </template>

          <!-- 已注册 -->
          <template v-else>
            <a :href="hy_host">
              {{ userInfoData.name }}
            </a>

            <a :href="buy_host">易芽平台</a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cookies from 'js-cookie'
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '/',
      fixed: false,
      loginAccountURL: process.env.account_host,
      registerAccountURL: process.env.account_host,
      hy_host: process.env.hy_host,
      buy_host: process.env.buy_host,
      userInfoData: {}
    }
  },
  computed: {
    ...mapState('banner', ['bannerIndex']),
    accountId() {
      return Cookies.get('yc-account-id')
    }
  },
  mounted() {
    this.watchScrollHandler()
    this.setLoginAccountHost()
    this.setRegisterAccountHost()
  },
  methods: {
    // 监听滚动
    watchScrollHandler() {
      window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop >= 100) {
          this.fixed = true
        } else {
          this.fixed = false
        }
      })
    },
    setLoginAccountHost() {
      const ag = Cookies.get('yc-channel-tag')
      const agList = ['410605', '410608', '410615']
      if (ag && agList.includes(ag)) {
        this.loginAccountURL = process.env.account_host
      } else {
        this.loginAccountURL = `${process.env.account_host}?_ag=410605`
      }
    },
    setRegisterAccountHost() {
      const ag = Cookies.get('yc-channel-tag')
      const agList = ['410605', '410608', '410615']
      if (ag && agList.includes(ag)) {
        this.registerAccountURL = process.env.account_host
      } else {
        this.registerAccountURL = `${process.env.account_host}?_ag=410608`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-image {
  background: url('~/assets/logo/logo2.png') left center / 131px no-repeat;
}

.logo-image2 {
  background: url('~/assets/logo/logo1.png') left center / 131px no-repeat;
}

::v-deep .el-menu.el-menu--horizontal {
  border-bottom: none;
  position: relative;
}

::v-deep .el-menu--horizontal > .el-menu-item,
::v-deep .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 42px;
  line-height: 42px;
}

.black {
  .el-submenu :hover,
  .el-menu-item:hover {
    background-color: transparent !important;
    color: #fff !important;
  }
  .is-active {
    color: #fff !important;
    border-bottom-color: #fff !important;
  }

  .el-submenu__title:not(.is-disabled):hover,
  .el-submenu__title:not(.is-disabled):focus,
  .el-menu-item:not(.is-disabled):hover,
  .el-menu-item:not(.is-disabled):focus {
    background-color: transparent !important;
    color: #fff !important;
  }

  ::v-deep .is-active .el-submenu__title {
    color: #fff !important;
    border-bottom-color: #fff !important;
  }
}

::v-deep .el-menu {
  background-color: transparent;
}

.isFixed {
  background-color: #fff;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
}
</style>
