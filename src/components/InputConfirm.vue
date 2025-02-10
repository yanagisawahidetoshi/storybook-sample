<template>
  <p>名前：{{ name }}</p>
  <p>メールアドレス：{{ email }}</p>
  <p>電話番号：{{ tel }}</p>
    <Button
    label="戻る"
    size='medium'
    @click="goBack" />
    <Button
    label="送信"
    primary=true
    size='medium'
    @click="submitForm" />
</template>

<script>
import Button from '@/stories/Button.vue';

export default {
  name:'Confirm',
  components:{
    Button
  },
  props:{
    name: String,
    email: String,
    tel: String
  },
  methods: {
    goBack() {
      this.$emit("updateFormStatus", "input");
    },
    submitForm() {
      this.$emit("updateFormStatus", "thanks");
    }
  }
}
</script>
