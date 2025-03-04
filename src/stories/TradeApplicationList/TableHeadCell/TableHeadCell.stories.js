import TableHeadCell from './index.vue'
import { fn } from '@storybook/test'

export default {
  title: 'TradeApplicationList/TableHeadCell',
  component: TableHeadCell,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    onSubmit: fn()
  }
}

export const DefaultTableHeadCell = {}
