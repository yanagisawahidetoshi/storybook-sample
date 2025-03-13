import TradeTable from './index.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/TradeTable',
  component: TradeTable,
  tags: ['autodocs'],
  render: (args) => ({
    components: {
      TradeTable
    },
    setup() {
      return {
        ...args
      }
    },
    template: '<TradeTable @onClick="handleClick" :defaultTradeApplys="defaultTradeApplys"/>'
  }),
  args: {
    handleClick: fn()
  }
}

// const Template = (args) => ({
//   components: { TradeTable },
//   setup() {
//     return { ...args }
//   },
//   template: '<TradeTable v-bind="args" />'
// })

// export const Default = Template.bind({})
export const Default = {
  args: {
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
}
