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
  name: 'ha-menu-list-vertical',
  mixins:[colorMixin, stylePropMixin, singleOpenMixin],
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
              <div>
                <div onclick={ (e) => {
                  if(this.singleOpen) {
                    const parent = findDomParent(e.target)
                    this.closeOthers(parent, listItem.groupId)
                  } else {
                    const sibling = findDomNextSibling(e.target)
                    this.changeDisplayState(sibling)
                  }
                }} 
                class={ ["ha-menu-list-vertical-group-default", this.haColor[0], "ha-menu-list-vertical-group"] }
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
                class={ ["ha-menu-list-vertical-item-default", this.haColor[1]||this.haColor[0], "ha-menu-list-vertical-item"] } 
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
      <div data-factor="ha-menu-list-vertical" class="ha-menu-list-vertical-default ha-menu-list-vertical">
        <div class="ha-menu-list-vertical-head-default" route={ this.menuList.route }>{ this.menuList.menuTitle || this.$slots.default }</div>
        <div class="ha-menu-list-vertical-body-default">{ this.createMenuList(this.menuList) }</div>
      </div>
    )
  }
}
</script>
<style lang="scss" scoped>
@import '@scss/local/hovers.scss';

.ha-menu-list-vertical-default {
  position: relative;
  z-index: 10;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
}
.ha-menu-list-vertical-head-default {
  height: 100px;
  width: 100%;
  line-height: 100px;
  font-size: 20px;
  font-weight:600;
}
.ha-menu-list-vertical-body-default {
  width: 100%;
  height: 100%;
}
.ha-menu-list-vertical-group-default, .ha-menu-list-vertical-item-default {
  height: 50px;
  line-height: 50px;
  user-select: none;
  @include hoverShadow;
}

.ha-menu-list-vertical-group-default {
  width: 98%;
}

.ha-menu-list-vertical-item-default {
  width: 90%;
}
</style>



