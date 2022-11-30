
<template>
  <div id="home" style="height: 100%; width: 100%">
    <a-layout>
      <a-layout-header>
        <Header></Header>
      </a-layout-header>
      <a-layout>
        <a-layout-sider :hidden="isOpen">
          <SideBar></SideBar>
        </a-layout-sider>

        <a-layout>
          <a-layout-content>
            <Content></Content>
          </a-layout-content>
        </a-layout>
      </a-layout>

    </a-layout>
  </div>
</template>

<script setup>
  import Header from './Header.vue'
  import SideBar from './SideBar.vue'
  import Dialog from './Dialog.vue'
  import Content from './Content.vue'
  import { mainStore } from '../store/index'
  import { storeToRefs } from 'pinia'

  const store = mainStore()
  const { isOpen } = storeToRefs(store)



</script>

<style lang="less" scoped>
  
  .ant-layout {
    height: 100%;
    overflow: auto;
    background: transparent;
  }

  .ant-layout-header {
    padding: 0;
    height: 40px;
  }
  .ant-layout-sider {
    background: #eae8ee;
    border-right: solid 1px #c5c5c5;
  }
</style>
