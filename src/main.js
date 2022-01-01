import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);
Vue.directive('border', {
  bind(el, binding, vnode) {
    // ディレクティブがはじめて対象の要素に紐づいて時
  },
  inserted(el, binding, vnode) {
    // 親Nodeに挿入された時
  },
  update(el, binding, vnode) {
    // コンポーネントが更新される度。子コンポーネントが更新される前
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    // コンポーネントが更新される度。子コンポーネントが更新される後
  },
  unbind(el, binding, vnode, oldVnode) {
    // ディレクティブが紐づいている要素から取り除かれた時
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
