<template>
  <div class="fe-input" :class="{'fe-input__suffix': showSuffix}">
    <!-- 子组件中驼峰命名，父组件中用-：showPassword -->
    <!-- 显示密码 即：将输入框类型切换为text 此处要在子组件中自己定义一个属性控制文本是否显示，不能写死为type -->
    <!-- 如果传了show-password,判断是否需要切换 密码的显示 如果不传就不判断 -->
    <input
      :class="['fe-input__inner', {'is-disabled': disabled}]"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput">
      <span class="fe-input__suffix" v-if="showSuffix">
        <i class="fe-input__icon fe-icon-shanchu" v-if="clearable && value" @click="clear"></i>
        <!-- 小眼睛图标 显示密码时高亮 -->
        <i
          class="fe-input__icon fe-icon-yanjing"
          :class="{'fe-icon-yanjing-active': passwordVisible}"
          v-if="showPassword && type ==='password'"
          @click="handlePassword"
        >
        </i>
      </span>
  </div>
</template>

<script>
export default {
  name: 'FeInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 用于控制是否显示密码框
      passwordVisible: false
    }
  },
  computed: {
    // 只要这两个中传了一个 就显示小图标
    showSuffix() {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput(e) {
      // 处理input事件，传给父组件接收，父组件使用了v-model，相当于
      this.$emit('input',e.target.value)
    },
    clear() {
      // 把内容清空
      this.$emit('input','')
    },
    handlePassword() {
      // 点击小眼睛显示密码
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>