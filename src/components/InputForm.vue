<template>
	<div>

		<div v-if="errorMessage">{{ errorMessage }}</div>

		<p>
			<label for="name">名前:<span class="required">(必須)</span>
			</label>
			<input type="text" name="name" v-model="formData.name" />
		</p>
		<p>
			<label for="email">メールアドレス:<span class="required">(必須)</span>
			</label>
			<input type="email" name="email" v-model="formData.email" />
		</p>
		<p>
			<label for="phone">電話番号:<span class="required">(必須)</span>
			</label>
			<input type="phone" name="phone" v-model="formData.phone" />
		</p>
		<p>
			<label for="date">年月日：</label>
			<input type="date" name="date" v-model="formData.date" />
		</p>
		<p>
			<label for="zipCode">郵便番号：</label>
			<input type="text" name="zipCode" v-model="formData.zipCode" />
		</p>
		<p>
			<label for="prefecture">都道府県：</label>
			<select v-model="formData.prefecture" id="prefecture" name="prefecture">
				<option disabled value="">都道府県</option>
				<option v-for="(pref, index) in prefectures" :key="index" :value="pref">
					{{ pref }}
				</option>
			</select>
		</p>
		<p>
			<label for="comment">コメント：</label>
			<textarea name="comment" v-model="formData.comment"></textarea>
		</p>
		<button type="button" @click="handleSubmit">確認画面へ</button>
	</div>
</template>

<script>
export default {
	name: 'InputForm',
	props: {
		defaultFormData: { Object, default: () => ({}) },
	},
	data() {
		return {
			formData: {
				name: this.defaultFormData.name || '',
				email: this.defaultFormData.email || '',
				phone: this.defaultFormData.phone || '',
				date: this.defaultFormData.date || '',
				zipCode: this.defaultFormData.zipCode || '',
				prefecture: this.defaultFormData.prefecture || '',
				comment: this.defaultFormData.comment || ''
			},
			prefectures: [
				'北海道','青森県','岩手県','宮城県','秋田県','山形県',
				'福島県','茨城県','栃木県','群馬県','埼玉県','千葉県',
				'東京都','神奈川県','新潟県','富山県','石川県','福井県',
				'山梨県','長野県','岐阜県','静岡県','愛知県','三重県',
				'滋賀県','京都府','大阪府','兵庫県','奈良県','和歌山県',
				'鳥取県','島根県','岡山県','広島県','山口県','徳島県',
				'香川県','愛媛県','高知県','福岡県','佐賀県','長崎県',
				'熊本県','大分県','宮崎県','鹿児島県','沖縄県'
			],
			errorMessage: '',
		}
	},
	methods: {
		handleSubmit() {
			this.handleFormCheck();
			if(!this.errorMessage) {
				this.$emit('onSubmit', this.formData)
			}
		},
		handleFormCheck() {
			// 名前
			if ( this.formData.name.trim() === '') {
				this.errorMessage = '名前は必須項目です。忘れずに入力してください。'
				return;
			}
			if (/\d/.test(this.formData.name)) {
				this.errorMessage = '[10101] 名前に数字は入力できません。入力内容をご確認ください。'
				return;
			}
			// メールアドレス
			if ( this.formData.email.trim() === '') {
				this.errorMessage = 'メールアドレスは必須項目です。忘れずに入力してください。'
				return;
			}
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
			if (!emailRegex.test(this.formData.email)) {
				this.errorMessage = '[10201] メールアドレスの書式に誤りがあります。メールアドレスを正しく入力しなおしてください。'
				return;
			}
			// 電話番号
			if ( this.formData.phone.trim() === '') {
				this.errorMessage = '電話番号は必須項目です。忘れずに入力してください。'
				return;
			}
			const phoneRegex = /^(?:0\d{1,4}-\d{1,4}-\d{4}|\d{10,11})$/;
			if (!phoneRegex.test(this.formData.phone)) {
				this.errorMessage = '[10301] 電話番号の形式に誤りがあります。入力内容をご確認ください。'
				return;
			}
			// 年月日
			if (this.formData.date) {
				console.log(this.formData.date)
				const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
				if (!dateRegex.test(this.formData.date)) {
					this.errorMessage = '[10401] 年月日の形式に誤りがあります。内容をご確認ください。'
					return;
				}
			}
			// 郵便番号
			let zipCodeRegex = /^[0-9]{3}-?[0-9]{4}|[0-9]{7}$/;
			if (!zipCodeRegex.test(this.formData.zipCode)) {
				this.errorMessage = '[10501] 郵便番号の形式に誤りがあります。入力内容をご確認ください。'
				return;
			}
		}
	}
}
</script>
