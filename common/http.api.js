// 此处第二个参数vm，就是我们在页面使用的this
const install = (Vue, vm) => {
	// 此处没有使用传入的params参数
	const common = {
		
	}
	
	const setting = {
		// 绑定账户
		bindAccount: (token,data) => vm.$u.post("/user/bind_bank", {token, ...data}),
		
		// 查询是否绑定
		isBind: (token) => vm.$u.post("/user/is_banks", {token}),
		
		// 获取利息钱包
		getfina: (token) => vm.$u.post("/user/getfina", {token}),
		
		// 提交利息钱包
		setfina: (token, data) => vm.$u.post("/user/setfina", {token, ...data}),
		
		// 我的利息钱包列表
		addRecharge: (token) => vm.$u.post("/user/add_recharge", {token}),
//绑定
		getfinas: (token) => vm.$u.post("/user/getfinas", {token}),

		bind_bank2: (token,data) => vm.$u.post("/user/bind_bank", {token, ...data}),
		update_bank: (token,data) => vm.$u.post("/user/update_bank", {token, ...data}),


		walletinfo: (token) => vm.$u.post("/wallet/info", {token}),
		walletadd: (token,data) => vm.$u.post("/wallet/add", {token, ...data}),

		walletedit: (token) => vm.$u.post("/wallet/edit", {token}),
		exchangeinfo: (token) => vm.$u.post("/exchange/info", {token}),
		exchangeswap: (token) => vm.$u.post("/exchange/swap", {token}),
		exchanglist: (token,data) => vm.$u.post("/exchange/list", {token,...data}),
		//忘记密码
		change_pwd: (token, {ol_password, password}) => vm.$u.post("/user/change_pwd", {token, ol_password, password}),
		
	}
	
	const index = {
		//登陆
		login: (account,invitation_code) => vm.$u.post("/user/login", {account,invitation_code}),
		//注册
		register: (username,password,invitation_code,code) => vm.$u.post("/user/register", {username,password,invitation_code,code}),
		//发验证码
		send_email_mobile: (username) => vm.$u.post("/user/send_email_mobile", {username}),
		announcement_latest: (token) => vm.$u.get("/index/announcement_latest", {token}),
		//获取轮播图
		get_about: () => vm.$u.get("/index/get_about"),
		//获取下载地址
		downurl: () => vm.$u.get("/index/downurl"),
		//获取售价比例
		shoujia: () => vm.$u.get("/index/shoujia"),
		//获取客服连接
		getkf: () => vm.$u.get("/index/getkf"),
		//获取公告
		get_placard: () => vm.$u.get("/index/get_placard"),
		//获取公告 - new
		get_noc: () => vm.$u.get("/index/noc"),
		//获取弹窗公告
		pla_detail: (token, id) => vm.$u.post("/index/pla_detail", {token, id}),
		//新手教程
		get_Information: () => vm.$u.get("/product/get_announcement"),
		// 新手教程详情
		infDetails : (id) => vm.$u.get("/product/inf_details", {id}),
		//邀请
		obtain_share: (token) => vm.$u.get("/user/obtain_share",{token}),
		//我的团队
		team_list: (token) => vm.$u.get("/user/team_list",{token}),
		//获取个人信息
		getUserinfo: (token) => vm.$u.get("/user/getUserinfo",{token}),
		//修改个人信息
		up_userinfo: (token,nickname) => vm.$u.get("/user/up_userinfo",{token,nickname}),
		//实名认证提交
		bind_real: (token,data) => vm.$u.get("/user/bind_real",{token,...data}),
		//实名认证状态
		is_verified: (token) => vm.$u.get("/user/is_verified",{token}),
		
		//绑定银行卡
		bind_bank: (token,name,card_no,mobile,bank_name,guojia,zhou,citys,xingshi,mingzi,dizhis,youbian) => vm.$u.get("/user/bind_bank",{token,name,card_no,mobile,bank_name,guojia,zhou,citys,xingshi,mingzi,dizhis,youbian}),
		//更新银行卡
		updete_bank: (token,name,card_no,mobile,bank_name,bankid,guojia,zhou,citys,xingshi,mingzi,dizhis,youbian) => vm.$u.get("/user/updete_bank",{token,name,card_no,mobile,bank_name,bankid,guojia,zhou,citys,xingshi,mingzi,dizhis,youbian}),
		
		//获取银行卡列表
		bank_list: (token) => vm.$u.get("/user/bank_list",{token}),
		// 提交充值凭证
		add_Recharge: (token,data) => vm.$u.get("/user/add_Recharge",{token,...data}),
		// 申请提现
		apply_withdrawal: (token,data) => vm.$u.post("/user/apply_withdrawal",{token, ...data}),
		// 充值记录
		recharge_list: (token) => vm.$u.post("/user/recharge_list",{token}),
		// 提现记录
		withdraw_list: (token, data) => vm.$u.post("/user/withdraw_list",{token, ...data}),
		// 机器人
		robot: (token) => vm.$u.post("/user/robot",{token}),
		// 我要买
		tobuy: (token,nowcoin,buynum,daojishi,xtype,zuid,mine,maxe) => vm.$u.post("/user/tobuy",{token,nowcoin,buynum,daojishi,xtype,zuid,mine,maxe}),
		// 交易大厅
		dating: (token,xtype) => vm.$u.post("/user/dating",{token,xtype}),
		// 交易大厅
		datings: (token) => vm.$u.post("/user/datings",{token}),
		// 交易大厅
		mSell: (token, data) => vm.$u.post("/user/m_sell",{token, ...data}),
		// 商家升级
		upshang: (token,images) => vm.$u.post("/user/upshang",{token,images}),
		// 数据修改
		upUserinfo: (token, data) => vm.$u.post("/user/up_userinfo",{token, ...data}),
		// 是否是商家
		isups: (token) => vm.$u.post("/user/isups",{token}),
		// 我要卖
		tosell: (token,maijia,mainum) => vm.$u.post("/user/tosell",{token,maijia,mainum}),
		// otc出售
		isotcsell: (token) => vm.$u.post("/user/isotcsell",{token}),
		// otc出售
		otcsell: (token,orderid,mainum,danjia) => vm.$u.post("/user/otcsell",{token,orderid,mainum,danjia}),
		// 订单
		getsell: (token) => vm.$u.post("/user/getsell",{token}),
		// 订单
		getdtrecod: (token, data) => vm.$u.post("/user/getdtrecod",{token, ...data}),
		// 各链地址
		cointype: (token) => vm.$u.post("/user/cointype",{token}),
		// 富文本详情
		Information_detail: (id) => vm.$u.post("/index/Information_detail",{id}),
		// 平台介绍
		jieshao_detail: () => vm.$u.post("/index/jieshao_detail"),
		// 获取理财
		getfina: (token) => vm.$u.post("/user/getfina",{token}),
		// 购买理财
		setfina: (token,fid,moneys,days) => vm.$u.post("/user/setfina",{token,fid,moneys,days}),
		// 理财列表
		getfinas: (token) => vm.$u.post("/user/getfinas",{token}),
		// 额度转换
		utovnd: (token,money,moneys,type) => vm.$u.post("/user/utovnd",{token,money,moneys,type}),
		// 首页列表
		coinIncrease: (token) => vm.$u.get("/index/get_coin_increase",{token}),
		// 我的资产
		revenueExpenditure: (token, data) => vm.$u.get("/user/revenue_expenditure",{token, ...data}),
		//获取商家咨询 弹窗公告
		shang_ann: (token) => vm.$u.post("/user/shang", {token}),
		
		// 买入、卖出订单
		getorders: (token, data) => vm.$u.post("/user/getorders", {token, ...data}),
		articleget: (token, data) => vm.$u.post("/article/get", {token, ...data}),
	}
	
	vm.$u.api = {
		common,
		setting,
		index
	};
}
export default {
	install
}
