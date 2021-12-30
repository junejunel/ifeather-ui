import Button from './packages/button'
import Dialog from './packages/dialog'
import Radio from './packages/radio'
import RadioGroup from './packages/radio-group'
import Checkbox from './packages/checkbox'
import CheckboxGroup from './packages/checkbox-group'
import Form from './packages/form'
import FormItem from './packages/form-item'
import Input from './packages/input'
import Switch from './packages/switch'
import Notice from './packages/notice/notice.js'

const components = {
  FeButton: Button,
  FeDialog: Dialog,
  FeRadio: Radio,
  FeRadioGroup: RadioGroup,
  FeForm: Form,
  FeFormItem: FormItem,
  FeInput: Input,
  FeCheckbox: Checkbox,
  FeCheckboxGroup: CheckboxGroup,
  FeSwitch: Switch,
}


const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });


  // Vue.prototype.$message = Message;
  Vue.prototype.$notice = Notice;
}

export default install