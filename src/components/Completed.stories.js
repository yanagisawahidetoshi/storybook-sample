import { fn } from '@storybook/test'
import Completed from './Completed.vue'


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Completed',
  component: Completed,
  tags: ['autodocs'],
  argTypes: {

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { }
}

const Template = (args) => ({
	components: { Completed },
	setup() {
		return {args}
	},
	template: `
	<Completed
		v-bind="args"
	/>
	`
})

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = Template.bind({})
Default.args = {
}

