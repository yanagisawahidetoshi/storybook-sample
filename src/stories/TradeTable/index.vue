<template>
  <div>
    <table v-if="tradeApplies.length">
      <tradeTableHead @onChange="updateAllConditions" />
      <tbody>
        <tradeTableRow
          :tradeApply="tradeApply"
          v-for="tradeApply in tradeApplies"
          :key="tradeApply.id"
          :tradeCondition="tradeConditionById(tradeApply.id)"
          @onChange="changeTradeCondition"
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
  computed: {},
  methods: {
    tradeConditionById(id) {
      return this.tradeConditions.filter((item) => item.id === id)
    },
    updateAllConditions(v) {
      this.tradeConditions = this.tradeConditions.map((item) => {
        return { ...item, condition: v }
      })
    },
    changeTradeCondition(v, id) {
      this.tradeConditions = this.tradeConditions.map((item) =>
        item.id === id ? { ...item, condition: v } : item
      )
    }
  },
  mounted() {
    this.tradeConditions = this.defaultTradeApplys.map(({ id, condition }) => ({ id, condition }))
    // idとconditionだけをもつ配列をつくる tradeApplyItemsのconditionは古いままでいい
  }
}
</script>
