import FormInput from './FormInput.vue';
import { fn } from '@storybook/test';

export default {
  title: 'Example/Input',
  component: FormInput,
  tags: ['autodocs'],
  render:(args)=>({
    components:{
      FormInput
    },
    setup() {
      return {
        ...args,
      }
    },
    template:'<FormInput :inputValue="inputValue" :errorMsg="errorMsg" @onConfirm="handleConfirm" @onValidation="handleValidation"/>',
  }),
  args: {
    handleConfirm:fn(),
    handleValidation:fn()
  }
};

export const Input = {
  args:{
    inputValue: {
      "name": "",
      "content": ""
    },
    errorMsg:{
      name:"",
      content:""
    }    
  }
}

export const BackFromConfirm = {
  args:{
    inputValue: {
      "name": "塚原",
      "content": "たのしいな"
    },
    errorMsg:{
      name:"",
      content:""
    }    
  }
}

export const Validation = {
  args:{
    inputValue: {
      "name": "",
      "content": ""
    },
    errorMsg:{
      name:"名前を入力してください",
      content:""
    }
  }
}