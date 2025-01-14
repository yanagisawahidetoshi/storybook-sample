<template>
  <div>
    {{ inputValue }}
    <FormInput :inputValue="inputValue" v-if="currentStep === 'input'" @confirm="(v) => confirm(v)"/>
    <FormConfirm :inputValue="inputValue" v-if="currentStep === 'confirm'"/>
  </div>
</template>
<script>
import FormInput from "./FormInput.vue";
import FormConfirm from "./FormConfirm.vue";

export default {
  name:"FormPage",
  components: {
    FormInput,
    FormConfirm
  },
  props: {
		inputValue: {
			type:Object
		},    
    currentStep: {
      type:String
    },
  },
  methods: {
    confirm(v) {
      this.$emit('onConfirm',v)
    }
  }
}
</script>