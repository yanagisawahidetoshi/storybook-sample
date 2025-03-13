import TradeTableConditionEdit from './index.vue'

export default {
  title: 'Components/TradeTableConditionEdit',
  component: TradeTableConditionEdit,
  argTypes: {
    defaultTradeApplys: { control: 'Array' }
  }
}

const Template = (args) => ({
  components: { TradeTableConditionEdit },
  setup() {
    return { args }
  },
  template: '<TradeTableConditionEdit v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  defaultTradeApplys: [
    {
      id: 1,
      applyDate: '2024/1/1',
      retailerCode: '1111111',
      retailerInfo: {
        genre: '小売業',
        companyName: 'たぬき合同会社',
        place: '静岡県沼津市',
        url: 'http://'
      },
      concept: '',
      netShop: '',
      image: '',
      times: 3,
      condition: 'unprocessed'
    },
    {
      id: 2,
      applyDate: '2024/2/2',
      retailerCode: '1111111',
      retailerInfo: {
        genre: '小売業',
        companyName: 'うさぎ合同会社',
        place: '静岡県沼津市',
        url: 'http://'
      },
      concept: '',
      netShop: '',
      image: '',
      times: 3,
      condition: 'no_trade'
    }
  ]
}

export const NoTradeApply = Template.bind({})
NoTradeApply.args = {
  defaultTradeApplys: []
}
