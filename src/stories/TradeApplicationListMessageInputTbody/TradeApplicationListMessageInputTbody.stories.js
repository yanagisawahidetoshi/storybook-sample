import TradeApplicationListMessageInputTbody from './index.vue'
import { fn } from '@storybook/test'

export default {
  title: 'TradeApplicationList/TradeApplicationListMessageInputTbody',
  component: TradeApplicationListMessageInputTbody,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    onSubmit: fn()
  }
}

export const DefaultTradeApplicationListMessageInputTbody = {
  args: {
    tradeApply: {
      id: '123',
      date: '2025/1/1',
      retailerDetail: {
        industry: '小売業',
        retailerCode: 1110111,
        companyName: 'MiChi合同会社',
        address: '静岡県沼津市',
        url: 'http://test.com'
      },
      image: 'http://image.com'
    }
  }
}
