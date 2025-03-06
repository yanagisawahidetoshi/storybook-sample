<template>
  <div>
    <table v-if="tradeApplies.length">
      <tradeTableHead @onChange="changeCondition" />
      <tbody>
        <tradeTableRow
          :tradeApply="tradeApply"
          v-for="tradeApply in tradeApplies"
          :key="tradeApply.id"
          :tradeConditions="tradeConditions"
          @onChange="changeTradeApplyItems"
        />
      </tbody>
    </table>
    <p v-if="!tradeApplies.length">処理対象がありませんでした。</p>
  </div>
</template>
<script>
import tradeTableRow from '../tradeTableRow/index.vue'
import tradeTableHead from '../tradeTableHead/index.vue'

export default {
  name: 'TradeTable',
  props: {
    // tradeAppliesはmountedでつかっているだけなので、コピーしてよく使う方をtradeApplyItems→tradeAppliesとかにすればいい
    defaultTradeApplys: {
      type: Array
    }
  },
  components: {
    tradeTableRow,
    tradeTableHead
  },
  data() {
    return {
      // idとconditionだけをもつ配列をつくる
      tradeApplies: JSON.parse(JSON.stringify(this.defaultTradeApplys)),
      tradeConditions: []
    }
  },
  methods: {
    changeCondition(v) {
      this.tradeConditions = this.tradeConditions.map((item) => {
        return { ...item, condition: v }
      })
    },
    changeTradeApplyItems(updatedConditions) {
      this.tradeConditions = JSON.parse(JSON.stringify(updatedConditions))
    }
  },
  mounted() {
    this.tradeConditions = this.defaultTradeApplys.map(({ id, condition }) => ({ id, condition }))
    // idとconditionだけをもつ配列をつくる tradeApplyItemsのconditionは古いままでいい
  }
}
</script>
