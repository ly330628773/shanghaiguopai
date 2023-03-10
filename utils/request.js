export {
	myRequest as req
};

function myRequest() {
	var requestTask = uni.request({
		url: 'https://pai.52car.xyz/api/index', //仅为示例，并非真实接口地址。
		success: (result) => {
			console.log(result)
		}
	});
}
