<template>
	<div>
		<p>名前:{{ name }}</p>
		<p>メールアドレス:{{ email }}</p>
		<p>電話番号：{{ tel }}</p>
		<p>年月日：{{ data }}</p>
		<p>郵便番号：{{ zipCode }}</p>
		<p>都道府県：{{ prefecture }}</p>
		<p>コメント：{{ comment }}</p>
	</div>
</template>

<script>
export default {
	name:"Confirme",
	props: {
		name: { type : String },
		email: { type: String },
		tel: { type: String },
		data: { type: String },
		zipCode: { type: String },
		prefecture: { type: String},
		comment: {type: String},
	},
}
</script>