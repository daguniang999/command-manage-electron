<template>
  <div class="command">
    <a-form style="width: 100%; height: 100%">
      <div class="command-input">
        <div class="command-input-content">
          <input v-focus tabindex="1" @blur="handleBlur" @keyup.enter="handleTitle"/>
          <input tabindex="2"/>
          <textarea :hidden="hidden"/>
        </div>
        <div style="flex: 6"></div>
      </div>
    </a-form>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const handleBlur = () => {
    console.log("test")
  }

  const handleTitle = () => {
    hidden.value = false;
  }

  const hidden = ref(true);
</script>

<style lang="less" scoped>
.command {
  width: 100%;
  height: 100%;
  text-align: center;

  &-input {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
	  width: 100%;
	  height: 100%;

	  &-content {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      flex: 4;
	  }

	  input {
      width: 100%;
      text-align: center;
	    color: #343434;
	    font-weight: normal;
	    font-family: 'Ultra', sans-serif;   
	    font-size: 100px;
	    /*text-transform: uppercase;*/
	    text-shadow: 0 2px white, 0 3px #777;
	    border: none;
	    border-bottom: 1px solid #777;

	    &:focus {
	      outline: none;
	      background-color: red;
	    }

	    &:blur {
	      background-color: red;
	    }

	  }
  }

  &-desc {
    width: 400px;
    height: 200px;
    resize: none;
    border: none;
    border-radius: 5px;
    background-color: #eff0f2;
    padding: 10px;
    max-lines: 10;
    &:focus {
      outline: none;
    }
  }
}
</style>
