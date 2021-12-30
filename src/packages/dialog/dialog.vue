<template>
  <!-- 对话框的动画效果 -->
  <transition name="fe-diolog-fade">
    <!-- 对话框的遮罩，self代表只有点击自己才触发 -->
    <div class="fe-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="fe-dialog" :style="{width, marginTop: top}">
        <div class="fe-dialog__header">
          <!-- 技巧：span包进slot里：不传slot 正常显示title -->
          <slot name="title">
            <span class="fe-dialog__title">{{title}}</span>
          </slot>
          <button class="fe-dialog__headerbtn" @click="handleClose">
            <i class="fe-icon-close"></i>
          </button>
        </div>
        <div class="fe-dialog__body">
          <!-- 对话框中放的是默认插槽 -->
          <slot></slot>
        </div>
        <div class="fe-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
          
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FeDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:visible',false)
    }
  }
}
</script>