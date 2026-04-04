<script setup lang="ts">
import Blog from '../assets/blog.svg'
import Instagram from '../assets/instagram.svg'
import Linkedin from '../assets/linkedin.svg'
import Fire from '../assets/fire.svg'

const handleOpenLinkedIn=()=>{
  window.open('https://www.linkedin.com/in/sivagnanasowndaryar/', '_blank')
}

const handleOpenInsta=()=>{
  window.open('https://www.instagram.com/ammu_ramasubramanian/', '_blank')
}

const handleOpenBlogs=()=>{
  window.open('https://medium.com/@sivagnanasowndarya', '_blank')
}

</script>

<template>
  <div class="carddiv">
    <div class="carddiv__curve">
      <svg viewBox="0 0 200 200">
          <path
            d="M10 100 Q 100 180 180 100"
            fill="none"
            stroke="var(--redColor_2)"
            stroke-width="3"
            stroke-dasharray="8 8"
          />
        </svg>
      <div class="carddiv__fireOuter">
        <Fire class="carddiv__fireIcon"/>
      </div>
    </div>
    <div class="carddiv__imgouter">
     <img src="../assets/sowndImg.jpeg" class="carddiv__profileImg"/>
     <p class="carddiv__name">Sowndarya R</p>
    </div>
    <div>
        <p class="carddiv__subtext">A frontend software developer who enjoys solving new challenges every day.</p>
        <div class="carddiv__footercontainer">
          <div class="carddiv__footericonouter" @click="handleOpenBlogs">
            <Blog class="carddiv__footericon"/>
          </div>
          <div class="carddiv__footergap"/>
          <div class="carddiv__footericonouter" @click="handleOpenInsta">
            <Instagram class="carddiv__footericon"/>
          </div>
          <div class="carddiv__footergap"/>
          <div class="carddiv__footericonouter" @click="handleOpenLinkedIn">
            <Linkedin class="carddiv__footericon"/>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .carddiv{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: 470px;
    width: 260px;
    border-radius: 6px;
    padding:25px 15px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    margin-top:2%;
    position: fixed;

    &__imgouter{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__profileImg{
        width:180px;
        min-width: 180px;
        height: 190px;
        min-height: 190px;
        border-radius: 10px;
        object-fit: cover;
    }

    &__curve{
      position: absolute;
      top: 40%;
      left: -20%;
      width: 200px;
      height: 200px;
    }

    &__fireOuter{
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      min-width: 30px;
      height: 30px;
      min-height: 30px;
      border-radius: 30px;
      background-color: var(--redColor_2);
      right:0;
      top: 40%;
    }

    &__fireIcon{
      width:14px;
      height:14px;
      min-width: 14px;
      min-height: 14px;
      fill:white;
    }

    &__name{
        color:black;
        font-family: var(--poppins);
        font-weight: 700;
        font-size:1.4em;
        margin-top:12px;
    }

    &__subtext{
        color:rgba(0, 0, 0, 0.5);
        font-family: var(--poppins);
        font-weight: 500;
        font-size:0.8em;
        text-align: center;
    }

    &__footercontainer{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__footericonouter{
      width: 24px;
      min-width: 24px;
      min-height: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-top: 10px;
    }

    &__footergap{
      margin-right: 10px;
    }

    &__footericon{
      width:18px;
      min-width:18px;
      min-height:18px;
      height:18px;
      fill:var(--redColor);
    }
  }
</style>
