import Button from './button.vue'
import Image from './image.vue'

const components = [
  Button,
  Image
]

const install = function (Vue) {
  console.log("注册所有的组件");
  components.forEach(item => {
    Vue.component(item.name, item)
  })
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
}
export default { install }
