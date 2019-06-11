
/* @param vm：当前实例
 * @param name：要寻找的父实例的名字
 * @fun 寻找名为name的最近父实例
 */
export default function findNearestVueParent(vm, name) {
  let parent = vm.$parent
  if(parent) {
    if(parent.$options.name === name) {
      return parent
    } else {
      return findNearestVueParent(parent, name)
    }
  } else { //vm没有父实例
    
    return null
  }
}