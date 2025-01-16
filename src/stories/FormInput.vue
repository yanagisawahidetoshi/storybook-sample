<template>
	<div>
		<div><span>【必須】</span><label for="">名前</label><input type="text" v-model="localInputValue.name"></div>
		<p v-if="errorMsg.name" class="error">{{ errorMsg.name}}</p>
		<div><label for="">問い合わせ内容</label><input type="text" v-model="localInputValue.content"></div>
		<button type="button" @click="confirm()">確認画面へ</button>
	</div>
</template>
<script>
export default {
	name:"FormInput",
	data() {
		return {
			input: {
				name:"",
				content:""
			},
		}
	},
	props: {
		inputValue: {
			type:Object
		},
		errorMsg: {
			type:Object
		}
	},
	computed: {
		localInputValue: {
			get() {
				return this.inputValue
			},set(newValue) {
				this.$emit('input',newValue)
			}
		}
	},
	methods: {
		confirm() {
			if(!this.localInputValue.name.trim()) {
				this.$emit("onValidation");
				return;
			}
			this.$emit('onConfirm',this.localInputValue);
		}
	}
}
</script>
<style scoped>
.error {
	color: red;
}
</style>