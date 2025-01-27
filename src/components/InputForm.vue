<template>
	<div>
		<span v-if="checkParam === 'errMsg'">
			エラーメッセージ
		</span>
		<p>名前:<input type="text" name="name" v-model="name" /></p>
		<p>メールアドレス:<input type="email" name="email" v-model="email" /></p>
		<p>電話番号：<input type="tel" name="tel" v-model="tel" /></p>
		<p>年月日：<input type="date" name="date" v-model="date" /></p>
		<p>郵便番号：<input type="text" name="zipCode" v-model="zipCode" /></p>
		<p>都道府県：
			<select v-model="prefecture" id="prefecture" name="prefecture">
				<option disabled value="">都道府県</option>
				<option v-for="(pref, index) in prefectures" :key="index" :value="pref">
					{{ pref }}
				</option>
			</select>
		</p>
		<p>コメント：<textarea name="comment" v-model="comment"></textarea></p>
		<button type="button" @click="handleSubmit">確認画面へ</button>
	</div>
</template>

<script>
export default {
	name: "InputForm",
	props: {
		defaultFormData: {	Object,default: () => ({}) },
		defaultCheckParam: { type: String },
	},
	computed: {
		checkParam() {
			return this.defaultCheckParam;
		}
	},
	data() {
		return {
			name: this.defaultFormData.name,
			email: this.defaultFormData.email,
			tel: this.defaultFormData.tel,
			date: this.defaultFormData.date,
			zipCode: this.defaultFormData.zipCode,
			prefecture: this.defaultFormData.prefecture,
			comment: this.defaultFormData.comment,
			prefectures: [
				"北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県",
				"福島県", "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県",
				"東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県",
				"山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県",
				"滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
				"鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県",
				"香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
				"熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
			],
		};
	},
	methods: {
		handleSubmit() {
			const formData = {
				name: this.name,
				email: this.email,
				tel: this.tel,
				date: this.date,
				zipCode: this.zipCode,
				prefecture: this.prefecture,
				comment: this.comment,
			}
			this.$emit("onSubmit", formData);
		},
	}
};
</script>