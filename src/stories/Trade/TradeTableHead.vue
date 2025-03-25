<template>
	<tr>
		<th>申請日</th>
		<th>会員番号</th>
		<th>会員情報</th>
		<th>ショップコンセプト</th>
		<th>ネットショップ</th>
		<th>店舗画像</th>
		<th>申請回数</th>
		<th><label for="select_apply"><span class="title">未処理</span><input type="radio" name="checkedAll" value="APPLY" id="select_apply" @change="onChange"></label></th>
		<th><label for="select_trading"><span class="title">取引する</span><input type="radio" name="checkedAll" value="TRADING" id="select_trading" @change="onChange"></label></th>
		<th><label for="select_disapproved"><span class="title">取引しない</span><input type="radio" name="checkedAll" value="DISAPPROVED" id="select_disapproved" @change="onChange"></label></th>
	</tr>
</template>
<script>
export default {
	name:"TradeTableHead",
	methods: {
		onChange(event) {
			this.$emit("onChange", event.target.value);
		},
	}
}
</script>
<style scoped>
th {
	padding: 15px;
	border: 1px solid #CCC;
}
.title {
	display: block;
}
</style>