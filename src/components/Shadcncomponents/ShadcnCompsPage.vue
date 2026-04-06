<script setup lang="ts">
import BasicAccordianFlow from './Accordian/BasicAccordianFlow.vue';
import AlertAccordianFlow from './Alert/AlertAccordianFlow.vue';
import AlertDialogFlow from './AlertDialog/AlertDialogFlow.vue';

</script>

<template>
  <div class="shadcncomppage">
    <div class="shadcncomppage__contentinnerDiv">
    <p class="shadcncomppage__maintitle">Shadcn Reusable components</p>
    <p class="shadcncomppage__title">Basic Accordian</p>
    <div class="shadcncomppage__vertgap"></div>
    <div class="shadcncomppage__cardouter">
    <BasicAccordianFlow/>
    </div>

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Multiple active Accordian</p>
    <p class="shadcncomppage__subtitle">Use type="multiple" to allow multiple items to be open at the same time.</p>
    <div class="shadcncomppage__vertgap"></div>
    <div class="shadcncomppage__cardouter">
    <BasicAccordianFlow :isMultiple="true"/>
    </div>

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Disabled Accordian</p>
    <p class="shadcncomppage__subtitle">Use the disabled prop on AccordionItem to disable individual items.</p>
    <div class="shadcncomppage__vertgap"></div>
    <div class="shadcncomppage__cardouter">
    <BasicAccordianFlow :disabled="true"/>
    </div>

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Border Accordian</p>
    <p class="shadcncomppage__subtitle">Add border to the Accordion</p>
    <div class="shadcncomppage__vertgap"></div>
    <div class="shadcncomppage__cardouter">
    <BasicAccordianFlow :with_border="true"/>
    </div>

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Card Accordian</p>
    <p class="shadcncomppage__subtitle">Wrap the Accordion in a Card component.</p>
    <div class="shadcncomppage__vertgap"></div>
    <div class="shadcncomppage__cardouter">
    <BasicAccordianFlow :card="true"/>
    </div>

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Basic Alert Accordian</p>
    <p class="shadcncomppage__subtitle">Displays a callout for user attention.</p>
    <div class="shadcncomppage__vertgap"></div>
    <div class="shadcncomppage__cardouter">
    <AlertAccordianFlow
      alert_text="Your payment of $29.99 has been processed. A receipt has been sent to your email address."
      alert_title="Payment successful"
    />
    </div>

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Destructive Alert Accordian</p>
    <p class="shadcncomppage__subtitle">Use variant="destructive" to create a destructive alert.</p>
    <div class="shadcncomppage__vertgap"></div>
    <div class="shadcncomppage__cardouter">
    <AlertAccordianFlow  
      alert_text="Your payment could not be processed. Please check your payment method and try again."
      alert_title="Payment failed"
      :destructive="true"
    />
    </div>
    </div>

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Alert Dialog</p>
    <p class="shadcncomppage__subtitle">A modal dialog that interrupts the user with important content and expects a response.</p>
    <div class="shadcncomppage__vertgap"></div>
    <div class="shadcncomppage__cardouter">
    <AlertDialogFlow
      alert_text="This action cannot be undone. This will permanently delete your account from our servers."
      alert_title="Are you absolutely sure?"
      ok_button_title="Continue"
      cancel_button_title="Cancel"
    />
    </div>

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Destructive</p>
    <p class="shadcncomppage__subtitle">Use the component to add a destructive action button to the alert dialog.</p>
    <div class="shadcncomppage__vertgap"></div>
    <div class="shadcncomppage__cardouter">
    <AlertDialogFlow
      alert_text="This will permanently delete this chat conversation. View Settings delete any memories saved during this chat."
      alert_title="Delete chat?"
      ok_button_title="Delete"
      cancel_button_title="Cancel"
      :destructive="true"
      :centertitle="true"
    />
    </div>

    <div class="shadcncomppage__titlegap"></div>
    <p class="shadcncomppage__title">Small Alert dialog</p>
    <p class="shadcncomppage__subtitle">Use the size="sm" prop to make the alert dialog smaller.</p>
    <div class="shadcncomppage__vertgap"></div>
    <div class="shadcncomppage__cardouter">
    <AlertDialogFlow
      alert_text="This will permanently delete this chat conversation. View Settings delete any memories saved during this chat."
      alert_title="Delete chat?"
      ok_button_title="Delete"
      cancel_button_title="Cancel"
      :smallsize="true"
      :centertitle="true"
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
    position: relative;

    &__contentinnerDiv{
      width:500px;  

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

    &__maintitle{
        color:white;
        font-family: var(--poppins);
        font-size:2em;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1.5em;
    }

    &__title{
      color:var(--btncolor-darkerBlue);
      font-family: var(--poppins);
      font-size:1.1em;
      font-weight: 500;
    }

    &__cardouter{
      display: flex;
      flex-direction: column;
      padding: 24px 16px;
      border-width: 0.8px;
      border-style: solid;
      border-radius: 12px;
      border-color: var(--lightishwhite);
      width:100%;
    }

    &__subtitle{
      color:var(--bluishSteelBlue);
      font-family: var(--poppins);
      font-size:0.85em;
      margin-top:10px;
      line-height: 22px;
    }
  }
</style>
