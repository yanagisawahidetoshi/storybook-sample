import TableHeadCellProcess from './index.vue'
import { fn } from '@storybook/test'

export default {
  title: 'TradeApplicationList/TableHeadCellProcess',
  component: TableHeadCellProcess,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    onSubmit: fn()
  }
}

export const DefaultTableHeadCellProcess = {}
