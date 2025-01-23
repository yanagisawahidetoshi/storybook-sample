import Form from './ConfirmForm.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Example/ConfirmForm',
  component: Form,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    onBack: fn(),
    onSubmit: fn()
  }
}

export const ConfirmForm = {
  args: {
    name: 'ヤマダ太郎',
    mail: 'yamada@yanagisawa.com',
    content: 'お問い合わせです。'
  }
}
