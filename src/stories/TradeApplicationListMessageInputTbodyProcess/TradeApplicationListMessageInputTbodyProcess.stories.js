import TradeApplicationListMessageInputTbodyProcess from './index.vue'
import { fn } from '@storybook/test'

export default {
  title: 'TradeApplicationList/TradeApplicationListMessageInputTbodyProcess',
  component: TradeApplicationListMessageInputTbodyProcess,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    onSubmit: fn()
  }
}

export const DefaultTradeApplicationListMessageInputTbodyProcess = {
  args: {}
}
