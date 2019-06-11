import findDomParent from './findDomParent'

export default function findDomParentByFactor(domEl, factor) {
  const parent = findDomParent(domEl)
  if(parent.getAttribute('data-factor')===factor) {
    return parent
  } else {
    return findDomParentByFactor(parent, factor)
  }
}