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
  data() {
    return {
      groupMap: new Map()
    }
  },
  props: {
    menuList: {
      type: Object,
      required: false,
      default: () => {}
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
        ? sibling.style.display = 'block'
        : sibling.style.display = 'none'
    },
    createMenuList(menuList){
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
                <div data-groupId={ listItem.groupId } style={ this.displayState(listItem.groupId) }>
                  { this.createMenuList(listItem) }
                </div>
              </div>
            )
          } 
          if(listItem.title) { //代表是item
              return(
                <div style={ this.getStyleStr } 
                class={ ["ha-menu-list-horizontal-item-default", this.haColor[1]||this.haColor[0], "ha-menu-list-horizontal-item"] } 
                route={ listItem.route }>
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
  render() {
    return (
      <div data-factor="ha-menu-list-horizontal" class="ha-menu-list-horizontal-default ha-menu-list-horizontal" style={ `width:${this.width==};height:${this.height}` }>
        <div class="ha-menu-list-horizontal-head-default" route={ this.menuList.route }>{ this.menuList.menuTitle || this.$slots.default }</div>
        <div class="ha-menu-list-horizontal-body-default">{ this.createMenuList(this.menuList) }</div>
      </div>
    )
  }
}
</script>
<style lang="scss" scoped>
@import '@scss/local/hovers.scss';

.ha-menu-list-horizontal-default {
  position: relative;
  z-index: 10;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
}
.ha-menu-list-horizontal-head-default {
  text-align: right;
  line-height: 100px;
  font-size: 20px;
  font-weight:600;
}
.ha-menu-list-horizontal-body-default {
  display: flex;
  justify-content: flex-start;
}
.ha-menu-list-horizontal-group-default, .ha-menu-list-horizontal-item-default {
  user-select: none;
  @include hoverShadow;
}
.ha-menu-list-horizontal-groupParent {
   
}
.ha-menu-list-horizontal-group-default {
  line-height: 40px;
  width: 200px;
  height: 40px;
}

.ha-menu-list-horizontal-item-default {
  line-height: 50px;
  width: 180px;
  height: 50px;
}
</style>



