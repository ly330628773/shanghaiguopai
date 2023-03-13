/**
 * 全局提示
 * Created by gaobo on 2020/08/08
 */
import store from '../store/index.js'
export default{
	/**
	 * 这是一个封装toast 提示的组件
	 * text：文本
	 * position：位置 1上2中3下
	 * duration：时间 number
	 * icon：图标
	 */
	// uniapp 自带组件二次封装
	showToast:(text,position,duration,icon)=>{
		try{
			// 默认值
			if(!position){   // 如果不传位置默认为居中
				position = "center"
			}else{
				if(position == 0)position = "top"
				if(position == 1)position = "center"
				if(position == 2)position = "bottom"
			}
			if(!icon)icon = "none"  // 如果不传图标默认为空
			if(!duration)duration = 3000   // 默认时间ms
			uni.showToast({
				title:text,
				icon:icon,
				position:position,
				duration:duration
			})
		}catch(e){
			console.log(e)
		}
	},
	
	/**
	 * 公共组件   提示
	 * 1是上 2是中3是下 info 是内容
	 * https://www.runoob.com/cssref/css-colornames.html 颜色大全
	 */
	// tip:(info,position,bg,time)=>{
	// 	if(position == 1)position = 'top'
	// 	else if(position == 3)position = 'bottom'
	// 	else position = 'center'
	// 	bg = bg ? bg : "Aqua",
	// 	time = time ? time : 2000
	// 	let tip = {
	// 		msg: info,
	// 		duration: time,
	// 		type:bg,
	// 		position:position
	// 	}
	// 	store.commit('tipStatus',tip)
	// },
	/**
	 * 原生提示
	 * plus.nativeUI.toast(
		info,
		{type:'text',
			duration:'short',
			richTextStyle:{
				align:'center',
				background:'rgba(217,56,56,1)'
				
			},
			verticalAlign:position
		});
	 */
}
