<template>
  <div class="command">
    <div class="button_space">
      <a-button @click="commandVisiable = true"> 添加命令 </a-button>
      <a-button @click="argVisible = true"> 添加参数 </a-button>
    </div>
    <div class="command_dialog">
      <a-modal
        v-model:visible="commandVisiable"
        title="命令弹框"
        ok-text="添加"
        cancel-text="取消"
        @ok="handleCommand"
      >
        <a-form :model="commandData">
          <a-form-item :hidden="true" name="commandId"> </a-form-item>
          <a-form-item
            label="分组"
            name="groupId"
            :rules="[{ required: true, message: '请选择分组' }]"
          >
            <!-- <a-tree-select -->
            <!--   v-model:value="commandData.groupId" -->
            <!--   placeholder="Please select" -->
            <!--   :tree-data="groupData.data" -->
            <!-- > -->
            <!-- </a-tree-select> -->
            <a-tree-select
              v-model:value="commandData.groupId"
              show-search
              style="width: 100%"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              placeholder="请选择"
              allow-clear
              tree-default-expand-all
              :tree-data="groupData.data"
              :fieldNames="{ value: 'groupId' }"
            >
              <template #title="{ groupId, name }">
                {{ name }} {{ groupId }}
              </template>
            </a-tree-select>
          </a-form-item>

          <a-form-item
            label="命令名称"
            name="name"
            :rules="[{ required: true, message: '请输入命令名称' }]"
          >
            <a-input v-model:value="commandData.name" />
          </a-form-item>
          <a-form-item
            label="命令描述"
            name="description"
            :rules="[{ required: true, message: '请输入描述信息' }]"
          >
            <a-textarea v-model:value="commandData.description" />
          </a-form-item>
        </a-form>
      </a-modal>
    </div>

    <div class="arg_dialog">
      <a-modal
        v-model:visible="argVisible"
        title="参数弹框"
        ok-text="添加"
        cancel-text="取消"
        @ok="handleArg"
      >
        <a-form :model="argData">
          <a-form-item :hidden="true" name="commandId"> </a-form-item>
          <a-form-item :hidden="true" name="commandArgId"> </a-form-item>
          <a-form-item
            label="参数名称"
            name="name"
            :rules="[{ required: true, message: '请输入参数名称' }]"
          >
            <a-input v-model:value="argData.name" />
          </a-form-item>
          <a-form-item
            label="参数类型"
            name="type"
            :rules="[{ required: true, message: '请输入参数类型' }]"
          >
            <a-input v-model:value="argData.type" />
          </a-form-item>
          <a-form-item
            label="参数名称"
            name="symbol"
            :rules="[{ required: true, message: '请输入分隔符' }]"
          >
            <a-input v-model:value="argData.symbol" />
          </a-form-item>
          <a-form-item
            label="顺序"
            name="sequence"
            :rules="[{ required: true, message: '请输入顺序' }]"
          >
            <a-input v-model:value="argData.sequence" />
          </a-form-item>
          <a-form-item
            label="描述"
            name="description"
            :rules="[{ required: true, message: '请输入描述' }]"
          >
            <a-input v-model:value="argData.description" />
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import ArgCard from "../components/card/ArgCard.vue";

// 变量
const commandVisiable = ref(true);
const argVisible = ref(false);
const groupData = reactive({
  data: [],
});

const commandData = reactive({
  commandId: "1",
  groupId: "",
  name: "",
  description: "",
});
const commandId = ref();
const argData = reactive({
  commandId: "1",
  commandArgId: "2",
  name: "",
  type: "",
  symbol: "",
  sequence: "",
  description: "",
});

const getGroupTree = () => {
  axios
    .get("/back/group/tree")
    .then((res) => {
      if (res.data.code == 0) {
        console.log(res.data.data);
        groupData.data = res.data.data;
      }
    })
    .catch((err) => {
      console.log("err");
    });
};

onMounted(() => {
  console.log("mount");
  getGroupTree();
});

// 提交命令
const handleCommand = () => {
  axios
    .post("/back/command", commandData)
    .then((res) => {
      if (res.data.code == 0) {
        commandId.value = res.data.data;
        console.log(commandId.value);
      }
    })
    .catch((err) => {});
};

// 提交参数
const handleArg = () => {
  argData.commandId = commandId;
  axios
    .post("/back/arg", argData)
    .then((res) => {
      if (res.data.code == 0) {
      }
    })
    .catch((err) => {});
};
</script>

<style lang="less" scoped>
.button_space {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.command_dialog {
  width: 100%;
  height: 100%;
}

.arg_dialog {
  width: 100%;
  height: 100%;
}
</style>
