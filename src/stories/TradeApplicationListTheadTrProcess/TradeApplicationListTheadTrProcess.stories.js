import TheadTrProcess from './index.vue'
import { fn } from '@storybook/test'

export default {
  title: 'TradeApplicationList/TradeApplicationListTheadTrProcess',
  component: TheadTrProcess,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    onSubmit: fn()
  }
}

export const DefaultTheadTrProcess = {}
