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
      <th>
        未処理<input
          type="radio"
          name="select-all-conditions"
          value="unprocessed"
          @change="(e) => handleChange(e.target.value)"
        />
      </th>
      <th>
        取引する<input
          type="radio"
          name="select-all-conditions"
          value="trade"
          @change="(e) => handleChange(e.target.value)"
        />
      </th>
      <th>
        取引しない<input
          type="radio"
          name="select-all-conditions"
          value="no_trade"
          @change="(e) => handleChange(e.target.value)"
        />
      </th>
    </tr>
  </thead>
</template>
<script>
export default {
  name: 'tradeTableHead',
  methods: {
    handleChange(v) {
      // const value = parseInt(v, 10)
      this.$emit('onChange', v)
    }
  }
}
</script>
