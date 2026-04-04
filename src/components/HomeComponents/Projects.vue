<script setup lang="ts">
import MeetingImg from '../../assets/meetingImg.jpeg'
import ChatImg from '../../assets/chatImg.jpeg'
import ChartImg from '../../assets/chartImg.jpeg'
import Arrowupright from '../../assets/arrowupright.svg'

const projects = [
  {
    id: 1,
    avatar: ChatImg,
    title: "Real-Time Chat System",
    description: "Built a real-time chat platform with messaging, calls, media sharing, and interactive UI."
  },
  {
    id: 2,
    avatar: MeetingImg,
    title: "Meeting Scheduling Platform",
    description: "Developed a cross-platform scheduling system with real-time booking and availability management."
  },
  {
    id: 3,
    avatar: ChartImg,
    title: "Custom Charting Library",
    description: "Created a reusable charting system with customizable, hand-drawn style visualizations."
  },
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
        <div :class="[
            'projectsdiv__projItem',
            {'projectsdiv__projItem--marginTopGap':projIndex==0}
        ]">
            <div class="projectsdiv__projinneritem">
            <div class="projectsdiv__avatarOuter">
                <img :src="projItem.avatar" class="projectsdiv__avatar"/>
            </div>
            <div class="projectsdiv__projinnerdiv">
            <p class="projectsdiv__projName">{{ projItem.title }}</p>
            <p class="projectsdiv__projdesc">{{ projItem.description }}</p>
            </div>
            </div>
            <div>
                <Arrowupright class="projectsdiv__arrowupright"/>
            </div>
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

        &__avatarOuter{
            background-color: rgba(182, 181, 189, 0.2);
            padding:1px;
            border-radius: 10px;
            align-items: center;
            display: flex;
        }

        &__avatar{
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
            object-fit: cover;
            border-radius: 10px;
        }

        &__projinnerdiv{
            display: flex;
            flex-direction: column;
            margin-left:20px;
        }

        &__projItem{
            margin-top: 25px;
            display: flex;
            padding:10px;
            cursor: pointer;
            border-radius: 10px;

            &--marginTopGap{
                margin-top:10px;
            }

            &:hover{
                background-color: #1d1b1a;
            }
        }

        &__projinneritem{
            display: flex;
            align-items: center;
        }

        &__projName{
            color:white;
            font-size: 1.1em;
            font-family: var(--poppins);
            font-weight: 500;
        }

        &__projdesc{
            color:#998F8F;
            font-size: 0.82em;
            font-family: var(--poppins);
            font-weight: 400;
            margin-top:6px;
            line-height: 22px;
        }

        &__projtimeline{
            color:#998F8F;
            font-size: 0.8em;
            font-family: var(--poppins);
            font-weight: 400;
            margin-top:12px;
            line-height: 22px;
        }

        &__arrowupright{
            width:13px;
            min-width:13px;
            height:13px;
            min-height:13px;
            fill:#F46C38;
        }
    }
  
</style>
