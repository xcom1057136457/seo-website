<template>
  <div
    class="tools-float fixed right-5 z-20 py-3 px-2 bg-white rounded opacity-95"
  >
    <div
      class="text-center cursor-pointer"
      @click="outerVisible = !outerVisible"
    >
      <img
        src="~/assets/images/index/客服.png"
        alt=""
        class="w-6 h-auto mx-auto"
      />
      <span class="text-xs">在线咨询</span>
    </div>
    <el-divider />
    <div class="text-center cursor-pointer">
      <el-popover placement="left" width="200" trigger="hover">
        <div class="flex flex-col items-center">
          <h5
            class="
              mt-5
              mb-4
              text-headingColor
              font-medium
              text-sm
              leading-5
              text-center
            "
            >扫码关注领豪礼</h5
          >
          <img
            src="~/assets/qrCode/右侧广告位2021823.png"
            class="w-28 h-28"
            alt=""
          />

          <h6 class="mt-2 text-textColor text-xs leading-4">易芽选品插件</h6>

          <h6 class="mt-2 text-textColor text-xs leading-4">
            <span style="color: #d8362c; fontsize: 12px; margin-right: 2px"
              >永久免费</span
            >
            特权
          </h6>
        </div>
        <div slot="reference">
          <img
            src="~/assets/images/index/扫码领取.png"
            alt=""
            class="w-6 h-auto mx-auto"
          />
          <span class="text-xs">免费领取</span>
        </div>
      </el-popover>
    </div>
    <el-divider />
    <div class="text-center cursor-pointer">
      <el-popover placement="left" width="200" trigger="hover">
        <div class="flex flex-col items-center">
          <h5
            class="
              mt-5
              mb-4
              text-headingColor
              font-medium
              text-sm
              leading-5
              text-center
            "
            >扫码进群</h5
          >
          <img
            src="~/assets/qrCode/交流群.jpg"
            class="w-28 h-28"
            alt="交流群"
          />

          <h6 class="mt-2 text-textColor text-xs leading-4"
            >学运营 | 选爆款 | 领福利</h6
          >
          <h6 class="mt-2 text-textColor text-xs leading-4"
            >勾搭大卖，上手更快</h6
          >
        </div>
        <div slot="reference">
          <img
            src="~/assets/images/index/评论.png"
            alt=""
            class="w-6 h-auto mx-auto"
          />
          <span class="text-xs text-center">学习交流</span>
        </div>
      </el-popover>
    </div>

    <el-backtop :visibility-height="500">
      <el-divider />
      <div>
        <img
          src="~/assets/images/index/返回顶部.png"
          class="w-6 h-auto mx-auto"
          alt="返回顶部"
        />
        <div class="text-xs text-center text-headingColor">顶部</div>
      </div>
    </el-backtop>

    <el-dialog
      v-dialogDrag
      width="848px"
      :visible.sync="outerVisible"
      append-to-body
      :modal="false"
      title="在线咨询"
      top="10px"
    >
      <div class="h-600">
        <iframe
          width="100%"
          height="100%"
          src="https://tb.53kf.com/code/client/82281cef626bdde4c0adea6df9375eb74/1"
          frameborder="0"
        ></iframe>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      outerVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.tools-float {
  bottom: 18%;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
}

.el-divider--horizontal {
  margin: 12px 0;
}

.h-600 {
  height: 600px;
}

::v-deep .el-dialog__body {
  padding: 0;
}

.el-popover {
  padding: 0;
}

.el-backtop {
  position: static;
  border-radius: unset;
  font-size: 12px;
  right: unset !important;
  bottom: unset !important;
  box-shadow: unset;
  width: 48px;
  height: 48px;
  display: block;
  transition: none;
  &:hover {
    background-color: #fff;
  }
}
</style>
