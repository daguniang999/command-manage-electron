<template>
  <div id="sidebar">
    <a-menu v-model="groupTree" mode="inline">
      <template v-for="item in groupTree">
        <a-menu-item>
          <span>{{ item.name }}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script>
import axios from 'axios'
import {
  ref,
  onMounted
} from 'vue'


export default {
  setup () {
    const groupTree = ref()
    const getGroupTree = () => {
      axios.get('/back/group/tree').then(res => {
        if (res.data.code == 0) {
          groupTree.value = res.data.data
        }
      }).catch(err => {
        console.log("err")
      })
    }

    onMounted (() => {
      getGroupTree()
    })

    return {
      groupTree,
      getGroupTree,
    }
  }
}
</script>

<style lang="less" scoped>
  #siderbar {
    height: 100%;
    overflow: auto;
  } 

</style>
