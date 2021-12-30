<template>
  <div class="fe-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FeCheckboxGroup',
  props: {
    value: {
      type: Array,
      default: []
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    }
  }
}
</script>