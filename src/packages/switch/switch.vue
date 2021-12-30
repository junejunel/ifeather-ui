<template>
  <div class="fe-switch" @click="handleClick" :class="{'is-checked': value}">
    <!-- 由于switch一般是放表单中用的，有可能用户需要传个name，因此这里要放一个input接收name，并不让他显示出来-->
    <input class="fe-switch__input"
      type="checkbox"
      :name="name"
      ref="checkbox"
    />
    <span class="fe-switch__core" ref="core">
      <span class="fe-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'FeSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted() {
    // 一进来就要修改开关的颜色
    this.setColor()
    // 同步CheckBox的值
    this.$refs.checkbox.checked = this.value
  },
  methods: {
    // 点击时 将input事件传给父组件 点击取反
    async handleClick() {
      this.$emit('input', !this.value)
      // 点击时也需要修改开关颜色
      // 注：要等待value发生了改变，再setColor，不然color值是反的
      // 数据修改后，等待dom更新后，再修改按钮的颜色
      await this.$nextTick()
      this.setColor()
      // 同步CheckBox的值
      this.$refs.checkbox.checked = this.value
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        // 如果传进来的value是true，则说明开关是开的状态，则设置activeColor，否则设置inactiveColor
        let color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    },
  },
}
</script>