<template>
	<tr>
		<td>{{ tradeData.applyDate }}</td>
		<td>{{ tradeData.retailerCode }}</td>
		<td><TradeTableRetailerInfo :retailerInfo="tradeData.retailerInfo" /></td>
		<td><MessageTextarea :tradeMessage="tradeMessage" @inputMessage="(value, id) => $emit('inputMessage', value, id)" /></td>
	</tr>
</template>
<script>
import TradeTableRetailerInfo from './TradeTableRetailerInfo.vue';
import MessageTextarea from './MessageTextarea.vue'
export default {
	name: 'TradeTableRow',
	components: {
		TradeTableRetailerInfo,
		MessageTextarea
	},
	props: {
		tradeData: {
			type: Object
		},
		tradeMessage: {
			type: Object,
		}
	},
	data() {
		return {

		};
	},
	methods: {

	}
}
</script>

<style scoped>
td {
	padding: 15px;
	border: 1px solid #CCC;
}
</style>