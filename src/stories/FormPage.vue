<template>
  <div>
    <FormInput
      :defaultValue="inputValue"
      :errorMsg="errorMsg"
      @onConfirm="(value) => handleConfirm(value)"
      v-if="currentStep === 'input'"
    />
    <FormConfirm
      :inputValue="inputValue"
      @onGoBack="handleBack"
      @onSubmit="handleSubmit"
      v-if="currentStep === 'confirm'"
    />
    <FormComplete :inputValue="inputValue" v-if="currentStep === 'complete'" />
  </div>
</template>
<script>
import FormInput from './FormInput.vue'
import FormConfirm from './FormConfirm.vue'
import FormComplete from './FormComplete.vue'

export default {
  name: 'FormPage',
  components: {
    FormInput,
    FormConfirm,
    FormComplete
  },
  data() {
    return {
      inputValue: {
        name: '',
        content: ''
      },
      errorMsg: {
        name: '',
        content: ''
      },
      currentStep: 'input'
    }
  },
  methods: {
    handleConfirm(newValue) {
      this.inputValue = newValue
      this.currentStep = 'confirm'
    },
    handleBack() {
      this.currentStep = 'input'
    },
    handleSubmit() {
      this.currentStep = 'complete'
    }
  }
}
</script>
