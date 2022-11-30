<template>
  <div id="sidebar">
    <a-tree
     :tree-data="groupTree"
    >
      <template #title="{ name, groupId, parentGroupId }">
        <span style="color: #1890ff">{{ name }}</span>
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
    height: 100%;
    overflow: auto;
  } 

</style>
