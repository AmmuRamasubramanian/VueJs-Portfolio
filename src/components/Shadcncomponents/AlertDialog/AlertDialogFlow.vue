<script setup lang="ts">
import { ref } from 'vue';
import AlertDialogPopup from './AlertDialogPopup.vue';

const props=defineProps<{
    alert_text:string,
    alert_title:string,
    ok_button_title:string,
    cancel_button_title:string
    destructive?:boolean
    centertitle?:boolean
}>()

const showdialog_ref=ref<Boolean>(false)

const handleToggleShowDialog=()=>{
    showdialog_ref.value=!showdialog_ref.value
}

const handleCloseShowDialog=()=>{
    showdialog_ref.value=false
}

</script>

<template>
    <div class="alert_dialog_box">
        <div class="alert_dialog_box__dialogbox cursordiv" @click="handleToggleShowDialog">
            <p :class="['alert_dialog_box__showdialogText', {'alert_dialog_box__showdialogText--redtext':props.destructive}]">{{props.destructive ? "Delete chat" : "Show dialog"}}</p>
        </div>
        <div v-if="showdialog_ref">
            <AlertDialogPopup
                @onClose="handleCloseShowDialog"
                :alert_text="props.alert_text"
                :alert_title="props.alert_title"
                :ok_button_title="props.ok_button_title"  
                :cancel_button_title="props.cancel_button_title"
                :destructive="props.destructive"
                :centertitle="props.centertitle"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">  
    .alert_dialog_box{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        &__dialogbox{
            height:32px;
            min-height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding:0px 14px;
            border-radius: 6px;
            background-color: var(--lightishwhite);
        }

        &__showdialogText{
            color:white;
            font-family: var(--poppins);
            font-size: 0.8em;
            font-weight: 500;

            &--redtext{
                color:var(--pinkishred)
            }
        }
    }
</style>