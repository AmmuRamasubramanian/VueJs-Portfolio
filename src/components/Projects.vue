<script setup lang="ts">
const projects = [
  {
    id:1,
    title: "Real-Time Chat System",
    description: "Built a scalable chat platform with real-time messaging using WebSockets, supporting one-on-one and group conversations.Implemented audio/video calls, media sharing, message management, and interactive UI with live updates."
  },
  {
    id:2,
    title: "Meeting Scheduling Platform",
    description:"Developed a cross-platform scheduling system (Web & Mobile) with real-time booking, availability management, and shareable links.Handled end-to-end architecture, UI/UX, API integration, and synchronization across platforms."
  },
  {
    id:3,
    title: "Custom Charting Library",
    description: "Built a reusable charting system using Rough.js with bar, pie, and stacked charts for web and mobile.Focused on performance, customization, and unique hand-drawn style visualizations."
  }
]
</script>

<template>
  <div class="projectsdiv">
    <p class="projectsdiv__title1">REAL-TIME</p>
    <p class="projectsdiv__title2">PROJECTS</p>
    <div 
        v-for="(projItem, projIndex) in projects"
        :key="projItem.id"
    >
        <div :class="{
            'projectsdiv__projItem':projIndex!=0,
            'projectsdiv__projItem--marginTopGap':projIndex==0
        }">
            <p class="projectsdiv__projName">{{ projItem.title }}</p>
            <p class="projectsdiv__projdesc">{{ projItem.description }}</p>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .projectsdiv{
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

        &__projItem{
            margin-top: 30px;
            &--marginTopGap{
                margin-top:10px;
            }
        }

        &__projName{
            color:white;
            font-size: 1.4em;
            font-family: var(--poppins);
            font-weight: 600;
        }

        &__projdesc{
            color:#998F8F;
            font-size: 0.82em;
            font-family: var(--poppins);
            font-weight: 400;
            margin-top:4px;
            line-height: 22px;
        }

        &__projtimeline{
            color:#998F8F;
            font-size: 0.85em;
            font-family: var(--poppins);
            font-weight: 400;
            margin-top:12px;
            line-height: 22px;
        }
    }
  
</style>
