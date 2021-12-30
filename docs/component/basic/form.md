---
title: Form 表单
---
# Form 表单
由输入框、单选框、多选框等控件组成，用以收集、校验、提交数据


## 典型表单
包括各种表单项，比如输入框、开关、单选框、多选框等。

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          address: '',
          delivery: false,
          type: [],
          resource: '',
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<template>
  <div style="border:1px solid #E9EBEF; border-radius:4px; padding:10px">
    <fe-form :model="form" label-width="80px">
      <fe-form-item label="活动名称">
        <fe-input placeholder="请输入活动名称" v-model="form.name" style="width:200px;"/>
      </fe-form-item>
      <fe-form-item label="活动地点">
        <fe-input placeholder="请输入活动地点" v-model="form.address" style="width:200px;"/>
      </fe-form-item>
      <fe-form-item label="即时配送">
        <fe-switch v-model="form.delivery"></fe-switch>
      </fe-form-item>
      <fe-form-item label="活动性质">
        <fe-checkbox-group v-model="form.type">
          <fe-checkbox label="美食/餐厅线上活动"></fe-checkbox>
          <fe-checkbox label="地推活动"></fe-checkbox>
          <fe-checkbox label="线下主题活动"></fe-checkbox>
          <fe-checkbox label="单纯品牌曝光"></fe-checkbox>
        </fe-checkbox-group>
      </fe-form-item>
      <fe-form-item label="特殊资源">
        <fe-radio-group v-model="form.resource">
          <fe-radio label="线上品牌商赞助"></fe-radio>
          <fe-radio label="线下场地免费"></fe-radio>
        </fe-radio-group>
      </fe-form-item>
      <fe-form-item>
        <fe-button type="primary" @click="onSubmit" style="margin-left:80px;margin-right:10px">立即创建</fe-button>
        <fe-button>取消</fe-button>
      </fe-form-item>
    </fe-form>
  </div>
</template>

> 在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 `Input`、`Checkbox`、`Radio`、`Switch`等

::: details 点击查看代码
```vue
<template>
  <div style="border:1px solid #E9EBEF; border-radius:4px; padding:10px">
    <fe-form :model="form" label-width="80px">
      <fe-form-item label="活动名称">
        <fe-input placeholder="请输入活动名称" v-model="form.name" style="width:200px;"/>
      </fe-form-item>
      <fe-form-item label="活动地点">
        <fe-input placeholder="请输入活动地点" v-model="form.address" style="width:200px;"/>
      </fe-form-item>
      <fe-form-item label="即时配送">
        <fe-switch v-model="form.delivery"></fe-switch>
      </fe-form-item>
      <fe-form-item label="活动性质">
        <fe-checkbox-group v-model="form.type">
          <fe-checkbox label="美食/餐厅线上活动"></fe-checkbox>
          <fe-checkbox label="地推活动"></fe-checkbox>
          <fe-checkbox label="线下主题活动"></fe-checkbox>
          <fe-checkbox label="单纯品牌曝光"></fe-checkbox>
        </fe-checkbox-group>
      </fe-form-item>
      <fe-form-item label="特殊资源">
        <fe-radio-group v-model="form.resource">
          <fe-radio label="线上品牌商赞助"></fe-radio>
          <fe-radio label="线下场地免费"></fe-radio>
        </fe-radio-group>
      </fe-form-item>
      <fe-form-item>
        <fe-button type="primary" @click="onSubmit" style="margin-left:80px;margin-right:10px">立即创建</fe-button>
        <fe-button>取消</fe-button>
      </fe-form-item>
    </fe-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          address: '',
          delivery: false,
          type: [],
          resource: '',
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

```
:::

## API
### Form-item props

| 参数名称 | 参数描述 | 参数类型 | 默认值 | 
| ------| ------ | ------ |------ |
|label |单选框 label值 | String | '' |

### Form props

| 参数名称 | 参数描述 | 参数类型 | 默认值 | 
| ------| ------ | ------ |------ |
| model	| 表单对象 | Object	| 必填 |
| label-width | 标签宽度| String | 80px |
