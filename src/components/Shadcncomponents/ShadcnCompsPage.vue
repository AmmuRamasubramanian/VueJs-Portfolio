<script setup lang="ts">
import BasicAccordianFlow from './Accordian/BasicAccordianFlow.vue';
import AlertAccordianFlow from './Alert/AlertAccordianFlow.vue';

</script>

<template>
  <div class="shadcncomppage">
    <div class="shadcncomppage__contentinnerDiv">
    <p class="shadcncomppage__title">Basic Accordian</p>
    <div class="shadcncomppage__vertgap"></div>
    <BasicAccordianFlow/>

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Multiple active Accordian</p>
    <p class="shadcncomppage__subtitle">Use type="multiple" to allow multiple items to be open at the same time.</p>
    <div class="shadcncomppage__vertgap"></div>
    <BasicAccordianFlow :isMultiple="true"/>

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Disabled Accordian</p>
    <p class="shadcncomppage__subtitle">Use the disabled prop on AccordionItem to disable individual items.</p>
    <div class="shadcncomppage__vertgap"></div>
    <BasicAccordianFlow :disabled="true"/>

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Border Accordian</p>
    <p class="shadcncomppage__subtitle">Add border to the Accordion</p>
    <div class="shadcncomppage__vertgap"></div>
    <BasicAccordianFlow :with_border="true"/>

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Card Accordian</p>
    <p class="shadcncomppage__subtitle">Wrap the Accordion in a Card component.</p>
    <div class="shadcncomppage__vertgap"></div>
    <BasicAccordianFlow :card="true"/>

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Basic Alert Accordian</p>
    <p class="shadcncomppage__subtitle">Displays a callout for user attention.</p>
    <div class="shadcncomppage__vertgap"></div>
    <AlertAccordianFlow
      alert_text="Your payment of $29.99 has been processed. A receipt has been sent to your email address."
      alert_title="Payment successful"
    />

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Destructive Alert Accordian</p>
    <p class="shadcncomppage__subtitle">Use variant="destructive" to create a destructive alert.</p>
    <div class="shadcncomppage__vertgap"></div>
    <AlertAccordianFlow  
      alert_text="Your payment could not be processed. Please check your payment method and try again."
      alert_title="Payment failed"
      :destructive="true"
    />
    </div>
</div>
</template>

<style scoped lang="scss">
  .shadcncomppage{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top:3em;
    padding-bottom: 6em;
    align-self: center;

    &__contentinnerDiv{
      width:450px;  

      @media(max-width:470px){
        width: 100%;
      }
    }

    &__titlegap{
      margin-top:2.8em;
    }

    &__vertgap{
      margin-top:1.5em;
    }

    &__title{
      color:var(--btncolor-darkerBlue);
      font-family: var(--poppins);
      font-size:1em;
    }

    &__subtitle{
      color:var(--bluishSteelBlue);
      font-family: var(--poppins);
      font-size:0.8em;
      margin-top:10px;
    }
  }
</style>
