<script setup lang="ts">
import CardComponent from './CardComponent.vue';
const experiences = [
  {
    companyName: "MISTAKE",
    companyLink:"https://mistake.cool",
    companyTitle: "Co-Founder & Frontend Engineer",
    timeline: "Jan 2024 – Present",
    description: [
      "Built and launched a cross-platform mobile app (Android & iOS) using React Native",
      "Designed 50% of the app screens using Figma (UI & UX)",
      "Developed real-time communication system (chat, audio/video) using WebSockets and LiveKit",
      "Implemented authentication flows (multi-account, organization-based access)",
      "Integrated payment flows UI using Stripe and Razorpay",
      "Built scalable file upload, notifications, and background services",
      "Developed web (Vite + React) and desktop (Electron) platforms to extend product reach",
      "Created custom charting components (bar, pie, area) using Rough.js",
      "Led customer onboarding, product demos, and sales interactions to drive user adoption",
      "Managed app deployment and distribution, including iOS app submission and Electron packaging"
    ]
  },
  {
    companyName: "Temenos",
    companyTitle: "Associate Product Engineer",
    companyLink:'https://www.temenos.com',
    timeline: "Dec 2021 – Dec 2023",
    description: [
      "Built components for banking entity migration, optimizing APIs and improving response performance",
      "Designed and enhanced UI/UX flows for better usability and consistency",
      "Contributed to frontend performance and stability in a banking environment"
    ]
  },
  {
    companyName: "Cognizant",
    companyTitle: "Program Analyst Trainee (Intern)",
    companyLink:'https://www.cognizant.com',
    timeline: "Mar 2021 – Dec 2021",
    description: [
      "Trained in JavaScript, testing, and UI development",
      "Built a railway ticket booking web app using HTML, CSS, and JavaScript"
    ]
  }
];
</script>

<template>
  <div class="experiencePage">
    <CardComponent/>
    <div class="experiencePage__margingap"/>
    <div class="experiencePage__scrolldiv">
        <p class="experiencePage__title1">+4.7 YEARS OF</p>
        <p class="experiencePage__title2">EXPERIENCE</p>
        <div 
            v-for="(expItem, expIndex) in experiences"
            :key="expItem.companyName"
        >
            <div :class="{
                'experiencePage__companyItem':expIndex!=0,
                'experiencePage__companyItem--marginTopGap':expIndex==0
            }">
                <div class="experiencePage__companytitlediv">
                    <p class="experiencePage__companyName">{{ expItem.companyName }}</p>
                    <p class="experiencePage__companytimeline">{{ expItem.timeline }}</p>
                </div>
                <div class="experiencePage__companylinkouter" v-if="expItem.companyLink">
                    <p class="experiencePage__companylink">{{ expItem.companyLink }}</p>
                </div>
                <div class="experiencePage__desccontentgap"/>
                <div 
                    v-for="(listItem, listIndex) in expItem.description"
                    :key="listIndex"
                >
                    <div class="experiencePage__descitem">
                        <p class="experiencePage__pinText">📍</p>
                        <p class="experiencePage__companydesc">{{ listItem }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .experiencePage{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding-top:3em;
        padding-bottom: 6em;

        &__margingap{
            margin-right: 350px;
        }

        &__scrolldiv{
            display: flex;
            flex-direction: column;
        }

        &__title1{
            color:white;
            font-size: 4.5em;
            font-family: var(--poppins);
            font-weight: 700;
        }

        &__title2{
            color:rgba(182, 181, 189, 0.2);
            font-size:4.5em;
            font-family: var(--poppins);
            font-weight: 700;
            margin-top:-25px;
        }

        &__companyItem{
            margin-top: 30px;
            &--marginTopGap{
                margin-top:10px;
            }
        }

        &__companytitlediv{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        &__companyName{
            color:white;
            font-size: 1.4em;
            font-family: var(--poppins);
            font-weight: 600;
        }

        &__companylinkouter{
            padding-bottom: 1px;
            border-bottom-style: solid;
            border-bottom-color: transparent;
            border-bottom-width: 0.8px;
            display: flex;
            justify-self: flex-start;
            cursor: pointer;

            &:hover{
                border-bottom-color: #4e8cff;
            }
        }

        &__companylink{
            color:#4e8cff;
            font-size: 1em;
            font-family: var(--poppins);
            font-weight: 500;
            margin-top: 5px;
        }

        &__desccontentgap{
            margin-top:10px;
        }

        &__descitem{
            display: flex;
            margin-top: 3px;
        }

        &__companydesc{
            color:#998F8F;
            font-size: 0.82em;
            font-family: var(--poppins);
            font-weight: 400;
            margin-top:4px;
            line-height: 22px;
        }

        &__pinText{
            font-size: 0.9em;
            margin-top: 6px;
            margin-right: 10px;
        }

        &__companytimeline{
            color:#998F8F;
            font-size: 0.85em;
            font-family: var(--poppins);
            font-weight: 400;
            line-height: 22px;
        }
    }
</style>
