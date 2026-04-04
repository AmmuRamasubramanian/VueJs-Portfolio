<script setup lang="ts">
import CardComponent from './CardComponent.vue';
import Flask from '../assets/flask.svg'
import Table from '../assets/table.svg'
import ArrowRight from '../assets/arrow-right.svg'
import Experience from './Experience.vue';
import Projects from './Projects.vue';
import Skills from './Skills.vue';
import { useRouter } from 'vue-router';

const router=useRouter()

const handleNavigateExperience=()=>{
  router.push('/experience')
}

</script>

<template>
  <div class="homepageDiv">
    <CardComponent/>
    <div class="homepageDiv__margingap"/>
    <div class="homepageDiv__scrolldiv">
      <p class="homepageDiv__title1">FRONTEND</p>
      <p class="homepageDiv__title2">DEVELOPER</p>
      <p  class="homepageDiv__descText">Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</p>
      <div class="homepageDiv__projdiv">
        <div class="homepageDiv__expflex">
          <p class="homepageDiv__expText">+4.7</p>
          <p class="homepageDiv__expsubtext">YEARS OF EXPERIENCE</p>
        </div>
        <div class="homepageDiv__expGap"/>
        <div class="homepageDiv__expflex">
          <p class="homepageDiv__expText">+10</p>
          <p class="homepageDiv__expsubtext">REAL TIME FEATURES</p>
        </div>
        <div class="homepageDiv__expGap"/>
        <div class="homepageDiv__expflex">
          <p class="homepageDiv__expText">+4</p>
          <p class="homepageDiv__expsubtext">PLATFORM EXPERIENCE</p>
        </div>
      </div>
      <div class="homepageDiv__expAndProjflex">
        <div class="homepageDiv__expDiv">
          <Flask class="homepageDiv__flaskicon"/>
          <p class="homepageDiv__expBoxText">EXPLORE MY EXPERIENCE AND JOURNEY</p>
          <div class="homepageDiv__arrowOuter" @click="handleNavigateExperience">
            <ArrowRight class="homepageDiv__arrowRightIcon"/>
          </div>
        </div>
        <div class="homepageDiv__expAndProjgap"></div>
        <div class="homepageDiv__projBoxDiv">
          <Table class="homepageDiv__tableicon"/>
          <p class="homepageDiv__projtext">EXPLORE MY PROJECTS AND WHAT I’VE BUILT</p>
          <div class="homepageDiv__arrowOuterOfproj">
            <ArrowRight class="homepageDiv__arrowRightIconOfProj"/>
          </div>
        </div>
      </div>
      <!-- //--------------------------- -->
      <Experience/>
      <!-- //--------------------------- -->
      <Projects/>
      <!-- //--------------------------- -->
      <Skills/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .homepageDiv{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-top:3em;

    &__margingap{
      margin-right: 350px;
    }

    &__scrolldiv{
      display: flex;
      flex-direction: column;
    }

    &__projdiv{
      display: flex;
      align-items: center;
    }

    &__title1{
      color:white;
      font-size: 5.2em;
      font-family: var(--poppins);
      font-weight: 700;
    }

    &__title2{
      color:rgba(182, 181, 189, 0.2);
      font-size:5.2em;
      font-family: var(--poppins);
      font-weight: 700;
      margin-top:-35px;
    }

    &__descText{
      color:#998F8F;
      font-family: var(--poppins);
      font-size: 0.9em;
      max-width: 450px;
      line-height: 25px;
    }

    &__projdiv{
      margin-top: 25px;
      display: flex;
      align-items: center;
    }

    &__expGap{
      margin-left: 50px;
    }

    &__expflex{
      display: flex;
      flex-direction: column;
    }

    &__expsubtext{
      color:#998F8F;
      font-family: var(--poppins);
      font-size: 0.94em;
      max-width: 100px;
      line-height: 24px;
      margin-top: -5px;
    }

    &__expText{
      color:white;
      font-family: var(--poppins);
      font-size: 3.3em;
      font-weight: 600;
    }

    &__expAndProjflex{
      display: flex;
      align-items: center;
      flex-direction: row;
      width:90%;
      margin-top: 2.3em;
    }

    &__expDiv{
      background:linear-gradient(135deg, #C24E2A, #F08A5D);
      height: 160px;
      min-height: 160px;
      border-radius: 15px;
      width: 47%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0px 12px;
      position: relative;
    }

    &__projBoxDiv{
      background: linear-gradient(135deg, #6DBE45, #B4EC51);
      height: 160px;
      min-height: 160px;
      border-radius: 15px;
      width: 47%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0px 12px;
      position: relative;
    }

    &__expAndProjgap{
      margin-right: 15px;
    }

    &__flaskicon{
      width:24px;
      height:24px;
      min-width: 24px;
      min-height: 24px;
      fill:white
    }

    &__tableicon{
      width:24px;
      height:24px;
      min-width: 24px;
      min-height: 24px;
      fill:black
    }

    &__expBoxText{
      color:white;
      font-family: var(--poppins);
      font-size: 0.9em;
      margin-top:10px;
      font-weight: 500;
    }

    &__projtext{
      color:black;
      font-family: var(--poppins);
      font-size: 0.9em;
      margin-top:10px;
      font-weight: 500;
    }

    &__arrowOuter{
      position: absolute;
      right: 12px;
      bottom: 12px;
      border-color: white;
      border-style: solid;
      border-width: 0.8px;
      height: 24px;
      min-height: 24px;
      width: 24px;
      min-width: 24px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
    }

    &__arrowOuterOfproj{
      position: absolute;
      right: 12px;
      bottom: 12px;
      border-color: black;
      border-style: solid;
      border-width: 0.8px;
      height: 24px;
      min-height: 24px;
      width: 24px;
      min-width: 24px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    &__arrowRightIcon{
      width: 12px;
      height: 12px;
      min-width: 12px;
      min-height: 12px;
      fill:white;
    }

    &__arrowRightIconOfProj{
      width: 12px;
      height: 12px;
      min-width: 12px;
      min-height: 12px;
      fill:black;
    }
  }
</style>
