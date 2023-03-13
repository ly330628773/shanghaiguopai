/**
 * 全局弹窗
 * Created by gaobo on 2020/08/08
 */
export default {
	showModal: function (options) {
		// #ifdef APP-PLUS
		let params = {
			title: "提示",
			content: "自定义内容", 
			align: "center", // 对齐方式 left/center/right
			cancelText: "取消", // 取消按钮的文字
			cancelColor: "#8F8F8F", // 取消按钮颜色
			confirmText: "确定", // 确认按钮文字
			confirmColor: "#1C8BFC", // 确认按钮颜色 
			showCancel: true, // 是否显示取消按钮，默认为 true
		}
	
		Object.assign(params, options)
	
		let list = []
		Object.keys(params).forEach(ele => {
			list.push(ele + "=" + params[ele])
		})
		let paramsStr = list.join('&')
	
		uni.navigateTo({
			url: "/pages/modal/modal?" + paramsStr
		})
	
		return new Promise((resolve, reject) => {
			uni.$once("AppModalCancel", () => {
				reject()
			})
			uni.$once("AppModalConfirm", () => {
				resolve()
			})
		});
		// #endif
		// #ifdef H5
		let flag = false
		return new Promise((resolve, reject) => {
			uni.showModal({
				//调用退出接口
				title: options.title || '提示',
				content:  options.content,
				success: (e)=>{
					if(e.confirm){
						flag = true
						resolve(flag)
					}else if (e.cancel) {
						flag = false
						reject(flag)
					}
				}
			});
			
		});
		// #endif
	},
	
}
