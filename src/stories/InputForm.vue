<template>
  <p class="error" v-if="errors.serverError">{{ errors.serverError }}</p>
  <form>
    <dl>
      <dt>名前（必須）</dt>
      <dd>
        <input type="text" name="name" v-model="name" />
        <p v-if="errors.nameError" class="error">{{ errors.nameError }}</p>
      </dd>
    </dl>
    <dl>
      <dt>メールアドレス（必須）</dt>
      <dd>
        <input type="mail" name="mail" v-model="mail" />
        <p v-if="errors.mailError" class="error">{{ errors.mailError }}</p>
      </dd>
    </dl>
    <dl>
      <dt>内容</dt>
      <dd>
        <textarea name="content" v-model="content"></textarea>
        <p v-if="errors.contentError" class="error">
          {{ errors.contentError }}
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
  name: 'InputForm',
  props: {
    defaultFormData: {
      type: Object,
      default: () => ({}),
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
      }
    },
    defaultErrors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      name: this.defaultFormData.name ? this.defaultFormData.name : '',
      mail: this.defaultFormData.mail ? this.defaultFormData.mail : '',
      content: this.defaultFormData.content ? this.defaultFormData.content : '',
      errors: this.defaultErrors ? this.defaultErrors : {}
    }
  },
  methods: {
    validateForm() {
      const errors = {}
      if (!this.name) {
        errors.nameError = '入力してください'
      }
      if (!this.mail) {
        errors.mailError = '入力してください'
      }
      this.errors = errors
      return Object.keys(this.errors).length > 0
    },
    onSubmit(event) {
      event.preventDefault()
      if (this.validateForm()) {
        return
      }
      this.$emit('submit', {
        name: this.name,
        mail: this.mail,
        content: this.content
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
