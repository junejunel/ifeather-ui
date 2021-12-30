---
title: Input 输入框
---

# Input 输入框

## 基础用法

<script>
export default {
  data() {
    return {
      input: '',
      username: '',
      password: '',
    }
  }
}
</script>

基础的input用法。

<template>
  <fe-input placeholder="请输入内容" v-model="input" type="text"></fe-input>
</template>

::: details 点击查看代码
```vue
<template>
  <fe-input placeholder="请输入内容" v-model="input" type="text"></fe-input>
</template>
<script>
export default {
  data() {
    return {
      input: '',
    }
  }
}
</script>
```
:::


## 禁用状态
<br>
<template>
  <fe-input placeholder="禁用" disabled></fe-input>
</template>

> 通过 `disabled` 属性指定是否禁用 input 组件

::: details 点击查看代码
```vue
<template>
  <fe-input placeholder="禁用" disabled></fe-input>
</template>
```
:::

## 可清空
<br>
<template>
  <fe-input placeholder="请输入用户名" v-model="username" type="text" clearable></fe-input>
</template>

> 使用`clearable`属性即可得到一个可清空的输入框

::: details 点击查看代码
```vue
<template>
  <fe-input placeholder="请输入用户名" v-model="username" type="text" clearable></fe-input>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
      }
    }
  }
</script>
```
:::

## 密码框

<template>
  <br>
  <fe-input placeholder="请输入密码" v-model="password" type="password" show-password></fe-input>
</template>

> 使用`show-password`属性即可得到一个可切换显示隐藏的密码框

::: details 点击查看代码
```vue
<template>
  <fe-input placeholder="请输入密码" v-model="password" type="password" show-password></fe-input>
</template>

<script>
  export default {
    data() {
      return {
        password: '',
      }
    }
  }
</script>
```
:::

## API
### Input props

| 参数名称 | 参数描述 | 参数类型 | 默认值 | 
| ------| ------ | ------ |------ |
| placeholder | 占位符 | string | 无 | 
| type | 文本框类型(text/password) | string | text | 
| disabled | 禁用 | boolean | false | 
| clearable | 是否显示清空按钮 | boolean | false | 
| show-password | 是否显示密码切换按钮 | boolean | false | 
| name | name属性 | string | 无 | 

### Input events

| 事件名称 | 事件描述 | 
| ------| ------ |
| blur | 失去焦点事件 | 
| change | 内容改变事件 |
| focus | 获取的焦点事件 | 