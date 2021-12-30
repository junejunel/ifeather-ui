<template>
  <div class="fe-form-item"> 
    <label :style="labelStyle" class="fe-form-item__label">{{label}}</label>
    <div class="fe-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeFormItem',
  props: {
    label: String
  },
  inject: ['Form'],
  computed: {
    labelStyle() {
      return {
        width: this.Form.labelWidth
      }
    }
  },
}
</script>