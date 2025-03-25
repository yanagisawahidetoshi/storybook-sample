import MessageTextarea from './MessageTextarea.vue'
export default {
  title: 'Components/MessageTextarea',
  component: MessageTextarea,
  argTypes: {
    tradeMessage: { control: 'object' },
  }
}

const Template = (args) => ({
  components: { MessageTextarea },
  setup() {
    return { args }
  },
  template: '<MessageTextarea v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  tradeMessage: {
    id: 1,
    message: ''
  },
}

export const Back = Template.bind({})
Back.args = {
  tradeMessage: {
    id: 1,
    message: '確認画面から戻った時のデータがここに入ります'
  },
}