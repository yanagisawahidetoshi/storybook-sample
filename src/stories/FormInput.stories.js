import FormInput from './FormInput.vue'
import { fn } from '@storybook/test'

const nameValidation = {
  required: '名前を入力してください',
  duplication: '重複しています'
}
const MAXCONTENTLENGTH = 10
const contentValidation = {
  lengthOver: `${MAXCONTENTLENGTH}文字以内で入力してください`
}

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

export const BackFromConfirm = {
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
      name: nameValidation.duplication,
      content: contentValidation.lengthOver
    }
  }
}
