<template>
  <p>名前：{{ name }}</p>
  <p>メールアドレス：{{ eMail }}</p>
</template>

<script>
export default {
  name:'Confirm',
  props:{
    name: String,
    eMail: String
  }
}
</script>
