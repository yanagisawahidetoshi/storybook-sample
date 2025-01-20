import FormComplete from './FormComplete.vue'

export default {
  title: 'Example/Complete',
  component: FormComplete,
  tags: ['autodocs'],
  render: (args) => ({
    components: {
      FormComplete
    },
    setup() {
      return {
        ...args
      }
    },
    template: '<FormComplete />'
  })
}

export const Complete = {}
