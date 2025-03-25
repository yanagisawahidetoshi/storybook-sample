import MessageTableRow from './MessageTableRow.vue'
export default {
  title: 'Components/MessageTableRow',
  component: MessageTableRow,
  argTypes: {
    tradeData: { control: 'object' },
    tradeMessage: { control: 'object' },
  }
}

const Template = (args) => ({
  components: { MessageTableRow },
  setup() {
    return { args }
  },
  template: '<MessageTableRow v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  tradeData: {
    id: 2,
    applyDate: '2025/3/2',
    retailerCode: '000002',
    retailerInfo: {
      category: '飲食業',
      companyUrl: 'https://eat.eat',
      companyName: 'レストランレストラン会社',
      address: '東京都世田谷区',
      shopUrl: 'https://eaturl.eaturl'
    },
    concept: '洋食のレストランです',
    netShop: '',
    image: '',
    count: 2,
    condition: 'TRADING',
    message:''
  },
  tradeMessage: {
    id: 1,
    message: ''
  },
}