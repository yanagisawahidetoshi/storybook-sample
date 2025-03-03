<template>
  <tr>
    <td>{{ tradeApply.applyDate }}</td>
    <td>{{ tradeApply.retailerCode }}</td>
    <td><TableRetailerCel :retailerInfo="tradeApply.retailerInfo" /></td>
    <td>{{ tradeApply.concept }}</td>
    <td>{{ tradeApply.netShop }}</td>
    <td>{{ tradeApply.image }}</td>
    <td>{{ tradeApply.times > 0 ? tradeApply.times : '初回' }}</td>
    <td>
      <input
        type="radio"
        :name="`trade-${tradeApply.id}`"
        :checked="tradeApply.condition === 0"
        value="0"
        @change="($event) => handleChange($event, tradeApply.id)"
      />
    </td>
    <td>
      <input
        type="radio"
        :name="`trade-${tradeApply.id}`"
        :checked="tradeApply.condition === 1"
        value="1"
        @change="($event) => handleChange($event, tradeApply.id)"
      />
    </td>
    <td>
      <input
        type="radio"
        :name="`trade-${tradeApply.id}`"
        :checked="tradeApply.condition === 2"
        value="2"
        @change="($event) => handleChange($event, tradeApply.id)"
      />
    </td>
  </tr>
</template>
<script>
import TableRetailerCel from './TableRetailerCel/index.vue'

export default {
  name: 'DateRow',
  props: {
    tradeApply: {
      type: Object
    }
  },
  components: {
    TableRetailerCel
  },
  methods: {
    handleChange(e, id) {
      const value = parseInt(e.target.value, 10)
      this.$emit('onChange', value, id)
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
