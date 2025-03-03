<template>
	<tr>
		<td>内容：申請日</td>
		<td>内容：会員番号</td>
		<td><TradeTableRetailerInfo /></td>
		<td>内容：ショップコンセプト</td>
		<td>内容：ネットショップ</td>
		<td>内容：店舗画像</td>
		<td>内容：申請回数</td>
		<td><input type="radio" :name="'condition_' + tradeData.id" :checked="selectedValue === 'APPLY'"></td>
		<td><input type="radio" :name="'condition_' + tradeData.id" :checked="selectedValue === 'TRADING'"></td>
		<td><input type="radio" :name="'condition_' + tradeData.id" :checked="selectedValue === 'DISAPPROVED'"></td>
	</tr>
</template>
<script>
import TradeTableRetailerInfo from './TradeTableRetailerInfo.vue';
export default {
	name: 'TradeTableRow',
	components: {
		TradeTableRetailerInfo
	},
	props: {
		tradeData: {
			type: Object
		}
	},
	data() {
		return {
		}
	},
	methods: {

	}
}
</script>
