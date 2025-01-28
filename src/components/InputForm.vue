<template>
	<div>

		<div v-if="checkParam.code">{{`[${checkParam.code}] ${checkParam.msg}` }}</div>

		<p>
			<label for="name">名前: 
				<span v-if="showRequiredLabel.name" class="required-name">(必須)</span>
			</label>
			<input type="text" name="name" v-model="formData.name" />
		</p>
		<p>
			<label for="email">メールアドレス: 
				<span v-if="showRequiredLabel.email" class="required-email">(必須)</span>
			</label>
			<input type="email" name="email" v-model="formData.email" />
		</p>
		<p>
			<label for="phone">電話番号:<span v-if="!phoneFomat">(ハイフンなし)</span>
				<span v-if="showRequiredLabel.phone" class="required-phone">(必須)</span>
			</label>
			<input type="phone" name="phone" v-model="formData.phone" />
		</p>
		<p>
			<label for="date">年月日： 
				<span v-if="showRequiredLabel.date" class="required-date">(必須)</span>
			</label>
			<input type="date" name="date" v-model="formData.date" />
		</p>
		<p>
			<label for="zipCode">郵便番号：<span v-if="!zipCodeFomat">(ハイフンなし)</span>
				<span v-if="showRequiredLabel.zipCode" class="required-zipCode">(必須)</span>
			</label>
			<input type="text" name="zipCode" v-model="formData.zipCode" />
		</p>
		<p>
			<label for="prefecture">都道府県： 
				<span v-if="showRequiredLabel.prefecture" class="required-prefecture">(必須)</span>
			</label>
			<select v-model="formData.prefecture" id="prefecture" name="prefecture">
				<option disabled value="">都道府県</option>
				<option v-for="(pref, index) in prefectures" :key="index" :value="pref">
					{{ pref }}
				</option>
			</select>
		</p>
		<p>
			<label for="comment">コメント： 
				<span v-if="showRequiredLabel.comment === true" class="required-comment">(必須)</span>
			</label>
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
		defaultRequiredLabel: { Object, default: () => ({}) },
		phoneFomatRyphen: {type:Boolean},
		zipCodeFomatRyphen: {type:Boolean},
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
			showRequiredLabel: {
				name: this.defaultRequiredLabel.name || false,
				email: this.defaultRequiredLabel.email || false,
				phone: this.defaultRequiredLabel.phone || false,
				date: this.defaultRequiredLabel.date || false,
				zipCode: this.defaultRequiredLabel.zipCode || false,
				prefecture: this.defaultRequiredLabel.prefecture || false,
				comment: this.defaultRequiredLabel.comment || false,
			},
			checkParam: {code: "" ,msg:""},
			phoneFomat: this.phoneFomatRyphen || false,
			zipCodeFomat: this.zipCodeFomatRyphen || false,
		}
	},
	methods: {
		handleSubmit() {
			this.handleFormCheck();
			if(!this.checkParam.code) {
				this.$emit('onSubmit', this.formData)
			}
			return;
		},
		handleFormCheck() {
			// パラメータチェック
			this.checkParam = {code: "" ,msg:""};
			// 名前
			if(this.showRequiredLabel.name) {
				if (!this.formData.name || this.formData.name.trim() === '') {
					this.checkParam = {code:'10100', msg:"名前は必須項目です。忘れずに入力してください。"}
					return;
				}
			}
			if (this.formData.name) {
				if (/\d/.test(this.formData.name)) {
					this.checkParam = {code:'10101', msg:"名前に数字は入力できません。入力内容をご確認ください。"}
					return;
				}
			}
			// メールアドレス
			if(this.showRequiredLabel.email) {
				if (!this.formData.email || this.formData.email.trim() === '') {
					this.checkParam = {code:'10200', msg:"メールアドレスは必須項目です。忘れずに入力してください。"}
					return;
				} 
			}
			if (this.formData.email) {
				const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
				if (!emailRegex.test(this.formData.email)) {
					this.checkParam = {code:'10201', msg:"メールアドレスの書式に誤りがあります。メールアドレスを正しく入力しなおしてください。"}
					return;
				}
			}
			// 電話番号
			if (this.showRequiredLabel.phone) {
				if (!this.formData.phone || this.formData.phone.trim() === '') {
					this.checkParam = {code:'10300', msg:"電話番号は必須項目です。忘れずに入力してください。"}
					return;
				}
			}
			if (this.formData.phone) {
				let phoneRegex = /^\d{10,11}$/;
				if ( this.phoneFomat) {
					phoneRegex = /^(?:0\d{1,4}-\d{1,4}-\d{4}|\d{10,11})$/;
				}
				if (!phoneRegex.test(this.formData.phone)) {
					this.checkParam = {code:'10301', msg:"電話番号の形式に誤りがあります。入力内容をご確認ください。"}
					return;
				}
			}
			// 年月日
			if (this.showRequiredLabel.date) {
				if (!this.formData.date || this.formData.date.trim() === '') {
					this.checkParam = {code:'10400', msg:"年月日は必須項目です。忘れずに選択してください。"}
					return;
				}
			}
			if (this.formData.phone) {
				const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
				if (!dateRegex.test(this.formData.date)) {
					this.checkParam = {code:'10401', msg:"年月日の形式に誤りがあります。内容をご確認ください。"}
					return;
				}
			}
			// 郵便番号
			if (this.showRequiredLabel.zipCode) {
				if (!this.formData.date || this.formData.zipCode.trim() === '') {
					this.checkParam = {code:'10500', msg:"郵便番号は必須項目です。忘れずに入力してください。"}
					return;
				}
			}
			if (this.formData.zipCode) {
				let zipCodeRegex = /^[0-9]{7}/;
				if ( this.phoneFomat) {
					zipCodeRegex = /^[0-9]{3}-?[0-9]{4}$/;
				}
				if (!zipCodeRegex.test(this.formData.zipCode)) {
					this.checkParam = {code:'10501', msg:"郵便番号の形式に誤りがあります。入力内容をご確認ください。"}
					return;
				}
			}
			// 都道府県
			if (this.showRequiredLabel.prefecture) {
				if (!this.formData.prefecture || this.formData.prefecture.trim() === '') {
					this.checkParam = {code:'10600', msg:"都道府県は必須項目です。忘れずに選択してください。"}
					return;
				}
			}
			// コメント
			if (this.showRequiredLabel.comment) {
				if (!this.formData.comment || this.formData.comment.trim() === '') {
					this.checkParam = {code:'10700', msg:"コメントは必須項目です。忘れずに入力してください。"}
					return;
				}
			}
		}
	}
}
</script>
