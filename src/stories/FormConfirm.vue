<template>
  <div>
    <table>
      <tr>
        <th>名前</th>
        <td>{{ inputValue.name }}</td>
      </tr>
      <tr>
        <th>問い合わせ内容</th>
        <td>{{ inputValue.content }}</td>
      </tr>
    </table>
    <button type="button" @click="$emit('onGoBack')">戻る</button>
    <button type="button" @click="$emit('onSubmit', inputValue)">送信</button>
  </div>
</template>
<script>
export default {
  name: 'FormConfirm',
  props: {
    inputValue: {
      type: Object
    }
  }
}
</script>
