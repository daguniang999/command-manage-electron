<template>
  <div id="header">
    <!-- 左边按钮 -->
    <div id="left_button">
      <a-button @click="handleHome" tabindex="-1">
        <svg-icon :name="'home'"></svg-icon>
      </a-button>
      <a-button @click="handleSidebar" tabindex="-1">
        <svg-icon :name="'sidebar'"></svg-icon>
      </a-button>
      <a-button @click="handleAdd" tabindex="-1">
        <svg-icon :name="'plus'"></svg-icon>
      </a-button>
    </div>

    <!-- 标题 -->
    <div id="title">
      <div id="title_content">
        <span>Command-Manage</span>
      </div>
    </div>

    <!-- 右侧按钮 -->
    <div class="head-right">
      <div id="right_button">
        <a-popover> 
          <!-- <template #content> -->
          <!--   <div> -->
          <!--     <a-list size="small" bordered :data-source="['导入', '导出', '设置']"> -->
          <!--       <template #renderItem="{ item }"> -->
          <!--         <a-list-item style="display: flex; align-items: center; justify-content: center; align-items: center"> -->
          <!--           <svg-icon :name="'plus'"></svg-icon> -->
          <!--           <span>{{ item }}</span> -->
          <!--         </a-list-item> -->
          <!--       </template> -->
          <!--     </a-list> -->
          <!--   </div> -->
          <!-- </template> -->
          <a-button @click="handleRefresh" tabindex="-1">
            <svg-icon name="refresh"></svg-icon>
          </a-button>
          <a-button tabindex="-1">
            <svg-icon name="setting"></svg-icon>
          </a-button>
        </a-popover>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { mainStore } from '../store/index'
  import { storeToRefs } from 'pinia'
  import { reactive, ref } from 'vue'
  import Setting from './Setting.vue'
  import { useRouter } from 'vue-router'

  // const
  const router = useRouter()
  const store = mainStore()
  const { isOpen } = storeToRefs(store)
  const isSetting = ref(false)

  const handleSetting = () => {
    isSetting.value = true
  }

  const handleSidebar = () => {
    isOpen.value = !isOpen.value
  }

  const handleAdd = () => {
    router.push('/command') 
  }

  const handleHome = () => {
    router.push('/home')
  }

  const handleRefresh = () => {
    console.log("refresh")
  }




</script>


<style lang="less">
  #header {
    height: 40px;
    padding:0 10px 0 80px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    align-content: center;
    border-bottom: solid 1px #c5c5c5;
    -webkit-app-region: drag;
  }

  #header #left_button {
    display: flex;
    align-items: flex-start;
    align-content: center;
    justify-content: flex-start;
    padding: 0 10px;
    min-width: 200px;
  }

  #header #left_button button {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    border: none;
    background: transparent;
    height: 40px; 
    width: 40px;
    padding: 4px;
    border-radius: 10px;
    background-clip: content-box;

  }

  #header #right_button {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-end;
    width: 280px;
  }

  #header #right_button button {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    border: none;
    background: transparent;
    height: 40px; 
    width: 40px;
    padding: 4px;
    border-radius: 10px;
    background-clip: content-box;
  }

  #header #title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    left: 100px;
    height: 100%;
  }

  #header #title #title_content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    white-space: nowrap;
  }

  #header #title #title_content span {
    padding: 0 3px;
  }

  .ant-popover-arrow {
    display: none !important;
  }

  .ant-popover-inner-content {
     padding: 5px !important;
     border-radius: 10px;
  }

  .ant-popover-inner {
    border: solid 1px #c5c5c5;
    border-radius: 10px !important;
  }

  .ant-popover-placement-bottom, .ant-popover-placement-bottomLeft, .ant-popover-placement-bottomRight {
    padding-top: 5px !important;
    left: calc(100% - 95px) !important;
  }
  
  .ant-list-bordered {
    border: none !important;
  }

  .head-right {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: right;
  }

  button[ant-click-animating-without-extra-node]:after {
    border: 0 none;
    opacity: 0;
    animation:none 0 ease 0 1 normal;
    outline:none;
  }
  .ant-btn:hover  {
    color: black !important;
    border-color: #e7e5eb !important;
    background-color: #eaf0f6 !important;
  }
  .ant-btn:focus {
    color: black !important;
    border-color: #e7e5eb !important;
  }
</style>
