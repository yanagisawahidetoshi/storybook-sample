<template>
  <tbody>
    <tr>
      <td>{{ applyingRetailer.date }}</td>
      <td>{{ applyingRetailer.retailerDetail.retailerCode }}</td>
      <td>{{ applyingRetailer.retailerDetail }}</td>
      <TradeApplicationListMessageInputTbodyProcess
        @onText="(v) => $emit('onText', { id: applyingRetailer.id, message: v })"
      />
    </tr>
  </tbody>
</template>

<script>
import TradeApplicationListMessageInputTbodyProcess from '../TradeApplicationListMessageInputTbodyProcess/index.vue'

export default {
  name: 'TradeApplicationListMessageInputTbody',
  components: { TradeApplicationListMessageInputTbodyProcess },
  props: {
    applyingRetailer: {}
  }
}
</script>
