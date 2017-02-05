/**
 * Created by chang_su on 2017/2/5.
 */
import Vue from 'vue'
const components = {
  baiduMap
}
const install = function () {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

module.exports = {
  ...components,
  install
}
