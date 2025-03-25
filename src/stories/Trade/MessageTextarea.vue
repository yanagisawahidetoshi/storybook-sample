<template>
	<textarea rows="6" cols="60" placeholder="※全角400字以内" :name="`approvecomment_${tradeMessage.id}`" v-model="inputMessage"></textarea>
</template>
<script>
export default {
	name: 'MessageTextarea',
	props: {
		tradeMessage: {
			type: Object,
		},
	},
	computed: {
		inputMessage: {
			get() {
				return this.tradeMessage.message;
			},
			set(value) {
				this.$emit('inputMessage', value, this.tradeMessage.id);
			}
		}
	}
}
</script>
