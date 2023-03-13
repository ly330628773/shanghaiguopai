/**
 * 全局请求
 * Created by gaobo on 2020/08/08
 */
import cache from '@/common/cache.js'
// import modal from '@/common/modal.js'

// const baseUrl = '请求地址'; 需要更换直接改   可做二次处理（例如：校验是不是正确的地址格式）
const baseUrl = {
	dev: `http://gcgl.zgxiaochengxu.com`, // 开发环境
};
const apiUrl = baseUrl.dev;

const upLoadUrl = 'http://gcgl.zgxiaochengxu.com/api/ajax/verifyProjectUploadAliyunOss'  // 项目上传url

// 公共参数
let common = {
	// ip: "198.167.0.1"
}
// 请求地址拼接的路径
let url = null

// token
function uniToken() {
	let token = cache.fetchCache(cache.TOKEN) || ""
	return token
}
// 正则校验是否有效的url  whetherCorrect为True正确的url 为False错误的url
function validityUrl(Url) {
	const reURL = /(http|https):\/\/([\w.]+\/?)\S*/
	let whetherCorrect = reURL.test(Url)
	if (!whetherCorrect) {
		// toast("不是一个有效的请求")
		return false
	}
	return whetherCorrect
}
// http 请求
const httpTokenRequest = (opts, data, intercept) => {
	//是否有效的url
	const whetherCorrect = validityUrl(apiUrl)
	if (!whetherCorrect) return
	// 如果是不属于http规则内，进行拼接，属于直接显示opts.url
	if (!validityUrl(opts.url)) {
		url = apiUrl + opts.url
	}else{
		url = opts.url
	}
	// token
	let token = uniToken()
	// 如果传的参数为空 自动转为空对象
	if (!data) data = {}
	// 公共参数
	// data.ip = common.ip
	if (intercept == null) {
		intercept = true;
	}
	// http参数
	let httpDefaultOpts = {
		url,
		data,
		method: opts.method,
		header: opts.method == 'GET' ? {
			'Token': token,
			'X-Requested-With': 'XMLHttpRequest',
			"Accept": "application/json",
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
		} : {
			'Token': token,
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/json; charset=UTF-8'
		},
		dataType: 'json',
	}
	let promise = new Promise(function(resolve, reject) {
		uni.request(httpDefaultOpts).then((res) => {
			// 自定义拦截器
			let flag = Interceptor(res)
			if (flag) return
			// 登录拦截
			if (intercept) {
				let hasLogin = isLogin(res)
			}
			resolve(res[1])
		}).catch(response => {
			console.log(response)
			reject(response)
		})
	})
	return promise
};
// 拦截器 （可自定义）不需要可以注释
function Interceptor(res) {
	let flag = false
	if (res[1].statusCode == 500) {
		toast("服务器内部异常")
		flag = true

	}
	return flag
}
// 未登录拦截（可自定义）不需要可以注释
function isLogin(res) {
	if (res[1].data.code == -1) {
		uni.navigateTo({
			url: '/pages/login/login'
		})
	}
}

// 提示
function toast(text) {
	uni.showToast({
		title: text,
		icon: "none"
	})
}

// POST请求
const optsPost = {
	method: "POST",
	url: ''
}
// GET请求
const optsGet = {
	method: "GET",
	url: ''
}

export default {
	apiUrl,
	baseUrl,
	upLoadUrl,
	// post
	post: (url, data,intercept) => {
		try {
			optsPost.url = url
			return httpTokenRequest(optsPost, data ,intercept)
		} catch (e) {
			console.log(e)
			//TODO handle the exception
		}
	},
	// get
	get: (url, data,intercept) => {
		try {
			optsGet.url = url
			return httpTokenRequest(optsGet, data ,intercept)
		} catch (e) {
			console.log(e)
			//TODO handle the exception
		}
	},
}
