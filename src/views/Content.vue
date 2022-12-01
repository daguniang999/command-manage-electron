<template>
  <div id="content">
    <div v-for="item in commandData" v-bind:key="item.groupId">
      <c-card :title="item.name" :description="item.description"></c-card>
    </div>

    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off">

      </a-form>
    </a-modal>


  </div>
</template>

<script>
import axios from 'axios'
import { ref, watch } from 'vue'
import CCard from '../components/card/CCard.vue'
import { onMounted } from 'vue'
export default {
  setup () {
    const formState = ref({})
    const visible = ref(false)
    const commandData = ref({})


    const headStyle = {
      "height": "200px",
    }

    const getCommandList = () => {
      axios.get(`/back/command`).then(res => {
        if (res.data.code == 0) {
          commandData.value = res.data.data
        }
      }).catch(err => {
      })
    }

    let handleOk = () => {
      console.log("ok")
      console.log(formState.value.username)
    }

    let handlerClick = () => {
      visible.value = !visible.value
    }
  
    onMounted(() => {
      getCommandList()
    })

    return {
       handlerClick,
       visible,
       handleOk,
       formState,
       getCommandList,
       commandData,
       headStyle
    }
  }
}
</script>

<style lang="less" scoped>
  #content {
    display: flex;
    align-content: center;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 0px 10px 10px;
    flex-wrap: wrap;

    div {
      margin: 2px 5px;
    }
    background-color: transparent;
  }



</style>
