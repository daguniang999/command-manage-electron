<template>
  <div id="content">
    <div>
      <a-card title="Default size card" style="width: 300px">
        <template #extra><a href="#">more</a></template>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
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
    <div>
      <a-card title="Default size card" style="width: 300px">
        <template #extra><a href="#">more</a></template>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
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
    <div>
      <a-card title="Default size card" style="width: 300px">
        <template #extra><a href="#">more</a></template>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
    </div>

    <a-button @click="handlerClick">axios</a-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  setup () {

    let handlerClick = () => {
      axios.get(`/back/command/test`).then(res => {
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }

    return {
       handlerClick
    
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
