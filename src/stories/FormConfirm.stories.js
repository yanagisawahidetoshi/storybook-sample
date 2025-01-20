import FormConfirm from './FormConfirm.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Example/Confirm',
  component: FormConfirm,
  tags: ['autodocs'],
  render: (args) => ({
    components: {
      FormConfirm
    },
    setup() {
      return {
        ...args
      }
    },
    template:
      '<FormConfirm :inputValue="defaultValue" @onBackToInput="handleBack" @onSend="handleSend"/>'
  }),
  args: {
    handleBack: fn(),
    handleSend: fn()
  }
}

export const Confirm = {
  args: {
    defaultValue: {
      name: '山田',
      content: 'aaaaaaaaaaaaaaaaaaaaaaaa'
    }
  }
}
