<template>
  <form class="form-wrap">
    <p class="input-title" for="name">
      名前：<input type="text" name="name" v-bind="name">
    </p>
    <p class="input-title" for="email">
      メールアドレス：<input type="email" name="email" v-bind="email">
    </p>
    <p class="input-title" for="tel">
      電話番号：<input type="tel" name="tel" v-bind="tel">
    </p>
    <Button
      label="確認"
      primary=true
      size="medium"
      @click="handleSubmit"
    />
  </form>
</template>

<script>
import Button from '@/stories/Button.vue';

export default {
  name: 'InputForm',
  components: {
    Button
  },
  props: {
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    tel: { type: String, default: "" }
  },
  methods: {
    handleSubmit() {
      this.$emit("updateFormStatus", "confirm");
    }
  }
};
</script>
