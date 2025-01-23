<template>
  <form>
    <dl>
      <dt>名前（必須）</dt>
      <dd>
        <p>{{ formData.name }}</p>
      </dd>
    </dl>
    <dl>
      <dt>メールアドレス（必須）</dt>
      <dd>
        <p>{{ formData.mail }}</p>
      </dd>
    </dl>
    <dl>
      <dt>内容</dt>
      <dd>
        <p>{{ formData.content }}</p>
      </dd>
    </dl>
    <div>
      <button @click="$emit('back')">戻る</button>
      <button @click="$emit('submit')">送信</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ConfirmForm',
  props: {
    formData: {
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
    }
  }
}
</script>
