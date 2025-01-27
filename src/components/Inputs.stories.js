import { fn } from '@storybook/test'
import Inputs from './Inputs.vue'


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Inputs',
  component: Inputs,
  tags: ['autodocs'],
  argTypes: {

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { }
}

const Template = (args) => ({
	components: { Inputs },
	setup() {
		return {args}
	},
	template: `
	<Inputs
		v-bind="args"
	/>
	`
})

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = Template.bind({})
Default.args = {
}

export const WithDefaultValue = Template.bind({})
WithDefaultValue.args = {
	defaultName: '山田 太郎',
	defaultEmail: 'yamada.taro@example.com',
	defaultTel: '0330001234',
	defaultData: '2000-01-01',
	defaultZipCode: '1000013',
	defaultPrefecture: '東京都',
	defaultComment: 'あいうえお'
}
export const Error = Template.bind({})
Error.args = {
	defaultName: '',
	defaultEmail: '',
	defaultTel: '',
	defaultData: '',
	defaultZipCode: '',
	defaultPrefecture: '',
	defaultComment:'',
	checkParam: "noneName",
}


