<template>
<div>
	<p>{{ retailerInfo.category }}</p>
	<a :href="retailerInfo.companyUrl" target="_blank">{{ retailerInfo.companyName }}</a>
	<p>{{ retailerInfo.address }}</p>
	<a :href="retailerInfo.shopUrl" target="_blank">{{ retailerInfo.shopUrl }}</a>
</div>
</template>
<script>
export default {
	name:"TradeTableRetailerInfo",
	props: {
		retailerInfo: {
			type: Object
		}
	},
}
</script>