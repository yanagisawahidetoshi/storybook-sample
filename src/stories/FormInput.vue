<template>
	<div>
		{{ inputValue }}
		<div><span>必須</span><label for="">名前</label><input type="text" v-model="localInputValue.name"></div>
		<p v-if="errors.name">{{ errors.name}}</p>
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
			errors:{
				name:"",
				content:""
			}
		}
	},
	props: {
		inputValue: {
			type:Object
		}
	},
	computed: {
		localInputValue: {
			get() {
				return this.inputValue
			},set(newValue) {
				console.log(newValue)
				this.$emit('input',newValue)
			}
		}

		// values: {
		// 	get() {
		// 		return this.inputValue
		// 	},set(newValue) {

		// 	}
		// }
	},
	methods: {
		confirm() {
			if(!this.localInputValue.name.trim()) {
				this.errors.name = "入力してください";
				console.log("error");
				return;
			}

      Object.keys(this.errors).forEach(key=>{
      	this.errors[key] = ""
      })			
			this.$emit('confirm',this.localInputValue);
		}
	}
}
</script>