<template>
  <header :class="'is-' + user.permission">
    <dl>
      <dt>ユーザー名： {{ user.name }}</dt>
      <dd>権限： {{ user.permission }}</dd>
    </dl>
  </header>
</template>

<script>
export default {
  name: 'userHeader',
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.is-admin {
  background-color: red;
}
.is-staff {
  background-color: blue;
}
.is-guest {
  background-color: yellow;
}
</style>
