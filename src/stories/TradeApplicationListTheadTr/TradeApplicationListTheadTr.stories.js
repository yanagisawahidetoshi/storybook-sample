import TheadTr from './index.vue'
import { fn } from '@storybook/test'

export default {
  title: 'TradeApplicationList/TradeApplicationListTheadTr',
  component: TheadTr,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    onSubmit: fn()
  }
}

export const DefaultTheadTr = {}
