/**
 * 全局公共方法
 * Created by gaobo on 2020/10/27
 */
import cache from './cache.js'
import api from '../http/api.js'
// import store from "../store/index.js"
export default {
	// 计算缓存大小
	byteConvert: function(bytes) {
		if (isNaN(bytes)) {
			return '';
		}
		var symbols = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		var exp = Math.floor(Math.log(bytes) / Math.log(2));
		if (exp < 1) {
			exp = 0;
		}
		var i = Math.floor(exp / 10);
		bytes = bytes / Math.pow(2, 10 * i);

		if (bytes.toString().length > bytes.toFixed(2).toString().length) {
			bytes = bytes.toFixed(2);
		}
		return bytes + ' ' + symbols[i];
	},
	// 转换时间戳 年月日时分
	getLocalTime: (date) => {
		var date = new Date(date * 1000);
		var Y = date.getFullYear() + '-';
		var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
		var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
		var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
		var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
		return Y + M + D + h + m + s;
	},
	// 转换时间戳 年月日
	getLocalTimeFullYear: (date) => {
		var date = new Date(date * 1000);
		var Y = date.getFullYear() + '-';
		var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
		return Y + M + D;
	},
	// 转换时间戳 月日时分
	getLocalTimeMonth: (date) => {
		var date = new Date(date * 1000);
		var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
		var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
		var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
		return M + D + h + m;
	},
	// 转换时间戳 月日时分 M-D H:M
	formatDate: (t) => {
		t = t || Date.now();
		let time = new Date(t);
		let str = time.getMonth() < 9 ? ('0' + (time.getMonth() + 1)) : (time.getMonth() + 1);
		str += '-';
		str += time.getDate() < 10 ? ('0' + time.getDate()) : time.getDate();
		str += ' ';
		str += time.getHours();
		str += ':';
		str += time.getMinutes() < 10 ? ('0' + time.getMinutes()) : time.getMinutes();
		return str;
	},
	// 小时/秒
	getHours: (date) => {
		var date = new Date(date * 1000);
		var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
		var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
		return h + m;
	},
	// 天
	getDate: (type) => {
		const date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		month = month > 9 ? month : '0' + month;
		day = day > 9 ? day : '0' + day;
		return `${year}-${month}-${day}`;
	},
	// 获取月份
	getMonth: (time) => {
		var date = new Date(time * 1000);
		var M = (date.getMonth() + 1) + '月';
		return M;
	},
	// 正则表达式验证手机号格式是否正确
	isPhoneAvailable: function(phonevalue) {
		let phoneReg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
		if (phoneReg.test(phonevalue)) {
			return true;
		} else {
			return false;
		}
	},
	// 获取设备信息
	getDeviceInfo: () => {
		let info = {
			imei: '',
			model: '',
		}
		try {
			const res = uni.getSystemInfoSync();
			info.model = res.model
			let imei = ''
			// #ifdef APP-PLUS
			let Context = plus.android.importClass("android.content.Context");
			let tephoneManager = plus.android.importClass("android.telephony.TelephonyManager");
			let tm = plus.android.runtimeMainActivity().getSystemService(Context.TELEPHONY_SERVICE);
			imei = tm.getDeviceId();
			info.imei = imei //获取的安卓imei 返回给info
			// #endif	
			// TODO 此处是安卓的IMEI,iOS获取设备信息参考 http://www.html5plus.org/doc/zh_cn/device.html
			// plus.device.getInfo({
			// 	success:function(e){
			// 		console.log('getDeviceInfo success: ' + JSON.stringify(JSON.stringify(e)));
			// 	},
			// 	fail:function(e){
			// 		console.log('getDeviceInfo failed: ' + JSON.stringify(JSON.stringify(e)));
			// 	}
			// });
			// info.imei = res.imei
		} catch (e) {
			console.log(e)
		}
		return info;
	},
	// 计算金额
	money: (A, B, method, digit) => {
		let result = null
		if (!digit) digit = 2 // 如果不规定保留几位小数默认保留2位
		switch (method) {
			case '+':
				return result = parseFloat(A + B).toFixed(digit)
				break;
			case '-':
				return result = parseFloat(A - B).toFixed(digit)
				break;
			case '*':
				return result = parseFloat(A * B).toFixed(digit)
				break;
			case '/':
				return result = parseFloat(A / B).toFixed(digit)
				break;
			default:
				return "计算错误"
				break;
		}
	},
	//数组复制
	copyArr(arr) {
		return JSON.parse(JSON.stringify(arr))
	},
	//返回上一页携带参数
	prePage(index) {
		let pages = getCurrentPages();
		let prePage = pages[pages.length - (index || 2)];
		// #ifdef H5
		return prePage;
		// #endif
		return prePage.$vm;
	},
	//开发环境全局打印日志
	log(title) {
		if (process.env.NODE_ENV === 'development' && Boolean(title) === true) {
			console.log(JSON.stringify(title));
		}
	},
	/**
	 * 获取一个随机数
	 * @param {Object} min
	 * @param {Object} max
	 */
	random(min, max) {
		switch (arguments.length) {
			case 1:
				return parseInt(Math.random() * min + 1, 10);
				break;
			case 2:
				return parseInt(Math.random() * (max - min + 1) + min, 10);
				break;
			default:
				return 0;
				break;
		}
	},
	// 判断两个对象是否相同
	isObjectValueEqual(x, y) {
		// 指向同一内存时
		if (x === y) {
			return true;
		} else if (
			typeof x == 'object' &&
			x != null &&
			typeof y == 'object' && y != null
		) {
			if (Object.keys(x).length != Object.keys(y).length) return false;

			for (var prop in x) {
				if (y.hasOwnProperty(prop)) {
					if (!this.isObjectValueEqual(x[prop], y[prop])) return false;
				} else return false;
			}

			return true;
		} else return false;
	},
	// 去掉字符串中的空格
	trim(str) {
		if (!str) {
			return '';
		}
		return str.replace(/\s*/g, '');
	},
	// 解决js计算精度丢失问题 accMul(1+1)
	accMul(f, digit) {
		if (digit == undefined) digit = 2
		var m = Math.pow(10, digit);
		return Math.round(f * m, 10) / m;
	},
	//保留两位小数不四舍五入
	Decimal(x) {
		var m = Math.pow(10, 2);
		var hshs = Math.round((x * 100) * m, 10) / m;
		console.log(hshs)
		var f_x = Math.round((hshs / 100) * m) / m;
		var s_x = f_x.toString();
		var pos_decimal = s_x.indexOf('.');
		if (pos_decimal < 0) {
			pos_decimal = s_x.length;
			s_x += '.';
		}
		while (s_x.length <= pos_decimal + 2) {
			s_x += '0';
		}
		return s_x;
	},
	/*
	 * obj 转 params字符串参数
	 * 例子：{a:1,b:2} => a=1&b=2
	 */
	objParseParam(obj) {
		let paramsStr = '';
		if (obj instanceof Array) return paramsStr;
		if (!(obj instanceof Object)) return paramsStr;
		for (let key in obj) {
			paramsStr += `${key}=${obj[key]}&`;
		}
		return paramsStr.substring(0, paramsStr.length - 1);
	},
	/**
	 * 图片处理-选择
	 * count 数量
	 */
	chooseImage(count) {
		return new Promise((resolve, reject) => {
			uni.chooseImage({
				count: count || 1, //默认1
				sourceType: ["camera", "album"],
				sizeType: ["compressed"], //选择图片
				success: res => {
					resolve(res);
				}
			});
		}).catch(e => {
			reject(e)
		})
	},
	/**
	 * 图片处理-预览
	 * loop 
	 * current
	 * urls
	 */
	previewImage(current, urls, loop) {
		uni.previewImage({
			current: current || 0,
			loop: loop || true, // 是否可以循环预览
			urls: urls || []
		})
	},
	/**
	 * 图片处理-多文件上传
	 * path 上传文件
	 * header token
	 * url  上传路径
	 */
	uploadFile(path, url) {
		let uploadFiles = []
		path.forEach((item, index) => {
			uploadFiles.push({
				uri: item,
				name: 'file' + index
			});
		})
		let token = cache.fetchCache(cache.TOKEN) || ""
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				header: {
					'token': token
				},
				url: url,
				files: uploadFiles,
				formData: {},
				success: (uploadFileRes) => {
					console.log(uploadFileRes)
				},
				fail(e) {
					console.log(e)
					reject(e)
				},
				complete(res) {

				}
			});
		}).catch(e => {
			// reject(e)
			console.log(e)
		})

	},
	/**
	 *  阿里云上传所需的签名
	 *  imageList 本地路径 
	 *  fileName 文件类型
	 * 
	 */
	getAliyunOssSign(imageList, fileName) {
		return new Promise((resolve, reject) => {
			api.getAliyunOssSign().then(res => {
				console.log(res)
				const {
					code,
					data,
					msg,
					time
				} = res.data
				if (code === 1) {
					// OSS地址
					const aliyunServerURL = data.host
					// 存储路径(后台固定位置+随即数+文件格式)
					const aliyunFileKey = data.dir + new Date().getTime() + Math.floor(Math.random() *
						100) + fileName
					// 临时AccessKeyID0
					const OSSAccessKeyId = data.accessid
					// 加密策略
					const policy = data.policy
					// 签名
					const signature = data.signature
					// 后端自定义回调
					const callback = data.callback
					uni.uploadFile({
						url: aliyunServerURL,
						filePath: imageList, //要上传文件资源的路径
						name: 'file', //必须填file
						formData: {
							'key': aliyunFileKey,
							'policy': policy,
							'callback': callback,
							'OSSAccessKeyId': OSSAccessKeyId,
							'signature': signature,
							'success_action_status': '200',
						},
						success: function(res) {
							resolve(JSON.parse(res.data))

						},
						fail: function(err) {
							resolve(err)
						},
					})
				} else {}
			}).catch((err) => {
				console.log(err)
			})
		}).catch(e => {
			// reject(e)
			console.log(e)
		})
	},
	/**
	 *  项目——————阿里云上传所需的签名
	 *  imageList 本地路径
	 *  fileName  文件类型
	 *  project_id  项目id
	 *  file_space  文件大小
	 * 
	 */
	verifyProjectUploadAliyunOss(project_id, file_space, imageList, fileName) {
		return new Promise((resolve, reject) => {
			let params = {
				project_id: project_id,
				file_space: file_space
			}
			api.verifyProjectUploadAliyunOss(params).then(res => {
				console.log(res)
				const {
					code,
					data,
					msg,
					time
				} = res.data
				if (code === 1) {
					// OSS地址
					const aliyunServerURL = data.host
					// 存储路径(后台固定位置+随即数+文件格式)
					const aliyunFileKey = data.dir + new Date().getTime() + Math.floor(Math.random() *
						100) + fileName
					// 临时AccessKeyID0
					const OSSAccessKeyId = data.accessid
					// 加密策略
					const policy = data.policy
					// 签名
					const signature = data.signature
					// 后端自定义回调
					const callback = data.callback
					uni.uploadFile({
						url: aliyunServerURL,
						filePath: imageList, //要上传文件资源的路径
						name: 'file', //必须填file
						formData: {
							'key': aliyunFileKey,
							'policy': policy,
							'callback': callback,
							'OSSAccessKeyId': OSSAccessKeyId,
							'signature': signature,
							'success_action_status': '200',
						},
						success: function(res) {
							resolve(JSON.parse(res.data))

						},
						fail: function(err) {
							resolve(err)
						},
					})
				} else {}
			}).catch((err) => {
				console.log(err)
			})
		}).catch(e => {
			// reject(e)
			console.log(e)
		})
	},
	/**
	 * 文件下载临时路径
	 */
	// downloadFile(url){
	// 	uni.showLoading({
	// 		title:"正在下载中"
	// 	})
	// 	var downloadTask = uni.downloadFile({
	// 	    url: url,
	// 		header:{},
	// 	    success: (res) => {
	// 			console.log(res)
	// 	        if (res.statusCode === 200) {
	// 	            console.log('下载成功');
	// 				this.saveFile(res.tempFilePath)
	// 	        }else{
	// 				uni.showToast({
	// 					title:"下载失败，请检查网络",
	// 					icon:"none"
	// 				})
	// 			}
	// 	    },
	// 		fail: function (res) {
	// 			uni.showToast({
	// 				title:"下载失败，请检查网络",
	// 				icon:"none"
	// 			})
	// 		},
	// 	});
	// downloadTask.onProgressUpdate((res) => {
	//     console.log('下载进度' + res.progress);
	//     console.log('已经下载的数据长度' + res.totalBytesWritten);
	//     console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);

	//     // 测试条件，取消下载任务。
	//     if (res.progress > 50) {
	//         downloadTask.abort();
	//     }
	// });
	// },
	/**
	 * 文件下载本地永久储存
	 */
	// saveFile(Path){
	// 	uni.saveFile({
	// 		tempFilePath: Path,
	// 		success: function (res) {
	// 			console.log(res)
	// 			const savedFilePath = res.savedFilePath;
	// 			uni.openDocument({
	// 				filePath: savedFilePath,
	// 				success: function (res) {
	// 				  uni.hideLoading()
	// 				},
	// 				fail: function (res) {
	// 				  uni.hideLoading()
	// 				  uni.showToast({
	// 				  	title:"文件类型不支持，请自行打开",
	// 				  	icon:"none"
	// 				  })
	// 				},
	// 			});
	// 			uni.showToast({
	// 				title:"下载成功！",
	// 				icon:"none"
	// 			})
	// 		},
	// 		fail: function (res) {
	// 			console.log(res)
	// 			uni.showToast({
	// 				title:"下载失败！，请稍后重试",
	// 				icon:"none"
	// 			})
	// 		},
	// 	});
	// },
	/**
	 *
	 * 文件下载临时路径----不主动打开
	 */
	// downloadFile_noOpen(url,length){
	// 	this.toUpdate(url)
	// 	return
	// 	uni.showLoading({
	// 		title:"正在下载中"
	// 	})
	// 	var downloadTask = uni.downloadFile({
	// 	    url: url,
	// 		header:{},
	// 	    success: (res) => {
	// 	        if (res.statusCode === 200) {
	// 	            console.log('下载成功');
	// 				this.saveFile_noOpen(res.tempFilePath,length)
	// 	        }else{
	// 				uni.showToast({
	// 					title:"下载失败，请检查网络",
	// 					icon:"none"
	// 				})
	// 			}
	// 	    },
	// 		fail: function (res) {
	// 			uni.showToast({
	// 				title:"下载失败，请检查网络",
	// 				icon:"none"
	// 			})
	// 		},
	// 	});
	// },
	// /**
	//  * 文件下载本地永久储存-不主动打开
	//  */
	// saveFile_noOpen(Path,length){
	// 	uni.saveFile({
	// 		tempFilePath: Path,
	// 		success: function (res) {
	// 			console.log(res)
	// 			const savedFilePath = res.savedFilePath;
	// 			store.state.savedFilePath.push(savedFilePath)
	// 			console.log(store.state.savedFilePath)
	// 			if(store.state.savedFilePath.length == length){
	// 				uni.hideLoading()
	// 				uni.showToast({
	// 					title:savedFilePath,
	// 					icon:"none",
	// 					duration:5000
	// 				})
	// 			}
	// 		},
	// 		fail: function (res) {
	// 			console.log(res)
	// 			uni.showToast({
	// 				title:"下载失败！，请稍后重试",
	// 				icon:"none"
	// 			})
	// 		},
	// 	});
	// },
	// 下载安装包
	downloadFile(url, fileType, realFileName) {
		try {
			uni.showLoading({
				title: "正在下载中"
			})
			// 下载地址
			let wgtUrl = url;
			// 安装包的保存路径
			// let savePath = "_downloads/update/";
			let savePath = "file://storage/emulated/0/gcgl/" + realFileName + '.' + fileType;
			// 创建下载任务
			var dtask = plus.downloader.createDownload(wgtUrl, {
				filename: savePath
			}, function(d, status) {});
			// 添加监听器
			dtask.addEventListener("statechanged", this.onStateChanged, false);
			// 开始下载
			dtask.start();
		} catch (e) {
			uni.hideLoading()
			uni.showToast({
				title: "下载失败！，请稍后重试",
				icon: "none"
			})
		}

	},
	/**
	 * 下载任务的监听器
	 * @param {Object} dtask
	 * @param {Object} status
	 */
	onStateChanged(dtask, status) {
		var that = this
		if (dtask.state == 4 && status == 200) {
			store.commit('toFileUrl', dtask.filename) //存储路径
			plus.runtime.openFile(dtask.filename, function(error) {});
			uni.hideLoading()
			let d = plus.io.convertLocalFileSystemURL(dtask.filename)
			store.commit('toRealFileUrl', d) //存储路径
		} else {
			let totalSize = dtask.totalSize;
			// 获得已下载的大小
			let downloadedSize = dtask.downloadedSize;
			// 计算进度
			let dp = ((downloadedSize / totalSize) * 100).toFixed(0);
			// console.log(dp)
			let downloadProgress = dp == 'NaN' ? 0 : dp;
			let d = Number(downloadProgress)
			store.commit('toDownloadProgress', d) //存储进度

		}
	},
	// 打开文件夹
	openFile(name) {
		plus.runtime.openFile(name, function(error) {
			// console.log("open file failed: " + error);
		});
	},
	// 进入下载页面
	toPopupDown() {
		uni.navigateTo({
			url: '/pages/documentation/popupDown'
		})
	},
	/**
	 * 去登陆
	 */
	toLogin() {
		uni.navigateTo({
			url: '/pages/login/login'
		})
	},
	/**
	 * 工作消息
	 */
	// 未读消息
	notice(e) {
		api.notice_getCount({}, e).then(res => {
			const {
				code,
				data,
				msg,
				time
			} = res.data
			if (code === 1) {
				this.notlogin_chat_getCount(false).then((res) => {
					let count = data.taskCount + data.meetingCount + data.projectCount + data
						.qualitySafetyCount + store.state.unreadTotal
					count = count * 1 + res // count 是string 这转成number
					if (count > 0) {
						let c = count > 0 ? String(count) : 0 // setTabBarBadge index:string
						c = c > 99 ? '99' : c // 最大99
						uni.setTabBarBadge({
							index: 2,
							text: c
						})
					} else {
						uni.removeTabBarBadge({
							index: 2
						})
					}
				})
			} else {}
		}).catch((err) => {}).finally((e) => {})
	},
	// 未读消息-新的好友
	notlogin_chat_getCount(e) {
		return new Promise(resolve => {
			api.notlogin_chat_getCount({}, e).then(res => {
				const {
					code,
					data,
					msg,
					time
				} = res.data
				if (code === 1) {
					resolve(data.chat_count + data.group_count)
				} else {}
			}).catch((err) => {}).finally((e) => {

			})
		});
	},
}
