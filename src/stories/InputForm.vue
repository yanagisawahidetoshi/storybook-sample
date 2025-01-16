<template>
  <p class="error" v-if="errors.serverError">{{ errors.serverError }}</p>
  <form>
    <dl>
      <dt>名前（必須）</dt>
      <dd>
        <input type="text" name="name" v-model="nameInput" />
        <p v-if="errorsInput.nameError" class="error">{{ errorsInput.nameError }}</p>
      </dd>
    </dl>
    <dl>
      <dt>メールアドレス（必須）</dt>
      <dd>
        <input type="mail" name="mail" v-model="mailInput" />
        <p v-if="errorsInput.mailError" class="error">{{ errorsInput.mailError }}</p>
      </dd>
    </dl>
    <dl>
      <dt>内容</dt>
      <dd>
        <textarea name="content" v-model="contentInput"></textarea>
        <p v-if="errorsInput.contentError" class="error">
          {{ errorsInput.contentError }}
        </p>
      </dd>
    </dl>
    <div>
      <button @click="onSubmit">確認画面</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'my-form',
  props: {
    name: {
      type: String,
      default: ''
    },
    mail: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    errors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      nameInput: this.name ? this.name : '',
      mailInput: this.mail ? this.mail : '',
      contentInput: this.content ? this.content : '',
      errorsInput: this.errors ? this.errors : {}
    }
  },
  methods: {
    validateForm() {
      const errors = {}
      if (!this.nameInput) {
        errors.nameError = '入力してください'
      }
      if (!this.mailInput) {
        errors.mailError = '入力してください'
      }
      this.errorsInput = errors
      return Object.keys(this.errorsInput).length === 0
    },
    onSubmit(event) {
      event.preventDefault()
      if (this.validateForm()) {
        return
      }
      this.$emit('submit', {
        name: this.nameInput,
        mail: this.mailInput,
        content: this.contentInput
      })
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
