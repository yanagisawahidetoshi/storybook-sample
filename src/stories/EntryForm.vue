<template>
	<div>
		<h1>入力</h1>
		<p v-if="errors.serverError">{{ errors.serverError }}</p>
		<table>
			<tbody>
				<tr>
					<th>名前</th>
					<td><input type="text" v-model="entryData.name">
						<p v-if="errors.name">{{ errors.name }}</p>
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
		},
	},
	data() {
		return {
			entryData: {
				name: this.defaultFormData.name,
				mail: this.defaultFormData.mail,
			},
			errors: {...this.serverErrors}
		}
	},
	methods: {
		onSubmit() {
			if(!this.validate()) {
				this.$emit("submitEntryForm", this.entryData);
			}
		},
		validate() {
			this.errors = {};
			let isError = false;

			if(!this.entryData.name) {
				this.errors.name = "名前は必須です";
				isError = true;
			}
			return isError;
		}
	}
}
</script>