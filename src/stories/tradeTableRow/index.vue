<template>
  <tr>
    <td>{{ tradeApply.applyDate }}</td>
    <td>{{ tradeApply.retailerCode }}</td>
    <td><TradeTableRetailerInfoCeil :retailerInfo="tradeApply.retailerInfo" /></td>
    <td>{{ tradeApply.concept }}</td>
    <td>{{ tradeApply.netShop }}</td>
    <td>{{ tradeApply.image }}</td>
    <td>{{ tradeApply.times > 0 ? tradeApply.times : '初回' }}</td>
    <td>
      <input
        type="radio"
        :name="`trade-${tradeApply.id}`"
        value="unprocessed"
        @change="($event) => handleChange($event, tradeApply.id)"
        :checked="isCheck('unprocessed')"
      />
    </td>
    <td>
      <input
        type="radio"
        :name="`trade-${tradeApply.id}`"
        value="trade"
        @change="($event) => handleChange($event, tradeApply.id)"
        :checked="isCheck('trade')"
      />
    </td>
    <td>
      <input
        type="radio"
        :name="`trade-${tradeApply.id}`"
        value="no_trade"
        @change="($event) => handleChange($event, tradeApply.id)"
        :checked="isCheck('no_trade')"
      />
    </td>
  </tr>
</template>
<script>
import TradeTableRetailerInfoCeil from '../tradeTableRetailerInfoCeil/index.vue'
// TradeTableRowのほうがいい。tradeTableRetailerInfoCeilのディレクトリ構造がおかしいから、上にフォルダおく。atomic designはディレクトリは並列にする

export default {
  name: 'TradeTableRow',
  data() {
    return {}
  },
  props: {
    tradeApply: {
      type: Object
    },
    tradeCondition: {
      type: String
    }
  },
  components: {
    TradeTableRetailerInfoCeil
  },
  methods: {
    handleChange(e, id) {
      this.$emit('onChange', e.target.value, id)
    },
    isCheck(status) {
      return this.tradeCondition === status
    }
  }
}
</script>
<style>
tr,
td {
  border: 1px solid;
}
</style>
