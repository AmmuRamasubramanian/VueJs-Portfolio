<script setup lang="ts">

const experiences = [
  {
    id:1,
    title: "Co-Founder & Frontend Engineer",
    company:"Mistake.cool",
    timeline: "Jan 2024 – Present",
    desc: "Built and launched cross-platform apps (mobile, web, desktop) using React Native, Vite, and Electron.Developed real-time systems (chat, audio/video) with WebSockets & LiveKit, along with auth and payments."
  },
  {
    id:2,
    title: "Associate Product Engineer",
    company: "Temenos",
    timeline: "Dec 2021 – Jan 2024",
    desc:"Developed scalable frontend components for banking systems and entity migration workflows.Optimized APIs and improved performance for high-volume financial applications."
  },
  {
    id:3,
    title: "Program Analyst Trainee (Intern)",
    company: "Cognizant",
    timeline: "Mar 2021 – Dec 2021",
    desc:"Trained in JavaScript, testing, and frontend development fundamentals.Built a railway ticket booking web app using HTML, CSS, and JavaScript."
  }
]

</script>

<template>
    <div class="experiencepage">
        <p class="experiencepage__title1">+4.7 YEARS OF</p>
        <p class="experiencepage__title2">EXPERIENCE</p>
        <div 
            v-for="(expItem, expIndex) in experiences"
            :key="expItem.id"
        >
            <div :class="{
                'experiencepage__companyItem':expIndex!=0,
                'experiencepage__companyItem--marginTopGap':expIndex==0
            }">
                <p class="experiencepage__companyName">{{ expItem.company }}</p>
                <p class="experiencepage__companydesc">{{ expItem.desc }}</p>
                <p class="experiencepage__companytimeline">{{ expItem.timeline }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .experiencepage{
        display: flex;
        flex-direction: column;
        margin-top:6em;

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

        &__companyItem{
            margin-top: 30px;
            &--marginTopGap{
                margin-top:10px;
            }
        }

        &__companyName{
            color:white;
            font-size: 1.4em;
            font-family: var(--poppins);
            font-weight: 600;
        }

        &__companydesc{
            color:#998F8F;
            font-size: 0.82em;
            font-family: var(--poppins);
            font-weight: 400;
            margin-top:4px;
            line-height: 22px;
        }

        &__companytimeline{
            color:#998F8F;
            font-size: 0.85em;
            font-family: var(--poppins);
            font-weight: 400;
            margin-top:12px;
            line-height: 22px;
        }
    }
</style>