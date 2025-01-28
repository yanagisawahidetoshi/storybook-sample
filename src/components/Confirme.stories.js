import { fn } from '@storybook/test'
import Confirme from './Confirme.vue'


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Confirme',
  component: Confirme,
  tags: ['autodocs'],
  argTypes: {

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { }
}

const Template = (args) => ({
	components: { Confirme },
	setup() {
		return {args}
	},
	template: `
	<Confirme
		v-bind="args"
	/>
	`
})

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = Template.bind({})
Default.args = {
	formData: {
		name: '山田 太郎',
		email: 'yamada.taro@example.com',
		phone: '0330001234',
		date: '2000-01-01',
		zipCode: '1000013',
		prefecture: '東京都',
		comment: 'あいうえお'
	}
}