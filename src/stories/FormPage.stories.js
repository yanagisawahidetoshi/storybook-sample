import FormPage from './FormPage.vue';
import { fn } from '@storybook/test';

export default {
  title: 'Example/Form',
  component: FormPage,
  tags: ['autodocs'],
  render:(args)=>({
    components:{
      FormPage
    },
    setup() {
      return {
        ...args,
      }
    },
    template:'<FormPage :inputValue="inputValue" :currentStep="currentStep" @onConfirm="onConfirm"/>',
  }),
  args: {
    onConfirm:fn(),
  }
};

export const Input = {
  args:{
    inputValue: {
      "name": "",
      "content": ""
    },
    currentStep: "input"
  }
}

export const Confirm = {
  args:{
    inputValue: {
      "name": "",
      "content": ""
    },
    currentStep: "confirm"
  }
}