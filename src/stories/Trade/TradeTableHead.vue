<template>
	<tr>
		<th>申請日</th>
		<th>会員番号</th>
		<th>会員情報</th>
		<th>ショップコンセプト</th>
		<th>ネットショップ</th>
		<th>店舗画像</th>
		<th>申請回数</th>
		<th>未処理<br><input type="radio" name="selectAll" value="APPLY" @change="onChange"></th>
		<th>取引する<br><input type="radio" name="selectAll" value="TRADING" @change="onChange"></th>
		<th>取引しない<br><input type="radio" name="selectAll" value="DISAPPROVED" @change="onChange"></th>
	</tr>
</template>
<script>
export default {
	name:"TradeTableHead",
	methods: {
		onChange(event) {
			this.$emit("change", event.target.value);
		},
	}
}
</script>