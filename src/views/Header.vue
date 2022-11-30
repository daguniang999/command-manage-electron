<template>
  <div id="header">
    <!-- 左边按钮 -->
    <div id="left_button">
      <a-button @click="handleSidebar">
        <svg-icon :name="'sidebar'"></svg-icon>
      </a-button>
      <a-button>
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
      <div>
        <a-button>
          <svg-icon name="plus"/>
        </a-button>
      </div>
      <div id="right_button">
        <a-popover trigger="click">
          <template #content>
            <div>
              <a-list size="small" bordered :data-source="['导入', '导出', '设置']">
                <template #renderItem="{ item }">
                  <a-list-item style="display: flex; align-items: center; justify-content: center; align-items: center">
                    <svg-icon :name="'plus'"></svg-icon>
                    <span>{{ item }}</span>
                  </a-list-item>
                </template>
                <!-- <template #header> -->
                <!--   <div>Header</div> -->
                <!-- </template> -->
                <!-- <template #footer> -->
                <!--   <div>Footer</div> -->
                <!-- </template> -->
              </a-list>
            </div>
            <!-- <Setting></Setting> -->
          </template>
          <a-button>
            <svg-icon :name="'setting'"></svg-icon>
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

  // const
  const store = mainStore()
  const { isOpen } = storeToRefs(store)
  const isSetting = ref(false)

  // function
  const handleClick_Setting = () => {
    isSetting.value = true
  }

  const handleSidebar = () => {
    isOpen.value = !isOpen.value
    console.log(isOpen.value)
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
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 0 10px;
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
    padding: 0;
  }

  #header #right_button {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-end;
    width: 100px;
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
    padding: 0;
  }

  #header #title {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 100%;
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
    left: calc(100% - 110px) !important;
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
</style>
