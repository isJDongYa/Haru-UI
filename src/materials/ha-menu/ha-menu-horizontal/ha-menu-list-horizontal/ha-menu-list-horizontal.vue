<script>
import whMixin from '@mixins/whMixin'
import colorMixin from '@mixins/colorMixin'
import stylePropMixin from '@mixins/stylePropMixin'
import singleOpenMixin from '@mixins/singleOpenMixin'

import findDomParent from '@utils/findDomParent'
import findDomNextSibling from '@utils/findDomNextSibling'
import findDomChildren from '@utils/findDomChildren'
import findDomLastChild from '@utils/findDomLastChild'
import findDomAllSiblings from '@utils/findDomAllSiblings'

export default {
  name: 'ha-menu-list-horizontal',
  mixins:[colorMixin, stylePropMixin, singleOpenMixin, whMixin],
  props: {
    menuList: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      groupMap: new Map()
    }
  },
  methods: {
    closeOthers(domEl, groupId) {
      const siblings = findDomAllSiblings(domEl)
      for(let i=0;i<siblings.length;i++){
        let lchild = findDomLastChild(siblings[i])
        if(lchild.nodeType === 1) {
          if(lchild.hasAttribute('data-groupId')) {
            if(lchild.getAttribute('data-groupId') === groupId) {
              this.changeDisplayState(lchild)
            } else {
              lchild.style.display = 'none'
            }
          }
        }
        
      }
      
    },
    displayState(groupId) {
      return this.groupMap.get(groupId)
    },
    changeDisplayState(sibling) {
      sibling.style.display === 'none'
        ? sibling.style.display = 'flex'
        : sibling.style.display = 'none'
    },
    createMenuList(menuList){
      let itemId = 0
      if(menuList.menuList) {
        return menuList.menuList.map( listItem => {
          if(listItem.groupId) { //代表是group
            this.groupMap.set(listItem.groupId, 'display: none')
            return (
              <div class="ha-menu-list-horizontal-groupParent-default ha-menu-list-horizontal-groupParent">
                <div onclick={ (e) => {
                  if(this.singleOpen) {
                    const parent = findDomParent(e.target)
                    this.closeOthers(parent, listItem.groupId)
                  } else {
                    const sibling = findDomNextSibling(e.target)
                    this.changeDisplayState(sibling)
                  }
                }} 
                class={ ["ha-menu-list-horizontal-group-default", this.haColor[0], "ha-menu-list-horizontal-group"] }
                style={ this.getStyleStr }
                >
                  { listItem.menuTitle }
                </div>
                <div 
                class="ha-menu-list-horizontal-itemParent-default ha-menu-list-horizontal-itemParent" 
                data-groupId={ listItem.groupId } 
                style={ this.displayState(listItem.groupId) }
                >
                  { this.createMenuList(listItem) }
                </div>
              </div>
            )
          } 
          if(listItem.title) { //代表是item
              return(
                <div
                class={ ["ha-menu-list-horizontal-item-default", this.haColor[1]||this.haColor[0], "ha-menu-list-horizontal-item"] }  
                style={ this.getStyleStr } 
                route={ listItem.route }
                >
                  { listItem.title }
                </div>
              )
          }
        } )
      } else {
        return null
      }
    }
  },
  mounted() {
    const groups = this.$refs.haMenuHor.querySelectorAll('.ha-menu-list-horizontal-group')
    groups.forEach( group => {
      group.style.height = this.$refs.haMenuHor.offsetHeight + 'px'
    })
    const items = this.$refs.haMenuHor.querySelectorAll('.ha-menu-list-horizontal-item')
    items.forEach( item => {
      item.style.height = 0.9 * this.$refs.haMenuHor.offsetHeight + 'px'
      item.style.width = 0.9 * groups[0].offsetWidth + 'px' 
    })
    console.log(groups[0].offsetWidth)
  },
  render() {
    let head
    if(this.menuList.menuTitle || this.$slots.default) {
      head = (<div class="ha-menu-list-horizontal-head-default" route={ this.menuList.route }>{ this.menuList.menuTitle || this.$slots.default }</div>)
    }
    return (
      <div ref="haMenuHor" class="ha-menu-list-horizontal-default ha-menu-list-horizontal" style={ `width:${this.width};height:${this.height}` }>
        { head }
        { this.createMenuList(this.menuList) }
      </div>
    )
  }
}
</script>
<style lang="scss" scoped>
@import '@scss/local/hovers.scss';

.ha-menu-list-horizontal-default {
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  height: 100%;
}
.ha-menu-list-horizontal-head-default {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.ha-menu-list-horizontal-group-default, .ha-menu-list-horizontal-item-default {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  @include hoverShadow;
}
.ha-menu-list-horizontal-itemParent-default {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.ha-menu-list-horizontal-groupParent-default {
  flex: 1;
  display: inline-block;
  flex-direction: column;
  height: 100%;
}
</style>



