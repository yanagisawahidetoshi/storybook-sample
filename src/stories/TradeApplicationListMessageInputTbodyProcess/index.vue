<template>
  <td class="flex">
    <select name="" id="">
      <option value="">---選択してください---</option>
    </select>
    <textarea
      name="onText"
      placeholder="※全角400字以内"
      maxlength="400"
      @input="$emit('onText', $event.target.value)"
    ></textarea>
    <button>入力内容をテンプレートとして保存</button>
  </td>
</template>

<script>
export default {
  name: 'TradeApplicationListMessageInputTbodyProcess'
}
</script>
<style>
.flex {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  padding: 5px;
}
.flex button {
  margin-left: auto;
}
</style>
