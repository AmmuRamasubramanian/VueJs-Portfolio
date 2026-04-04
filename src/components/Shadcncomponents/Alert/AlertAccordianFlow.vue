
<script setup lang="ts">
import Info from '../../../assets/info.svg'

interface Props{
    alert_text:string
    alert_title:string
    destructive?:boolean
}

const props=defineProps<Props>()

</script>

<template>
    <div class="alert_acc_box">
        <Info class="alert_acc_box__alertIcon"  :class="[props.destructive ? 'alert_acc_box__alertIcon--destructiveIcon    ' : '']"/>
        <div>
        <p class="alert_acc_box__alertTitle" :class="[props.destructive ? 'alert_acc_box__alertTitle--destructiveText' : '']">{{ props.alert_title }}</p>
        <p class="alert_acc_box__alertText" :class="[props.destructive ? 'alert_acc_box__alertText--destructiveText    ' : '']">{{ props.alert_text }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .alert_acc_box{

        display: flex;
        align-items: flex-start;
        padding: 10px;
        border-width: 1px;
        border-style: solid;
        border-color: var(--lighterAshBlue);
        border-radius: 8px;
        background-color: var(--veryDrkBlue2);

        &__alertText{
            color:var(--bluishSteelBlue);
            line-height: 19px;
            font-family: var(--poppins);
            font-size: 0.75em;
            margin-top:3px;

            &--destructiveText{
                color:var(--pinkishred)
            }
        }

        &__alertTitle{
            color:white;
            line-height: 19px;
            font-family: var(--poppins);
            font-size: 0.75em;

            &--destructiveText{
                color:var(--pinkishred)
            }
        }

        &__alertIcon{
            width: 14px;
            height: 14px;
            min-width: 14px;
            min-height: 14px;
            fill: white;
            margin-top: 3px;
            margin-right: 10px;

            &--destructiveIcon{
                fill:var(--pinkishred)
            }
        }
    }
</style>