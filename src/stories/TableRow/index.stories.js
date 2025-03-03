import DateRow from './index.vue'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/DateRow',
  component: DateRow,
  argTypes: {
    tradeApply: { control: 'object' },
    onclick: { action: 'schedule-clicked' }
  }
}

const Template = (args) => ({
  components: { DateRow },
  setup() {
    return { args }
  },
  template: '<DateRow v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  tradeApply: {
    id: 1,
    applyDate: '2024/1/1',
    retailerCode: '1111111',
    retailerInfo: {
      genre:"小売業",
      companyName:"たぬき合同会社",
      place:"静岡県沼津市",
      url:"http://"
    },
    concept: "",
    netShop:"",
    image:"",
    times:3,
    condition:""
  },
  onclick: action('schedule-clicked')
}

export const NoSchedules = Template.bind({})
NoSchedules.args = {
  schedules: []
}
