---
title: Button 按钮
---

# Button按钮
常用的操作按钮。

## 基础用法

基础的按钮用法。

<script>
export default {
  data() {
    return {
      // button: '默认'
    }
  }
}
</script>

<template>
  <br>   
  <fe-button>Default</fe-button>
  <fe-button type="primary">primary</fe-button>
  <fe-button type="success">success</fe-button>
  <fe-button type="info">info</fe-button>
  <fe-button type="warning">warning</fe-button>
  <fe-button type="danger">danger</fe-button>
  <br><br>
  <fe-button plain>Default</fe-button>
  <fe-button plain type="primary">primary</fe-button>
  <fe-button plain type="success">success</fe-button>
  <fe-button plain type="info">info</fe-button>
  <fe-button plain type="warning">warning</fe-button>
  <fe-button plain type="danger">danger</fe-button>
  <br><br>
  <fe-button round >Default</fe-button>
  <fe-button round type="primary">primary</fe-button>
  <fe-button round type="success">success</fe-button>
  <fe-button round type="info">info</fe-button>
  <fe-button round type="warning">warning</fe-button>
  <fe-button round type="danger">danger</fe-button>
  <br><br>
  <fe-button circle icon="fe-icon-shoucang"></fe-button>
  <fe-button circle type="primary">好</fe-button>
  <fe-button circle icon="fe-icon-shoucang" type="success"></fe-button>
  <fe-button circle type="info">心</fe-button>
  <fe-button circle icon="fe-icon-shoucang" type="warning"></fe-button>
  <fe-button circle type="danger">情</fe-button>
  <br><br>
</template>

> 使用`type`、`plain`、`round`、`circle`和`icon`属性来定义 Button 的样式。

::: details 点击查看代码
``` vue
<template>
  <fe-button>Default</fe-button>
  <fe-button type="primary">primary</fe-button>
  <fe-button type="success">success</fe-button>
  <fe-button type="info">info</fe-button>
  <fe-button type="warning">warning</fe-button>
  <fe-button type="danger">danger</fe-button>
  <br><br>
  <fe-button plain>Default</fe-button>
  <fe-button plain type="primary">primary</fe-button>
  <fe-button plain type="success">success</fe-button>
  <fe-button plain type="info">info</fe-button>
  <fe-button plain type="warning">warning</fe-button>
  <fe-button plain type="danger">danger</fe-button>
  <br><br>
  <fe-button round >Default</fe-button>
  <fe-button round type="primary">primary</fe-button>
  <fe-button round type="success">success</fe-button>
  <fe-button round type="info">info</fe-button>
  <fe-button round type="warning">warning</fe-button>
  <fe-button round type="danger">danger</fe-button>
  <br><br>
  <fe-button circle icon="fe-icon-shoucang"></fe-button>
  <fe-button circle type="primary">好</fe-button>
  <fe-button circle icon="fe-icon-shoucang" type="success"></fe-button>
  <fe-button circle type="info">心</fe-button>
  <fe-button circle icon="fe-icon-shoucang" type="warning"></fe-button>
  <fe-button circle type="danger">情</fe-button>
  <br><br>
</template>
```
:::

## 禁用状态

按钮不可用状态。

<template>
  <fe-button disabled>Default</fe-button>
  <fe-button disabled type="primary">primary</fe-button>
  <fe-button disabled type="success">success</fe-button>
  <fe-button disabled type="info">info</fe-button>
  <fe-button disabled type="warning">warning</fe-button>
  <fe-button disabled type="danger">danger</fe-button>
</template>

> 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

::: details 点击查看代码
``` vue
<template>
  <fe-button disabled>Default</fe-button>
  <fe-button disabled type="primary">primary</fe-button>
  <fe-button disabled type="success">success</fe-button>
  <fe-button disabled type="info">info</fe-button>
  <fe-button disabled type="warning">warning</fe-button>
  <fe-button disabled type="danger">danger</fe-button>
</template>
```
:::

## API
### Button props

| 参数名 | 参数描述 | 参数类型 | 默认值 |
|---------- |-------------- |--------------------------------  |-------- |
| type | 按钮类型(primary / success / warning / danger / info) | string | default |
| plain | 是否是朴素按钮 | boolean | false |
| round | 是否是圆角按钮 | boolean | false |
| circle | 是否是圆形按钮 | boolean | false |
| disabled | 是否禁用按钮 | boolean | false |
| icon | 图标类名 | string | 无 |

### Button events
| 事件 | 值 | 描述 |
| ------| ------ | ------ |
| click | Function | 点击事件 |