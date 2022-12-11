<template>
  <div class="command">
    <a-form style="width: 100%; height: 100%">
      <div class="command-title">
        <input
          v-focus
          tabindex="1"
          @keydown.tab="handleInputTab"
          @keyup.enter="handleInputEnter"
        />
        <textarea
          ref="comment"
          tabindex="2"
          @focus="handlerCommentFocus"
          @keyup.tab="handleCommentTab"
          @keydown.tab="handleCommentTabOut"
          @keydown.enter="handleCommentEnter"
          @blur="handleCommentBlur"
        />
      </div>
      <a-button tabindex="3" @click="handlerAdd">+</a-button>
      <div class="command-arg">
        <div class="command-arg-content">
          <a-table
            :columns="argHeader"
            :dataSource="argData"
            :pagination="false"
          >
            <template #headerCell="{ column }">
              <span style="text-align: center">{{ column.name }}</span>
            </template>
            <template #bodyCell="{ column, record }">
              <div v-if="column.dataIndex == 'symbol'">
                <a-input v-model:value="record.symbol"></a-input>
              </div>

              <div v-if="column.dataIndex == 'arg'">
                <a-input v-model:value="record.arg"></a-input>
              </div>

              <div v-if="column.dataIndex == 'description'">
                <a-input v-model:value="record.description"></a-input>
              </div>
            </template>
          </a-table>
        </div>
      </div>
    </a-form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import ArgCard from "../components/card/ArgCard.vue";

const comment = ref(null);
const argHeader = reactive([
  {
    name: "连接符",
    key: "symbol",
    dataIndex: "symbol",
  },
  {
    name: "参数",
    key: "arg",
    dataIndex: "arg",
  },
  {
    name: "描述",
    key: "description",
    dataIndex: "description",
  },
]);

const argData = reactive([
  {
    key: "1",
    symbol: "1",
    arg: "ls",
    description: "范德萨法",
  },
]);

const handlerAdd = () => {
  argData.push({
    key: "2",
    symbol: "2",
    arg: "fdsf",
    description: "范法",
  });
};

// 标题样式
const themeTitle = reactive({
  height: "40%",
});

const themeInput = reactive({
  fontSize: "100px",
  borderWidth: "100%",
});

// 参数样式
const themeArg = reactive({});

const themeComment = reactive({
  width: "0px",
  height: "0px",
  border: "none",
  font: "#1c1f25",
});

const themeDivider = reactive({
  width: "0px",
});

const handleInputTab = () => {
  themeInput.fontSize = "60px";
  themeComment.height = "200px";
  themeInput.border = "0px";
  themeComment.border = "1px solid #777";
  themeComment.width = "100%";
  themeComment.height = "100px";
};

const handleInputEnter = () => {
  themeInput.fontSize = "60px";
  themeComment.height = "200px";
  themeComment.width = "100%";
  themeComment.height = "100px";
  themeComment.border = "1px solid #777";
  comment.value.focus();
};

const handleCommentEnter = () => {};

const handleCommentTab = () => {
  themeComment.font = "#1c1f25";
  themeComment.border = "1px solid #777";
};

const handleCommentBlur = () => {
  themeComment.height = "100px";
  themeComment.width = "80%";
  themeComment.border = "none";
  themeComment.font = "#e9e9e9";
};

const handlerCommentFocus = () => {
  themeComment.width = "80%";
  themeComment.height = "200px";
  themeComment.border = "1px solid #777";
  themeComment.font = "#1c1f25";
};

const handleCommentTabOut = () => {
  themeDivider.width = "70%";
  themeInput.fontSize = "100px";
  themeComment.border = "none";
  themeComment.font = "#e9e9e9";
};
</script>

<style lang="less" scoped>
.command {
  width: 100%;
  height: 100%;
  overflow: auto;

  &-divider {
    width: v-bind("themeDivider.width");
    transition: all 0.7s;
    height: 0.1px;
    background-color: black;
  }

  &-title {
    width: 100%;
    height: v-bind("themeTitle.height");
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    flex-direction: column;

    input {
      width: 80%;
      text-align: center;
      color: #343434;
      font-weight: normal;
      font-family: "Ultra", sans-serif;
      font-size: v-bind("themeInput.fontSize");
      text-shadow: 0 2px white, 0 3px #777;
      border: none;
      /*border-bottom: 0.1px solid #777;
	    border-bottom: v-bind('themeInput.borderWidth');*/
      transition: all 0.7s;
      &:focus {
        outline: none;
        font-size: 100px;
      }
    }
    textarea {
      width: v-bind("themeComment.width");
      height: v-bind("themeComment.height");
      margin-top: 10px;
      resize: none;
      border-radius: 5px;
      transition: all 0.7s;
      font-size: 20px;
      padding: 10px;
      text-align: center;
      border: v-bind("themeComment.border");
      color: v-bind("themeComment.font");
      overflow: hidden;

      &:focus {
        outline: none;
        transition: all 0.7s;
      }
    }
  }

  &-arg {
    width: 100%;
    height: v-bind("themeArg.height");
    padding: 10px;
    flex: 1;

    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &-content {
      border: 1px solid #777;
      border-radius: 4px;
      width: 80%;
      height: 400px;
      margin: 10px;

      &-empty {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
      }

      &-header {
        display: flex;
        align-content: center;
        align-items: center;
        justify-items: center;
        justify-content: space-between;
      }
    }
  }
}
</style>
