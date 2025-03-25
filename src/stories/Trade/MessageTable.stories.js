import { action } from '@storybook/addon-actions'; 
import MessageTable from './MessageTable.vue'
export default {
  title: 'Components/MessageTable',
  component: MessageTable,
  args: { 
    onSubmit: action('submit')
  },
  argTypes: {
    defaultTradeDataList: { control: 'object' },
  }
}

const Template = (args) => ({
  components: { MessageTable },
  setup() {
    return { args }
  },
  template: '<MessageTable v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  defaultTradeDataList: [
    {
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
      condition: 'APPLY',
      message:''
    },
    {
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
  ],
}

export const Back = Template.bind({})
Back.args = {
  defaultTradeDataList: [
    {
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
      condition: 'TRADING',
      message:'確認画面から戻った時のデータがここに入ります'
    },
    {
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
      message:'今後ともよろしくお願いいたします'
    },
  ],
}