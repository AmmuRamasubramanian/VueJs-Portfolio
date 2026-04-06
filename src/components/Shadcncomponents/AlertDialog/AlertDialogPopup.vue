<script setup lang="ts">
import Trash from '../../../assets/trash.svg'

const props=defineProps<{
    alert_text:string,
    alert_title:string,
    ok_button_title:string,
    cancel_button_title:string
    destructive?:boolean
    centertitle?:boolean
    smallsize?:boolean
}>()

const emit=defineEmits<{
    (e:'onClose') : void 
}>()

const handleClosePopup=()=>{
    emit('onClose')
}

</script>

<template>
    <div class="alertdialogPopupdiv" @click="handleClosePopup">
        <div :class="['alertdialogPopupdiv__popupinnerdiv', {'alertdialogPopupdiv__popupinnerdiv--smallsizebox':props.centertitle}]" @click.stop>
            <div :class="['alertdialogPopupdiv__titlediv', {'alertdialogPopupdiv__titlediv--centerdiv':props.centertitle}]">
                <div v-if="destructive" class="alertdialogPopupdiv__deleteBox">
                    <Trash class="alertdialogPopupdiv__trashicon"/>
                </div>
                <p :class="['alertdialogPopupdiv__titletxt',  {'alertdialogPopupdiv__titletxt--centerText':props.centertitle}]">{{ props.alert_title }}</p>
                <p :class="['alertdialogPopupdiv__subtitle',  {'alertdialogPopupdiv__subtitle--centerText':props.centertitle}]">{{ props.alert_text }}</p>
            </div>
            <div class="alertdialogPopupdiv__buttondiv">
                <div :class="['alertdialogPopupdiv__cancelbutton cursordiv', {'alertdialogPopupdiv__cancelbutton--fullwidth':props.smallsize}]" @click="handleClosePopup">
                    <p class="alertdialogPopupdiv__canceltext">{{props.cancel_button_title}}</p>
                </div>
                <div :style="{ marginLeft:'6px' }"></div>
                <div :class="['alertdialogPopupdiv__okbutton cursordiv',  {'alertdialogPopupdiv__okbutton--redbg':props.destructive, 'alertdialogPopupdiv__okbutton--fullwidth':props.smallsize}]" @click="handleClosePopup">
                    <p class="alertdialogPopupdiv__oktext">{{ props.ok_button_title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .alertdialogPopupdiv{
        position: fixed;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.8);
        width: 100vw;
        height: 100vh;   
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        top:0;

        &__popupinnerdiv{
            width:380px;
            background-color: var(--veryDrkGreyishBlue);
            border-width:0.8px;
            border-style: solid;
            border-color: var(--lighterAshBlue);
            border-radius: 10px;
            overflow: hidden;

            &--smallsizebox{
                width:300px;
            }
        }

        &__deleteBox{
            width:40px;
            min-width:40px;
            height:40px;
            min-height: 40px;
            background-color: #4a2728;
            border-radius: 8px;
            margin-bottom:15px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__trashicon{
            width:19px;
            height:19px;
            min-width: 19px;
            min-height: 19px;
            fill:var(--pinkishred);
        }

        &__titlediv{
            padding:16px 14px;
            padding-bottom: 10px;

            &--centerdiv{
                display: flex;
                align-items: center;
                flex-direction: column;
            }
        }

        &__titletxt{
            color:white;
            font-family: var(--poppins);
            font-size: 0.82em;
            font-weight: 500;

            &--centerText{
                text-align: center;
            }
        }

        &__subtitle{
            color:var(--bluishSteelBlue);
            font-family: var(--poppins);
            font-size: 0.72em;
            font-weight: 400;
            margin-top:6px;
            line-height: 22px;

            &--centerText{
                text-align: center;
            }
        }

        &__buttondiv{
            display: flex;
            align-items: center;
            flex-direction: row;
            background-color: var(--veryDrkBlue2);
            padding: 10px;
            justify-content: flex-end;
            border-top-width:1px;
            border-top-style: solid;
            border-top-color: var(--ashBlue);
        }

        &__okbutton{
            height:34px;
            min-height: 34px;
            padding:0px 10px;
            border-radius: 6px;
            background-color: var(--lightGreen_btn);
            border-style: solid;
            border-width:0.8px;
            border-color:var(--lighterAshBlue);
            display: flex;
            align-items: center;
            justify-content: center;

            &--redbg{
                background-color: var(--btnRed);
            }

            &--fullwidth{
                width:48.5%;
            }
        }

        &__oktext{
            color:white;
            font-family: var(--poppins);
            font-size: 0.75em;
            font-weight: 400;
        }

        &__cancelbutton{
            height:34px;
            min-height: 34px;
            padding:0px 10px;
            border-radius: 6px;
            background-color: var(--ashBlue);
            border-style: solid;
            border-width:0.8px;
            border-color:var(--lighterAshBlue);
            display: flex;
            align-items: center;
            justify-content: center;

            &--fullwidth{
                width:48.5%
            }
        }

        &__canceltext{
            color:white;
            font-family: var(--poppins);
            font-size: 0.75em;
            font-weight: 400;
        }
    }
</style>