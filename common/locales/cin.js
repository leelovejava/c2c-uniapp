export default {
	common: {
		mixRecharge: ["請填寫郵箱地址"],
		language: "語言",
		common: ["在線客服", "取消懸浮", "確認", "取消"],
		upload: ["上傳中...", "錯誤格式", "上傳成功", "上傳失敗"],
		vanPull: ["沒有更多數據了", "沒有數據"],
		login: {
			text: ["語言", "BITCOIN", "登錄"],
			label: ["正在登錄...", "立即登錄"],
			placeholder: ["請輸入郵箱", "請輸入登錄密碼"],
			default: ["沒有賬號？", "立即註冊", "忘記密碼?", "忘記登錄密碼"],
			codes: ["賬號不存在", "密碼不正確", "賬號被凍結", "失敗"]
		},
		register: {
			text: ["BITCOIN", "驗證碼發送中...", "點擊獲取", "正在註冊...", "立即註冊"],
			placeholder: ["請輸入郵箱", "請輸入驗證碼", "請輸入登錄密碼", "請確認您的密碼", "請輸入邀請碼", "兩次密碼不一樣", "請輸入驗證碼", "無效郵箱", "密碼不能低於6位"],
			label: ["已有賬號？{a} {line}", "返回登錄"],
			codes: ["賬號已存在", "沒有驗證碼", "驗證碼不正確", "兩次密碼不一致", "推薦人不存在", "失敗"]
		},
		resetpwd: ["忘記密碼", "請輸入郵箱", "請輸入驗證碼", "點擊獲取", "請輸入密碼", "重置密碼"],
		footer: ["首頁", "大廳", "訂單", "我的"],
		home: {
			confirm: "確認",
			label: ["歡迎"],
			broadcast: "恭喜會員{member} 成為{grade}",
			menu: ["資金日誌", "新手教程", "邀請註冊", "聯繫客服"],
			noticeTitle: "最新公告",
			msg: "任務未開放",
			video: "暫無視頻教程",
			hero: {
				title: "簡單便捷的線上兌換方式",
				subtitle: "我們專注於全球資金轉移",
				description: "我們協助企業和個人安全地發送和接收資金，無需支付高額銀行費用。",
				credentials1: "25+年經驗，自2013年在ASX上市",
				credentials2: "受全球50+監管機構監管",
				button: "開始使用 →"
			}
		},
		hall: {
			default: ["交易大廳", "餘額", "我要買", "我要賣", "確認賣出", "訂單列表", "賣出訂單", "賣給商家", "掛單中", "買入", "去出售"],
			list: ["數量", "單價", "未成交", "賣出USDT", "請輸入USDT數量", "獲得金額", "額度", "買入USDT", "耗費金額"],
			kbip: ["撤銷", "超出金額", "必須在金額範圍內"]
		},
		msglist: ["消息列表"],
		sell: {
			placeholder: ["請輸入賣出價格", "請輸入賣出數量"],
			label: ["餘額(USDT)", "姓名", "銀行賬號", "當前價格(USDT)", "賣出最優價格", "賣出價格", "賣出數量", "最優價格", "全部", "確定賣出"]
		},
		buy: {
			placeholder: ["請輸入買入價格", "請輸入買入數量", "最小額度", "最大額度"],
			label: ["餘額(USDT)", "姓名", "銀行賬號", "當前價格(USDT)", "買入最優價格", "買入價格", "買入數量", "最優價格", "全部", "確認買入", "額度"]
		},
		"user": {
			"default": ["個人中心", "登錄賬號", "邀請碼", "退出登錄", "余額", "金幣", "錢包",
				"利息錢包",
				"總收益",
				"充值金額",
				"賣出金額",
				"詳情",
				"請輸入購買金額",
				"取消",
				"確定",
				"購買成功",
				"金額",
				"到期時間",
				"利率",
				"期限",
				"天"
			],
			"menu": ["我的資產", "團隊列表", "賬戶綁定", "賬戶明細", "平台介紹", "退出登錄"]
		},
		"bindAccount": {
			"default": ["綁定賬號", "提交"],
			"fields": ["開戶姓名", "手機號碼", "銀行賬號", "名稱", "類型", "USDT地址"],
			"placeholder": ["請輸入開戶姓名", "請輸入手機號碼", "請輸入銀行賬號", "請輸入開戶行名稱", "請選擇USDT類型", "請輸入USDT地址"]
		},
		"bindAccount2": ["請確認信息填寫無誤，否則將影響正常交易", "立即綁定"],
		"wallet": {
			"default": ["我的資產", "充值", "提現", "充值記錄", "提現記錄", "已充值金額", "已賣出金額", "已獲取收益", "賬號余額", "余額", "充值金額(USDT)",
				"賣出金額",
				"總收益", "升級商家", "升級商家，請聯系客服", "確認入駐商家", "商家認證", "您需支付", "支付憑證", "商家保證金", "立即認證", "信息", "您需支付",
				"余額不足是否充值"
			],
			"label": ["提現方式", "提現金額", "資金密碼", "提交", "手機號", "郵箱", "IFSC", "確定"],
			"placeholder": ["選擇提現方式", "請輸入提現金額", "請輸入資金密碼", "請選擇提現方式", "請輸入收款人手機號", "請輸入收款人郵箱", "請輸入收款人IFSC"],
			"msg": ["你還未設置資金密碼，請先設置", "你還未綁定PIX賬戶，請先綁定", "確定要提現?"]
		},
		"recharge4": ["為了你的資金安全,轉賬成功後，請提交轉賬成功截圖，以便審核!"],
		"recharge": {
			"default": ["錢包充值", "錢包預充值", "充值方式", "充值", "確認"],
			"label": ["類別", "地址", "充值金額", "輸入金額", "上傳憑證", "複製成功", "預充值交易所"],
			"placeholder": ["類型", "地址"],
			"info": ["充值金額", "訂單號", "收款銀行", "收款賬號", "收款人", "複製"]
		},
		"task": {
			"tabs": ["全部", "出售列表", "已失效", "已完成", "等待商家支付", "等待確認"],
			"default": ["訂單列表", "訂單號", "商家賬號", "數量", "價格", "金額", "狀態", "匹配時間", "進行中", "已完成", "已取消", "全部"],
			"msg": ["提交審核", "已提交，請等待審核", "提交失敗，請重新提交"],
		},
		"userInfo": {
			"default": ["個人資訊", "頭像", "賬號", "郵箱", "支付寶", "詳細資訊", "修改密碼", "資金密碼", "點擊設置", "修改頭像", "修改登錄密碼", "修改資金密碼",
				"提交",
				"清空緩存", "查看資訊", "昵稱", "推薦碼", "語言切換"
			],
			"label": ["原登錄密碼", "新登錄密碼", "確認密碼", "原資金密碼", "新資金密碼", "確認密碼", "保存", "修改成功"],
			"placeholder": ["請輸入原登錄密碼", "請輸入新登錄密碼", "請確認登錄密碼", "請輸入原資金密碼", "請輸入新資金密碼", "請確認資金密碼"]
		},
		"fundRecord": {
			"default": ["支出記錄", "充值記錄", "資產日誌", "充", "收", "支"],
			"tabs": ["收入", "支出", "充值"]
		},
		"dialog": ["提示", "確定", "正在提交...", "複製成功", "IOS系統版本低不支持", "正在註冊...", "數據加載中..."],
		"serviceCenter": ["客服中心", "Hi,我是專屬客服~", "很高興為您服務", "自助服務", "在線客服", "充值客服", "Line客服", "升級商家", "升級商家,請聯系客服！",
			"聯系客服"
		],

		"userTaskRecord": ["我的訂單", "賣出訂單", "買入訂單", "當前狀態", "獲得佣金", "已完成"],
		"withdrawlist": ["提現記錄"],
		"withdraw": ["銀行名稱", "IBAN", "賬戶名", "提現金額", "請輸入銀行名稱",
			"請輸入IBAN", "請輸入賬戶名", "請輸入提現金額",
		],
		"teamReport": {
			"default": ["團隊列表", "團隊總人數"]
		},
		"common2": ["新手教程", "聯系客服", "服務條款，查看詳情", "客服1", "客服2"],
		"common3": ["成功", "平台介紹"],
		"invite": ["分享推廣", "我的邀請碼", "複製邀請碼，邀請更多好友加入", "複製", "暫時無法邀請會員"],
		"common4": ["實名認證", "提交成功", "注意事項", "事項內容", "繳納金額", "身份證", "財務證明", "請先去完成賬號綁定", "請先完成實名認證"],
		"common5": ["賣出", "分鐘", "前", "保存二維碼", "打開", "賬號凍結，暫時無法交易", "APP下載"],
		"common6": ["充值訂單", "訂單號", "金額", "時間", "狀態"],
		"hall2": ["最低賣出金額為", "", "賣出次數超出每天限制"],
		"register2": ["郵箱", "手機", "請輸入手機號碼", "邀請碼", "登錄密碼", "驗證碼", "手機號碼", "註冊"],
		"withdraw2": ["提現", "賣家賬號", "賬戶余額", "需支付金額", "立即支付", "還有任務未完成，暫時不能提現", "每天提現次數超出", "備注說明"],
		"mytask2": ["商家賬號", "價格", "金額", "賬號余額", "需付款金額", "匹配時間", "訂單詳情", "數量不能為0", "余額不足", "價格不能為0", "範圍錯誤"],
		"taskOrder2": ["你還有未成交訂單，不能撤銷", "余額不足", "確認", "失敗", "你還需要完成訂單才能提現:"],
		"busAuth2": ["商家升級", "我同意", "確認升級", "升級商家", "需要修改銀行卡信息請聯系客服", "當前賬號需要升級為商家賬號"],
		"recharge2": ["金額不能為0", "必須上傳截圖"],
		"buy3": ["倒計時", "小時", "類型", "福利訂單", "合賣訂單", "限制人數", "不輸入不限制人數", "指定用戶ID", "請輸入指定ID"],
		"hall3": ["天", "小時", "分鐘", "秒", "合賣訂單", "帳號", "已到期"],
		"sell3": ["賣出價格不能大於最優價"],
		"busAuth3": ["會員", "商家", "皇冠商家"],
		"recharge3": ["計算"],
		"home3": ["礦機", "競猜", "盲盒", "理財", "敬請期待"],
		"home4": ["快捷交易", "一鍵購買USDT", "C2C交易", "買賣USDT", "在線用戶", "24H交易總量(USDT)"],
		"common7": ["若未解決你的問題，請聯系在線客服", "聯系客服", "點擊咨詢", "設置", "全部", "邀請好友", "團隊人數", "本月新增", "註冊時間", "下屬人數"],
		"hall4": ["你的身份", "會員", "你的賬戶資訊", "交易成功", "你已成功完成", "總價", "求購", "賣出"],
		"task3": ["全部", "未支付", "已支付"],
		"my": ["你確定要退出賬號?"],

		"bind": [
			'賬戶綁定',
			'國家/地區',
			'銀行名稱',
			'IBAN',
			'賬戶名',
			'名',
			'姓',
			'地址',
			'郵編',
			'城市',
			'省或州',
			'手機號碼',
			'需要修改銀行卡信息請',
			'聯系客服',
			'提交',
			'請輸入',
			'有必填項未填寫',
			'綁定成功'
		],

		"setting": [
			"我的發布記錄",
			"買入訂單",
			"賣出訂單",
		],
		"empty": [
			"暫無數據"
		],
		"index": {
			"title": "DEX:OFX",
			"subtitle": "USDT兌換法定貨幣",
			"intro": "對於許多地區的用戶來說，由於支付渠道有限、銀行限制、當地監管或缺乏合規交易所等原因，無法輕鬆購買USDT（穩定幣）是一個普遍問題。DEX:OFX提供了一種安全、合規且高流動性的方式，幫助用戶將數字資產順利兌換為當地法定貨幣。",
			"suitableUsersTitle": "一、哪些用戶適合？",
			"suitableUsersIntro": "DEX:OFX的法幣兌換機制特別適合以下人群：",
			"suitableUsers": [
				"當地銀行禁止或限制購買加密貨幣。",
				"信用卡/借記卡無法在交易所購買USDT。",
				"當地交易所USDT流動性不足。",
				"想要避免複雜的KYC或高額手續費。",
				"想要快速將數字資產轉換為當地法定貨幣（歐元、加元、美元、新加坡元、瑞士法郎等）。"
			],
			"coreFeaturesTitle": "二、DEX:OFX的核心功能",
			"coreFeatures": [
				{
					"title": "USDT → 法幣兌換",
					"content": "用戶可以將USDT轉賬到DEX:OFX的指定錢包地址，系統會根據實時匯率自動轉換為指定法定貨幣，並通過合作金融網絡完成轉賬。",
					"supportedCurrenciesTitle": "支持的法定貨幣包括（但不限於）：",
					"supportedCurrencies": [
						"美元 USD",
						"港幣 HKD",
						"新加坡元 SGD",
						"新台幣 TWD",
						"歐元 EUR",
						"澳大利亞元 AUD"
					]
				},
				{
					"title": "無需交易所賬戶",
					"content": "無需coinbase-crypto.com等中心化交易所賬戶。降低門檻，特別是針對無法註冊交易所的用戶。"
				},
				{
					"title": "全球跨境收款能力",
					"content": "依托OFX的全球跨境支付網絡，實現快速到賬；",
					"transferTime": [
						"同一國家轉賬：當天或1個工作日",
						"國際匯款：1-3個工作日",
						"（取決於地區銀行）"
					]
				},
				{
					"title": "透明匯率，低手續費",
					"content": "採用實時市場價進行兌換，費用固定透明，避免隱藏手續費。"
				}
			],
			"exchangeProcessTitle": "三、兌換流程示例",
			"exchangeProcessIntro": "以下是一般兌換流程（可根據業務需求調整）：",
			"exchangeProcess": [
				{
					"title": "提交兌換申請",
					"steps": [
						"用戶選擇法定貨幣、金額和收款銀行。",
						"系統生成USDT收款地址（TRC20或ERC20）。",
						"用戶向USDT或其他加密貨幣轉賬。"
					]
				},
				{
					"title": "DEX:OFX執行兌換",
					"steps": ["系統實時將兌換價格轉換為所需法定貨幣。"]
				},
				{
					"title": "法定貨幣到賬",
					"steps": ["通過國際金融網絡或當地銀行系統匯款到用戶賬戶。"]
				}
			],
			"whyCantBuyTitle": "四、為什麼很多人買不到USDT？",
			"whyCantBuyReasons": [
				"銀行不允許\"加密貨幣交易\"類別",
				"信用卡公司阻止加密購買。",
				"當地監管限制",
				"交易所要求高KYC",
				"交易所提款費用高。",
				"當地沒有穩定幣分發渠道。",
				"一些國家沒有合法的加密交易所。"
			],
			"valueProposition": "Dex:OFX的價值在於幫助這些人跨越金融障礙，直接使用法幣。",
			"safetyTitle": "五、安全與監管（重點增加信任）",
			"safetyIntro": "基於OFX系統的理念，強調監管、合規和透明流程。",
			"safetyFeatures": [				"所有資金流動都經過AML和KYC審核。",
				"用戶的收款銀行需要進行驗證。",
				"整個過程可追溯、可審計。"
			],
			"regions": {
				"europe": "歐洲",
				"unitedStates": "美國",
				"canada": "加拿大",
				"singapore": "新加坡",
				"switzerland": "瑞士",
				"unitedKingdom": "英國"
			},
			"infoCards": [
				{
					"title": "易於使用",
					"description": "在線兌換來自150多個國家的貨幣"
				},
				{
					"title": "快速、可靠的轉賬",
					"description": "實時市場利率的即時兌換"
				},
				{
					"title": "值得信賴且安全",
					"description": "獲得授權和監管的P2P機構"
				}
			]
		},
		"navbar": {
			"title": "Dex:OFX",
			"home": "首頁",
			"market": "行情",
			"trade": "交易",
			"wallet": "錢包",
			"profile": "我的",
			"inviteCode": "邀請碼",
			"copy": "複製",
			"creditScore": "信譽分",
			"totalBalance": "總餘額",
			eurBalance: "Euro 餘額",
			"currencyExchange": "貨幣兌換",
			"memberLevel": "會員等級",
			"promotions": "優惠活動",
			"aboutUs": "關於我們",
			"faqs": "常見問題",
			"certification": "資質",
			"recharge": "充值",
			"bankCards": "銀行卡",
			"records": "記錄",
			"withdraw": "出金",
			"contactUs": "聯繫我們",
			"inviteFriends": "邀請好友",
			"logout": "註銷",
			"copySuccess": "複製成功",
			"copyFailed": "複製失敗"
		},
		"exchange": {
			"infoCard": {
				"totalOrders": "總訂單數",
				"totalProfit": "總利潤",
				"totalBalance": "總餘額",
				"processing": "處理中",
				"orders": "訂單",
				"confirmExchange": "確認兌換",
				"records": "記錄",
				selectCurrency: "請選擇貨幣"
			},
			"modal": {
				"steps": [
					"匹配訂單",
					"處理中",
					"已兌換"
				],
				"percentage": "(100%)",
				"exchangedCurrency": "已兌換貨幣",
				"exchangedRate": "兌換匯率",
				"exchangedAmount": "兌換金額",
				"exchangeEarnings": "兌換收益",
				"orderType": "訂單類型",
				"expectedReturn": "預期收益",
				"close": "關閉"
			}
		},
		"order": {
			"recordsTitle": "記錄",
			"tabs": {
				"all": "全部",
				"pending": "待處理",
				"completed": "已完成",
				"limitOrder": "限價訂單"
			},
			"status": {
				"completed": "已完成",
				"pending": "待處理",
				"processing": "處理中"
			},
			"details": {
				"orderId": "訂單號",
				"orderType": "訂單類型",
				"exchangeCurrency": "兌換貨幣",
				"exchangeEarnings": "兌換收益",
				"expectedReturn": "預期回報"
			}
		},
		// 实名认证相关国际化
		"certification": {
			"title": "申請實名認證",
			"subtitle": "請填寫您的真實信息以完成認證",
			"successTitle": "您已完成實名認證",
			"successSubtitle": "無需重複提交認證信息",
			"nameLabel": "真實姓名",
			"emailLabel": "郵箱地址",
			"phoneLabel": "手機號碼",
			"namePlaceholder": "請輸入您的真實姓名",
			"emailPlaceholder": "請輸入您的郵箱地址",
			"phonePlaceholder": "請輸入您的手機號碼",
			"submitButton": "提交認證",
			"statusPending": "審核中",
			"statusSuccess": "審核成功",
			"statusFailed": "審核失敗"
		}
	},
	"faqs": {
		"pageHeader": {
			"title": "規則和條例",
			"description": "平台指南和交易信息"
		},
		"basicRules": {
			"title": "基本規則",
			"rules": [
				"每個賬戶僅使用一個手機號碼註冊。",
				"根據FinCEN法規，每位用戶必須在賬戶中至少擁有$100才能執行訂單。",
				"每個任務組組多包含0-4個限價單，每個限價單內最多包含2次兌換單（即1單兌換2次）. 每組任務僅允許執行1個包含2次兌換的任務。",
				"超過一定存款金額的賬戶將自動升級為SVIP會員。升級會員每輪可完成40個訂單。"
			]
		},
		"platformOperation": {
			"title": "平台運營",
			"rules": [
				"平台每日 10:00 至 23:00 開放。會員只能在這些時間內下單。",
				"如果您的賬戶被第三方濫用，請立即聯繫客服。",
				"提取超過$30000需要事先通知客服。",
				"信用分數每日晚上22:30後更新。信用分數低於95分時無法提現。"
			]
		},
		"orderTypes": {
			"title": "訂單類型",
			"marketOrder": {
				"title": "Market Order",
				"description": "外匯平台用戶接受當前市場最佳可用匯率並立即完成兌換。系統根據會員賬戶的可用餘額自動分配訂單。此訂單類型的佣金為訂單金額的1%。"
			},
			"limitOrder": {
				"title": "Limit Order",
				"description": "外匯平台用戶可以設定目標匯率。一旦市場匯率達到指定值，系統會自動匹配並執行兌換。這些訂單通常超過代理商當前的賬戶餘額，但提供更高的回報潛力。此訂單類型的佣金為訂單金額的5%-60%。"
			}
		},
		"giftPackage": {
			"title": "Gift Package",
			"description": [
				"禮品包是為我們尊貴會員提供的專屬優惠。它包含一個隨機訂單，與限價訂單或我們合作夥伴慷慨提供的現金相關聯。此特別優惠適用於在賬戶中累積一定金額的會員。禮品包每輪僅提供0-4次。",
				"禮品包旨在獎勵我們忠誠的社區並增強您與我們的體驗。達到此門檻不僅可以讓您獲得有吸引力的獎勵，還可以讓您成為享有額外福利的專屬群體的一部分。"
			]
		},
		"deposits": {
			"title": "Deposits",
			"description": [
				"所有存款必須通過平台的在線客服協調。將資金轉入客服指定的賬戶後，請提交付款憑證以確保及時處理。",
				"為避免延誤，請在每次交易前直接在平台上確認您的賬戶詳情，因為這些可能會定期更改。如果您在存款過程中遇到任何問題，請立即聯繫客服。"
			]
		},
		"withdrawals": {
			"title": "Withdrawals",
			"description": [
				"會員只能在完成所有指定的日常任務後申請提現。在滿足平台提現條件的情況下，可以提取在平台上賺取的資金。在申請提現之前，請確保您的平台賬戶包含有效的錢包地址。",
				"注意:每日10:00 至 23:00 可進行提現。"
			]
		}
	},
	"vip": {
		"title": "會員等級",
		"current": "當前",
		"deposit": "存款",
		"bonus": "獎金",
		"commissionRate": "佣金率",
		dailyOrders: "每週訂單",
		"description": "VIP 等級聲明：\n" +
			"出售 USDT 賺取價差，本質上屬於流動性提供行為。\n" +
			"VIP 等級限制交易次數，是為了防止普通帳戶佔用專業做市商的交易空間，同時降低平台風控風險。\n" +
			"反洗錢（AML）與監管壓力！（最核心原因）\n" +
			"因此平台會使用：\n" +
			"VIP 等級\n" +
			"成交次數\n" +
			"交易金額門檻\n" +
			"來篩選用戶：\n" +
			"普通用戶僅偶爾兌換資金。\n" +
			"高頻出售 USDT 被視為專業換匯或流動性提供行為。\n" +
			"VIP＝風控可控對象（平台更為放心）\n" +
			"VIP 用戶通常具備：\n" +
			"較高資金量\n" +
			"更完整的 KYC\n" +
			"較長的交易歷史\n" +
			"\n" +
			"平台的邏輯是：\n" +
			"限制 USDT 出售次數，是因為該行為已屬高頻換匯與流動性行為，需要更高等級以滿足監管與風控要求。\n" +
			"並非平台刁難，而是更具市場導向的監管合規設計。\n" +
			"\n" +
			"溫馨提示：\n" +
			"USDT 價差可以盈利，但屬於「準金融行為」。VIP 等級限制不是門檻，而是平台在告訴你：\n" +
			"「你已經不是普通用戶了」。"
	},
	"deposit": {
		"withdrawal": "出金",
		"history": "歷史記錄",
		"totalBalance": "總餘額",
		"processingTime": "提款處理需要15-20分鐘。",
		"walletAddressType": "錢包地址類型",
		"trc20Address": "trc20地址",
		"erc20Address": "ERC20地址",
		"btcAddress": "BTC Address",
		"addressNotSet": "地址未設置",
		"bindAddress": "綁定地址",
		"verifyWalletAddress": "請仔細核實您的錢包地址。",
		"enterWithdrawalAmount": "輸入提現金額",
		"all": "全部",
		"enterWithdrawalPassword": "輸入提款密碼",
		"submit": "提交",
		withdrawalFailed: "提款失敗，請稍後再試",
	},
	"about": {
		"title": "關於我們",
		"companyDescription": "OFX成立於2001年，是一家專注於全球資本轉移和外匯服務的跨國金融科技公司。公司源於一個清晰的概念：為全球客戶提供更好、更公平、更高效的跨境資本解決方案。自成立以來，OFX已為超過100萬客戶提供了服務，支持50多種貨幣，覆蓋170多個國家和市場，累計處理資金超過1.48萬億美元。",
		"globalNetworkTitle": "全球網絡佈局",
		"globalNetworkDesc": "公司在倫敦、都柏林、悉尼、奧克蘭、香港、新加坡、多倫多和舊金山設有辦事處，全球員工超過700人，擁有堅實的運營網絡和本地化服務能力。",
		"regulatoryAdvantageTitle": "強大的監管優勢",
		"regulatoryAdvantageDesc": "公司受到全球50多個監管機構的監督，遵循嚴格的財務審計和合規標準。自上市以來，沒有任何監管處罰或執法行動，風險管理能力健全。",
		"corporateGovernanceTitle": "公司治理與管理",
		"corporateGovernanceDesc1": "董事會由在銀行、金融和技術領域擁有豐富經驗的商業領袖組成，確保健全的公司治理結構。",
		"corporateGovernanceDesc2": "管理團隊由來自主要國際銀行、支付服務提供商和技術公司的高級管理人員組成，由首席執行官Skander Malcolm領導，持續推進OFX的戰略擴張和數字創新。",
		"listingStatusTitle": "上市地位與行業屬性",
		"listingStatusDesc": "OFX於2013年在澳洲證券交易所(ASX)上市(股票代碼：OFX)，被歸類為\"多元化金融\"。公司憑藉穩定的合規框架、國際化佈局和可持續的盈利模式，在跨境金融科技行業中保持著強大的競爭力。",
		"aboutDexOfxTitle": "關於\"DEX:OFX\"",
		"aboutDexOfxDesc1": "自2023年3月10日起，一些金融信息平台顯示了\"DEX:OFX\"標籤。",
		"aboutDexOfxDesc2": "必須澄清的是：",
		"aboutDexOfxDesc3": "\"Dex: OFX\"並非實際交易代碼。它是某些數據平台上系統更新期間自動生成的跨市場映射標識符。",
		"aboutDexOfxDesc4": "該標識符作為內部系統測試的一部分生成，用於驗證平台在不同市場中正確關聯公司信息的能力。因此，該標籤僅用於數據索引和測試目的，並不意味著OFX在DEX或其他任何交易所上市。",
		"aboutDexOfxDesc5": "OFX唯一有效的官方上市是：澳洲證券交易所(ASX) 股票代碼：OFX",
		"aboutDexOfxDesc6": "所有其他標識符（包括\"DEX:OFX\"）都是系統生成的映射條目，不用於實際交易，僅為用戶提供更好的服務。",
		"headquartersTitle": "OFX集團總部地址",
		"headquartersDesc": "澳洲新南威爾士州悉尼瑪格麗特街60號19層，郵編2000"
	},
	
	bindTrc20: {
		formTitle: "充值信息",
		moneyLabel: "充值金額",
		moneyPlaceholder: "請輸入充值金額",
		addressLabel: "充值地址",
		addressPlaceholder: "請輸入充值地址",
		hashLabel: "充值hash",
		hashPlaceholder: "請輸入充值hash",
		submitButton: "提交充值",
		successMessage: "充值提交成功",
		failMessage: "提交失敗",
		networkErrorMessage: "網絡錯誤"
	},
		
	bankCardList: {
		formTitle: "銀行信息",
		accountNameLabel: "賬戶名稱",
		accountNamePlaceholder: "請輸入賬戶名稱",
		accountNumberLabel: "賬號",
		accountNumberPlaceholder: "請輸入賬號",
		bankNameLabel: "銀行名稱",
		bankNamePlaceholder: "請輸入銀行名稱",
		countryLabel: "國家",
		countryPlaceholder: "請選擇國家",
		routingNumberLabel: "路由號碼",
		routingNumberPlaceholder: "請輸入路由號碼",
		swiftCodeLabel: "SWIFT代碼",
		swiftCodePlaceholder: "請輸入SWIFT代碼",
		bankAddressLabel: "銀行地址",
		bankAddressPlaceholder: "請輸入銀行地址",
		submitButtonText: "保存信息",
		bindSuccess: "綁定成功",
		updateSuccess: "修改成功"
	},
	"support": {
		"title": "聯繫我們",
		"serviceTime": "客服時間：每日上午10:00 – 晚上11:00",
		"buttonText": "OFX 支援團隊"
	},
	withdrawalStatus: {
		pending: "待審核",
		success: "已打款",
		rejected: "已拒絕",
		processing: "打款中"
	}
}