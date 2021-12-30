<template>
  <div class="fe-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'feRadioGroup',
  provide() {
    // 向子孙组件提供自己
    return {
      RadioGroup: this
    }
    
  },
  props: {
    // mt-radio-group接收到了value值，用于给mt-radio双向绑定
    // 将来还需触发 当前组件的input事件
    // radio组件现在不和app组件直接绑定了，于是需要操作radio-group组件
    // 使用provide和inject通信
    value: null
  }
}
</script>