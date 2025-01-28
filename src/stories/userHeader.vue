<template>
  <header
    :class="
      user.permission === 'admin'
        ? 'red'
        : user.permission === 'staff'
          ? 'blue'
          : user.permission === 'guest'
            ? 'yellow'
            : ''
    "
  >
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
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.guest {
  background-color: yellow;
}
</style>
