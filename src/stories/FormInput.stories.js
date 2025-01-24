import FormInput from './FormInput.vue'
import { fn } from '@storybook/test'

const MAXCONTENTLENGTH = 10

export default {
  title: 'Example/Input',
  component: FormInput,
  tags: ['autodocs'],
  render: (args) => ({
    components: {
      FormInput
    },
    setup() {
      return {
        ...args
      }
    },
    template:
      '<FormInput :defaultValue="defaultValue" :errorMsg="errorMsg" @onConfirm="handleConfirm"/>'
  }),
  args: {
    handleConfirm: fn()
  }
}

export const Input = {
  args: {
    defaultValue: {
      name: '',
      content: ''
    },
    errorMsg: {
      name: '',
      content: ''
    }
  }
}

export const FormHasInputValue = {
  args: {
    defaultValue: {
      name: '塚原',
      content: 'たのしいな'
    },
    errorMsg: {
      name: '',
      content: ''
    }
  }
}

export const ServerValidation = {
  args: {
    defaultValue: {
      name: '塚原',
      content: 'ああああああああああああああああああああああああああああああ'
    },
    errorMsg: {
      name: '重複しています',
      content: `${MAXCONTENTLENGTH}文字以内で入力してください`
    }
  }
}
