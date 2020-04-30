import HaNotify from './HaNotify.vue'

function notify(Vue) {
  return function(vm, {
    msg,
    duration = 4000,
    location = 'topRight',
    bgColor = undefined,
    icon
  }) {
    if(vm.$haru.notifyIns[location].length !== 0) {
      vm.$haru.notifyIns[location].forEach( n => {
        if(location === 'topRight' || location === 'topLeft' || location === 'topMiddle') {
          n.style.top = n.offsetHeight + n.offsetTop + 5 + 'px'
        } else if(location === 'bottomRight' || location === 'bottomLeft' || location === 'bottomMiddle') {
          n.style.top = n.offsetTop - n.offsetHeight - 5 + 'px'
          n.style.bottom = ''
        }
      })
    }
    const Notify = Vue.extend(HaNotify)
    const instance = new Notify({ propsData: { msg, location, bgColor, icon } }).$mount()
    vm.$haru.notifyIns[location].push(instance.$el)

    const body = document.querySelector('body')
    body.appendChild(instance.$el)

    setTimeout(() => {
      body.removeChild(instance.$el)
      vm.$haru.notifyIns[location].splice(vm.$haru.notifyIns[location].indexOf(instance.$el), 1)
    }, duration)
    
  }
}

export default {
  install(Vue) {
    if(!Vue.prototype.$haru) {
      Vue.prototype.$haru = {}
    }
    Vue.prototype.$haru.notifyIns = {
      topRight:[],
      topMiddle: [],
      topLeft: [],
      bottomRight: [],
      bottomMiddle: [],
      bottomLeft: []
    }
    Vue.prototype.$haru.notify = notify(Vue)
  }
}