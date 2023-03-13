/**
 * 全局请求接口列表
 * Created by gaobo on 2020/08/08
 * 
 */
import http from "./http.js"
// 接口
export default{
	// 注册
	register(params){
		return http.post("/api/user/register",params)
	},
	// 发送短信
	sendSms(params){
		return http.post("/api/common/sendSms",params)
	},
	// 登录
	login(params){
		return http.post("/api/user/login",params)
	},
	// 忘记密码
	forGotPassword(params){
		return http.post("/api/user/forGotPassword",params)
	},
	// 隐私
	privacyAgreement(params){
		return http.post("/api/user/privacyAgreement",params)
	},
	// 退出登录
	logout(params){
		return http.post("/api/user/logout",params)
	},
	// 会员信息
	getUserInfo(params){
		return http.post("/api/user/getUserInfo",params)
	},
	// 不需要登录会员信息
	noLogin_getUserInfo(params,intercept){
		return http.post("/api/user/getUserInfo",params,intercept)
	},
	//创建项目
	createProject(params){
		return http.post("/api/project/createProject",params)
	},
	//项目选择-项目列表
	projectList(params){
		return http.post("/api/project/projectList",params)
	},
	// 切换项目
	changeWorkingProject(params){
		return http.post("/api/project/changeWorkingProject",params)
	},
	//确认项目已完成
	confirmProjectFinished(params){
		return http.post("/api/project/confirmProjectFinished",params)
	},	
	//签到
	attendance(params){
		return http.post("/api/attendance/add",params)
	},
	// 劳务列表
	labour_service(params){
		return http.post("/api/labour_service/index",params)
	},	
	// 获取(劳务/技术)(招工/招聘)列表 招工类型:1=劳务招工,2=技术招聘
	labour_recruit(params){
		return http.post("/api/labour_recruit/index",params)
	},
	// 添加（劳务招工、技术招聘）
	labour_recruit_add(params){
		return http.post("/api/labour_recruit/add",params)
	},
	// （招工、招聘）详情
	labour_recruit_getDetail(params){
		return http.post("/api/labour_recruit/getDetail",params)
	},	
	// 劳务详情
	labour_service_detail(params){
		return http.post("/api/labour_service/detail",params)
	},	
	// 获取地区
	getArea(params){
		return http.post("/api/ajax/area",params)
	},
	// 工种列表1劳务 2技术人员
	labour_type_work(params){
		return http.post("/api/labour_type_work/index",params)
	},
	// 工龄列表1劳务 2技术人员
	labour_working_years(params){
		return http.post("/api/labour_working_years/index",params)
	},
	// 添加劳务
	labour_service_add(params){
		return http.post("/api/labour_service/add",params)
	},
	// 应聘发布
	labour_technician_add(params){
		return http.post("/api/labour_technician/add",params)
	},
	// 应聘列表
	labour_technician_index(params){
		return http.post("/api/labour_technician/index",params)
	},
	// 应聘详情
	labour_technician_detail(params){
		return http.post("/api/labour_technician/detail",params)
	},	
	// 阿里云上传所需的签名
	getAliyunOssSign(params){
		return http.post("/api/ajax/getAliyunOssSign",params)
	},
	// 项目文件上传所需的签名
	verifyProjectUploadAliyunOss(params){
		return http.post("/api/ajax/verifyProjectUploadAliyunOss",params)
	},
	// 审核列表
	attendanceReviewList(params){
		return http.post("/api/attendance/reviewList",params)
	},	
	// 正在进行的项目信息
	getOnworkingProjet(params){
		return http.post("/api/project/getOnworkingProjet",params)
	},	
	// 考勤-签到统计
	attendanceCount(params){
		return http.post("/api/attendance/attendanceCount",params)
	},	
	// 考勤-签到表-未签到
	unAttendance(params){
		return http.post("/api/attendance/unAttendance",params)
	},
	// 考勤-签到表-已签到
	alreadyAttendance(params){
		return http.post("/api/attendance/alreadyAttendance",params)
	},
	// 考勤-获取补签可审核人员
	getMember(params){
		return http.post("/api/attendance/getMember",params)
	},
	// 考勤-补签审核passed=通过,reject=不通过
	review(params){
		return http.post("/api/attendance/review",params)
	},
	//  考勤-审核状态
	attendance_getAttendanceList(params){
		return http.post("/api/attendance/getAttendanceList",params)
	},
	//  成员管理-邀请成员
	setMember(params){
		return http.post("/api/project_member/setMember",params)
	},
	//  成员管理-删除项目成员列表
	delMemberList(params){
		return http.post("/api/project_member/delMemberList",params)
	},
	//  成员管理-删除项目成员
	delMember(params){
		return http.post("/api/project_member/delMember",params)
	},
	//  成员管理-权限以及成员已经拥有的权限
	getGroup(params){
		return http.post("/api/project_member/getGroup",params)
	},
	//  成员管理-设置权限
	setGroup(params){
		return http.post("/api/project_member/setGroup",params)
	},
	// 成员管理-项目成员列表
	projectGetMember(params){
		return http.post("/api/project_member/getMember",params)
	},
	// 成员管理-成员删除列表
	delMemberList(params){
		return http.post("/api/project_member/delMemberList",params)
	},
	// 成员管理-项目成员资料详情
	getMemberInfo(params){
		return http.post("/api/project_member/getMemberInfo",params)
	},
	// 成员管理-修改成员昵称
	updateMember(params){
		return http.post("/api/project_member/updateMember",params)
	},
	// 成员管理-修改成员昵称
	updateMember(params){
		return http.post("/api/project_member/updateMember",params)
	},
	// 任务布置-首页
	project_task_index(params){
		return http.post("/api/project_task/index",params)
	},
	// 任务布置-获取任务列表
	project_task_taskList(params){
		return http.post("/api/project_task/taskList",params)
	},
	// 任务布置-创建任务
	project_task_createTask(params){
		return http.post("/api/project_task/createTask",params)
	},
	// 任务布置-获取任务详情
	project_task_getTaskInfo(params){
		return http.post("/api/project_task/getTaskInfo",params)
	},
	// 任务布置-选择项目负责人或者参与人
	project_task_getMemberList(params){
		return http.post("/api/project_task/getMemberList",params)
	},
	// 任务布置-任务重新发布
	project_task_republish(params){
		return http.post("/api/project_task/republish",params)
	},
	// 任务布置-任务结束
	project_task_taskEnd(params){
		return http.post("/api/project_task/taskEnd",params)
	},
	// 任务布置-任务进度添加
	project_task_taskSchedule(params){
		return http.post("/api/project_task/taskSchedule",params)
	},
	// 任务布置-任务负责人接受或者不接受  状态:2=同意,3=拒绝
	project_task_taskAccept(params){
		return http.post("/api/project_task/taskAccept",params)
	},
	// 任务布置-创建项目任务权限
	project_task_createTaskAuth(params){
		return http.post("/api/project_task/createTaskAuth",params)
	},
	// 任务布置-任务完成申请
	project_task_taskApply(params){
		return http.post("/api/project_task/taskApply",params)
	},
	// 任务布置-任务审核 2=通过，3=不通过
	project_task_taskReview(params){
		return http.post("/api/project_task/taskReview",params)
	},
	// 购买云盘-获取云盘购买选项
	project_storage_space_option_index(params){
		return http.post("/api/project_storage_space_option/index",params)
	},
	// 购买云盘-购买云盘空间
	project_storage_space_order_createOrder(params){
		return http.post("/api/project_storage_space_order/createOrder",params)
	},
	// 购买云盘-获取发起支付代码
	getPayCode(params){
		return http.post("/api/payment/getPayCode",params)
	},
	// 工程会议-获取会议列表
	project_meeting_meetingList(params){
		return http.post("/api/project_meeting/meetingList",params)
	},
	// 工程会议-获取会议详情回复
	project_meeting_getMeetingMessage(params){
		return http.post("/api/project_meeting/getMeetingMessage",params)
	},
	// 工程会议-发布会议详情回复	
	project_meeting_createMeetingMessage(params){
		return http.post("/api/project_meeting/createMeetingMessage",params)
	},
	// 工程会议-设置或者编辑会议纪要	
	project_meeting_setMeetingMinute(params){
		return http.post("/api/project_meeting/setMeetingMinute",params)
	},
	// 工程会议-获取会议纪要
	project_meeting_getMeetingMinute(params){
		return http.post("/api/project_meeting/getMeetingMinute",params)
	},
	// 工程会议-会议详情
	project_meeting_getMeetingInfo(params){
		return http.post("/api/project_meeting/getMeetingInfo",params)
	},
	// 工程会议-发布会议
	project_meeting_createMeeting(params){
		return http.post("/api/project_meeting/createMeeting",params)
	},
	// 工程会议-添加会议
	project_meeting_createManualMeeting(params){
		return http.post("/api/project_meeting/createManualMeeting",params)
	},
	// 工程会议-获取会议参与人
	project_meeting_getMemberList(params){
		return http.post("/api/project_meeting/getMemberList",params)
	},
	// 工程会议-发起会议权限
	project_meeting_createMeetingAuth(params){
		return http.post("/api/project_meeting/createMeetingAuth",params)
	},
	// 工程会议-获取项目名称
	project_meeting_getProjectName(params){
		return http.post("/api/project_meeting/getProjectName",params)
	},
	// 质量安全-获取列表
	project_quality_safety_getList(params){
		return http.post("/api/project_quality_safety/getList",params)
	},
	// 质量安全-质量安全首页
	project_quality_safety_index(params){
		return http.post("/api/project_quality_safety/index",params)
	},
	// 质量安全-判断创建的权限
	project_quality_createAuth(params){
		return http.post("/api/project_quality_safety/createAuth",params)
	},
	// 质量安全-选择负责人
	project_quality_getMemberList(params){
		return http.post("/api/project_quality_safety/getMemberList",params)
	},
	// 质量安全-发布问题
	project_quality_createQualitySafety(params){
		return http.post("/api/project_quality_safety/createQualitySafety",params)
	},
	// 质量安全-质量安全详情
	project_quality_getInfo(params){
		return http.post("/api/project_quality_safety/getInfo",params)
	},
	// 质量安全-设置整改说明
	project_quality_setQualitySafetyRectify(params){
		return http.post("/api/project_quality_safety/setQualitySafetyRectify",params)
	},
	// 质量安全-整改复查
	project_quality_qualitySafetyReview(params){
		return http.post("/api/project_quality_safety/qualitySafetyReview",params)
	},
	// 建材商-根据分类获取商户列表
	building_materials_store_getCatList(params){
		return http.post("/api/building_materials_store/getCatList",params)
	},
	// 建材商-建材商分类列表
	building_materials_store_index(params){
		return http.post("/api/building_materials_store_category/index",params)
	},
	// 建材商-猜你喜欢
	building_materials_store_indexGuessFavorite(params){
		return http.post("/api/building_materials_store/indexGuessFavorite",params)
	},
	// 建材商-为你推荐
	building_materials_store_indexRecommend(params){
		return http.post("/api/building_materials_store/indexRecommend",params)
	},
	// 建材商-使用申请
	building_materials_order_apply(params){
		return http.post("/api/building_materials_order/apply",params)
	},
	// 建材商-商户添加
	building_materials_store_add(params){
		return http.post("/api/building_materials_store/add",params)
	},
	// 建材商-建材商-材料/设备详情
	building_materials_goods_detail(params){
		return http.post("/api/building_materials_goods/detail",params)
	},
	// 建材商-详情
	building_materials_store_detail(params){
		return http.post("/api/building_materials_store/detail",params)
	},
	// 建材商-材料设备列表
	building_materials_goods_index(params){
		return http.post("/api/building_materials_goods/index",params)
	},
	// 建材商-材料设备发布
	building_materials_goods_add(params){
		return http.post("/api/building_materials_goods/add",params)
	},
	// 地区材料价格列表
	material_index(params){
		return http.post("/api/material/index",params)
	},
	// 地区材料价格列表-详情
	material_detail(params){
		return http.post("/api/material/detail",params)
	},
	// 获取我的置顶排名记录
	top_ranking_order_getBuyTopRankingList(params){
		return http.post("/api/top_ranking_order/getBuyTopRankingList",params)
	},
	// 获取相关置顶价格信息
	top_ranking_order_getTopRankingOptionPrice(params){
		return http.post("/api/top_ranking_order/getTopRankingOptionPrice",params)
	},
	// 生成置顶排名支付订单（劳务置顶、劳务招工置顶、应聘置顶、招聘置顶、建筑商置顶）
	top_ranking_order_buyTopRanking(params){
		return http.post("/api/top_ranking_order/buyTopRanking",params)
	},
	// 行业资讯详情
	industry_news_detail(params){
		return http.post("/api/industry_news/detail",params)
	},
	// 行业资讯列表
	industry_news_index(params){
		return http.post("/api/industry_news/index",params)
	},
	// 我的发布-劳务列表
	labour_service_getMyLabourServiceList(params){
		return http.post("/api/labour_service/getMyLabourServiceList",params)
	},
	// 我的发布-劳务列表-劳务详情	
	labour_service_getMyLabourServiceInfo(params){
		return http.post("/api/labour_service/getMyLabourServiceInfo",params)
	},
	// 我发布的-技术员列表
	labour_technician_getMyLabourTechnicianList(params){
		return http.post("/api/labour_technician/getMyLabourTechnicianList",params)
	},
	// // 我发布的-技术员详情接口请使用
	// labour_technician_detail(params){
	// 	return http.post("/api/labour_technician/detail",params)
	// },
	// 我发布的-我发布的劳务招工/技术招聘列表
	labour_recruit_getMyLabourRecruitList(params){
		return http.post("/api/labour_recruit/getMyLabourRecruitList",params)
	},
	// 我发布的-我发布的建材商列表
	building_materials_store_getMyBuildingMaterialsStoreList(params){
		return http.post("/api/building_materials_store/getMyBuildingMaterialsStoreList",params)
	},
	// 我发布的-删除我发布的劳务
	labour_service_delMyMyLabourService(params){
		return http.post("/api/labour_service/delMyMyLabourService",params)
	},
	// 我发布的-删除我发布的劳务/技术招聘信息
	labour_recruit_delMyLabourRecruit(params){
		return http.post("/api/labour_recruit/delMyLabourRecruit",params)
	},
	// 我发布的-删除我发布的技术
	labour_technician_delMyLabourTechnician(params){
		return http.post("/api/labour_technician/delMyLabourTechnician",params)
	},
	// 我发布的-删除我发布的建材商
	building_materials_store_delMyBuildingMaterialsStore(params){
		return http.post("/api/building_materials_store/delMyBuildingMaterialsStore",params)
	},
	
	// 工程资料-获取类型
	project_files_getType(params){
		return http.post("/api/project_files/getType",params)
	},
	// 工程资料-创建权限判断
	project_files_createAuth(params){
		return http.post("/api/project_files/createAuth",params)
	},
	// 工程资料-获取列表
	project_files_getFiles(params){
		return http.post("/api/project_files/getFiles",params)
	},
	// 工程资料-发布资料
	project_files_createFiles(params){
		return http.post("/api/project_files/createFiles",params)
	},
	// 工程资料-获取分类
	project_files_getCategory(params){
		return http.post("/api/project_files/getCategory",params)
	},
	// 工程资料-获取详情
	project_files_getInfo(params){
		return http.post("/api/project_files/getInfo",params)
	},
	// 我的申请（招工申请、申请用工、申请招聘、申请应聘、建筑商使用申请）
	apply_getMyApplyList(params){
		return http.post("/api/apply/getMyApplyList",params)
	},
	// 我的审核（招工申请、申请用工、申请招聘、申请应聘、建筑商城使用申请）
	apply_getMyExamineList(params){
		return http.post("/api/apply/getMyExamineList",params)
	},	
	// 招工申请、用工申请、申请招聘、申请应聘、建材商使用申请接口
	apply_add(params){
		return http.post("/api/apply/add",params)
	},
	// 审核操作 对象类型 对象类型 1招工申请 2申请用工 3申请招聘 4申请应聘 5建材商审核使用申请		
	apply_handelExamine(params){
		return http.post("/api/apply/handelExamine",params)
	},
	// 评价（劳务、技术、建材商）
	evaluate_add(params){
		return http.post("/api/evaluate/add",params)
	},
	// 工作日志-首页
	project_work_log_index(params){
		return http.post("/api/project_work_log/index",params)
	},
	// 工作日志-全部日志
	project_work_log_getAllWorkLog(params){
		return http.post("/api/project_work_log/getAllWorkLog",params)
	},
	// 工作日志-我的日志
	project_work_log_getMyWorkLog(params){
		return http.post("/api/project_work_log/getMyWorkLog",params)
	},
	// 工作日志-发布日志
	project_work_log_createWorkLog(params){
		return http.post("/api/project_work_log/createWorkLog",params)
	},
	// 工作日志-获取接收人和抄送接受人
	project_work_log_getMember(params){
		return http.post("/api/project_work_log/getMember",params)
	},
	// 工作日志-获取天气
	project_work_log_getWeath(params){
		return http.post("/api/project_work_log/getWeath",params)
	},
	// 工作日志-获取分类
	project_work_log_getCategory(params){
		return http.post("/api/project_work_log/getCategory",params)
	},
	// 行业资讯列表
	industry_index(params,intercept){
		return http.post("/api/industry_news/index",params,intercept)
	},
	// 行业资讯详情
	industry_detail(params){
		return http.post("/api/industry_news/detail",params)
	},
	// 公示管理-获取分类
	publicity_column_getList(params){
		return http.post("/api/publicity_column/getList",params)
	},
	// 公示管理-获取详情
	publicity_column_getInfo(params){
		return http.post("/api/publicity_column/getInfo",params)
	},
	// 合同管理-合同详情
	contract_detail(params){
		return http.post("/api/contract/detail",params)
	},
	// 合同管理-合同列表
	contract_index(params){
		return http.post("/api/contract/index",params)
	},
	// 合同管理-添加合同
	contract_add(params){
		return http.post("/api/contract/add",params)
	},
	// 合同管理-合同分类列表
	contract_category_index(params){
		return http.post("/api/contract_category/index",params)
	},
	// 财务管理-获取详情
	project_settlement_getInfo(params){
		return http.post("/api/project_settlement/getInfo",params)
	},
	// 财务管理-获取列表
	project_settlement_getList(params){
		return http.post("/api/project_settlement/getList",params)
	},
	// 财务管理-上传
	project_settlement_createSettlement(params){
		return http.post("/api/project_settlement/createSettlement",params)
	},
	// 财务管理-获取分类
	project_settlement_getCate(params){
		return http.post("/api/project_settlement/getCate",params)
	},
	// 提交实名认证审核
	user_apply_identification_apply(params){
		return http.post("/api/user_apply_identification/apply",params)
	},
	// 设备管理-设备列表
	warehouse_device_index(params){
		return http.post("/api/warehouse_device/index",params)
	},
	// 设备管理-设备出场时选择设备列表
	warehouse_device_getDeviceList(params){
		return http.post("/api/warehouse_device/getDeviceList",params)
	},
	// 设备管理-出场记录
	warehouse_device_out_index(params){
		return http.post("/api/warehouse_device_out/index",params)
	},
	// 设备管理-出场登记
	warehouse_device_out_add(params){
		return http.post("/api/warehouse_device_out/add",params)
	},
	// 设备管理-编辑设备信息
	warehouse_device_edit(params){
		return http.post("/api/warehouse_device/edit",params)
	},
	// 设备管理-设备详情
	warehouse_device_detail(params){
		return http.post("/api/warehouse_device/detail",params)
	},
	// 设备管理-入场登记
	warehouse_device_add(params){
		return http.post("/api/warehouse_device/add",params)
	},
	// 材料管理-出库登记详情
	warehouse_material_out_detail(params){
		return http.post("/api/warehouse_material_out/detail",params)
	},
	// 材料管理-出库登记列表
	warehouse_material_out_index(params){
		return http.post("/api/warehouse_material_out/index",params)
	},
	// 材料管理-出库登记
	warehouse_material_out_add(params){
		return http.post("/api/warehouse_material_out/add",params)
	},
	// 材料管理-库存详情
	warehouse_material_detail(params){
		return http.post("/api/warehouse_material/detail",params)
	},
	// 材料管理-库存记录
	warehouse_material_index(params){
		return http.post("/api/warehouse_material/index",params)
	},
	// 材料管理-入库登记详情
	warehouse_material_entry_detail(params){
		return http.post("/api/warehouse_material_entry/detail",params)
	},
	// 材料管理-入库登记记录
	warehouse_material_entry_index(params){
		return http.post("/api/warehouse_material_entry/index",params)
	},
	// 材料管理-入库登记
	warehouse_material_add(params){
		return http.post("/api/warehouse_material_entry/add",params)
	},
	// 材料管理-项目材料删除
	warehouse_material_product_del(params){
		return http.post("/api/warehouse_material_product/del",params)
	},
	// 材料管理-编辑项目材料
	warehouse_material_product_edit(params){
		return http.post("/api/warehouse_material_product/edit",params)
	},
	// 材料管理-项目材料列表
	warehouse_material_product_index(params){
		return http.post("/api/warehouse_material_product/index",params)
	},
	// 材料管理-项目材料添加
	warehouse_material_product_add(params){
		return http.post("/api/warehouse_material_product/add",params)
	},
	// 材料管理-项目分类列表
	warehouse_material_project_category_index(params){
		return http.post("/api/warehouse_material_project_category/index",params)
	},
	// 材料管理-项目分类添加
	warehouse_material_project_category_add(params){
		return http.post("/api/warehouse_material_project_category/add",params)
	},
	// 材料管理-平台分类列表
	warehouse_material_platform_category_index(params){
		return http.post("/api/warehouse_material_platform_category/index",params)
	},
	// 材料管理-库存详情-入库记录
	warehouse_material_getProductEntryList(params){
		return http.post("/api/warehouse_material/getProductEntryList",params)
	},
	// 材料管理-库存详情-出库记录
	warehouse_material_getProductOutList(params){
		return http.post("/api/warehouse_material/getProductOutList",params)
	},
	// 材料管理-根据材料分类获取项目分类列表
	warehouse_material_project_category_getCategoryByPlatformCategory(params){
		return http.post("/api/warehouse_material_project_category/getCategoryByPlatformCategory",params)
	},
	// 材料管理-我的出库申请列表
	warehouse_material_out_getMyApplyList(params){
		return http.post("/api/warehouse_material_out/getMyApplyList",params)
	},
	// 材料管理-获取出库审核人员
	warehouse_material_out_getApprovalMember(params){
		return http.post("/api/warehouse_material_out/getApprovalMember",params)
	},
	// 材料管理-我的审批列表
	warehouse_material_out_getMyApprovalList(params){
		return http.post("/api/warehouse_material_out/getMyApprovalList",params)
	},
	// 材料管理-出库审批-审核状态 1通过 2驳回
	warehouse_material_out_approval(params){
		return http.post("/api/warehouse_material_out/approval",params)
	},
	// 材料管理-二级分类编辑
	warehouse_material_project_category_edit(params){
		return http.post("/api/warehouse_material_project_category/edit",params)
	},
	// 材料管理-二级分类删除
	warehouse_material_project_category_del(params){
		return http.post("/api/warehouse_material_project_category/del",params)
	},
	// 意见反馈
	feedback_suggestions(params){
		return http.post("/api/feedback/suggestions",params)
	},
	// 更新会员信息
	user_profile(params){
		return http.post("/api/user/profile",params)
	},
	// 帮助说明
	user_helpNotes(params){
		return http.post("/api/user/helpNotes",params)
	},
	// 联系我们
	user_contactUs(params){
		return http.post("/api/user/contactUs",params)
	},
	// 关于我们
	user_aboutUs(params){
		return http.post("/api/user/aboutUs",params)
	},
	// 隐私
	user_privacyAgreement(params){
		return http.post("/api/user/privacyAgreement",params)
	},
	// 项目首页图标
	project_getCount(params){
		return http.post("/api/project/getIcon",params)
	},
	// 客服电话
	user_customerServiceMobile(params){
		return http.post("/api/user/customerServiceMobile",params)
	},
	// 实名认证记录
	user_apply_identification_getMyApplyList(params){
		return http.post("/api/user_apply_identification/getMyApplyList",params)
	},
	// 根据会员ID获取会员信息
	user_getUserProfileByUid(params){
		return http.post("/api/user/getUserProfileByUid",params)
	},
	// 首页轮播图
	banner_getBanner(params){
		return http.post("/api/banner/getBanner",params)
	},
	// 升级更新
	getVersion(params){
		return http.post("/api/version/getVersion",params)
	},
	// 消息中心-同意和不同意（会议以及项目成员邀请）
	notice_setStatus(params){
		return http.post("/api/notice/setStatus",params)
	},
	// 消息中心-获取详情
	notice_getInfo(params){
		return http.post("/api/notice/getInfo",params)
	},
	// 消息中心-获取列表
	notice_getList(params){
		return http.post("/api/notice/getList",params)
	},
	// 消息中心-未读数量
	notice_getCount(params,intercept){
		return http.post("/api/notice/getCount",params,intercept)
	},
	// 消息中心-获取会员全部项目组
	chat_getProject(params){
		return http.post("/api/chat/getProject",params)
	},
	// 消息中心-获取项目组内的出自己的全部成员
	chat_getProjectMember(params){
		return http.post("/api/chat/getProjectMember",params)
	},
	// 消息中心-搜索平台用户
	chat_getUserList(params){
		return http.post("/api/chat/getUserList",params)
	},
	// 消息中心-获取好友申请列表
	chat_getFriendApply(params){
		return http.post("/api/chat/getFriendApply",params)
	},
	// 未登录-消息中心-获取好友申请列表
	notlogin_chat_getFriendApply(params,intercept){
		return http.post("/api/chat/getFriendApply",params,intercept)
	},
	// 消息中心-邀请用户成为朋友
	chat_friendApply(params){
		return http.post("/api/chat/friendApply",params)
	},
	// 消息中心-获取好友列表
	chat_getFriend(params){
		return http.post("/api/chat/getFriend",params)
	},
	// 消息中心-同意好友申请
	chat_setFriend(params){
		return http.post("/api/chat/setFriend",params)
	},
	// 消息中心-创建群聊
	chat_createGroup(params){
		return http.post("/api/chat/createGroup",params)
	},
	// 消息中心-获取群聊列表
	chat_getGroupList(params){
		return http.post("/api/chat/getGroupList",params)
	},
	// 消息中心-获取群组中的会员
	chat_getGroupMember(params){
		return http.post("/api/chat/getGroupMember",params)
	},
	// 消息中心-退出群聊或者解散群聊 （如果退出群聊的为群主，则解散群聊）
	chat_delChatGroupMember(params){
		return http.post("/api/chat/delChatGroupMember",params)
	},
	// 消息中心-退出群聊或者解散群聊 （如果退出群聊的为群主，则解散群聊）
	chat_chatGroupMemberAdd(params){
		return http.post("/api/chat/chatGroupMemberAdd",params)
	},
	// 消息中心-邀请用户进群
	chat_chatGroupMemberInvite(params){
		return http.post("/api/chat/chatGroupMemberInvite",params)
	},
	// 消息中心-修改群聊名称
	chat_setChatGroup(params){
		return http.post("/api/chat/setChatGroup",params)
	},
	// 消息中心-获取已删除的群组
	chat_getChatGroupDel(params){
		return http.post("/api/chat/getChatGroupDel",params)
	},
	// 消息中心-获取群聊申请列表
	chat_getChatGroup(params){
		return http.post("/api/chat/getChatGroup",params)
	},
	// 消息中心-同意群组邀请
	chat_chatGroupMemberSet(params){
		return http.post("/api/chat/chatGroupMemberSet",params)
	},
	// 消息中心-获取未处理数
	notlogin_chat_getCount(params,intercept){
		return http.post("/api/chat/getCount",params,intercept)
	},

}