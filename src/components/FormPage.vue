<template>
  <div>
    <InputForm
      v-if="formStatus === 'input'"
      @updateFormStatus="handleFormStatus"
      :name="name"
      :email="email"
      :tel="tel" />
    <Confirm
      v-if="formStatus === 'confirm'"
      @updateFormStatus="handleFormStatus"
      :name="name"
      :email="email"
      :tel="tel" />
    <Thanks v-if="formStatus === 'thanks'" />
  </div>
</template>

<script>
import InputForm from './InputForm.vue';
import Confirm from './InputConfirm.vue';
import Thanks from './InputThanks.vue';

export default {
  name: 'FormPage',
  components: {
    InputForm, Confirm, Thanks
  },
  data() {
    return {
      formStatus: "input",
      name: "",
      email: "",
      tel: ""
    };
  },
  methods: {
    handleFormStatus(status) {
      this.formStatus = status;
    }
  }
};
</script>
