<template>
	<view class="">
		<view class="a-pr a-crfff"
			style="min-height: 100vh; z-index: 3;background: url(static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />

			<div class="main-container" style="margin:0 auto;max-width: 768px;">
				<div class="cashout-container">
					<div class="header-section">
						<h1 class="page-title">资金管理</h1>
						<div class="balance-card">
							<div class="balance-label">账户总余额</div>
							<div class="balance-amount">298.29 <span class="currency">USD</span></div>
							<div class="balance-note">提款处理需要15-20分钟</div>
						</div>
					</div>
					
					<div class="tabs">
            <button 
              :class="['tab-button', { active: activeTab === 'withdrawal' }]" 
              @click="switchTab('withdrawal')"
            >
              提款
            </button>
            <button 
              :class="['tab-button', { active: activeTab === 'history' }]" 
              @click="switchTab('history')"
            >
              历史记录
            </button>
          </div>
					
					<div v-show="activeTab === 'withdrawal'" class="withdrawal">
						<!-- 钱包地址选择区域 -->
						<div class="section-card">
							<h3 class="section-title">钱包地址类型</h3>
							<div class="input-group">
								<select id="wallet-type-select" onchange="changeWalletType()" class="wallet-select">
									<option value="trc20">TRC20 地址</option>
									<option value="erc20">ERC20 地址</option>
									<option value="btc">BTC Address</option>
								</select>
							</div>
							
							<!-- TRC20地址显示 -->
							<div id="trc20-address-section" class="address-section">
								<h4 class="address-title">TRC20 地址</h4>
								<div class="wallet-address-display address-empty">
									<span class="address-text">地址未设置</span>
									<button class="bind-button" onclick="goToBindAddress('trc20')">绑定地址</button>
								</div>
							</div>
							
							<!-- ERC20地址显示 -->
							<div id="erc20-address-section" class="address-section" style="display: none;">
								<h4 class="address-title">ERC20 地址</h4>
								<div class="wallet-address-display address-empty">
									<span class="address-text">地址未设置</span>
									<button class="bind-button" onclick="goToBindAddress('erc20')">绑定地址</button>
								</div>
							</div>
							
							<!-- BTC 地址显示 -->
							<div id="btc-address-section" class="address-section" style="display: none;">
								<h4 class="address-title">BTC Address</h4>
								<div class="wallet-address-display address-empty">
									<span class="address-text">地址未设置</span>
									<button class="bind-button" onclick="goToBindAddress('btc')">绑定地址</button>
								</div>
							</div>
							
							<div class="warning-note">请仔细核实您的钱包地址</div>
						</div>
						
						<form onsubmit="return false;" id="form-submit" class="withdrawal-form">
							<div class="section-card">
								<h3 class="section-title">提款信息</h3>
								<div class="input-group">
									<input type="text" name="num" id="num" placeholder="输入提现金额" class="amount-input">
									<button type="button" class="all-button" onclick="$('#num').val('298.29')">全部</button>
								</div>
								<div class="input-group">
									<input type="password" name="paypassword" id="paypassword" placeholder="输入提款密码" class="password-input">
								</div>
							</div>

							<button class="submit-button" id="btn-submit" onclick="do_deposit()">提交</button>
						</form>
					</div>
					
					<div v-show="activeTab === 'history'" class="history">
						<div class="history-records">
              <div v-for="(record, index) in historyRecords" :key="index" class="history-record">
                <div class="record-header">
                  <span class="record-id">记录ID: {{ record.id }}</span>
                  <span class="record-status" :class="record.statusClass">{{ record.status }}</span>
                </div>
                <div class="record-details">
                  <div class="record-row">
                    <span class="label">金额:</span>
                    <span class="value">{{ record.amount }} USD</span>
                  </div>
                  <div class="record-row">
                    <span class="label">地址:</span>
                    <span class="value">{{ record.address }}</span>
                  </div>
                  <div class="record-row">
                    <span class="label">时间:</span>
                    <span class="value">{{ record.time }}</span>
                  </div>
                </div>
              </div>
            </div>
					</div>
				</div>
			</div>
		</view>

	</view>
