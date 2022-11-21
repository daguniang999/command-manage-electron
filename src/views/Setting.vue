<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 200px;"
    mode="vertical"
    @click="handleClick">

    <a-menu-item key="1">
      <template #icon>
        <MailOutlined />
      </template>
      导入
    </a-menu-item>
    <a-menu-item key="2">
      <template #icon>
        <CalendarOutlined />
      </template>
      导出
    </a-menu-item>
    <a-menu-item key="3">
      <template #icon>
        <CalendarOutlined />
      </template>
      设置
    </a-menu-item>
  </a-menu>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const state = reactive({
      selectedKeys: [],
      openKeys: [],
    });
    const handleClick = menuInfo => {
      console.log('click ', menuInfo);
    };
    return {
      ...toRefs(state),
      handleClick,
    };
  },
});
</script>
