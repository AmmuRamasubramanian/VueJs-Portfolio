<script setup lang="ts">
import { computed, ref } from 'vue';
import BasicAccordianItem from './BasicAccordianItem.vue'

interface faq{
    question:string
    answer:string
}

interface Props{
    isMultiple?:boolean
    disabled?:boolean
    with_border?:boolean
    card?:boolean
}

const props=withDefaults(defineProps<Props>(),{
    with_border:false
})

const faqs:faq[] = [
  {
    question: "What are your shipping options?",
    answer:
      "We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders."
  },
  {
    question: "What is your return policy?",
    answer:
      "You can return items within 30 days of delivery. Products must be unused and in original packaging. Refunds are processed within 5-7 business days."
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team via email at support@example.com or through the contact form on our website. We typically respond within 24 hours."
  }
];

const showans=ref<Record<string, boolean>>({})

const handleShowAns=(index:number)=>{
    if(props.isMultiple==true){
        showans.value[index]=!showans.value[index]
    }else{
        showans.value={[index]:!showans.value[index]}
    }
}

const disabled_val=computed(()=>{
    if(props.disabled===true){
        return 1
    }
    return null
})

</script>

<template>
    <div 
        class="basicAcc_flow" 
        :class="{ 
            'basicAcc_flow--with_border': props.with_border,
            'basicAcc_flow--with_card': props.card 
        }"
    >
    <BasicAccordianItem
        v-for="(step, index) in faqs"
        :key="index"
        :answer="step.answer"
        :question="step.question"
        :isLast="index===faqs.length-1"
        @open_ans="handleShowAns"
        :istoggledans="showans[index]===true"
        :index="index"
        :isdisabled="index===disabled_val"
    />
    </div>
</template>

<style scoped lang="scss">
    .basicAcc_flow{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        &--with_border{
            border-width:0.8px;
            border-style: solid;
            border-color: var(--lighterAshBlue);
            padding:10px 0px;
            border-radius: 10px;
        }

        &--with_card{
            border-width:0.8px;
            border-style: solid;
            border-color: var(--lighterAshBlue);
            padding:15px 10px;
            border-radius: 10px;
            background-color: var(--veryDrkGreyishBlue);
        }
    }
</style>