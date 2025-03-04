<template>
  <tr>
    <td>{{ tradeApply.date }}</td>
    <td>{{ tradeApply.retailerCode }}</td>
    <td>{{ tradeApply.retailerDetail }}</td>
    <td>{{ tradeApply.concept }}</td>
    <td>{{ tradeApply.netShop }}</td>
    <td>{{ tradeApply.image }}</td>
    <td>{{ tradeApply.applicationCount }}</td>
    <td>
      <input
        type="radio"
        :name="`tradeApplyId${tradeApply.id}`"
        :checked="tradeApply.applyStatus === '未処理'"
        value="未処理"
      />
    </td>
    <td>
      <input
        type="radio"
        :name="`tradeApplyId${tradeApply.id}`"
        :checked="tradeApply.applyStatus === '取引する'"
        value="取引する"
      />
    </td>
    <td>
      <input
        type="radio"
        :name="`tradeApplyId${tradeApply.id}`"
        :checked="tradeApply.applyStatus === '取引しない'"
        value="取引しない"
      />
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TableBody',
  props: {
    tradeApply: {}
  }
}
</script>
