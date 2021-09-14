// 导入颜色选择器组件
import colorPicker from './color-picker'
import CgButton from './cg-button'
import CgInput from './cg-input'
import CgTable from './cg-table'

// 存储组件列表
const components = {
  colorPicker,
  CgButton,
  CgInput,
  CgTable
}

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  if (install.installed) return
  for (const component of Object.values(components)) {
    Vue.component(component.name, component)
  }
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
}