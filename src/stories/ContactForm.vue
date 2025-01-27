<template>
	<div>
		<EntryForm
			v-if="currentPage === 'entry'"
			@submitEntryForm="handleSubmitEntryForm"
			:defaultFormData="formData"
		/>
		<ConfirmForm
			v-if="currentPage === 'confirm'"
			:formData="formData"
			@onBack="handleBackToEntry"
			@submit="handleSubmit"
		/>
		<CompleteForm v-if="currentPage === 'complete'" />
	</div>
</template>

<script>
import EntryForm from './EntryForm.vue';
import ConfirmForm from './ConfirmForm.vue';
import CompleteForm from './CompleteForm.vue';

export default {
	components: {
		EntryForm,
		ConfirmForm,
		CompleteForm
	},
	data() {
		return {
			currentPage: 'entry',
			defaultFormData: {
				name: '',
				mail: '',
			},
		};
	},
	methods: {
		handleSubmitEntryForm(entryData) {
			this.formData = entryData;
			this.currentPage = 'confirm';
		},
		handleBackToEntry() {
			this.currentPage = 'entry';
		},
		handleSubmit() {
			this.currentPage = 'complete';
			console.log('送信:', this.formData);
		},
	},
};
</script>
