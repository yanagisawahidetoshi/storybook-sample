import { action } from '@storybook/addon-actions';  
import ConfirmForm from './ConfirmForm.vue'

export default {
  title: 'Example/ConfirmForm',
  component: ConfirmForm,
  tags: ['autodocs'],
  args: { 
    onConfirmData: action('confirmData'),
    onSubmit: action('submit')
  },
}

export const Default = {}
export const FormData = {
  args: {
    formData: {
      name: 'テスト名前',
      mail: 'テストメール'
    }
  }
}

