import TradeAppliCationListTable from './index.vue'
import { fn } from '@storybook/test'

export default {
  title: 'TradeApplicationList/TradeAppliCationListTable',
  component: TradeAppliCationListTable,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    onSubmit: fn()
  }
}

export const DefaultTradeAppliCationListTable = {
  args: {
    tradeApplyList: [
      {
        id: '123',
        date: '2025/1/1',
        retailerDetail: {
          industry: '小売業',
          retailerCode: 1110111,
          companyName: 'MiChi合同会社',
          address: '静岡県沼津市',
          url: 'http://test.com'
        },
        concept: 'テストテストテスト',
        netShop: 'テストテストテスト',
        image: 'http://image.com',
        applicationCount: '初',
        applyStatus: '未処理'
      },
      {
        id: '124',
        date: '2025/1/2',
        retailerDetail: {
          retailerCode: 1110112,
          industry: '製造業',
          companyName: 'パプア会社',
          address: '東京都世田谷区',
          url: 'http://testtest.com'
        },
        concept: 'テストテスト',
        netShop: 'テストテスト',
        image: 'http://imageimage.com',
        applicationCount: '5回',
        applyStatus: '取引しない'
      }
    ]
  }
}
