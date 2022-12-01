
<template>
  <div class="home" style="height: 100%; width: 100%">
        <!-- <Header></Header> -->
      <div class="home-content">
        <div class="home-left" :hidden="isOpen">
          <SideBar></SideBar>
        </div>
        <div class="home-right">
          <Content></Content>
        </div>
      </div>
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
.home-content {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;

}

.home-left {
  width: 200px;
  height: 100%;
  border-right: 1px solid #b5b5b5;
  overflow: auto;
}

.home-right {
  flex: 1;
  height: 100%;
  overflow: auto;
}

</style>
