---
title: Checkbox 多选框
---
# Checkbox 多选框
一组备选项中进行多选

## 基础用法

<script>
export default {
  data() {
    return {
      checked: true,
      hobby: ['吃饭'],
    }
  }
}
</script>

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<template>
  <fe-checkbox v-model="checked">pick me</fe-checkbox>
</template>

> 在`fe-checkbox`元素中定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。

::: details 点击查看代码
``` vue
<template>
  <fe-checkbox v-model="checked">pick me</fe-checkbox>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
    }
  }
}
</script>
```
:::

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

<template>
  <fe-checkbox-group v-model="hobby">
    <fe-checkbox label="吃饭"></fe-checkbox>
    <fe-checkbox label="看书"></fe-checkbox>
    <fe-checkbox label="玩"></fe-checkbox>
  </fe-checkbox-group>
</template>

> `checkbox-group`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用`v-model`绑定`Array`类型的变量即可。 `fe-checkbox` 的 `label`属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。`label`与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

::: details 点击查看代码
``` vue
<template>
  <fe-checkbox-group v-model="hobby">
    <fe-checkbox label="吃饭"></fe-checkbox>
    <fe-checkbox label="看书"></fe-checkbox>
    <fe-checkbox label="玩"></fe-checkbox>
  </fe-checkbox-group>
</template>
<script>
export default {
  data() {
    return {
      hobby: ['吃饭'],
    }
  }
}
</script>
```
:::

## API
### Checkbox props

| 参数名称 | 参数描述 | 参数类型 | 默认值 | 
| ------| ------ | ------ |------ |
| label	| 单选框label值 | [String, Number, Boolean] | — | 
| name | 表单命名 | String | 空 | 
| value/v-model | 绑定值 | Boolean | false | 

### CheckboxGroup props

| 参数名称 | 参数描述 | 参数类型 | 默认值 | 
| ------| ------ | ------ |------ |
| value/v-model | 绑定值 | Arr | — | 