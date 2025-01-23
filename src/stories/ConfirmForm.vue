<template>
  <form>
    <dl>
      <dt>名前（必須）</dt>
      <dd>
        <p>{{ name }}</p>
      </dd>
    </dl>
    <dl>
      <dt>メールアドレス（必須）</dt>
      <dd>
        <p>{{ mail }}</p>
      </dd>
    </dl>
    <dl>
      <dt>内容</dt>
      <dd>
        <p>{{ content }}</p>
      </dd>
    </dl>
    <div>
      <button @click="onBack">戻る</button>
      <button @click="onSubmit">送信</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ConfirmForm',
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
    }
  },
  methods: {
    onBack(event) {
      event.preventDefault()
      this.$emit('back', {
        name: this.name,
        mail: this.mail,
        content: this.content,
        formStep: 'input'
      })
    },
    onSubmit(event) {
      event.preventDefault()
      this.$emit('submit', {
        formStep: 'send'
      })
    }
  }
}
</script>
