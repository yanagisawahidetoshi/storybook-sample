<template>
	<div>
		<table>
			<thead>
				<MessageTableHead />
			</thead>
			<tbody>
				<MessageTableRow 
					v-for="tradeData in filteredTradeDataList"
					:key="tradeData.id"
					:tradeData="tradeData"
					@inputMessage="updateTradeMessage"
					:tradeMessage="tradeMessageById(tradeData.id)" />
			</tbody>
		</table>
		<div><button @click="onSubmit">送信</button></div>
		<div><button @click="$emit('onBack')">戻る</button></div>
	</div>
</template>
<script>
import MessageTableHead from './MessageTableHead.vue';
import MessageTableRow from './MessageTableRow.vue';
export default {
	name:"TradeTable",
	components: {
		MessageTableHead,
		MessageTableRow
	},
	props: {
		defaultTradeDataList: {
			type: Array,
		}
	},
	data() {
		return {
			tradeDataList: this.defaultTradeDataList,
			tradeMessageList: this.defaultTradeDataList.map((tradeData) => {
				return {
					id: tradeData.id,
					message: tradeData.message
				}
			})
		};
	},
	computed: {
		filteredTradeDataList () {
			return this.tradeDataList.filter(tradeData => tradeData.condition === 'TRADING');
		}
	},
	methods: {
		tradeMessageById(id) {
			return this.tradeMessageList.find(item => item.id === id)
		},
		updateTradeMessage(value, id) {
			this.tradeMessageList = this.tradeMessageList.map(item =>
				item.id === id ? { ...item, message: value } : item
			);
		},
		onSubmit() {
			this.$emit('submit', this.tradeDataList, this.tradeMessageList);
		},
	}
}
</script>