/**
 * 校验版本
 * Created by gaobo on 2020/08/08
 */
export default{
	/**
	 * 校验旧的版本号是否小于最新版本号
	 * @param {String} oldVersion 旧的版本号
	 * @param {String} newVersion 最新版本号
	 * @example 参数格式为 x.x.x 或 x.x 或 x
	 * 				x代表任意数字
	 */
	checkVersion:(oldVersion, newVersion)=>{
		/**
		 * 1. 根据 . 将字符串分割成字符数组
		 */
		let oldArr = new Array();
		let newArr = new Array();
		oldArr = oldVersion.split(".");
		newArr = newVersion.split(".");
		
		/**
		 * 2. 版本号的长度不足三位补0
		 * 		最终结果为 x.x.x / x.x.0 / x.0.0的其中一个
		 */
		for (let i = 0; i < 3; i++) {
			if (oldArr[i] == undefined) {
				oldArr[i] = "0"
			}
			if (newArr[i] == undefined) {
				newArr[i] = "0"
			}
		}
		
		// 是否需要更新的标记，默认为false 不更新
		let flag = false;
		/**
		 * 3. 从后向前依次判断版本号的片段
		 * 		如：a.b.c 与 x.y.z	c跟z先比，b再跟y比，a最后跟x比
		 * 		大于就设为true，小于就设为false，等于时什么也不做，最终能判断出是否需要更新
		 */
		for (let i = 2; i >= 0; i--) {
			// 新的版本号的片段
			let version1 = parseInt(newArr[i])
			// 旧的版本号的片段
			let version2 = parseInt(oldArr[i])
			if (version1 > version2) {
				flag = true
			} else if (version1 == version2){
				// do nothing
			} else {
				flag = false
			}
		}
		
		return flag
	},
}