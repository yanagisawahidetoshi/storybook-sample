<template>
  <div>
    <InputForm v-if="formStatus === 'input'" />
    <Confirm v-if="formStatus === 'confirm'" />
    <Thanks v-if="formStatus === 'thanks'" />
  </div>
</template>

<script>
import InputForm from './InputForm.vue';
import Confirm from './Confirm.vue';
import Thanks from './Thanks.vue';
export default{
  name: 'FormPage',
  components:{
    InputForm,Confirm,Thanks
  },
  data(){
    return{
      formStatus: "input",
    }
  },
}
</script>