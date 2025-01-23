<template>
  <div>
    <InputForm
      v-if="formStep === 'input'"
      @submit="handleInputSubmit"
      :defaultFormData="formData"
      :defaultErrors="errors"
    />
    <ConfirmForm
      v-if="formStep === 'confirm'"
      @back="handleConfirmBack"
      @submit="handleConfirmSubmit"
      :formData="formData"
    />
  </div>
</template>

<script>
import InputForm from './InputForm.vue'
import ConfirmForm from './ConfirmForm.vue'

export default {
  name: 'ContactForm',
  components: { InputForm, ConfirmForm },
  data() {
    return {
      formData: {
        name: '',
        mail: '',
        content: ''
      },
      formStep: 'input',
      errors: []
    }
  },
  methods: {
    handleInputSubmit(v) {
      this.formData.name = v.name
      this.formData.mail = v.mail
      this.formData.content = v.content
      this.formStep = 'confirm'
    },
    handleConfirmBack() {
      this.formStep = 'input'
    },
    handleConfirmSubmit() {
      this.formStep = 'complete'
    }
  }
}
</script>
