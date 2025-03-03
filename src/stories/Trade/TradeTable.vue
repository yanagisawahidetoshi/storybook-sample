<template>
	<div>
		<table>
			<thead>
				<TradeTableHead @change="handleSelectAll" />
			</thead>
			<tbody>
				<TradeTableRow
				:selectedValue="selectedValue" />
			</tbody>
		</table>
	</div>
</template>
<script>
import TradeTableHead from './TradeTableHead.vue';
import TradeTableRow from './TradeTableRow.vue';
export default {
	name:"EntryForm",
	components: {
		TradeTableHead,
		TradeTableRow
	},
	props: {

	},
	data() {
		return {
			selectedValue: "",
		}
	},
	methods: {
		handleSelectAll(value) {
			this.selectedValue = value;
		},
	}
}
</script>