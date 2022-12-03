<template>
  <div class="command">
    <a-form style="width: 100%; height: 100%">
      <div class="command-input">
        <div class="command-input-content">
          <input v-focus tabindex="1" @keydown.enter="handleEnter" @keydown.tab="handleTabOut" @keyup.tab="handleTabIn" placeholder="请输入" />
          <textarea class="command-input-comment" @keydown.tab="handleComment"></textarea>
        </div>
        <div style="flex: 6"></div>
      </div>
    </a-form>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const theme = reactive({
    fontSize: '60px',
  })

  const handleEnter = () => {
    theme['fontSize'] = '60px';
    hidden.value = false;
  }

  const handleTabIn = () => {
    theme['fontSize'] = '100px';
    hidden.value = true;
  }

  const handleTabOut = () => {
    theme['fontSize'] = '60px';
    hidden.value = false;
  }

  const handleComment = () => {
    router.push('home')
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

	  &-comment {}

	  input {
      width: 100%;
      text-align: center;
	    color: #343434;
	    font-weight: normal;
	    font-family: 'Ultra', sans-serif;   
	    font-size: v-bind('theme.fontSize');
	    /*text-transform: uppercase;*/
	    text-shadow: 0 2px white, 0 3px #777;
	    border: none;
	    border-bottom: 1px solid #777;
	    background-color: v-bind('theme["background-color"]');
	    transition: all 0.7s;
	    &:focus {
	      outline: none;
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
