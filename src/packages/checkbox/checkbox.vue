<template>
  <label class="fe-checkbox" :class="{'is-checked': isChecked}">
    <span class="fe-checkbox__input">
      <span class="fe-checkbox__inner"></span>
      <input
        type="checkbox"
        class="fe-checkbox__original"
        :name="name"
        v-model="model"
        :value="label"
      />
    </span>
    <span class="fe-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{label}}
      </template>
    </span>
  </label>

</template>

<script>
export default {
  name: 'FeCheckbox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    }
  },
  computed: {
    isGroup() {
      return !!this.CheckboxGroup
    },
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set(value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value);
      }
    },
    isChecked() {
      // 如果是group包裹，则要判断label是否在model中
      // 如果没有group包裹，直接使用model
      return this.isGroup ? this.model.includes(this.label) : this.model
    },
  },
}
</script>