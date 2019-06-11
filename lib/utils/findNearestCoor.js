import findNearestVueParent from './findNearestVueParent'

export default function findNearestCoor(vm) {
  let parent = findNearestVueParent(vm, 'ha-coordinater')
  return parent ? parent : null
}