<script setup lang="ts">
import ChevronRight from '../../../assets/chevronright.svg'

const props=defineProps<{
    answer:string
    question:string
    isLast:boolean
    istoggledans:boolean
    index:number
    isdisabled:boolean
}>()

const emit=defineEmits<{
    (e:'open_ans', index:number) : void
}>()

const handleActivateand=(index:number)=>{
    if(!props.isdisabled){
    emit('open_ans', index)
    }
}

</script>

<template>
    <div class="basicAcc_item">
        <div class="basicAcc_item__innerbasicItem">
        <div class="basicAcc_item__qnouter" :class="[isdisabled ? 'basicAcc_item__qnouter--disabledouter' : '']" @click="handleActivateand(index)">
            <p class="basicAcc_item__qn" :class="[isdisabled ? 'basicAcc_item__qn--disabledqn' : '']">{{ question }}</p>
            <ChevronRight class="basicAcc_item__chevronIcon" :class="[isdisabled ? 'basicAcc_item__chevronIcon--disabledicon' : '']"/>
        </div>
        <div v-if="istoggledans">
            <p class="basicAcc_item__ans">{{ answer }}</p>
        </div>
        </div>
        <div v-if="!isLast" class="basicAcc_item__vertline"></div>
    </div>
</template>

<style scoped lang="scss">
    .basicAcc_item{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;

        &__innerbasicItem{
            padding: 0px 10px;
            width: 100%;
        }

        &__qnouter{
            cursor: pointer;
            user-select: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 0.8px;
            width: 100%;

            &--disabledouter{
                cursor: default;
            }
        }

        &__qn{
            color:white;
            font-family: var(--poppins);
            font-size: 0.78em;
            line-height: 19px;
            margin-right: 10px;
            border-bottom-width: 0.8px;
            border-bottom-style: solid;
            border-bottom-color: transparent;

            &:hover{
                border-bottom-color: white;
            }

            &--disabledqn{
                color:var(--bluishSteelBlue)
            }

            &--disabledqn:hover{
                border-bottom-color: transparent;
            }
        }

        &__ans{
            color:white;
            font-family: var(--poppins);
            font-size: 0.78em;
            margin-top:7px;
            line-height: 19px;
        }

        &__vertline{
            height: 0.8px;
            min-height: 0.8px;
            background-color: var(--lighterAshBlue);
            width: 100%;
            margin-top:15px;
            margin-bottom:15px;
        }

        &__chevronIcon{
            width: 14px;
            height: 14px;
            min-width: 14px;
            min-height: 14px;
            fill: white;

            &--disabledicon{
                fill:var(--bluishSteelBlue)
            }
        }
    }
</style>