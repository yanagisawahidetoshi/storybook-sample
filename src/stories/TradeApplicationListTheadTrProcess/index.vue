<template>
  <th>
    <span class="item-name">未処理</span>
    <input type="radio" value="未処理" v-model="radioSelected" @change="onSelect" />
  </th>
  <th>
    <span class="item-name">取引する</span>
    <input type="radio" value="取引する" v-model="radioSelected" @change="onSelect" />
  </th>
  <th>
    <span class="item-name">取引しない</span>
    <input type="radio" value="取引しない" v-model="radioSelected" @change="onSelect" />
  </th>
</template>

<script>
export default {
  name: 'TradeApplicationListTheadTrProcess',
  emits: ['radioSelected'],
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
<style scoped>
.item-name {
  display: block;
}
</style>
