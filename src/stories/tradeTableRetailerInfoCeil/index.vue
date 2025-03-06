<template>
  <div>
    <a>{{ retailerInfo.companyName }}</a>
    <p>{{ retailerInfo.place }}</p>
    <a>{{ retailerInfo.url }}</a>
  </div>
</template>
<script>
export default {
  name: 'TableRetailerCel',
  props: {
    retailerInfo: {
      type: Object
    }
  }
}
</script>
<style></style>
