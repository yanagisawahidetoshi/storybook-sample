import Form from './InputForm.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Example/InputForm',
  component: Form,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    onSubmit: fn()
  }
}

export const Default = {}

export const InputFormFrontEndError = {
  args: {
    defaultErrors: {
      nameError: '入力してください',
      mailError: '入力してください',
      contentError: '1000文字以内で入力してください'
    }
  }
}

export const InputFormBackEndError = {
  args: {
    defaultErrors: {
      serverError: '予期せぬエラーが発生しました。'
    }
  }
}

export const InputFormBack = {
  args: {
    defaultFormData: {
      name: 'ヤマダ太郎',
      mail: 'yamada@yamada.com',
      content: 'テスト入力です'
    }
  }
}
