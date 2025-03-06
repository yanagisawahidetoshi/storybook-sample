<template>
  <table>
    <TradeApplicationListTheadTr @radioSelected="changeAllTradeApply" />
    <TradeApplicationListTbody
      :tradeApply="tradeApply"
      v-for="tradeApply in tradeApplies"
      :key="tradeApply.id"
      @selectedApply="changeTradeApply"
      :applyStatuses="applyStatuses"
    />
  </table>
</template>

<script>
import TradeApplicationListTbody from '../TradeApplicationListTbody/index.vue'
import TradeApplicationListTheadTr from '../TradeApplicationListTheadTr/index.vue'
export default {
  name: 'TradeAppliCationListTable',
  components: { TradeApplicationListTheadTr, TradeApplicationListTbody },
  props: {
    tradeApplyList: []
  },
  data() {
    return {
      selectAllOfThisCategory: null,
      tradeApplies: this.tradeApplyList,
      applyStatuses: this.tradeApplyList.map((tradeApply) => {
        return {
          id: tradeApply.id,
          applyStatus: tradeApply.applyStatus
        }
      })
    }
  },
  methods: {
    changeAllTradeApply(v) {
      this.applyStatuses = this.tradeApplyList.map((tradeApply) => {
        return {
          ...tradeApply,
          applyStatus: v
        }
      })
      console.log(this.applyStatuses)
    },
    changeTradeApply(selectedApply, id) {
      this.applyStatuses = this.applyStatuses.map((tradeApply) =>
        tradeApply.id === id ? { ...tradeApply, applyStatus: selectedApply } : tradeApply
      )
    }
  }
}
</script>
