<template>
	<view class="u-page">
		<u-toast ref="uToast"></u-toast>
		<!-- 首页 -->
		<u-row customStyle="margin-bottom: 0px" v-show="show">

			<u-col span="12">
				<u-row style="margin-top: 44px;">
					<u-navbar title="我是自定义的标题栏" :autoBack="false" leftIcon=""> </u-navbar>
				</u-row>
				<u-swiper style="height: auto;" class="banner" :list="bannerList" @change="bannerChange" @click="click">
				</u-swiper>
				<u-tabs :scrollable="false" :list="tabList"></u-tabs>
				<u-grid :border="false" col="2">
					<u-grid-item v-for="(listItem,listIndex) in mealList" :key="listIndex">
						<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon>
						<text class="grid-text">{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
				<u-button text="接口连通性测试" :plain="true" @click="testhost(this)"></u-button>
			</u-col>

		</u-row>
		<!--  标书进度 -->
		<u-row customStyle="margin-bottom: 10px" v-show="show1">
			<biaoshu></biaoshu>
		</u-row>
		<!--  -->
		<u-row customStyle="margin-bottom: 10px" v-show="show2">
			<daojia></daojia>
		</u-row>
		<!--  -->
		<u-row customStyle="margin-bottom: 10px" v-show="show3">
			<wode></wode>
		</u-row>
		<u-tabbar :value="v1" @change="tabChange">
			<u-tabbar-item text="首页" icon="home" name="main" @click=""></u-tabbar-item>
			<u-tabbar-item text="标书进度" icon="photo" name="main1" @click=""></u-tabbar-item>
			<u-tabbar-item text="到家福利" icon="photo" name="main2" @click=""></u-tabbar-item>
			<u-tabbar-item text="个人中心" icon="photo" name="main3" @click=""></u-tabbar-item>
		</u-tabbar>
	</view>

</template>

<script>
	import biaoshu from '@/pages/index/biaoshu.vue';
	import daojia from '@/pages/index/daojia.vue';
	import wode from '@/pages/index/wode.vue';
	export default {
		components: {
			biaoshu,
			daojia,
			wode
		},
		data() {
			return {
				v1: 0,
				bannerList: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				show1: false,
				show2: false,
				show3: false,
				show: true,
				tabList: [{
					name: '选套餐',
				}, {
					name: '中标案例',
				}, {
					name: '选车务',
				}, ],
				mealList: [{
						name: 'photo',
						title: '图片'
					},
					{
						name: 'lock',
						title: '锁头'
					},
					{
						name: 'photo',
						title: '图片'
					},
					{
						name: 'lock',
						title: '锁头'
					},
					{
						name: 'photo',
						title: '图片'
					},
					{
						name: 'lock',
						title: '锁头'
					},
				]
			}
		},
		onLoad() {

		},
		methods: {
			tabChange(tabIndex) {
				// 切换不同的屏幕 
				this.show = tabIndex == "main";
				this.show1 = tabIndex == "main1";
				this.show2 = tabIndex == "main2";
				this.show3 = tabIndex == "main3";
				// console.log(tabIndex, this.show, this.show1, this.show2, this.show3);
			},
			bannerChange(i) {
				// console.log('轮播',i);
			},
			testhost(event) {
				var that = this;
				console.warn("", event);
				var requestTask = uni.request({
					url: 'https://pai.52car.xyz/api/index', //仅为示例，并非真实接口地址。
					success: (result) => {
						console.log(result)
						that.$refs.uToast.show({
							type: 'success',
							message: result.data.msg,
							iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png',
							complete() {}
						})
					}
				});
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
