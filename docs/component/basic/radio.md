---
title: Radio 单选框
---
# Radio 单选框
在一组备选项中进行单选。

## 基础用法

<script>
export default {
  data() {
    return {
     option: '',
     gender: '',
    }
  }
}
</script>

选项默认可见，不宜过多。

<template>
  <fe-radio label="1" v-model="option">选项 1</fe-radio>
  <fe-radio label="0" v-model="option">选项 2</fe-radio>
</template>

> 要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。

::: details 点击查看代码
``` vue
<template>
  <fe-radio label="1" v-model="option">选项 1</fe-radio>
  <fe-radio label="0" v-model="option">选项 2</fe-radio>
</template>

<script>
export default {
  data() {
    return {
     option: '',
    }
  }
}
</script>
```
:::

## 单选框组

适用于在多个互斥的选项中选择的场景。

<fe-radio-group v-model="gender">
  <fe-radio label="1">男</fe-radio>
  <fe-radio label="0">女</fe-radio>
</fe-radio-group>

> 结合`fe-radio-group`元素和子元素`fe-radio`可以实现单选组，在`fe-radio-group`中绑定`v-model`，在`el-radio`中设置好`label`即可，无需再给每一个`fe-radio`绑定变量。

::: details 点击查看代码
``` vue
<template>
  <fe-radio-group v-model="gender">
    <fe-radio label="1">男</fe-radio>
    <fe-radio label="0">女</fe-radio>
  </fe-radio-group>
</template>

<script>
export default {
  data() {
    return {
      gender: '',
    }
  }
}
</script>
```
:::

## API
### Radio props

| 参数名称 | 参数描述 | 参数类型 | 默认值 | 
| ------| ------ | ------ |------ |
| value/v-model | 绑定值 | [string，num，boolean] | — | 
| label | 单选框的value值 | [string，num，boolean] | — | 
| name | name属性 | string | — | 

### RadioGroup props

| 参数名称 | 参数描述 | 参数类型 | 默认值 | 
| ------| ------ | ------ |------ |
| value/v-model | 绑定值 | [string，num，boolean] | — | 
