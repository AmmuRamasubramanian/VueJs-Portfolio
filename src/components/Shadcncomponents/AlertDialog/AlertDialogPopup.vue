<script setup lang="ts">

const props=defineProps<{
    alert_text:string,
    alert_title:string,
    ok_button_title:string,
    cancel_button_title:string
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
        <div class="alertdialogPopupdiv__popupinnerdiv" @click.stop>
            <div class="alertdialogPopupdiv__titlediv">
                <p class="alertdialogPopupdiv__titletxt">{{ props.alert_title }}</p>
                <p class="alertdialogPopupdiv__subtitle">{{ props.alert_text }}</p>
            </div>
            <div class="alertdialogPopupdiv__buttondiv">
                <div class="alertdialogPopupdiv__cancelbutton cursordiv" @click="handleClosePopup">
                    <p class="alertdialogPopupdiv__canceltext">Cancel</p>
                </div>
                <div :style="{ marginLeft:'6px' }"></div>
                <div class="alertdialogPopupdiv__okbutton cursordiv" @click="handleClosePopup">
                    <p class="alertdialogPopupdiv__oktext">Continue</p>
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
            width:400px;
            background-color: var(--veryDrkGreyishBlue);
            border-width:0.8px;
            border-style: solid;
            border-color: var(--lighterAshBlue);
            border-radius: 10px;
            overflow: hidden;
        }

        &__titlediv{
            padding:16px 14px;
            padding-bottom: 10px;
        }

        &__titletxt{
            color:white;
            font-family: var(--poppins);
            font-size: 0.82em;
            font-weight: 500;
        }

        &__subtitle{
            color:var(--bluishSteelBlue);
            font-family: var(--poppins);
            font-size: 0.72em;
            font-weight: 400;
            margin-top:6px;
            line-height: 22px;
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
        }

        &__canceltext{
            color:white;
            font-family: var(--poppins);
            font-size: 0.75em;
            font-weight: 400;
        }
    }
</style>