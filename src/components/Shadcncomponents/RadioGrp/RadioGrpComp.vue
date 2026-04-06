<script setup lang="ts">
import { ref } from 'vue';


interface Props{
    options:string[]
}

const props=defineProps<Props>()

const selectedOption=ref<String>(props.options[0])

const handleSelectOption=(value:string)=>{
    selectedOption.value=value
}

</script>

<template>
    <div class="radiogrp">
        <div 
            v-for="(item, index) in options"
            :key="item"
        >
            <div :class="['radiogrp__itemdiv cursordiv', {'radiogrp__itemdiv--topstyle':index!==0}]" @click="handleSelectOption(item)">
                <div v-if="selectedOption!==item" class="radiogrp__radiobtn">
                </div>
                <div v-else class="radiogrp__selectedRadioBtn">
                    <div class="radiogrp__selectedRadioBtnInner"></div>
                </div>
                <p class="radiogrp__itemtext">{{ item }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .radiogrp{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;

        &__itemdiv{
            display: flex;

            &--topstyle{
                margin-top:7px;
            }
        }

        &__radiobtn{
            width:15px;
            min-width:15px;
            min-height: 15px;
            height:15px;
            border-radius: 15px;
            background-color: var(--veryDrkBlue2);
            border-style: solid;
            border-width:1px;
            border-color:var(--ashBlue);
        }

        &__selectedRadioBtn{
             width:15px;
            min-width:15px;
            min-height: 15px;
            height:15px;
            border-radius: 15px;
            background-color: white;
            border-style: solid;
            border-width:1px;
            border-color:var(--ashBlue);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__selectedRadioBtnInner{
            width:8px;
            min-width: 8px;
            height:8px;
            min-height: 8px;
            border-radius: 8px;
            background-color: var(--veryDrkBlue2);
        }

        &__itemtext{
            color:white;
            font-family: var(--poppins);
            font-size: 0.75em;
            min-width:100px;
            margin-left:10px;
        }
    }
</style>