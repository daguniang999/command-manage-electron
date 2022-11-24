<template>
  <div id="sidebar">
    <a-menu
      mode="inline">
      <a-menu-item key="1">
        1
      </a-menu-item>
      <a-menu-item key="2">
        2
      </a-menu-item>
      <a-sub-menu key="3" title="tree">
        <a-menu-item key="4">
          4
        </a-menu-item>
        <a-sub-menu title="ff">
          <a-menu-item key="5">
            4
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>

  </div>
</template>

<script>
export default {
  setup () {

    return {}
  }
}
</script>

<style lang="less" scoped>
  #siderbar {
    height: 100%;
  } 

</style>
