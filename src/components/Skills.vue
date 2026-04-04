<script setup lang="ts">
import ReactImg from '../assets/reactImg.png'
import JsImg from '../assets/jsImg.png'
import CssImg from '../assets/cssImg.png'
import FigmaImg from '../assets/figmaImg.png'
import ReactNativeImg from '../assets/reactNativeImg.png'
import vueImg from '../assets/vueImg.png'

const skills = [
  {
    name: "JavaScript",
    avatar: JsImg
  },
  {
    name: "React Js",
    avatar: ReactImg
  },
  {
    name: "React Native",
    avatar:ReactNativeImg
  },
  {
    name: "CSS",
    avatar: CssImg
  },
  {
    name: "Vue Js",
    avatar: vueImg
  },
  {
    name: "Figma",
    avatar: FigmaImg
  },
];

</script>

<template>
  <div class="skillsdiv">
    <p class="skillsdiv__title1">ENGINEERING</p>
    <p class="skillsdiv__title2">SKILLS</p>
    <div class="skillsdiv__skillflexdiv">
    <div 
        v-for="(item, index) in skills"
    >
        <div class="skillsdiv__skillitemdiv">
            <div class="skillsdiv__skillavatarDiv">
                <img :src="item.avatar" class="skillsdiv__avatarimg"/>
            </div>
            <p class="skillsdiv__skillname">{{ item.name }}</p>
        </div>
    </div>
    </div>  
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

        &__skillflexdiv{
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px; 
            margin-top: 6px;
        }

        &__skillitemdiv{
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        &__skillavatarDiv{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 90px;
            height: 90px;
            min-width: 90px;
            min-height: 90px;
            clip-path: polygon(
                30% 0%, 
                70% 0%, 
                100% 30%, 
                100% 70%, 
                70% 100%, 
                30% 100%, 
                0% 70%, 
                0% 30%
            );
            background: linear-gradient(135deg, #4e4e8c, #2a2a50);
            box-shadow: 0 6px 12px rgba(0,0,0,0.4), 0 0 12px rgba(78,78,140,0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
        }

        &__skillname{
            color:white;
            font-size: 0.9em;
            font-family: var(--poppins);
            font-weight: 500;
            margin-top:10px
        }

        &__avatarimg{
            width:40px;
            height:40px;
            min-width:40px;
            min-height: 40px;
        }
    }
  
</style>
