<template>
  <table>
    <thead>
      <TableHeadCell @radioSelected="changeAllTradeApplyRadio" />
    </thead>
    <tbody>
      <TableBody
        :tradeApply="tradeApply"
        v-for="tradeApply in tradeApplyList"
        :key="tradeApply.id"
      />
    </tbody>
  </table>
</template>

<script>
import TableBody from '../TableBody/index.vue'
import TableHeadCell from '../TableHeadCell/index.vue'
export default {
  name: 'TradeAppliCationListTable',
  components: { TableHeadCell, TableBody },
  props: {
    tradeApplys: []
  },
  data() {
    return {
      selectAllOfThisCategory: null,
      tradeApplyList: this.tradeApplys
    }
  },
  methods: {
    changeAllTradeApplyRadio(v) {
      this.tradeApplyList = this.tradeApplyList.map((tradeApply) => {
        return {
          ...tradeApply,
          applyStatus: v
        }
      })
    }
  }
}
</script>
