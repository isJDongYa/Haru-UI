/* @param vm：当前实例
 * @param name：要寻找的子实例的名字
 * @fun 寻找名为name的最近子实例
 */
export default function findNearestVueChildren(vm, name) {
  let parent = vm.$children
  if(children) {
    if(children.$options.name === name) {
      return children
    } else {
      return findNearestVueChildren(children, name)
    }
  } else { //vm没有父实例
    
    return null
  }
}