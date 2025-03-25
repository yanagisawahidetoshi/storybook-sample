import TradeTableRow from './TradeTableRow.vue'
export default {
  title: 'Components/TradeTableRow',
  component: TradeTableRow,
  argTypes: {
    tradeData: { control: 'object' },
  }
}

const Template = (args) => ({
  components: { TradeTableRow },
  setup() {
    return { args }
  },
  template: '<TradeTableRow v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  tradeData: {
    id: 1,
    applyDate: '2025/3/1',
    retailerCode: '000001',
    retailerInfo: {
      category: '小売業',
      companyUrl: 'https://companyurl.companyurl',
      companyName: 'テスト会社',
      address: '東京都千代田区',
      shopUrl: 'https://shopurl.shopurl'
    },
    concept: 'こういったコンセプトです',
    netShop: '',
    image: '',
    count: 3,
    condition: 'APPLY'
  },
}