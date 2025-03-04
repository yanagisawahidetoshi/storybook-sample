<template>
  <tr>
    <th>申請日</th>
    <th>会員番号</th>
    <th>会員情報</th>
    <th>ショップコンセプト</th>
    <th>ネットショップ</th>
    <th>店舗画像</th>
    <th>申請回数</th>
    <TableHeadCellProcess @radioSelected="$emit('radioSelected', $event)" />
  </tr>
</template>

<script>
import TableHeadCellProcess from '../TableHeadCellProcess/index.vue'
export default {
  name: 'TableHeadCell',
  components: { TableHeadCellProcess }
}
</script>
