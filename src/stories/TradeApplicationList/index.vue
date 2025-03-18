<template>
  <div>
    <TradeApplicationListTable
      v-if="step === '処理選択'"
      @onClick="nextStepInputMessage"
      :tradeApplyList="tradeApplyList"
    />
    <TradeApplicationListMessageInputTable
      v-if="step === 'メッセージ入力'"
      @onClick="step = '処理選択'"
      :tradeApplyList="tradeApplyList"
      :applyingRetailers="applyingRetailers"
    />
  </div>
</template>

<script>
import TradeApplicationListTable from '../TradeApplicationListTable/index.vue'
import TradeApplicationListMessageInputTable from '../TradeApplicationListMessageInputTable/index.vue'

export default {
  name: 'tradeApplyList',
  props: {
    tradeApplyList: {
      type: Array
    }
  },
  data() {
    return {
      step: '処理選択',
      applyingRetailers: []
    }
  },
  components: { TradeApplicationListTable, TradeApplicationListMessageInputTable },
  methods: {
    nextStepInputMessage(applyingRetailers) {
      this.applyingRetailers = applyingRetailers
      this.step = 'メッセージ入力'
    }
  }
}
</script>
