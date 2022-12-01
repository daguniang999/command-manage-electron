<template>
  <div id="sidebar">
    <div style="width: 100%">
      <a-button style="width: 100%">+</a-button>
    </div>
    <a-tree
     :tree-data="groupTree"
    >
      <template #title="{ name }">
        <span>{{ name }}</span>
      </template>    
    </a-tree>
  </div>
</template>

<script>
import axios from 'axios'
import { ref, onMounted } from 'vue'

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
  width: 100%;
  height: 100%;
} 

.ant-btn {
  border-top: none;
  border-left: none;
  border-right: none;
}

</style>
