<script setup lang="ts">
import ChevronRight from '../../../assets/chevronright.svg'

interface Props{
    title:string
    subtitle:string
    withoutbg?:boolean
    withbtn?:boolean
    btnTitle?:string
    btnicon?:string
}

const props=defineProps<Props>()

</script>

<template>
    <div :class="['linkcomp', {'linkcomp--withnobg':props.withoutbg}, {'cursordiv':!props.withbtn}]">
        <div v-if="props.withbtn" class="linkcomp__iconouter">
            <component :is="props.btnicon" class="linkcomp__infoicon"/>
        </div>
        <div class="linkcomp__titlediv">
        <p class="linkcomp__title">{{ props.title }}</p>
        <p class="linkcomp__subtitle">{{ props.subtitle }}</p>
        </div>
        <div v-if="!props.withbtn">
        <ChevronRight class="linkcomp__chevronRightIcon"/>
        </div>
        <div class="linkcomp__btnouter cursordiv" v-else>
            <p class="linkcomp__btntext">{{ props.btnTitle }}</p>
        </div>
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

        &__iconouter{
            margin-right: 10px;
        }

        &__infoicon{
            width:14px;
            height:14px;
            min-width: 14px;
            min-height: 14px;
            fill:white;
        }

        &__btnouter{
            height:30px;
            min-height: 30px;
            padding:0px 10px;
            border-radius: 6px;
            background-color: var(--lighterAshBlue);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__btntext{
            color:white;
            font-family: var(--poppins);
            font-size: 0.7em;
            font-weight: 500;
        }
    }
</style>