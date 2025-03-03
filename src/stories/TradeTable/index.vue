<template>
  <div>
    <table v-if="tradeApplyItems.length">
      <thead>
        <tr>
          <th>申請日</th>
          <th>会員番号</th>
          <th>会員情報</th>
          <th>ショップコンセプト</th>
          <th>ネットショップ</th>
          <th>店舗画像</th>
          <th>申請回数</th>
          <th>
            未処理<input
              type="radio"
              name="head-radio"
              value="0"
              @change="(value) => handleChange(value)"
            />
          </th>
          <th>
            取引する<input
              type="radio"
              name="head-radio"
              value="1"
              @change="(value) => handleChange(value)"
            />
          </th>
          <th>
            取引しない<input
              type="radio"
              name="head-radio"
              value="2"
              @change="(value) => handleChange(value)"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          :tradeApply="tradeApply"
          v-for="tradeApply in tradeApplyItems"
          :key="tradeApply.id"
          @onChange="changeTradeApplyItems"
        />
      </tbody>
    </table>
    <p v-if="!tradeApplyItems.length">処理対象がありませんでした。</p>
  </div>
</template>
<script>
import TableRow from '../TableRow/index.vue'

export default {
  name: 'TradeTable',
  props: {
    tradeApplys: {
      type: Array
    }
  },
  components: {
    TableRow
  },
  data() {
    return {
      tradeApplyItems: []
    }
  },
  methods: {
    handleChange(e) {
      const v = parseInt(e.target.value, 10)
      this.tradeApplyItems = this.tradeApplyItems.map((item) => {
        return { ...item, condition: v }
      })
    },
    changeTradeApplyItems(v, id) {
      this.tradeApplyItems = this.tradeApplyItems.map((item) => {
        return item.id === id ? { ...item, condition: v } : { ...item }
      })
    }
  },
  mounted() {
    this.tradeApplyItems = JSON.parse(JSON.stringify(this.tradeApplys))
  }
}
</script>
