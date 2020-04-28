<script>
import colorMixin from '@mixins/colorMixin'
import singleOpenMixin from '@mixins/singleOpenMixin'

import findDomParent from '@utils/findDomParent'
import findDomNextSibling from '@utils/findDomNextSibling'
import findDomChildren from '@utils/findDomChildren'
import findDomLastChild from '@utils/findDomLastChild'
import findDomAllSiblings from '@utils/findDomAllSiblings'

import HaScroll from '@others/ha-scroll/HaScroll.vue'

export default {
  name: 'ha-menu-list-vertical',
  mixins:[colorMixin, singleOpenMixin],
  components: {
    'ha-scroll': HaScroll,
  },
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
    router(vm, route) {
      return function() {
        if(vm.$router){
          vm.$router.push(route)
        }
      }
    },
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
            let groupIcon
            if(listItem.icon) {
              groupIcon = ( <img data-groupItem='true' class="ha-menu-list-ver-icon" src={ listItem.icon }></img> )
            }
            return (
              <div>
                <div 
                class={ ["ha-menu-list-vertical-group-default", this.bgColorClass[0], "ha-menu-list-vertical-group"] }
                onclick={ (e) => {
                  let target = e.target
                  if(target.getAttribute('data-groupItem') === 'true') {
                    target = e.target.parentNode
                  }
                  if(this.singleOpen) {
                    const parent = findDomParent(target)
                    this.closeOthers(parent, listItem.groupId)
                  } else {
                    const sibling = findDomNextSibling(target)
                    this.changeDisplayState(sibling)
                  }
                }} 
                >
                  { groupIcon }
                  <span data-groupItem='true'>{ listItem.menuTitle }</span>
                  </div>
                <div data-groupId={ listItem.groupId } style={ this.displayState(listItem.groupId) }>
                  { this.createMenuList(listItem) }
                </div>
              </div>
            )
          } 
          if(listItem.title) { //代表是item
            let itemIcon
            if(listItem.icon) {
              itemIcon = ( <img class="ha-menu-list-ver-icon" src={ listItem.icon }></img> )
            }
            return(
              <div 
              class={ ["ha-menu-list-vertical-item-default", this.bgColorClass[1]||this.bgColorClass[0], "ha-menu-list-vertical-item"] }
              onclick = { this.router(this, listItem.route ) }>
                { itemIcon }
                <span>{ listItem.title }</span>
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
    let head
    let bodyHeight = '90%'
    if(this.menuList.menuTitle || this.$slots.default) {
      head = (<div ref="head" class="ha-menu-list-vertical-head-default" route={ this.menuList.route }>{ this.menuList.menuTitle || this.$slots.default }</div>)
    } else {
      bodyHeight = '100%'
    }
    return (
      <div data-factor="ha-menu-list-vertical" class="ha-menu-list-vertical-default ha-menu-list-vertical">
        { head }
        <div ref='body' style={ `height:${ bodyHeight }` }>
          <ha-scroll color={ ['grey', 'grey'] }>
            <div ref='body' class="ha-menu-list-vertical-body-default">{ this.createMenuList(this.menuList) }</div>
          </ha-scroll>
        </div>
      </div>
    )
  }
}
</script>
<style lang="scss" scoped>

.ha-menu-list-vertical-default {
  position: relative;
  z-index: 10;
  text-align: center;
  border-radius: 4px;
  height: 100%;
  width: 100%;
}
.ha-menu-list-vertical-head-default {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  font-size: 20px;
  font-weight:600;
}
.ha-menu-list-vertical-body-default {
  width: 100%;
}
.ha-menu-list-vertical-group-default, .ha-menu-list-vertical-item-default {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  cursor: pointer;
}

.ha-menu-list-vertical-group-default {
  width: 100%;
}

.ha-menu-list-vertical-item-default {
  width: 90%;
}

.ha-menu-list-ver-icon {
  width: 10%;
  height: 30%;
}
</style>



