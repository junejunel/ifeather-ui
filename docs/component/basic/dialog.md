---
title: Dialog 对话框
---
# Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

<script>
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
    }
  }
}
</script>

Dialog 弹出一个对话框，适合需要定制性更大的场景。

<template>
  <fe-button type="primary" @click="visible1 = true">显示对话框</fe-button>
  <fe-dialog width="40%" top="20vh" :visible.sync="visible1">
    <span>这是一段提示信息</span>
  </fe-dialog>
</template>

> 需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 Dialog。Dialog 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了`before-close`的用法。

::: details 点击查看代码
``` vue
<template>
  <fe-button type="primary" @click="visible1 = true">显示对话框</fe-button>
  <fe-dialog width="40%" top="20vh" :visible.sync="visible1">
    <span>这是一段提示信息</span>
  </fe-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible1: false,
    }
  }
}
</script>
```
:::

## 自定义样式

Dialog 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Dialog 的各个组成部分，比如页头、页脚。
通过和其它组件的交互，能实现更复杂的功能，满足了大多业务场景。

<template>
  <fe-button type="primary" @click="visible2 = true">自定义页头和页脚</fe-button>
  <fe-dialog
    width="40%"
    top="20vh"
    :visible.sync="visible2">
    <template v-slot:title>
      <span>自定义标题</span>
    </template>
    <span>自定义内容</span>
    <template v-slot:footer>
      <fe-button @click="visible2 = false">取消</fe-button>
      <fe-button type="primary" @click="visible2 = false">确定</fe-button>
    </template>
  </fe-dialog>
</template>

::: details 点击查看代码
``` vue
<template>
  <fe-button type="primary" @click="visible2 = true">自定义页头和页脚</fe-button>
  <fe-dialog
    width="40%"
    top="20vh"
    :visible.sync="visible2">
    <template v-slot:title>
      <span>自定义标题</span>
    </template>
    <span>自定义内容</span>
    <template v-slot:footer>
      <fe-button @click="visible2 = false">取消</fe-button>
      <fe-button type="primary" @click="visible2 = false">确定</fe-button>
    </template>
  </fe-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible2: false,
    }
  }
}
</script>
```
:::
## API
### Dialog props

| 参数名 | 参数描述 | 参数类型 | 默认值|
| ------| ------ | ------ | ------ |
| title | 对话框标题 | string | 提示
| width | 宽度 | string | 50%|
| top | 与顶部的距离 | string | 15vh | 
| visible | 是否显示dialog（支持sync修饰符） | boolean | false|

### Dialog events

| 事件名 | 事件描述 |
| ------| ------ | 
| opened | 模态框显示的事件 |
| closed | 模态框关闭的事件 |

### Dialog slot

| 插槽名称 | 插槽描述 | 
| ------| ------ |
| default | dialog的内容 | 
| title | dialog的标题 | 
| footer | dialog的底部操作区 | 
