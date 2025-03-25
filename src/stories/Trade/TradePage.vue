<template>
	<TradeTable :defaultTradeDataList="tradeDataList" v-if="currentPage === 'trade'" @submit="handleSubmitTrade" />
	<MessageTable :defaultTradeDataList="tradeDataList" v-if="currentPage === 'message'" />
</template>
<script>
// import axios from "axios";
import MessageTable from "./MessageTable.vue";
import TradeTable from "./TradeTable.vue";
export default {
	name: "TradePage",
	components: {
		MessageTable,
		TradeTable
	},
	data() {
		return {
			tradeDataList: [
				{
				id: 1,
				applyDate: '2025/3/1',
				retailerCode: '000001',
				retailerInfo: {
					category: '小売業',
					companyUrl: 'https://companyurl.companyurl',
					companyName: 'テスト会社',
					address: '東京都千代田区',
					shopUrl: 'https://shopurl.shopurl'
				},
				concept: 'こういったコンセプトです',
				netShop: '',
				image: '',
				count: 3,
				condition: ''
				},
				{
				id: 2,
				applyDate: '2025/3/2',
				retailerCode: '000002',
				retailerInfo: {
					category: '飲食業',
					companyUrl: 'https://eat.eat',
					companyName: 'レストランレストラン会社',
					address: '東京都世田谷区',
					shopUrl: 'https://eaturl.eaturl'
				},
				concept: '洋食のレストランです',
				netShop: '',
				image: '',
				count: 2,
				condition: ''
				},
			],
			currentPage: "trade"
		}
	},
	created () {
		// this.fetchTradeDataList()
	},
	methods: {
		handleSubmitTrade(dataList) {
			this.tradeDataList = this.tradeDataList.map(item =>
				dataList.find(data => item.id === data.id) ? { ...item, condition: dataList.find(data => item.id === data.id).condition } : item
			);
			this.currentPage = 'message'
		}
		// async fetchTradeDataList() {
		// 	try {
		// 		const response = await axios.get("#");
		// 		this.tradeDataList = response.data;
		// 	} catch {
		// 		this.apiStatus = 500;
		// 	}
		// },
	}
}
</script>