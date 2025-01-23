import Form from './ConfirmForm.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Example/ConfirmForm',
  component: Form,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    onSubmit: fn()
  }
}

export const Default = {
  args: {
    formData: {
      name: 'ヤマダ太郎',
      mail: 'yamada@yanagisawa.com',
      content: 'お問い合わせです。'
    }
  }
}
