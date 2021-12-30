<template>
  <button class="fe-button" :class="[`fe-button-${type}`,{
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled 
    }]"
    :disabled="disabled"
    @click="handleClick"

 >
    <i v-if="icon" :class="icon"></i>
    <!-- 如果没有传入任何内容，即我们没有传入插槽的时候，
    使用this.$slots能拿到当前项目中所有的插槽，默认插槽是default-->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'FeButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
