<template>
  <header class="header" :class="`is-${user.authority}`">
    <p>ログイン名：{{ user.name }}</p>
    <p>あなたの権限は{{ user.authority }}</p>
  </header>
</template>
<script>
export default {
  name: 'HeaderMain',
  props: {
    user: {
      type: Object,
      validator(val) {
        return ['admin', 'staff', 'guest'].includes(val.authority)
      }
    }
  }
}
</script>
<style scoped>
.header.is-admin {
  background: red;
}
.header.is-staff {
  background: blue;
}
.header.is-guest {
  background: yellow;
}
</style>
