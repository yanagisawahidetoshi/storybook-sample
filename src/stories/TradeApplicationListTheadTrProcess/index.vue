<template>
  <th>
    未処理
    <br />
    <input type="radio" value="未処理" v-model="radioSelected" @change="onSelect" />
  </th>
  <th>
    取引する
    <br />
    <input type="radio" value="取引する" v-model="radioSelected" @change="onSelect" />
  </th>
  <th>
    取引しない
    <br />
    <input type="radio" value="取引しない" v-model="radioSelected" @change="onSelect" />
  </th>
</template>

<script>
export default {
  name: 'TradeApplicationListTheadTrProcess',
  data() {
    return {
      radioSelected: null
    }
  },
  methods: {
    onSelect() {
      this.$emit('radioSelected', this.radioSelected)
    }
  }
}
</script>
