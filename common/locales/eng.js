export default {
	common: {
		back: "Back",
		market: "Trading Market",
		mixRecharge: ["Please fill in the email address"],
		language: "Language",
		common: ["Online Customer Service", "Cancel Floating", "Confirm", "Cancel"],
		upload: ["Uploading...", "Wrong format", "Upload success", "Upload failed"],
		vanPull: ["No more data", "No data"],
		login: {
		text: ["Language", "BITCOIN", "Log in"],
		label: ["Logging in...", "Log in now"],
		placeholder: ["Please enter your email", "Please enter your login password"],
		default: ["Don't have an account?", "Register now", "Forget password?", "Forget login password"],
		codes: ["Account does not exist", "Incorrect password", "Account is frozen", "Failed"]
		},
		register: {
		text: ["BITCOIN", "Verifying code sending...", "Click to get", "Registering...", "Register now"],
		placeholder: ["Please enter your email", "Please enter the verification code", "Please enter your login password", "Please confirm your password", "Please enter the invitation code", "The passwords do not match", "Please enter the verification code", "Invalid email", "Password should not be less than 6 characters"],
		label: ["Already have an account? {a} {line}", "Return to Login"],
		codes: ["Account already exists", "Verification code does not exist", "Incorrect verification code", "Passwords do not match", "Referrer does not exist", "Failed"]
		},
		resetpwd: ["Forget password", "Please enter your email", "Please enter the verification code", "Click to get", "Please enter your password", "Reset password"],
		footer: ["Home", "Hall", "Order", "Mine"],
		home: {
			confirm: "Confirm",
			label: ["Welcome"],
			broadcast: "Congratulations to member {member} for becoming {grade}",
			menu: ["Capital Log", "Beginner's Tutorial", "Invite Registration", "Contact Customer Service"],
			noticeTitle: "Latest Announcement",
			msg: "Task not available",
			video: "No video tutorial available",
			hero: {
				title: "The Easy Way to Exchange Online",
				subtitle: "Moving money globally is what we do",
				description: "We help businesses and individuals to securely send and receive money, without the excessive bank fees.",
				credentials1: "25+ years' experience, ASX listed since 2013",
				credentials2: "Regulated by 50+ regulators globally",
				button: "GET START →"
			}
		},
		hall: {
		default: ["Trading Hall", "Balance", "Buy", "Sell", "Confirm to sell", "Order List", "Sell Orders", "Sell to Merchant", "Pending Orders", "Buy", "Sell"],
		list: ["Quantity", "Price", "Unfilled", "Sell USDT", "Please enter USDT quantity", "Amount Obtained", "Quota", "Buy USDT", "Amount Spent"],
		kbip: ["Cancel", "Exceeding the amount", "Must be within the amount range"]
		},
		msglist: ["Message List"],
		sell: {
		placeholder: ["Please enter sell price", "Please enter sell quantity"],
		label: ["Balance (USDT)", "Name", "Bank Account", "Current Price (USDT)", "Best Sell Price", "Sell Price", "Sell Quantity", "Best Price", "All", "Confirm to Sell"]
		},
		buy: {
		placeholder: ["Please enter buy price", "Please enter buy quantity", "Minimum Limit", "Maximum Limit"],
		label: ["Balance (USDT)", "Name", "Bank Account", "Current Price (USDT)", "Best Buy Price", "Buy Price", "Buy Quantity", "Best Price", "All", "Confirm to Buy", "Limit"]
		},
		user: {
		default: ["Personal Center", "Login Account", "Invitation Code", "Logout", "Balance", "Gold", "Wallet",
		"Interest Wallet",
		"Total Earnings",
		"Recharge Amount",
		"Sell Amount",
		"Details",
		"Please enter purchase amount",
		"Cancel",
		"Confirm",
		"Purchase Success",
		"Amount",
		"Expiration Time",
		"Interest Rate",
		"Term",
		"Days"
		],
		menu: ["My Assets", "Team List", "Account Binding", "Account Details", "Platform Introduction", "Logout"]
		},
		bindAccount: {
		default: ["Bind Account", "Submit"],
		fields: ["Account Holder Name", "Phone Number", "Bank Account", "Name", "Type", "USDT Address"],
		placeholder: ["Please enter account holder name", "Please enter phone number", "Please enter bank account", "Please enter bank name", "Please select USDT type", "Please enter USDT address"]
		},
		bindAccount2: ["Please confirm that the information is correct, otherwise it will affect normal trading", "Bind Now"],
		wallet: {
		default: ["My Assets", "Recharge", "Withdrawal", "Recharge Record", "Withdrawal Record", "Recharged Amount", "Sold Amount", "Earnings Gained", "Account Balance", "Balance", "Recharge Amount (USDT)", "Sold Amount",
		"Total Earnings", "Upgrade to Merchant", "Upgrade to Merchant, please contact customer service", "Confirm to Join", "Merchant Certification", "You need to pay", "Payment Voucher", "Merchant Deposit", "Join Now", "Information", "You need to pay",
		"Insufficient balance, do you want to recharge"
		],
		label: ["Withdrawal Method", "Withdrawal Amount", "Fund Password", "Submit", "Phone Number", "Email", "IFSC", "Confirm"],
		placeholder: ["Select withdrawal method", "Please enter withdrawal amount", "Please enter fund password", "Please select withdrawal method", "Please enter payee's phone number", "Please enter payee's email", "Please enter payee's IFSC"],
		msg: ["You have not set the fund password yet, please set it first", "You have not bound the PIX account yet, please bind it first", "Are you sure you want to withdraw?"]
		},
		recharge4: ["For the security of your funds, please submit the screenshot of successful transfer after the transfer is completed for audit!"],
		recharge: {
		default: ["Wallet Recharge", "Pre-recharge to Wallet", "Recharge Method", "Recharge", "Confirm"],
		label: ["Category", "Address", "Recharge Amount", "Enter Amount", "Upload Voucher", "Copy successful", "Pre-recharge to Exchange"],
		placeholder: ["Type", "Address"],
		info: ["Recharge Amount", "Order Number", "Beneficiary Bank", "Beneficiary Account", "Beneficiary", "Copy"]
		},
		task: {
		tabs: ["All", "Sell List", "Invalid", "Completed", "Awaiting Merchant Payment", "Awaiting Confirmation"],
		default: ["Order List", "Order Number", "Merchant Account","Quantity","Price","Amount","Status","Matching Time", "In Progress", "Completed", "Cancelled", "All"],
		msg: ["Submit for Review", "Submitted, please wait for review", "Submission failed, please submit again"],
		},
		userInfo: {
		default: ["Personal Information", "Avatar", "Account", "Email", "Alipay", "Detailed Information", "Change Password", "Fund Password", "Click to Set", "Change Avatar", "Change Login Password", "Change Fund Password", "Submit",
		"Clear Cache", "View Information", "Nickname", "Referral Code", "Switch Language"
		],
		label: ["Current Login Password", "New Login Password", "Confirm Password", "Current Fund Password", "New Fund Password", "Confirm Password", "Save", "Change Successful"],
		placeholder: ["Please enter current login password", "Please enter new login password", "Please confirm login password", "Please enter current fund password", "Please enter new fund password", "Please confirm fund password"]
		},
		fundRecord: {
		default: ["Expense Record", "Recharge Record", "Asset Log", "Recharge", "Income", "Expense"],
		tabs: ["Income", "Expense", "Recharge"]
		},
		dialog: ["Reminder", "Confirm", "Submitting...", "Copy Successful", "Low IOS system version does not support", "Registering...", "Data loading..."],
		serviceCenter: ["Service Center", "Hi, I'm the dedicated customer service~", "I'm glad to serve you", "Self-Service", "Online Customer Service", "Recharge Customer Service", "Line Customer Service", "Upgrade to Merchant", "Please contact customer service to upgrade to merchant!", "Contact Customer Service"],
		
		userTaskRecord: ["My Orders", "Sell Orders", "Buy Orders", "Current Status", "Commission Earned", "Completed"],
		withdrawlist: ["Withdrawal Record"],
		withdraw: ["Bank Name", "IBAN", "Account Name", "Withdrawal Amount", "Please enter bank name", 
		"Please enter IBAN","Please enter account name","Please enter withdrawal amount",
		],
		teamReport: {
		default: ["Team List", "Total Team Members"]
		},
		common2: ["Beginner's Tutorial", "Contact Customer Service", "Terms of Service, View Details", "Customer Service 1", "Customer Service 2"],
		common3: ["Success", "Platform Introduction"],
		invite: {
			share: "Share and Promote",
			myInviteCode: "My Invitation Code",
			copyInviteText: "Copy Invitation Code to Invite More Friends",
			copy: "Copy",
			unableToInvite: "Unable to invite members at the moment",
			inviteCodeLabel: "Invitation Code:",
			copyInviteLink: "Click to copy invitation link"
		},
		common4: ["Real Name Authentication", "Submitted Successfully", "Attention", "Item Content", "Amount to Pay", "ID Card", "Financial Proof", "Please complete account binding first", "Please complete real name authentication first"],
		common5: ["Sell", "minutes", "ago", "Save QR Code", "Open", "Account frozen, unable to trade temporarily", "APP download"],
		common6: ["Recharge Orders", "Order Number", "Amount", "Time", "Status"],
		hall2: ["Minimum selling amount is", "", "Exceeded daily limit of sell times"],
		register2: ["Email", "Phone", "Please enter phone number", "Invite Code", "Login Password", "Verification Code", "Phone Number", "Register"],
		withdraw2: ["Withdraw", "Seller Account", "Account Balance", "Amount to Pay", "Pay Now", "Unable to withdraw due to incomplete tasks", "Exceeded daily withdrawal times", "Remarks"],
		mytask2: ["Merchant Account", "Price", "Amount", "Account Balance", "Amount to Pay", "Matching Time", "Order Details", "Quantity cannot be 0", "Insufficient balance", "Price cannot be 0", "Range error"],
		taskOrder2: ["You have unfilled orders, cannot cancel", "Insufficient balance", "Confirm", "Failed", "You still need to complete orders before you can withdraw:"],
		busAuth2: ["Upgrade to Merchant", "I agree", "Confirm Upgrade", "Upgrade to Merchant", "Please contact customer service to modify bank card information", "Current account needs to be upgraded to a Merchant account"],
		recharge2: ["Amount cannot be 0", "Must upload screenshot"],
		buy3: ["Countdown", "hours", "Type", "Welfare Order", "Group Buy Order", "Number Restriction", "Leave blank for no restriction", "Specified User ID", "Please enter specified ID"],
		hall3: ["Days", "hours", "minutes", "seconds", "Group Buy Orders", "Account", "Expired"],
		sell3: ["Sell price cannot be greater than the best price"],
		busAuth3: ["Member", "Merchant", "Crown Merchant"],
		recharge3: ["Calculate"],
		home3: ["Miner", "Guessing", "Blind Box", "Wealth Management", "Coming Soon"],
		home4: ["Quick Trading", "One-click buy USDT", "C2C Trading", "Buy and Sell USDT", "Online Users", "24H Trading Volume (USDT)"],
		common7: ["If your problem is not resolved, please contact online customer service", "Contact Customer Service", "Click to Consult", "Settings", "All", "Invite Friends", "Team Size", "New Additions This Month", "Registration Date", "Subordinate Number"],
		hall4: ["Your Identity", "Member", "Your Account Information", "Successful Transaction", "You have successfully completed", "Total Price", "Buy", "Sell"],
		task3: ["All", "Unpaid", "Paid"],
		my: ["Are you sure you want to log out?"],
		
		bind: [
		'Account Binding',
		'Country/Region',
		'Bank Name',
		'IBAN',
		'Account Name',
		'First Name',
		'Last Name',
		'Address',
		'Postal Code',
		'City',
		'State/Province',
		'Phone Number',
		'Please contact customer service for bank card information modification',
		'Submit',
		'Please enter',
		'Some required fields are not filled',
		'Binding Successful'
		],
		
		setting: [
		"My Publication Records",
		"Buy Orders",
		"Sell Orders",
		],
		empty: [
			"No Data"
		],
		index: {
			title: "DEX:OFX",
			subtitle: "USDT is converted into legal tender",
			intro: "For users in many areas, it is a common problem that they can't easily buy USDT (stable currency) due to limited payment channels, bank restrictions, local supervision, or lack of compliance exchanges. DEX:OFX provides a safe, compliant and highly liquid way to help users smoothly convert digital assets into local legal tender.",
			suitableUsersTitle: "First, which users are suitable?",
			suitableUsersIntro: "DEX:OFX's legal currency exchange mechanism is especially suitable for the following groups:",
			suitableUsers: [
				"Local banks prohibit or restrict the purchase of cryptocurrencies.",
				"Credit/debit cards cannot purchase USDT on the exchange.",
				"The local exchange lacks USDT liquidity.",
				"Want to avoid complicated KYC or high formalities.",
				"Want to quickly convert digital assets into local legal tender (EUR, CAD ,USD ,SGD, CHF, etc.)."
			],
			coreFeaturesTitle: "Second, DEX: the core function of OFX",
			coreFeatures: [
				{
					title: "USDT → French currency exchange",
					content: "Users can transfer USDT to the designated wallet address of DEX:OFX, and the system will automatically convert it into designated legal tender according to the real-time exchange rate, and complete the transfer through the cooperative financial network.",
					supportedCurrenciesTitle: "Supported legal currencies include (but are not limited to):",
					supportedCurrencies: [
						"US Dollar USD",
						"Hong Kong Dollar HKD",
						"Singapore Dollar SGD",
						"New Taiwan Dollar TWD",
						"Euro EUR",
						"Australian Dollar AUD"
					]
				},
				{
					title: "No exchange account required",
					content: "No centralized exchange accounts such as coinbase-crypto.com are required. Lower the threshold, especially for users who cannot register for exchanges."
				},
				{
					title: "Global cross-border collection capability",
					content: "Relying on OFX's global cross-border payment network to achieve fast arrival;",
					transferTime: [
						"Transfer in the same country: the same day or 1 working day",
						"International remittance: 1-3 working days",
						"(depending on regional banks)"
					]
				},
				{
					title: "Transparent exchange rate, low handling fee",
					content: "Adopt real-time market price for exchange, fixed and transparent fees, and avoid hidden handling fees."
				}
			],
			exchangeProcessTitle: "Third, exchange process example",
			exchangeProcessIntro: "The following is a general exchange process (adjustable according to business needs):",
			exchangeProcess: [
				{
					title: "Submit exchange application",
					steps: [
						"Users select legal currency, amount and receiving bank.",
						"The system generates a USDT collection address (TRC20 or ERC20).",
						"Users transfer to USDT or other cryptocurrencies."
					]
				},
				{
					title: "DEX:OFX executes exchange",
					steps: ["The system converts the exchange price into the required legal tender in real time."]
				},
				{
					title: "Legal tender arrives",
					steps: ["Transfer to the user's account through the international financial network or local bank system."]
				}
			],
			whyCantBuyTitle: "Fourth, why can't many people buy USDT?",
			whyCantBuyReasons: [
				"Banks do not allow cryptocurrency transaction categories",
				"Credit card companies block crypto purchases.",
				"Local regulatory restrictions",
				"Exchanges require high KYC",
				"High withdrawal fees for exchanges.",
				"There is no stablecoin distribution channel locally.",
				"Some countries do not have legal crypto exchanges."
			],
			valueProposition: "The value of Dex:OFX lies in helping these people overcome financial barriers and use fiat money directly.",
		safetyTitle: "Five, Security and Regulation (Focus on Increasing Trust)",
		safetyIntro: "Based on the concept of the OFX system, emphasizing regulation, compliance and transparent processes.",
		safetyFeatures: [
			"All capital flows are subject to AML and KYC audits.",
			"The user's receiving bank needs to be verified.",
			"The entire process is traceable and auditable."
		],
		regions: {
			europe: "Europe",
			unitedStates: "United States",
			canada: "Canada",
			singapore: "Singapore",
			switzerland: "Switzerland",
			unitedKingdom: "United Kingdom"
		},
		infoCards: [
			{
				title: "Easy to use",
				description: "Online exchange of currencies from more than 150 countries"
			},
			{
				title: "Fast and reliable transfers",
				description: "Instant exchange at real-time market rates"
			},
			{
				title: "Trustworthy and secure",
				description: "Authorized and regulated P2P institutions"
			}
		]
	},
	exchange: {
		infoCard: {
			totalOrders: "Total Orders",
			totalProfit: "Total Profit",
			totalBalance: "Total Balance",
			processing: "Processing",
			orders: "Orders",
			confirmExchange: "Confirm Exchange",
			records: "Records",
			selectCurrency: "Select Currency"
		},
		modal: {
			steps: [
				"Match Orders",
				"Processing",
				"Exchanged"
			],
			percentage: "(100%)",
			exchangedCurrency: "Exchanged Currency",
			exchangedRate: "Exchange Rate",
			exchangedAmount: "Exchange Amount",
			exchangeEarnings: "Exchange Earnings",
			orderType: "Order Type",
			expectedReturn: "Expected Return",
			close: "Close"
		}
	},
	order: {
		recordsTitle: "Records",
		tabs: {
			all: "All",
			pending: "Pending",
			completed: "Completed",
			limitOrder: "Limit Order"
		},
		status: {
			completed: "Completed",
			pending: "Pending",
			processing: "Processing"
		},
		details: {
			orderId: "Order ID",
			orderType: "Order Type",
			exchangeCurrency: "Exchange Currency",
			exchangeEarnings: "Exchange Earnings",
			expectedReturn: "Expected Return"
		}
	},
	navbar: {
		inviteCode: "Invite Code",
		copy: "Copy",
		creditScore: "Credit Score",
		totalBalance: "Total Balance",
		currencyExchange: "Currency Exchange",
		memberLevel: "Member Level",
		promotions: "Promotions",
		aboutUs: "About Us",
		faqs: "FAQs",
		certification: "Certification",
		recharge: "Recharge",
		bankCards: "Bank Cards",
		records: "Records",
		withdraw: "Withdraw",
		contactUs: "Contact Us",
		inviteFriends: "Invite Friends",
		logout: "Logout",
		copySuccess: "Copy Successful",
		copyFailed: "Copy Failed"
	},
	support: {
		title: "Contact Us",
		serviceTime: "Service Hours: 10:00 AM - 11:00 PM Daily",
		buttonText: "OFX Support Team"
	}
	},
	faqs: {
		pageHeader: {
			title: "Rules and Regulations",
			description: "Platform Guide and Trading Information"
		},
		basicRules: {
			title: "Basic Rules",
			rules: [
				"Each account can only be registered with one mobile phone number.",
				"According to FinCEN regulations, each user must have at least $100 in their account to execute orders.",
				"Each task group contains up to 0-4 limit orders, and each limit order can contain up to 2 exchange orders (i.e. 1 order exchanged 2 times). Only 1 task containing 2 exchanges is allowed to be executed per group.",
				"Accounts that exceed a certain deposit amount will be automatically upgraded to SVIP members. Upgraded members can complete 40 orders per round."
			]
		},
		platformOperation: {
			title: "Platform Operations",
			rules: [
				"The platform is open daily from 10:00 to 23:00. Members can only place orders during these hours.",
				"If your account is abused by a third party, please contact customer service immediately.",
				"Withdrawals exceeding $30000 require prior notification to customer service.",
				"Credit scores are updated after 22:30 every evening. Withdrawals cannot be made when credit score is below 95."
			]
		},
		orderTypes: {
			title: "Order Types",
			marketOrder: {
				title: "Market Order",
				description: "Foreign exchange platform users accept the current market's best available exchange rate and complete the exchange immediately. The system automatically allocates orders based on the available balance of the member's account. The commission for this order type is 1% of the order amount."
			},
			limitOrder: {
				title: "Limit Order",
				description: "Foreign exchange platform users can set target exchange rates. Once the market exchange rate reaches the specified value, the system will automatically match and execute the exchange. These orders usually exceed the agent's current account balance, but offer higher return potential. The commission for this order type is 5%-60% of the order amount."
			}
		},
		giftPackage: {
			title: "Gift Package",
			description: [
				"Gift packages are exclusive offers for our valued members. They contain a random order associated with limit orders or cash generously provided by our partners. This special offer applies to members who have accumulated a certain amount in their account. Gift packages are only offered 0-4 times per round.",
				"Gift packages are designed to reward our loyal community and enhance your experience with us. Reaching this threshold not only allows you to receive attractive rewards, but also enables you to become part of an exclusive group with additional benefits."
			]
		},
		deposits: {
			title: "Deposits",
			description: [
				"All deposits must be coordinated through the platform's online customer service. After transferring funds to the account designated by customer service, please submit payment vouchers to ensure timely processing.",
				"To avoid delays, please confirm your account details directly on the platform before each transaction, as these may change periodically. If you encounter any problems during the deposit process, please contact customer service immediately."
			]
		},
		withdrawals: {
			title: "Withdrawals",
			description: [
				"Members can only apply for withdrawals after completing all designated daily tasks. Funds earned on the platform can be withdrawn when the platform's withdrawal conditions are met. Before applying for withdrawal, please ensure your platform account contains a valid wallet address.",
				"Note: Withdrawals can be made daily from 10:00 to 23:00."
			]
		}
	},
	vip: {
		title: "Membership Level",
		current: "Current",
		deposit: "Deposit",
		bonus: "Bonus",
		commissionRate: "Commission Rate",
		dailyOrders: "Weekly Orders",
		description: "VIP Level Statement:\n" +
			"Selling USDT earns the spread, essentially engaging in 'liquidity business'\n" +
			"VIP level limits the number of transactions to prevent ordinary accounts from occupying professional market makers' space, while reducing platform risk control risks.\n" +
			"Anti-Money Laundering (AML) and regulatory pressure! (The core reason)\n" +
			"Therefore, the platform uses:\n" +
			"VIP level\n" +
			"Number of transactions\n" +
			"Transaction amount threshold\n" +
			"to screen users:\n" +
			"Ordinary users occasionally exchange money\n" +
			"High-frequency USDT sellers suspected of currency exchange/market maker professional liquidity providers\n" +
			"VIP=risk-controlled objects (platform feels more assured)\n" +
			"VIP users typically possess:\n" +
			"Higher capital\n" +
			"More complete KYC\n" +
			"Longer transaction history\n" +
			"\n" +
			"The platform's logic is:\n" +
			"The platform limits the number of USDT sales because this is already a high-frequency currency exchange and liquidity behavior, requiring a higher level to meet regulatory\n" +
			"and risk control requirements, not the platform being difficult, but rather a more market-oriented regulatory compliance design.\n" +
			"\n" +
			"Friendly reminder:\n" +
			"USDT spreads can earn money, but it's a 'quasi-financial behavior'. VIP level restrictions are not thresholds, but the platform telling you:\n" +
			"'You are no longer an ordinary user.'"
	},
	deposit: {
		withdrawal: "Withdrawal",
		history: "History",
		totalBalance: "Total Balance",
		processingTime: "Withdrawal processing takes 15-20 minutes.",
		walletAddressType: "Wallet Address Type",
		trc20Address: "TRC20 Address",
		erc20Address: "ERC20 Address",
		btcAddress: "BTC Address",
		addressNotSet: "Address Not Set",
		bindAddress: "Bind Address",
		verifyWalletAddress: "Please carefully verify your wallet address.",
		all: "All",
		enterWithdrawalPassword: "Enter Withdrawal Password",
		submit: "Submit",
		enterWithdrawalAmount: "Please enter withdrawal amount",
		withdrawalFailed: "Withdrawal failed, please try again later"
	},
	withdrawalStatus: {
		pending: "Pending Review",
		success: "Payment Made",
		rejected: "Rejected",
		processing: "Processing Payment"
	},
	about: {
		title: "About Us",
		companyDescription: "OFX was founded in 2001 and is a multinational fintech company focusing on global capital transfer and foreign exchange services. The company stems from a clear concept: to provide better, fairer, and more efficient cross-border capital solutions for global clients. Since its establishment, OFX has served over 1 million customers, supporting more than 50 currencies, covering more than 170 countries and markets, and cumulatively processing funds exceeding $1.48 trillion.",
		globalNetworkTitle: "Global Network Layout",
		globalNetworkDesc: "The company has offices in London, Dublin, Sydney, Auckland, Hong Kong, Singapore, Toronto and San Francisco, with over 700 employees worldwide, possessing a solid operational network and localized service capabilities.",
		regulatoryAdvantageTitle: "Strong Regulatory Advantages",
		regulatoryAdvantageDesc: "The company is supervised by more than 50 regulators globally, following strict financial auditing and compliance standards. Since listing, there have been no regulatory penalties or enforcement actions, indicating sound risk management capabilities.",
		corporateGovernanceTitle: "Corporate Governance and Management",
		corporateGovernanceDesc1: "The board of directors consists of business leaders with extensive experience in banking, finance, and technology, ensuring a sound corporate governance structure.",
		corporateGovernanceDesc2: "The management team comprises senior executives from major international banks, payment service providers, and technology companies, led by CEO Skander Malcolm, continuously promoting OFX's strategic expansion and digital innovation.",
		listingStatusTitle: "Listing Status and Industry Attributes",
		listingStatusDesc: "OFX was listed on the Australian Securities Exchange (ASX) in 2013 (stock code: OFX), classified as \"Diversified Finance\". The company maintains strong competitiveness in the cross-border fintech industry with its stable compliance framework, international layout, and sustainable profit model.",
		aboutDexOfxTitle: "About \"DEX:OFX\"",
		aboutDexOfxDesc1: "Since March 10, 2023, some financial information platforms have displayed the \"DEX:OFX\" label.",
		aboutDexOfxDesc2: "It must be clarified that:",
		aboutDexOfxDesc3: "\"Dex: OFX\" is not an actual trading code. It is a cross-market mapping identifier automatically generated during system updates on certain data platforms.",
		aboutDexOfxDesc4: "This identifier is generated as part of internal system testing to verify the platform's ability to correctly associate company information across different markets. Therefore, this label is only used for data indexing and testing purposes, and does not mean that OFX is listed on DEX or any other exchange.",
		aboutDexOfxDesc5: "OFX's only valid official listing is: Australian Securities Exchange (ASX) stock code: OFX",
		aboutDexOfxDesc6: "All other identifiers (including \"DEX:OFX\") are system-generated mapping entries, not used for actual trading, solely to provide better service to users.",
		headquartersTitle: "OFX Group Headquarters Address",
		headquartersDesc: "19th Floor, 60 Margaret Street, Sydney, New South Wales, Australia, Postcode 2000"
	},
	
	bindTrc20: {
		formTitle: "Recharge Information",
		moneyLabel: "Recharge Amount",
		moneyPlaceholder: "Please enter recharge amount",
		addressLabel: "Recharge Address",
		addressPlaceholder: "Please enter recharge address",
		hashLabel: "Recharge Hash",
		hashPlaceholder: "Please enter recharge hash",
		submitButton: "Submit Recharge",
		successMessage: "Recharge submission successful",
		failMessage: "Submission failed",
		networkErrorMessage: "Network error"
	},
	bankCardList: {
		formTitle: "Bank Information",
		accountNameLabel: "Account Name",
		accountNamePlaceholder: "Please enter account name",
		accountNumberLabel: "Account Number",
		accountNumberPlaceholder: "Please enter account number",
		bankNameLabel: "Bank Name",
		bankNamePlaceholder: "Please enter bank name",
		countryLabel: "Country",
		countryPlaceholder: "Please select country",
		routingNumberLabel: "Routing Number",
		routingNumberPlaceholder: "Please enter routing number",
		swiftCodeLabel: "SWIFT Code",
		swiftCodePlaceholder: "Please enter SWIFT code",
		bankAddressLabel: "Bank Address",
		bankAddressPlaceholder: "Please enter bank address",
		submitButtonText: "Save Information"
	},
	// Real name authentication related internationalization
	certification: {
		title: "Apply for Real Name Authentication",
		subtitle: "Please fill in your real information to complete the authentication",
		successTitle: "You have completed real name authentication",
		successSubtitle: "No need to resubmit authentication information",
		nameLabel: "Real Name",
		emailLabel: "Email Address",
		phoneLabel: "Phone Number",
		namePlaceholder: "Please enter your real name",
		emailPlaceholder: "Please enter your email address",
		phonePlaceholder: "Please enter your phone number",
		submitButton: "Submit Authentication",
		statusPending: "Under Review",
		statusSuccess: "Review Successful",
		statusFailed: "Review Failed"
	}
}