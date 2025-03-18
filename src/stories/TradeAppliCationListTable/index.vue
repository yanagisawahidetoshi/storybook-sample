<template>
  <table>
    <TradeApplicationListTheadTr @radioSelected="changeAllTradeApplyList" />
    <TradeApplicationListTbody
      :tradeApply="tradeApply"
      v-for="tradeApply in tradeApplyList"
      :key="tradeApply.id"
      @selectedApply="changeTradeApply"
      :applyStatus="
        applyStatuses.find((applyStatus) => applyStatus.id === tradeApply.id)?.applyStatus
      "
    />
  </table>
  <button
    @click="
      $emit(
        'onClick',
        applyStatuses.filter((applyStatus) => applyStatus.applyStatus === '取引する')
      )
    "
  >
    次へ
  </button>
</template>

<script>
import TradeApplicationListTbody from '../TradeApplicationListTbody/index.vue'
import TradeApplicationListTheadTr from '../TradeApplicationListTheadTr/index.vue'
export default {
  name: 'TradeApplicationListTable',
  emits: ['onClick'],
  components: { TradeApplicationListTheadTr, TradeApplicationListTbody },
  props: {
    tradeApplyList: {
      type: Array
    }
  },
  data() {
    return {
      applyStatuses: this.tradeApplyList.map((applyStatuse) => {
        return {
          id: applyStatuse.id,
          applyStatus: applyStatuse.applyStatus
        }
      })
    }
  },
  methods: {
    changeAllTradeApplyList(v) {
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
