<template>
  <tbody>
    <tr>
      <td>{{ tradeApply.date }}</td>
      <td>{{ tradeApply.retailerDetail.retailerCode }}</td>
      <td>{{ tradeApply.retailerDetail }}</td>
      <td>{{ tradeApply.concept }}</td>
      <td>{{ tradeApply.netShop }}</td>
      <td>{{ tradeApply.image }}</td>
      <td>{{ tradeApply.applicationCount }}</td>
      <td>
        <input
          type="radio"
          :name="`tradeApplyId${tradeApply.id}`"
          value="未処理"
          :checked="applyStatus === '未処理'"
          @change="$emit('selectedApply', $event.target.value, tradeApply.id)"
        />
      </td>
      <td>
        <input
          type="radio"
          :name="`tradeApplyId${tradeApply.id}`"
          value="取引する"
          :checked="applyStatus === '取引する'"
          @change="$emit('selectedApply', $event.target.value, tradeApply.id)"
        />
      </td>
      <td>
        <input
          type="radio"
          :name="`tradeApplyId${tradeApply.id}`"
          value="取引しない"
          :checked="applyStatus === '取引しない'"
          @change="$emit('selectedApply', $event.target.value, tradeApply.id)"
        />
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'TradeApplicationListTbody',
  props: {
    tradeApply: {},
    applyStatuses: []
  },
  computed: {
    applyStatus() {
      const status = this.applyStatuses.find((applyStatus) => applyStatus.id === this.tradeApply.id)
      return status.applyStatus
    }
  }
}
</script>
