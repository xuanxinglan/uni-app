<template>
	<view class="content">
		<view class="text-area">
			<view>{{$t("message.loginSuccess")}}</view>
			<view @tap="toggleLang()">语言切换</view>
		</view>
	</view>
</template>

<script>
	import locale from '../../utils/locale'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			locale(this)
		},
		methods: {
			toggleLang() {
				if (this.$i18n.locale == 'en') {
					this.$i18n.locale = 'zhCN'
				} else {
					this.$i18n.locale = 'en'
				}
			}

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
