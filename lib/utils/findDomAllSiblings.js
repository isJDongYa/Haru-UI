import findDomParent from './findDomParent'
import findDomChildren from './findDomChildren'

export default function findDomAllSiblings(domEl) {
  return findDomChildren(findDomParent(domEl))
}