<template>
	<div>
		<p>名前：{{ inputValue.name }}</p>
		<p>問い合わせ内容{{ inputValue.content }}</p>
		<button type="button" @click="$emit('input')">戻る</button>
		<button type="button" @click="$emit('submit')">送信</button>
	</div>
</template>
<script>
export default {
	name:"FormConfirm",
	props: {
		inputValue: {
			type:Object
		}
	},
}
</script>