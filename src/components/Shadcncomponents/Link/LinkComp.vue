<script setup lang="ts">

import ChevronRight from '../../../assets/chevronright.svg'

interface Props{
    title:string
    subtitle:string
    withoutbg?:boolean
}

const props=defineProps<Props>()

</script>

<template>
    <div :class="['linkcomp cursordiv', {'linkcomp--withnobg':props.withoutbg}]">
        <div class="linkcomp__titlediv">
        <p class="linkcomp__title">{{ props.title }}</p>
        <p class="linkcomp__subtitle">{{ props.subtitle }}</p>
        </div>
        <ChevronRight class="linkcomp__chevronRightIcon"/>
    </div>
</template>

<style scoped lang="scss">
    .linkcomp{
        display: flex;
        align-items: center;
        width: 100%;
        background-color: var(--veryDrkGreyishBlue);
        border-style: solid;
        border-color: var(--lighterAshBlue);
        border-width: 0.8px;
        padding:14px 16px;
        border-radius: 10px;

        &--withnobg{
            background-color: transparent;
            &:hover{
                background-color: var(--veryDrkBlue2);
            }
        }

        &__titlediv{
            display: flex;
            flex-direction: column;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            flex: 1;
            margin-right: 10px;
        }

        &__title{
            color:white;
            font-family: var(--poppins);
            font-weight: 500;
            font-size: 0.75em;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            flex: 1;
        }

        &__subtitle{
            color:var(--bluishSteelBlue);
            font-family: var(--poppins);
            font-weight: 400;
            font-size: 0.75em;
            margin-top:4px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            flex: 1;
        }

        &__chevronRightIcon{
            width:14px;
            height:14px;
            min-width: 14px;
            min-height: 14px;
            fill:white;
        }
    }
</style>