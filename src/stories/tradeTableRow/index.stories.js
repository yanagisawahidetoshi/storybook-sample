import tradeTableRow from './index.vue'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/tradeTableRow',
  component: tradeTableRow,
  argTypes: {
    tradeApply: { control: 'object' },
    onclick: { action: 'schedule-clicked' }
  }
}

const Template = (args) => ({
  components: { tradeTableRow },
  setup() {
    return { args }
  },
  template: '<tradeTableRow v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  tradeApply: {
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
    condition: ''
  },
  onclick: action('schedule-clicked')
}
