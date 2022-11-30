<template>
  <div id="content">
    <div>
      <a-card title="Default size card" style="width: 300px">
        <template #extra><a href="#">less</a></template>
        <p>card vvvvvvvvv</p>
        <p>fdasf</p>
        <p>cardttttcontent</p>
      </a-card>
    </div>
    <div>
      <a-card title="Default size card" style="width: 300px">
        <template #extra><a href="#">more</a></template>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
    </div>

    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>
      </a-form>
    </a-modal>

    <a-button @click="handlerClick">axios</a-button>
  </div>
</template>

<script>
import axios from 'axios'
import { ref, watch } from 'vue'
export default {
  setup () {
    const formState = ref({})
    const visible = ref(false)

    watch(visible, () => {
      console.log(visible.value) 
    })

    let handleOk = () => {
      console.log("ok")
      console.log(formState.value.username)
    }

    let handlerClick = () => {
      visible.value = !visible.value
    }

    return {
       handlerClick,
       visible,
       handleOk,
       formState
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
    padding: 10px 10px;
    flex-wrap: wrap;

    div {
      margin: 2px 5px;
    }
    background-color: transparent;
  }



</style>
