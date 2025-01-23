<template>
	<div>
		<h1>入力</h1>
		<p v-if="serverErrors">{{ serverErrors.serverError }}</p>
        <table>
			<tbody>
				<tr>
					<th>名前</th>
					<td><input type="text" v-model="entryData.name">
						<p v-if="errors.required">必須項目です</p>
						<p v-if="serverErrors.nameError">名前が重複しています</p>
					</td>
				</tr>
				<tr>
					<th>メールアドレス</th>
					<td><input type="text" v-model="entryData.mail"></td>
				</tr>
			</tbody>
		</table>
		<div><button @click="onSubmit">確認画面へ</button></div>
	</div>
</template>
<script>
export default {
	name:"EntryForm",
	props: {
		defaultFormData: {
			type: Object,
			default: () => ({ name: "", mail: "" }),
		},
		serverErrors: {
			type:Object,
			default: () => ({}),
		}
	},
	data() {
		return {
			entryData: {
				name: this.defaultFormData.name,
				mail: this.defaultFormData.mail,
			},
			errors: {
				required: false,
			},
		}
	},
	methods: {
		onSubmit() {
			this.validate();
			if(!this.errors.required) {
				this.$emit("entryData", this.entryData);
			}
		},
		validate() {
			if(!this.entryData.name) {
				this.errors.required = true
				return
			}
			this.errors.required = false
		}
	}
}
</script>