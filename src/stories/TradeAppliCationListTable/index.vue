<template>
  <table>
    <TradeApplicationListTheadTr @radioSelected="changeAllTradeApplies" />
    <TradeApplicationListTbody
      :tradeApply="tradeApply"
      v-for="tradeApply in tradeApplies"
      :key="tradeApply.id"
      @selectedApply="changeTradeApply"
      :applyStatus="
        applyStatuses.find((applyStatus) => applyStatus.id === tradeApply.id)?.applyStatus
      "
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
      applyStatuses: this.tradeApplyList.map((applyStatuse) => {
        return {
          id: applyStatuse.id,
          applyStatus: applyStatuse.applyStatus
        }
      })
    }
  },
  methods: {
    changeAllTradeApplies(v) {
      this.applyStatuses = this.tradeApplyList.map((applyStatuse) => {
        return {
          ...applyStatuse,
          applyStatus: v
        }
      })
    },
    changeTradeApply(selectedApply, id) {
      this.applyStatuses = this.applyStatuses.map((tradeApply) =>
        tradeApply.id === id ? { ...tradeApply, applyStatus: selectedApply } : tradeApply
      )
    }
  }
}
</script>
