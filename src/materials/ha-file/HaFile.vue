<template>
  <ha-card :z="z" :width="width" :height="height" :coor="coor" :styleProp="styleProp" type="Ver" :hcfHeight="['20%', '80%', '0%']">
    <div class="ha-file-input-container-default ha-file-input-container" slot="header">
      <div class="ha-file-input-show-default ha-file-input-show">
        <span>添加文件</span>
      </div>
      <input 
      class="ha-file-input-default ha-file-input"
      multiple="multiple" 
      type="file"
      @change="fileChange"
      >
    </div>
    <div class="ha-file-selectAll-default ha-file-selectAll" slot="header" @click="selectAllFiles">
      <span>{{ selectAll ? '反选' : '全选' }}</span>
    </div>
    <div class="ha-file-upload-default ha-file-upload" slot="header" @click="upLoadFiles">
      <span>上传</span>
    </div>
    <div class="ha-file-del-default ha-file-del" slot="header" @click="delFile">
      <span>删除</span>
    </div>
    <ha-scroll :color="['grey', 'grey']">
      <div class="ha-file-list-item-default ha-file-list-item"
      v-for="(file, index) in files"
      :key="file"
      >
        <div class="ha-file-list-check-container-default ha-file-list-check-container">
          <ha-check
          :isCheck="fileIsCheck.indexOf(file)>-1"
          color="green"
          @checked="checkFile"
          :content="file"
          >
          </ha-check>
        </div>
        <img class="ha-file-list-img-default ha-file-list-img" :src="fileTypeImg[index]">
      </div>
    </ha-scroll>
  </ha-card>
</template>
<script>
import coorMixin from '@mixins/coorMixin'
import colorMixin from '@mixins/colorMixin'
import stylePropMixin from '@mixins/stylePropMixin'
import whMixin from '@mixins/whMixin'
import zMixin from '@mixins/zMixin'

import HaCard from '@containers/ha-card/HaCard.vue'
import HaScroll from '@stuffings/ha-scroll/HaScroll.vue'
import HaCheck from '@stuffings/ha-check/HaCheck.vue'

export default {
  name: 'ha-file',
  mixins: [coorMixin, colorMixin, stylePropMixin, whMixin, zMixin ],
  components: {
    'ha-card': HaCard,
    'ha-scroll': HaScroll,
    'ha-check': HaCheck
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'common',
      validator: function(val) {
        switch(val) {
          case'common':
            return true
          case'img': 
            return true
          default:
            return false
        }
      }
    }
  },
  data() {
    return {
      fileList: [],
      files: [],
      fileIsCheck: [],
      fileTypes: [],
      hasFile: false,
      selectAll: false
    }
  },
  computed: {
    fileTypeImg() {
      return this.fileTypes.map( ftype => {
        const fIcon = this.$haru.icons.fileTypes[ftype]
        return fIcon ? fIcon : this.$haru.icons.fileTypes['_fileUnknow']
      })
    }
  },
  watch: {
    files() {
      if(this.files.length === 0) {
        this.hasFile = false
      } else {
        this.hasFile = true
      }
    }
  },
  methods: {
    fileChange(e) {
      const rep = /(\.[0-9 a-z]*)$/
      for(let i=0;i<e.target.files.length;i++){
        if(this.files.indexOf(e.target.files[i].name) === -1) {
          this.fileList.push(e.target.files[i])
          this.files.push(e.target.files[i].name)
          let res = rep.exec(e.target.files[i].name)
          if(res) {
            this.fileTypes.push(res[0].replace('.', '_'))
          } else {
            this.fileTypes.push('_fileUnknow')
          }
        }
      }
      e.target.value = ''
    },
    checkFile(checkObj) {
      if(checkObj.isCheck) {
        this.fileIsCheck.push(checkObj.content)
      } else {
        this.fileIsCheck.splice(this.fileIsCheck.indexOf(checkObj.content), 1)
      }
    },
    delFile() {
      if(this.hasFile) {
        this.fileIsCheck.forEach( f => {
          this.fileList.splice(this.files.indexOf(f), 1)
          this.files.splice(this.files.indexOf(f), 1)
        })
        this.selectAll = false
      }
      this.fileIsCheck = []
    },
    selectAllFiles() {
      if(this.hasFile) {
        if(!this.selectAll) {
          this.selectAll = true
          this.files.forEach( f => {
            this.fileIsCheck.push(f)
          })
        } else {
          this.selectAll = false
          this.fileIsCheck = []
        }
      }
    },
    upLoadFiles() {
      if(this.hasFile) {
        if(this.fileIsCheck.length > 0) {
          this.fileIsCheck.forEach( fc => {
            this.fileList.forEach( fs => {
              if(fs.name === fc) {
                const formData = new FormData()
                formData.append(fs.name, fs)
                /* 这里是要上传文件的逻辑,上传完成后将已上传的文件进行提示 
                 并且在上传过程中要以进度条的形式进行提示, 
                 而且最好有图片, 普通小文件, 大文件的三种上传选择方案, 
                 并自动根据文件的类型和大小自动选择,
                 父组件只需要传入相应的接口api对象即可
                */
              }
            })
          })
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.ha-file-input-container-default {
  display: flex;
  position: relative;
  height: 100%;
  width: 40%;
}
.ha-file-input-show-default {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
}
.ha-file-input-default {
  opacity: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.ha-file-upload-default, .ha-file-del-default, .ha-file-selectAll-default{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;
  cursor: pointer;
}
.ha-file-list-item-default {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 96%;
  height: 15%;
  margin: 2%;
}
.ha-file-list-check-container-default {
  height: 100%;
  width: 80%;
}
.ha-file-list-img-default {
  height: 100%;
  width: 20%;
}
</style>


