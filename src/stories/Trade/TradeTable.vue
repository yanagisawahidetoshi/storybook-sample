<template>
	<div>
		<table>
			<thead>
				<TradeTableHead @onChange="handleAllCheck" />
			</thead>
			<tbody>
				<TradeTableRow 
					v-for="tradeData in tradeDataList"
					:key="tradeData.id"
					:tradeData="tradeData"
					@checked="updateTradeCondition"
					:tradeCondition="tradeConditionById(tradeData.id)"
					 />
			</tbody>
		</table>
		<button @click="onSubmit">次へ</button>
	</div>
</template>
<script>
import TradeTableHead from './TradeTableHead.vue';
import TradeTableRow from './TradeTableRow.vue';
export default {
	name:"TradeTable",
	components: {
		TradeTableHead,
		TradeTableRow
	},
	props: {
		defaultTradeDataList: {
			type: Array,
		}
	},
	data() {
		return {
			tradeDataList: this.defaultTradeDataList,
			tradeConditionList: this.defaultTradeDataList.map((tradeData) => {
				return {
					id: tradeData.id,
					condition: tradeData.condition
				}
			})
		}
	},
	methods: {
		tradeConditionById(id) {
			return this.tradeConditionList.find(item => item.id === id)
		},
		handleAllCheck(value) {
			this.tradeConditionList = this.tradeConditionList.map(item => {
				return { ...item, condition: value}
			});
		},
		updateTradeCondition(value, id) {
			this.tradeConditionList = this.tradeConditionList.map(item =>
				item.id === id ? { ...item, condition: value } : item
			);
		},
		onSubmit() {
			this.$emit("submit", this.tradeConditionList);
		},
	},
}
</script>