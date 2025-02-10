import { fn } from '@storybook/test'
import Confirm from './InputConfirm.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Confirm',
  component: Confirm,
  tags: ['autodocs'],
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
}
const Template = (args) => ({
  components: { Confirm },
  setup() {
    return { args }
  },
  template: `
<Confirm
      v-bind="args"
    />
  `
})
export const Default = Template.bind({})
Default.args = {
    name: '山田 太郎',
    email: 'yamada.taro@example.com',
    tel: '08012341234',
}

