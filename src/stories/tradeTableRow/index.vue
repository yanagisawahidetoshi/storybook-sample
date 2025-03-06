<template>
  <tr>
    <td>{{ tradeApply.applyDate }}</td>
    <td>{{ tradeApply.retailerCode }}</td>
    <td><tradeTableRetailerInfoCeil :retailerInfo="tradeApply.retailerInfo" /></td>
    <td>{{ tradeApply.concept }}</td>
    <td>{{ tradeApply.netShop }}</td>
    <td>{{ tradeApply.image }}</td>
    <td>{{ tradeApply.times > 0 ? tradeApply.times : '初回' }}</td>
    <td>
      <input
        type="radio"
        :name="`trade-${tradeApply.id}`"
        :checked="isCheck(tradeApply.id, 0)"
        value="0"
        @change="($event) => handleChange($event, tradeApply.id)"
      />
    </td>
    <td>
      <input
        type="radio"
        :name="`trade-${tradeApply.id}`"
        :checked="isCheck(tradeApply.id, 1)"
        value="1"
        @change="($event) => handleChange($event, tradeApply.id)"
      />
    </td>
    <td>
      <input
        type="radio"
        :name="`trade-${tradeApply.id}`"
        :checked="isCheck(tradeApply.id, 2)"
        value="2"
        @change="($event) => handleChange($event, tradeApply.id)"
      />
    </td>
  </tr>
</template>
<script>
import tradeTableRetailerInfoCeil from '../tradeTableRetailerInfoCeil/index.vue'
// tradeTableRowのほうがいい。tradeTableRetailerInfoCeilのディレクトリ構造がおかしいから、上にフォルダおく。atomic designはディレクトリは並列にする

export default {
  name: 'tradeTableRow',
  data() {
    return {}
  },
  props: {
    tradeApply: {
      type: Object
    },
    tradeConditions: {
      type: Object
    }
  },
  components: {
    tradeTableRetailerInfoCeil
  },
  computed: {
    tradeCondition() {
      return JSON.parse(JSON.stringify(this.tradeConditions))
    }
  },
  methods: {
    handleChange(e, id) {
      const value = parseInt(e.target.value, 10)
      this.tradeCondition = this.tradeCondition.map((item) =>
        item.id === id ? { ...item, condition: value } : item
      )
      this.$emit('onChange', this.tradeCondition)
    },
    isCheck(tradeApplyId, number) {
      return this.tradeCondition.filter((el) => el.id === tradeApplyId)[0].condition === number
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
