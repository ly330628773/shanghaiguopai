<template>
	<view class="u-page content">

		<u-row customStyle="margin-bottom: 10px">
			<u-col span="6">
				<view class="demo-layout bg-purple-light"></view>
			</u-col>
			<u-col span="6">
				<view class="demo-layout bg-purple"></view>
			</u-col>
		</u-row>
		<u-swiper class="banner" :list="bannerList" @change="bannerChange" @click="click"></u-swiper>
		<u-tabbar :value="v1" @change="tabChange">
			<u-tabbar-item text="首页" icon="home" @click=""></u-tabbar-item>
			<u-tabbar-item text="标书进度" icon="photo" @click=""></u-tabbar-item>
			<u-tabbar-item text="到家福利" icon="photo" @click=""></u-tabbar-item>
			<u-tabbar-item text="个人中心" icon="photo" @click=""></u-tabbar-item>
		</u-tabbar>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				v1: 0,
				bannerList: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				]
			}
		},
		onLoad() {

		},
		methods: {
			tabChange(tabIndex) {
				console.log(tabIndex);
			},
			bannerChange(i) {

			}
		}
	}
</script>

<style>
	.banner {
		height: 100px;
	}

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
		display: inline;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
