import TradeApplicationListTbody from './index.vue'
import { fn } from '@storybook/test'

export default {
  title: 'TradeApplicationList/TradeApplicationListTbody',
  component: TradeApplicationListTbody,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    onSubmit: fn()
  }
}

export const DefaultTradeApplicationListTbody = {
  args: {
    tradeApply: {
      date: '2025/1/1',
      retailerDetail: {
        retailerCode: 1110111,
        industry: '小売業',
        companyName: 'MiChi合同会社',
        address: '静岡県沼津市',
        url: 'http://test.com'
      },
      concept: 'テストテストテスト',
      netShop: 'テストテストテスト',
      image: 'http://image.com',
      applicationCount: '初',
      applyStatus: '未処理'
    }
  }
}
