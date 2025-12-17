

import Vue from "vue";
import web3 from 'web3'
// orchard resist habit spoon squirrel comic please actress friend undo pluck worth
/**
 * // 0 tokenPokect 使用tp-sdk
 * // 1 tron Link  window.tronWeb
 * // 2 ethereum window.ethereum
 * 1) Coinbase Wallet
 * https://www.coinbase.com/wallet
 * https://github.com/coinbase/coinbase-wallet-sdk 
 * 3) TronLink
 * 4) imToken
 * 5) MetaMask
 * https://docs.metamask.io/guide
 * 6) TokenPocket
 * https://github.com/TP-Lab/tp-js-sdk
 * 7) HyperPay
 * 8) kcash
 * 9) Huobi wallet
 * 10) bitpie
 * 11) walletConnect
 * 12) robinhood
 * @type {{address: null, web: null, type: number, connect: ((function(*): Promise<null|string|string|*|boolean|undefined>)|*)}}
 */
Vue.prototype.wallet = {
    web: null,
    address: null,
    type: 0,
    connect: async (_this) => {
        let wallet = [
            { object: _this.$tp, type: 'tokenPokect' },
            { object: window.ethereum, type: 'MetaMask' },
            { object: window.tronWeb, type: 'tronLink' },
            // { object: coinbaseWeb3, type: 'coinbase' }
        ]
        let item, address = null;
        for (let index = 0; index < wallet.length; index++) {
            const it = wallet[index];
            if (it.type != 'tronLink' && it.type !== 'MetaMask' && it.object && it.object.isConnected()) {
                item = it
                break;
            } else if (it.type == 'MetaMask' && it.object) {
                item = it
                break;
            } else if (!item && it.type == 'tronLink') {
                item = it
                break
            }
        }
        if (!item) {
            return null
        }

        try {
            if (item.type == 'MetaMask') {
                const ethereum = window.ethereum
                await ethereum.enable();
                let web3js = new web3(ethereum)
                let result = await web3js.eth.getAccounts()
                _this.wallet.web = ethereum
                _this.wallet.type = 2
                address = result[0];
            }
            if (item.type == 'tokenPokect') {
                let res = await _this.$tp.getCurrentWallet()
                address = res.data.address
                _this.wallet.web = _this.$tp
                _this.wallet.type = 0
            }
            if (item.type == 'tronLink') {
                address = window.tronWeb.defaultAddress.base58;
                _this.wallet.web = window.tronWeb;
                _this.wallet.type = 1
            }
            _this.wallet.address = address
        } catch (error) {
            _this.wallet.address = null
            address = null
        }


        return address
    }
}