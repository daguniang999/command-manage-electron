<template>
  <div class="card">
    <div class="card-head">
      <div class="card-head-title">
        <slot v-if="$slots.title" name="title"></slot>
        <span v-else>{{ title }}</span>
      </div>
      <div class="card-head-btn">
        <svg-icon name="detail"></svg-icon>
      </div>
    </div>

    <div class="card-content">
      {{ description }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CCard',
  data() {
    return {

    }
  },
  props: ['title', 'description']
})
</script>

<style lang="less"  scoped>
.card {
  width: 200px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content:  center;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: white;
}

.card-head {
  width: 100%;
  height: 40px; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  box-sizing: border-box;
  border-bottom: 1px solid #bdbebe;

  .card-head-title {
    width: 80%;
    height: 100%;
    padding: 1px 2px;
    box-sizing: border-box;
    margin: 1px;
    font-size: 14px;
  }

  .card-head-btn {
    width: 20%;
    height: 100%;
    padding: 1px 2px;
    box-sizing: border-box;
    margin: 1px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
}

.card-content {
  margin-top: 1px;
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
}
</style>
