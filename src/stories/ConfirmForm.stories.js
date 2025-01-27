import { action } from '@storybook/addon-actions';  
import ConfirmForm from './ConfirmForm.vue'

export default {
  title: 'Example/ConfirmForm',
  component: ConfirmForm,
  tags: ['autodocs'],
  args: { 
    onSubmit: action('submit')
  },
}
export const Default = {
  args: {
    formData: {
      name: 'テスト名前',
      mail: 'test@test.com'
    }
  }
}

