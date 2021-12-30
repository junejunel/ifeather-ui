---
title: Switch 开关
---
# Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法
<script>
  export default {
    data() {
      return {
        active1: true,
        active2: true,
      }
    }
  }
</script>

<template>
  <br>
  <fe-switch v-model="active1" active-color="blue" name="switch"></fe-switch>
</template>

> 绑定`v-model`到一个`Boolean`类型的变量。可以使用`active-color`属性与`inactive-color`属性来设置开关的背景色。

::: details 点击查看代码
``` vue
<template>
  <fe-switch v-model="active1" active-color="blue" name="switch"></fe-switch>
</template>
<script>
  export default {
    data() {
      return {
        active1: true,
      }
    }
  }
</script>
```
:::

## 扩展的 value 类型

<template>
  <br>
  <fe-switch
    v-model="active2"
    active-color="#13ce66"
    inactive-color="#ff4949">
  </fe-switch>
</template>

> 设置`active-value`和`inactive-value`属性，接受`Boolean`, `String`或`Number`类型的值。

::: details 点击查看代码
``` vue
<template>
  <fe-switch
    v-model="active2"
    active-color="#13ce66"
    inactive-color="#ff4949">
  </fe-switch>
</template>
<script>
  export default {
    data() {
      return {
        active2: true,
      }
    }
  }
</script>
```
:::

## API

### Switch props

| 参数名称 | 参数描述 | 参数类型 | 默认值 | 
| ------| ------ | ------ |------ |
| v-model | 双向绑定 | 布尔类型 | false | 
| name| name属性 | string | text | 
| activeColor | 自定义的激活的颜色 | string | #409EFF
| inactiveColor | 自定义的不激活的颜色 | string | #DCDFE6|

### Switch events

| 事件名称 | 事件描述 | 
| ------| ------ |
| change | change时触发的事件 | 
