import { action } from '@storybook/addon-actions';  
import EntryForm from './EntryForm.vue'

export default {
  title: 'Example/EntryForm',
  component: EntryForm,
  tags: ['autodocs'],
  args: { 
    onEntryData: action('entryData')
  },
}

export const Default = {}
export const DefaultFormData = {
  args: {
    defaultFormData: {
      name: 'テスト名前',
      mail: 'test@test.com'
    }
  }
}
export const ServerErrors = {
  args: {
    serverErrors: {
      serverError: 'サーバーエラー',
      nameError:'重複しています'
    }
  }
}

