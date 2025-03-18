<template>
  <table>
    <thead>
      <tr>
        <th>申請日</th>
        <th>会員番号</th>
        <th>会員情報</th>
        <th>会員へのメッセージ</th>
      </tr>
    </thead>
    <TradeApplicationListMessageInputTbody
      v-for="applyingRetailer in filteredTradeApplyList"
      :key="applyingRetailer.id"
      :applyingRetailer="applyingRetailer"
      @onText="handleRetailerMessage"
    />
  </table>
  <button @click="$emit('onClick')">戻る</button>
</template>

<script>
import TradeApplicationListMessageInputTbody from '../TradeApplicationListMessageInputTbody/index.vue'
export default {
  name: 'TradeApplicationListTable',
  emits: ['onClick'],
  components: { TradeApplicationListMessageInputTbody },
  props: {
    tradeApplyList: {
      type: Array
    },
    applyingRetailers: {
      type: Array
    }
  },
  data() {
    return {
      retailerMessages: this.applyingRetailers.map((applyingRetailer) => {
        return {
          id: applyingRetailer.id,
          retailerMessage: ''
        }
      })
    }
  },
  methods: {
    handleRetailerMessage(v) {
      this.retailerMessages = this.retailerMessages.map((retailerMessage) =>
        retailerMessage.id === v.id
          ? { ...retailerMessage, retailerMessage: v.message }
          : retailerMessage
      )
      console.log(this.retailerMessages)
    }
  },
  computed: {
    filteredTradeApplyList() {
      return this.tradeApplyList.filter((tradeApply) => {
        return this.applyingRetailers.some(
          (applyingRetailer) => applyingRetailer.id === tradeApply.id
        )
      })
    }
  }
}
</script>
