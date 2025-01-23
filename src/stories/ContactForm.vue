<template>
  <div>
    <InputForm
      v-if="formStep === 'input'"
      @submit="updateFormData"
      :defaultName="name"
      :defaultMail="mail"
      :defaultContent="content"
    />
    <ConfirmForm
      v-if="formStep === 'confirm'"
      @back="updateFormData"
      :name="name"
      :mail="mail"
      :content="content"
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
      name: '',
      mail: '',
      content: '',
      errors: [],
      formStep: 'input'
    }
  },
  methods: {
    updateFormData(v) {
      this.name = v.name
      this.mail = v.mail
      this.content = v.content
      this.formStep = v.formStep
    }
  }
}
</script>
