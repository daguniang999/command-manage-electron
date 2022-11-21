<script setup>
  import Header from './Header.vue'
  import SideBar from './SideBar.vue'
  import Dialog from './Dialog.vue'
</script>

<template>
  <div style="height: 100%">
    <a-layout>
      <a-layout-header>
        <Header></Header>
      </a-layout-header>

      <a-layout>
        <a-layout-sider>
          <SideBar></SideBar>
        </a-layout-sider>

        <a-layout>
          <a-layout-content>
            <span>test</span>
          </a-layout-content>
        </a-layout>
      </a-layout>

    </a-layout>

    <!-- <Dialog></Dialog> -->

  </div>
</template>

<style lang="less" scoped>
  .ant-layout {
    height: 100%;
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
