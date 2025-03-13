<template>
  <div>
    <div>
      <select name="template" id="">
      <option value="">選択してください</option>
    </select>
    </div>
    <div>
      <textarea name="message" id=""></textarea>
    </div>
    <button type="button">入力内容をテンプレートとして保存</button>
  </div>
</template>
<script>
export default {
  name:"TradeTableMessageForm",
  data() {
    return {
      message:{}
    }
  },
  props: {
    
  }
}
</script>