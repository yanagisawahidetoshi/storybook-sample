<template>
  <form class="form-wrap">
    <p class="input-title" for="name">名前：<input type="text" name="name" v-bind="name"></p>
    <p class="input-title" for="email">メールアドレス：<input type="email" name="email" v-bind="email"></p>
    <p class="input-title" for="tel">電話番号：<input type="tel" name="tel" v-bind="tel"></p>
    <button class="submit-btn" type="submit">確認</button>
  </form>
</template>

<script>
export default {
  name:'InputForm',
	props: {
		name: { type: String, default: "" },
		email: { type: String, default: ""},
		tel: { type: String, default: ""},
	},
}
</script>

<style>
.form-wrap{
  display: flex;
  flex-direction: column;
}
.input-title{
  margin-top: .4rem;
}
.submit-btn{
  width: fit-content;
  margin-top: 1rem;
  padding: 4px 18px;
}
</style>