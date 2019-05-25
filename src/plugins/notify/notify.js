import HaNotify from './HaNotify.vue'

function notify(Vue) {
  return function(vm, {
    msg,
    duration = 4000,
    location = 'topRight',
    color = 'primary'
  }) {
    if(vm.$haru.notifyIns.length !== 0) {
      vm.$haru.notifyIns.forEach( n => {
        if(location === 'topRight' || location === 'topLeft' || location === 'topMiddle') {
          n.style.top = n.offsetHeight + n.offsetTop + 5 + 'px'
        } else if(location === 'bottomRight' || location === 'bottomLeft' || location === 'bottomMiddle') {
          n.style.top = n.offsetTop - n.offsetHeight - 5 + 'px'
          n.style.bottom = ''
        }
      })
    }
    const Notify = Vue.extend(HaNotify)
    const instance = new Notify({ propsData: { msg, location, color } }).$mount()
    vm.$haru.notifyIns.push(instance.$el)
    vm.$el.appendChild(instance.$el)

    setTimeout(() => {
      vm.$el.removeChild(instance.$el)
      vm.$haru.notifyIns.splice(vm.$haru.notifyIns.indexOf(instance.$el), 1)
    }, duration)
    
  }
}

export default {
  install(Vue, options) {
    if(!Vue.prototype.$haru) {
      Vue.prototype.$haru = {}
    }
    Vue.prototype.$haru.notifyIns = []
    Vue.prototype.$haru.notify = notify(Vue)
  }
}