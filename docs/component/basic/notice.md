---
title: Notice 提示
---

# Notice 提示

填写提示内容，点击按钮弹出提示

<script>
export default {
  data() {
    return {
      content: '提示内容'
    }
  },
  methods: {
    onNotice() {
      this.$notice({
        title: '提示',
        content: this.content || '内容',
        duration: 3
      })
    }
  }
}
</script>
<template>
  <div>
    <fe-input v-model="content"></fe-input>
    <fe-button @click.native="onNotice" type="primary" style="margin-top: 20px;">触发提示</fe-button>
  </div>
</template>

::: details 点击查看代码
```vue
<template>
  <div>
    <fe-input v-model="content"></fe-input>
    <fe-button @click.native="onNotice" type="primary" style="margin-top: 20px;">触发提示</fe-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: '提示内容'
    }
  },
  methods: {
    onNotice() {
      this.$notice({
        title: '提示',
        content: this.content || '内容',
        duration: 3
      })
    }
  }
}
</script>
```
:::