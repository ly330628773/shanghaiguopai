export default {
	/**
	 * 	这是一个封装缓存的插件
	 *  Created by gaobo on 2020/08/08
	 */

	// 同步清理本地所有数据缓存（TODO 慎用，会删除token）
	clearAllCache: () => {
		try {
			uni.clearStorageSync();
		} catch (e) {
			// error
		}
	},
	//缓存,默认有效期7天
	//seconds 缓存的存储天数
	cacheTime: (key, list, seconds) => {
		var timestamp = Date.parse(new Date()) / 1000
		//设置缓存
		if (!seconds) {
			var expire = timestamp + (3600 * 24 * 7)
		} else {
			var expire = timestamp + seconds
		}
	
		list = JSON.stringify(list) + "|%$#^|" + expire
		uni.setStorageSync(key, list);
	
	},

	// 从本地缓存中同步移除指定 key。
	removeCache: (key) => {
		try {
			uni.removeStorageSync(key);
		} catch (e) {

		}
	},
	/**
	 * 从本地缓存中同步获取指定 key 对应的内容。
	 */
	fetchCache: (key) => {
		let list = null
		try {
			const value = uni.getStorageSync(key);
			if (value) {
				list = JSON.parse(value)
			}
		} catch (e) {
			// error
		}
		return list;
	},
	/**
	 * 从本地缓存中同步获取指定 key 对应的内容----时间管理
	 */
	fetchCacheTime: (key) => {
		var timestamp = Date.parse(new Date()) / 1000
		let list = null
		try {
			const value = uni.getStorageSync(key) || "";
			if (value) {
				var tmp = value.split("|%$#^|")
				if (tmp.length > 1) { //说明是存储带有效期的
					if (!tmp[1] || timestamp >= tmp[1]) { //key已失效
						uni.removeStorageSync(key) //删除当前key 
					} else { //没有失效返回原本的
						list = JSON.parse(tmp[0])
					}
				} else {
					list = JSON.parse(tmp[0])
				}
			}
		} catch (e) {
			// error
		} finally {
			return list
		}
	},
	/**
	 * 更新缓存 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
	 */
	updateCache: (key, list) => {
		try {
			uni.setStorageSync(key, JSON.stringify(list));
		} catch (e) {
			// error
		}
	},
	// 获取所有存在的缓存的key
	getAllKeys: () => {
		let list = null
		try {
			uni.getStorageInfo({
				success: function(res) {
					list = res.keys
				}
			});
		} catch (e) {
			// error
		}
		return list;
	},

	// 缓存变量
	TOKEN: 'token', // token
	USERINFO: 'user_info', // 用户信息
	PROJECTS: 'projects', // 当前项目
	ISAGREE: 'isAgree', // 是否同意隐私协议
	PERSONALINFO: 'personal_info', // 是否同意个人信息保护
	PROJECTIOCONLIST: 'project_icon_list', // 是否同意个人信息保护
}
