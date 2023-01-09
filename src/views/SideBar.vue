<template>
  <div id="sidebar">
    <div style="width: 100%">
      <a-button style="width: 100%" @click="commandGroupVisiable = true"
        >+</a-button
      >
    </div>
    <a-tree :tree-data="groupTree">
      <template #title="{ name }">
        <span>{{ name }}</span>
      </template>
    </a-tree>
  </div>

  <div class="command_group_dialog">
    <a-modal
      v-model:visible="commandGroupVisiable"
      title="添加分组"
      ok-text="添加"
      cancel-text="取消"
      @ok="handleCommandGroup"
    >
      <a-form ref="groupForm" :model="commandGroupData">
        <a-form-item
          :hidden="true"
          name=""
          v-model:value="commandGroupData.groupId"
        >
        </a-form-item>
        <a-form-item
          label="父分组"
          name="parentGroupId"
          :rules="[{ required: true, message: '请选择分组' }]"
        >
          <a-tree-select
            v-model:value="commandGroupData.parentGroupId"
            show-search
            style="width: 100%"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="请选择"
            allow-clear
            :height="233"
            tree-default-expand-all
            :tree-data="groupTree"
            :fieldNames="{ value: 'groupId' }"
          >
            <template #title="{ name }">
              {{ name }}
            </template>
          </a-tree-select>
        </a-form-item>
        <a-form-item
          label="命令名称"
          name="name"
          :rules="[{ required: true, message: '请输入命令名称' }]"
        >
          <a-input v-model:value="commandGroupData.name" />
        </a-form-item>
        <a-form-item
          label="命令描述"
          name="description"
          :rules="[{ required: true, message: '请输入描述信息' }]"
        >
          <a-textarea v-model:value="commandGroupData.description" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, reactive } from "vue";
import { message } from "ant-design-vue";

export default {
  setup() {
    const groupForm = ref();
    const commandGroupVisiable = ref(false);
    const commandGroupData = reactive({
      groupId: "",
      parentGroupId: "",
      name: "",
      description: "",
    });

    const groupTree = ref();
    // 获取分组树
    const getGroupTree = () => {
      axios
        .get("/back/group/tree")
        .then((res) => {
          if (res.data.code == 0) {
            groupTree.value = res.data.data;
          }
        })
        .catch((err) => {
          message.err("获取失败");
        });
    };

    // 添加分组
    const handleCommandGroup = () => {
      groupForm.value
        .validateFields()
        .then((res) => {
          axios
            .post("/back/group", commandGroupData)
            .then((res) => {
              if (res.data.code == 0) {
                message.success("添加成功");
              }
            })
            .catch((err) => {
              message.error("添加失败");
            });
        })
        .catch(() => {});
    };

    onMounted(() => {
      getGroupTree();
    });

    return {
      groupTree,
      getGroupTree,
      commandGroupVisiable,
      commandGroupData,
      handleCommandGroup,
      groupForm,
    };
  },
};
</script>

<style lang="less" scoped>
#siderbar {
  width: 100%;
  height: 100%;
}

.ant-btn {
  border-top: none;
  border-left: none;
  border-right: none;
}
</style>
