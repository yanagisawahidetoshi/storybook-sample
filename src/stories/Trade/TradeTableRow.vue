<template>
	<tr>
		<td>{{ tradeData.applyDate }}</td>
		<td>{{ tradeData.retailerCode }}</td>
		<td><TradeTableRetailerInfo :retailerInfo="tradeData.retailerInfo" /></td>
		<td>{{ tradeData.concept }}</td>
		<td>{{ tradeData.netShop }}</td>
		<td>{{ tradeData.image }}</td>
		<td>{{ tradeData.count }}</td>
		<td><input type="radio" :name="`condition_${tradeData.id}`" value="APPLY" :checked="tradeCondition.condition === 'APPLY'" @change="onChange"></td>
		<td><input type="radio" :name="`condition_${tradeData.id}`" value="TRADING" :checked="tradeCondition.condition === 'TRADING'" @change="onChange"></td>
		<td><input type="radio" :name="`condition_${tradeData.id}`" value="DISAPPROVED" :checked="tradeCondition.condition === 'DISAPPROVED'" @change="onChange"></td>
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
		},
		tradeCondition: {
			type: Object,
		}
	},
	methods: {
		onChange(event) {
			this.$emit("checked", event.target.value, this.tradeData.id);
		},
	}
}
</script>

<style scoped>
td {
	padding: 15px;
	border: 1px solid #CCC;
}
</style>