</template>
<script>
	import navbar from "@/components/navbar.vue";
	export default {
		components: {
			navbar
		},
		data() {
			return {
				showLanguage: false,
				activeTab: 'withdrawal',
        historyRecords: [
          {
            id: 'TX1234567890',
            status: '已完成',
            statusClass: 'status-success',
            amount: '100.00',
            address: 'TXXXXXX...XXXXX',
            time: '2023-05-15 14:30:22'
          },
          {
            id: 'TX0987654321',
            status: '处理中',
            statusClass: 'status-processing',
            amount: '50.50',
            address: 'TYYYYYY...YYYYY',
            time: '2023-05-14 09:15:45'
          },
          {
            id: 'TX1122334455',
            status: '已拒绝',
            statusClass: 'status-rejected',
            amount: '75.25',
            address: 'TZZZZZZ...ZZZZZ',
            time: '2023-05-12 16:45:10'
          }
        ]
			};
		},
		onLoad(options) {

		},
		onShow() {

		},
		methods: {
      switchTab(tab) {
        this.activeTab = tab;
      },
			getNocar() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.get_noc(token).then(res => {
					let lang = this.$store.state.lang
					this.news = [res.data[lang]]
				})
			},
		},
	}
</script>
<style lang="scss" scoped>
	.cashout-container {
		padding: 20px;
		color: #fff;
		background: linear-gradient(180deg, rgba(13, 17, 30, 0.9) 0%, rgba(13, 17, 30, 0.95) 100%);
		font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
		min-height: calc(100vh - 50px);
		border-radius: 20px 20px 0 0;
		
		.header-section {
			margin-bottom: 30px;
			
			.page-title {
				font-size: 24px;
				font-weight: 600;
				margin: 0 0 20px 0;
				text-align: center;
				color: #fff;
			}
			
			.balance-card {
				background: linear-gradient(135deg, #1E90FF 0%, #0a5bc4 100%);
				border-radius: 15px;
				padding: 25px 20px;
				box-shadow: 0 8px 20px rgba(30, 144, 255, 0.3);
				text-align: center;
				margin-bottom: 10px;
				
				.balance-label {
					font-size: 16px;
					color: rgba(255, 255, 255, 0.9);
					margin-bottom: 10px;
				}
				
				.balance-amount {
					font-size: 36px;
					font-weight: 700;
					color: #fff;
					margin-bottom: 5px;
					
					.currency {
						font-size: 20px;
						font-weight: 500;
					}
				}
				
				.balance-note {
					font-size: 14px;
					color: rgba(255, 255, 255, 0.8);
				}
			}
		}

		.tabs {
			display: flex;
			margin-bottom: 25px;
			background: rgba(26, 35, 58, 0.7);
			border-radius: 15px;
			padding: 5px;
			
			.tab-button {
				flex: 1;
				background: transparent;
				border: none;
				color: #a0aec0;
				padding: 12px 0;
				border-radius: 12px;
				cursor: pointer;
				font-size: 16px;
				font-weight: 500;
				transition: all 0.3s ease;
				
				&.active {
					background: linear-gradient(135deg, #1E90FF 0%, #0a5bc4 100%);
					color: #fff;
					box-shadow: 0 4px 12px rgba(30, 144, 255, 0.4);
				}
			}
		}
		
		.section-card {
			background: rgba(26, 35, 58, 0.7);
			border-radius: 15px;
			padding: 20px;
			margin-bottom: 20px;
			box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
			
			.section-title {
				font-size: 18px;
				font-weight: 600;
				color: #fff;
				margin: 0 0 15px 0;
			}
			
			.address-section {
				margin-top: 20px;
				
				.address-title {
					font-size: 16px;
					color: #a0aec0;
					margin: 0 0 10px 0;
				}
			}
		}

		.balance-info {
			margin-bottom: 30px;

			p {
				color: #a0aec0;
				margin: 0;
				font-size: 14px;
			}

			h2 {
				font-size: 28px;
				margin: 5px 0;
				color: #fff;
			}

			span {
				color: #a0aec0;
				font-size: 14px;
			}

			.input-group {
				display: flex;
				align-items: center;
				border-bottom: 1px solid #4a5568;
				padding: 15px 0;

				select {
					background: transparent;
					border: none;
					color: #fff;
					flex-grow: 1;
					font-size: 16px;
					outline: none;
					cursor: pointer;

					option {
						background-color: #1a233a;
						color: #fff;
					}
				}

			}

			.address-empty {
				color: #ff6b6b;
				font-style: italic;
			}

			.wallet-address-display {
				background-color: rgba(30, 144, 255, 0.1);
				border: 1px solid #1E90FF;
				border-radius: 10px;
				padding: 15px;
				margin-top: 10px;
				word-break: break-all;
				font-size: 14px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.address-text {
					flex: 1;
				}
			}

			.bind-button {
				background: linear-gradient(135deg, #1E90FF 0%, #0a5bc4 100%);
				color: #fff;
				border: none;
				border-radius: 20px;
				padding: 8px 20px;
				cursor: pointer;
				font-weight: 500;
				font-size: 14px;
				margin-left: 15px;
				box-shadow: 0 4px 10px rgba(30, 144, 255, 0.3);
			}

		}
		
		.warning-note {
			color: #ff6b6b;
			font-size: 14px;
			margin-top: 15px;
			padding: 10px;
			background: rgba(255, 107, 107, 0.1);
			border-radius: 8px;
			border-left: 3px solid #ff6b6b;
		}

		.withdrawal-form-container {
			background-color: #1a233a;
			border-radius: 10px;
			padding: 10px 20px;

			.input-group {
				display: flex;
				align-items: center;
				border-bottom: 1px solid #4a5568;
				padding: 15px 0;

				input {
					background: transparent;
					border: none;
					color: #fff;
					flex-grow: 1;
					font-size: 16px;
					outline: none;
				}

				.all-button {
					background-color: #fff;
					color: #1a202c;
					border: none;
					line-height: 1.5;
					border-radius: 150px;
					padding: 5px 15px;
					cursor: pointer;
					font-weight: bold;
				}
			}
			
		}
		
		.withdrawal-form {
			.input-group {
				display: flex;
				align-items: center;
				border-bottom: 1px solid #4a5568;
				padding: 15px 0;

				.amount-input,
				.password-input {
					background: transparent;
					border: none;
					color: #fff;
					flex-grow: 1;
					font-size: 16px;
					outline: none;
					
					&::placeholder {
						color: #a0aec0;
					}
				}

				.all-button {
					background: linear-gradient(135deg, #1E90FF 0%, #0a5bc4 100%);
					color: #fff;
					border: none;
					line-height: 1.5;
					border-radius: 15px;
					padding: 6px 18px;
					cursor: pointer;
					font-weight: 500;
					box-shadow: 0 4px 10px rgba(30, 144, 255, 0.3);
				}
			}
		}
    
		.submit-button {
		    background: linear-gradient(135deg, #1E90FF 0%, #0a5bc4 100%);
		    color: #fff;
		    border: none;
		    border-radius: 15px;
		    padding: 16px;
		    width: 100%;
		    font-size: 18px;
		    font-weight: 600;
				line-height: 1.5;
		    cursor: pointer;
		    margin-top: 20px;
				box-shadow: 0 6px 20px rgba(30, 144, 255, 0.4);
				transition: all 0.3s ease;
				
				&:hover {
					transform: translateY(-2px);
					box-shadow: 0 8px 25px rgba(30, 144, 255, 0.5);
				}
				
				&:active {
					transform: translateY(0);
				}
		}

    .history {
      .history-record {
        background: rgba(26, 35, 58, 0.7);
        border-radius: 15px;
        padding: 20px;
        margin-bottom: 15px;
				box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        
        .record-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 15px;
          border-bottom: 1px solid #4a5568;
          margin-bottom: 15px;
          
          .record-id {
            font-size: 14px;
            color: #a0aec0;
						font-weight: 500;
          }
          
          .record-status {
            font-size: 12px;
            padding: 5px 12px;
            border-radius: 20px;
						font-weight: 500;
            
            &.status-success {
              background-color: rgba(46, 204, 113, 0.2);
              color: #2ecc71;
            }
            
            &.status-processing {
              background-color: rgba(241, 196, 15, 0.2);
              color: #f1c40f;
            }
            
            &.status-rejected {
              background-color: rgba(231, 76, 60, 0.2);
              color: #e74c3c;
            }
          }
        }
        
        .record-details {
          .record-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            
            &:last-child {
							margin-bottom: 0;
						}
            
            .label {
              color: #a0aec0;
              font-size: 14px;
							flex: 1;
            }
            
            .value {
              color: #fff;
              font-size: 14px;
              max-width: 60%;
              text-align: right;
              word-break: break-word;
							font-weight: 500;
            }
          }
        }
      }
    }
		
		.wallet-select {
			background: transparent;
			border: none;
			color: #fff;
			flex-grow: 1;
			font-size: 16px;
			outline: none;
			cursor: pointer;
			padding: 10px 0;

			option {
				background-color: #1a233a;
				color: #fff;
			}
		}
	}
</style>