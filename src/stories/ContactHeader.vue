<template>
	<header class="header" :class="`is-${user.authority}`">
		<p>ログイン：{{ user.name }}</p>
		<p>権限：{{ user.authority }}</p>
	</header>
</template>

<script>
export default {
	name:"ContactHeader",
	props: {
		user: {
			type: Object,
			default: () => ({
				name: "",
				authority: "",
			}),
		},
	},
};
</script>
<style scoped>
.header {
	background-color: #FFF;
}
.header.is-admin {
	background-color: red;
}
.header.is-staff {
	background-color: blue;
}
.header.is-guest {
	background-color: yellow;
}
</style>