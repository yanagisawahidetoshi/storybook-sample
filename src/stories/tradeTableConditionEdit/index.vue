<template>
  <div>
    <template v-if="tradeApplies.length">
      <table>
        <tradeTableHead @onChange="updateAllConditions" />
        <tbody>
          <tradeTableRow
            :tradeApply="tradeApply"
            v-for="tradeApply in tradeApplies"
            :key="tradeApply.id"
            :tradeCondition="filterTradeConditionById(tradeApply.id)"
            @onChange="changeTradeCondition"
          />
        </tbody>
      </table>
      <button type="button" @click="$emit('onClick', 'next')">次へ</button>
    </template>
    <p v-if="!tradeApplies.length">処理対象がありませんでした。</p>
  </div>
</template>
<script>
import tradeTableRow from '../tradeTableRow/index.vue'
import tradeTableHead from '../tradeTableHead/index.vue'

export default {
  name: 'TradeTableConditionEdit',
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
      tradeApplies: [],
      tradeConditions: []
    }
  },
  computed: {},
  methods: {
    filterTradeConditionById(id) {
      return this.tradeConditions.find((item) => item.id === id).condition
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
    this.tradeApplies = this.defaultTradeApplys.map(({ condition, ...rest }) => rest)
    // idとconditionだけをもつ配列をつくる tradeApplyItemsのconditionは古いままでいい
  }
}
</script>
