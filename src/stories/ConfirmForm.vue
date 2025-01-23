<template>
	<div>
		<h1>確認</h1>
		<table>
			<tbody>
				<tr>
					<th>名前</th>
					<td>{{ formData.name }}</td>
				</tr>
				<tr>
					<th>メールアドレス</th>
					<td>{{ formData.mail }}</td>
				</tr>
			</tbody>
		</table>
		<div><button @click="onSubmit">送信</button></div>
		<div><button @click="onBack">戻る</button></div>
	</div>
</template>

<script>
export default {
	name: 'ConfirmForm',
	props: {
		formData: {
			type: Object,
			default: () => ({ name: '', mail: '' }),
		},
	},
	methods: {
		onSubmit() {
			this.$emit('submit', this.formData);
		},
		onBack() {
			this.$emit('confirmData', this.formData);
		},
	},
};
</script>
