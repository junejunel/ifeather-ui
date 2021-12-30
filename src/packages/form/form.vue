<template>
  <div class="fe-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FeForm',
  props: {
    model: {
      type: Object,
      require: true,
    },
    labelWidth: {
      type: String,
      default: '80px',
    },
  },
  provide() {
    return {
      Form: this 
    }
  }
}
</script>