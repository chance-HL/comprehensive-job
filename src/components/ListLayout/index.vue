<template>
  <div class="list_layout_wrapper">
    <div class="conditions">
      <slot name="header" />
    </div>
    <div class="list-box">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list_layout_wrapper {
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 100%;
    .conditions{
        width: 100%;
        margin-bottom:20px
    }
    .list-box{
         width: 100%
    }
}
</style>
