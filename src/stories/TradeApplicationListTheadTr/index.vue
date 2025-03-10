<template>
  <thead>
    <tr>
      <th>申請日</th>
      <th>会員番号</th>
      <th>会員情報</th>
      <th>ショップコンセプト</th>
      <th>ネットショップ</th>
      <th>店舗画像</th>
      <th>申請回数</th>
      <TheadTrProcess @radioSelected="$emit('radioSelected', $event)" />
    </tr>
  </thead>
</template>

<script>
import TheadTrProcess from '../TradeApplicationListTheadTrProcess/index.vue'
export default {
  name: 'TradeApplicationListTheadTr',
  components: { TheadTrProcess }
}
</script>
