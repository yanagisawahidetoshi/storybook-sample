<template>
  <div>
    <TradeTableConditionEdit
      :defaultTradeApplys="defaultTradeApplys"
      v-if="currentStep === 'input'"
      @onClick="(step) => handleClick(step)"
    />
    <TradeTableMessage v-if="currentStep === 'message'" />
  </div>
</template>
<script>
import TradeTableConditionEdit from '../tradeTableConditionEdit/index.vue'
import TradeTableMessage from '../tradeTableMessage/index.vue'

export default {
  name: 'TradeTable',
  data() {
    return {
      currentStep: 'input',
      steps: ['input', 'message', 'confirm', 'complete']
    }
  },
  components: {
    TradeTableConditionEdit,
    TradeTableMessage
  },
  props: {
    defaultTradeApplys: {
      type: Array
    }
  },
  methods: {
    handleClick(step) {
      if (step === 'next') {
        const index = this.steps.findIndex((step) => step === this.currentStep)
        this.currentStep = this.steps[index + 1]
      }
    }
  }
}
</script>
