<script>
import colorMixin from '@mixins/colorMixin'
import singleOpenMixin from '@mixins/singleOpenMixin'

import findDomParent from '@utils/findDomParent'
import findDomNextSibling from '@utils/findDomNextSibling'
import findDomChildren from '@utils/findDomChildren'
import findDomLastChild from '@utils/findDomLastChild'
import findDomAllSiblings from '@utils/findDomAllSiblings'

export default {
  name: 'ha-menu-list-horizontal',
  mixins:[colorMixin, singleOpenMixin],
  props: {
    menuList: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      groupMap: new Map(),
      group0: null,
      listener: null
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
    addEvent(vm) {
      return function(e) {
        vm.closeOthers(vm.group0.parentNode, '')
        document.removeEventListener('click', vm.listener)
      }
    },
    changeDisplayState(sibling) {
     if(sibling.style.display === 'none') {
       this.listener = this.addEvent(this)
       setTimeout(() => {
         document.addEventListener('click', this.listener)
       }, 100)
       sibling.style.display = 'flex'
     } else {
       sibling.style.display = 'none'
     }
    },
    createMenuList(menuList){
      let itemId = 0
      if(menuList.menuList) {
        return menuList.menuList.map( listItem => {
          if(listItem.groupId) { //代表是group
            this.groupMap.set(listItem.groupId, 'display: none')
            let groupIcon
            if(listItem.icon) {
              groupIcon = ( <img data-groupItem='true' class="ha-menu-list-ver-icon" src={ listItem.icon }></img> )
            }
            return (
              <div class="ha-menu-list-horizontal-groupParent-default ha-menu-list-horizontal-groupParent">
                <div 
                class={ ["ha-menu-list-horizontal-group-default", this.haColor[0], "ha-menu-list-horizontal-group"] }
                style = { `color: ${this.haFontColor[0]}` }
                onclick={ (e) => {
                  if(this.listener) {
                    document.removeEventListener('click', this.listener)
                  }
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
            let itemIcon
            if(listItem.icon) {
              itemIcon = ( <img class="ha-menu-list-ver-icon" src={ listItem.icon }></img> )
            }
            return(
              <div
              class={ ["ha-menu-list-horizontal-item-default", this.haColor[1]||this.haColor[0], "ha-menu-list-horizontal-item"] }
              style = { `color: ${this.haFontColor[1]}` }  
              onclick = { this.router(this, listItem.route ) }
              >
                { itemIcon }
                <span data-groupItem='true'>{ listItem.title }</span>
              </div>
            )
          }
        } )
      } else {
        return null
      }
    },
    setWH(vm) {
      return function() {
        const groups = vm.$refs.haMenuHor.querySelectorAll('.ha-menu-list-horizontal-group')
        const items = vm.$refs.haMenuHor.querySelectorAll('.ha-menu-list-horizontal-item')
        if(groups.length > 0) {
          groups.forEach( group => {
            group.style.height = vm.$refs.haMenuHor.offsetHeight + 'px'
          })
          vm.group0 = groups[0]
          
          items.forEach( item => {
            item.style.height = 0.9 * vm.$refs.haMenuHor.offsetHeight + 'px'
            item.style.width = 0.9 * groups[0].offsetWidth + 'px' 
          })
        } else {
            items.forEach( item => {
                item.style.height = '100%'
                item.style.width = `${100 / items.length}%`
            })  
        }
      }
    }
  },
  mounted() {
    this.setWH(this)()
    window.addEventListener('resize', this.setWH(this))
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

.ha-menu-list-horizontal-default {
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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
.ha-menu-list-ver-icon {
  width: 10%;
  height: 30%;
}
</style>



