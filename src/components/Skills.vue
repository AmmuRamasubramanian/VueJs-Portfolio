<script setup lang="ts">

</script>

<template>
  <div class="skillsdiv">
    <p class="skillsdiv__title1">ENGINEERING</p>
    <p class="skillsdiv__title2">SKILLS</p>
  </div>
</template>

<style scoped lang="scss">
    .skillsdiv{
        display: flex;
        flex-direction: column;
        margin-top:5em;

        &__title1{
            color:white;
            font-size: 4em;
            font-family: var(--poppins);
            font-weight: 700;
        }

        &__title2{
            color:rgba(182, 181, 189, 0.2);
            font-size:4.2em;
            font-family: var(--poppins);
            font-weight: 700;
            margin-top:-20px;
        }
    }
  
</style>
