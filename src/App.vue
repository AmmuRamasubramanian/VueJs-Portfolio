<script setup lang="ts">
</script>

<template>
  <div class="contentdiv">
    <div class="contentdiv__container">
     <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .contentdiv{
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    flex:1;
    background-color: var(--primarybgColor);

    &__container{
      width: 950px; 
      max-width: 950px;
      display: flex;
      align-self: center;
      flex-direction: column;
      height: 100vh;
    }
  }
  
</style>
