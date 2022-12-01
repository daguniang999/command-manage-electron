<script setup>
  import Home from './views/Home.vue'
  import Header from './views/Header.vue'
</script>

<template>
  <div id="home" style="height: 100%; width: 100%">
    <div class="app-head">
      <Header></Header>
    </div>
    <div class="app-view">
      <router-view/>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app-head {
  width: 100%;
  height: 40px;
} 

.app-view {
  width: 100%;
  min-width: 600px;
  height: calc(100% - 40px);
  overflow: auto;
}
</style>
