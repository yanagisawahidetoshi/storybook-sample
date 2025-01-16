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

export const InputForm = {}

export const InputFormFrontEndError = {
  args: {
    errors: {
      nameError: '入力してください',
      mailError: '入力してください',
      contentError: '1000文字以内で入力してください'
    }
  }
}

export const InputFormBackEndError = {
  args: {
    errors: {
      serverError: '予期せぬエラーが発生しました。'
    }
  }
}

export const InputFormBack = {
  args: {
    name: 'ヤマダ太郎',
    mail: 'yamada@yamada.com',
    content: 'テスト入力です'
  }
}
