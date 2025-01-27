import { fn } from '@storybook/test'
import InputForm from './InputForm.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/InputForm',
  component: InputForm,
  tags: ['autodocs'],
  argTypes: {
  },
  args:{}
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
}
const Template = (args) => ({
  components: { InputForm },
  setup() {
    return { args }
  },
  template: `
<InputForm
      v-bind="args"
    />
  `
})
export const Default = Template.bind({})
Default.args = {
// 	name: 'yamada',
// 	email: '01234@abc.jp',
// 	tel: '00000000000',
}