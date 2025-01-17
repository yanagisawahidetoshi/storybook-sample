<template>
  <div>
    <div>
      <span>【必須】</span><label for="">名前</label><input type="text" v-model="input.name" />
    </div>
    <p v-if="error.name" class="error">{{ error.name }}</p>
    <div><label for="">問い合わせ内容</label><textarea v-model="input.content"></textarea></div>
    <p v-if="error.content" class="error">{{ error.content }}</p>
    <button type="button" @click="confirm()">確認画面へ</button>
  </div>
</template>
<script>
const MAXCONTENTLENGTH = 10

export default {
  name: 'FormInput',
  data() {
    return {
      input: {
        name: '',
        content: ''
      },
      error: {
        name: '',
        content: ''
      }
    }
  },
  props: {
    defaultValue: {
      type: Object
    },
    errorMsg: {
      type: Object
    }
  },
  methods: {
    validation(input) {
      if (!input.name.trim()) {
        this.error.name = '名前を入力してください'
      } else {
        this.error.name = ''
      }
      if (input.content.trim().length >= MAXCONTENTLENGTH) {
        this.error.content = `${MAXCONTENTLENGTH}文字以内で入力してください`
      } else {
        this.error.content = ''
      }
      const hasError = Object.keys(this.error).some((key) => this.error[key] !== '')
      return hasError
    },
    confirm() {
      if (this.validation(this.input)) return
      this.$emit('onConfirm', this.input)
    }
  },
  mounted() {
    this.input = { ...this.defaultValue }
    this.error = { ...this.errorMsg }
  }
  // このコンポーネントの役割は、入力値を親にわたす、フロントのエラー、サーバーエラー、戻ってきたときの出力
  // mountedでdata関数のinputValue.nameを更新する　defaultinputValue 普通のほうがinputValue　スプレッド演算子で展開して
  // エラーはformInputだけでやる errorMsgを更新　①おやからふってきたエラー②このコンポーネントでチェックしてエラーになった
}
</script>
<style scoped>
.error {
  color: red;
}
</style>
