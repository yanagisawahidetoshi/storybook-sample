<template>
	<div>
		<p>名前:{{ formData.name }}</p>
		<p>メールアドレス:{{ formData.email }}</p>
		<p>電話番号：{{ formData.tel }}</p>
		<p>年月日：{{ formData.date }}</p>
		<p>郵便番号：{{ formData.zipCode }}</p>
		<p>都道府県：{{ formData.prefecture }}</p>
		<p>コメント：{{ formData.comment }}</p>
		<button type="button" @click="handleSubmit('retun')">戻る</button>
		<button type="button" @click="handleSubmit('complete')">送信</button>
	</div>
</template>

<script>
export default {
	name:"Confirme",
	props: {
		formData: {type:Object},
	},
	methods: {
		handleSubmit(action) {
			this.$emit("onSubmit", action);
		}
	},
}
</script>