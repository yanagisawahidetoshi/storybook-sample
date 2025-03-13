<template>
  <div>
    <table>
      <thead>
        <TradeTableMessageHead />
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td><TradeTableMessageForm /></td>
        </tr>
      </tbody>
    </table>
    <button type="button">戻る</button>
    <button type="button">確認へ</button>
  </div>
</template>
<script>
import TradeTableMessageForm from '../tradeTableMessageForm/index.vue'
import TradeTableMessageHead from '../tradeTableMessageHead/index.vue'

export default {
  name: 'TradeTableMessage',
  components: {
    TradeTableMessageForm,
    TradeTableMessageHead
  }
}
</script>
