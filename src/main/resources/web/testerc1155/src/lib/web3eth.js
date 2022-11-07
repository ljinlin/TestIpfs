/**
 * 
 * @param {*} time 必填、sleep时间
 * @param {*} func 选填、到时间后，执行func逻辑并且返回func的返回值
 */
var mySleep = async function (time, func) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			if (func) {
				resolve(func())
			}
		}, time);
	})
}

/**
 * 
 * @param {*} intervalTime 必填、 间隔时间
 * @param {*} mxWaitTime 必填、最大等待时间，-1无限等待
 * @param {*} fun 必填、每次间隔时间，都指行该func,func返回true，则结束等待，
 * @param {*} timeOutFun 选填、等待超时回调函数
 */
window.myWait = window.myWait || async function (intervalTime, mxWaitTime, func, timeOutFun) {
	let res = func()
	let waitTime = 0
	while (true) {
		res = await mySleep(intervalTime, func)
		waitTime += intervalTime
		if (res == true || (mxWaitTime !== -1 && waitTime >= mxWaitTime)) {
			break;
		}
	}
	if ((mxWaitTime !== -1 && waitTime >= mxWaitTime) && timeOutFun)
		timeOutFun()
}

/**
 * 获取tronWeb
 * @param {*} backFunc 回调函数
 */
window.connectWallt = window.connectWallt || async function (backFunc) {
	if (typeof window.ethereum !== 'undefined') {
		let goerliChainId = web3.utils.toHex(5)
  //授权连接钱包
		let accountAry = await ethereum.request({
			method: 'eth_requestAccounts',
			params: [{ "chainId": goerliChainId }]
		});
		window.connectAccount = accountAry[0]
        // console.log('用户钱包地址:',addr[0]);
    }else{
        console.log('未安装钱包插件！');
    }
	

	if (backFunc) {
		backFunc(window.connectAccount)
	}
	return window.web3;
}

/**
 * 获取tronWeb
 * @param {*} backFunc 回调函数
 */
window.loadTron = window.loadTron || async function (backFunc) {
	if (!window.tronWeb) {
		await window.myWait(200, 10000, () => {//正在加载钱包插件
			return window.tronWeb ? true : false
		})
	}
	if (backFunc) {
		backFunc(window.tronWeb)
	}
	return window.tronWeb;
}

let abiMap = {}
/**
 * 获取tronWeb
 * @param {*} caddr 合约地址
 * @param {*} backFunc 回调函数
 */
window.loadContract = window.loadContract || async function (caddr, backFunc) {
	window.mycs = window.mycs || {};
	if (window.mycs[caddr]) {
		if (backFunc) {
			backFunc(window.mycs[caddr])
		}
		return window.mycs[caddr];
	}

	//加载标记,防止重复加载合约损耗流量和性能
	window.loadingFlag = window.loadingFlag || {}
	if (window.loadingFlag[caddr] == 1) {//1已经正在加载合约,2是已经加载合约，undefined是没有或者加载失败
		await window.myWait(50, 10000, () => {
			if (window.mycs[caddr]) {
				window.loadingFlag[caddr] = 2;
				return true;
			}
			return false;
		})
		if (window.mycs[caddr]) {
			if (backFunc) {
				backFunc(window.mycs[caddr])
			}
			return window.mycs[caddr];
		}
	}

	await window.loadTron();//正在加载钱包

	let contract = null;
	try {

		window.loadingFlag[caddr] = 1
		console.log("==============================加载合约中：" + caddr)
		// 获取合约对象
		if (abiMap[caddr]) {
			contract = await window.tronWeb.contract(abiMap[caddr], caddr);
		} else {
			contract = await window.tronWeb.contract().at(caddr);
		}
		window.loadingFlag[caddr] = 2
	} catch (error) {
		// window.loadingFlag[caddr] = undefined
		// window.loadContractError = window.loadContractError || {}
		// window.loadContractError[caddr] = window.loadContractError[caddr] || 0
		if (window.loadErroe == undefined) {
			window.loadErroe = true
			alert(
				"公链网络异常或者请检查钱包知否安装(The public chain network is abnormal or please check the wallet for installation): "
			);
			// window.loadContractError[caddr] = window.loadContractError[caddr] + 1
		}
		console.error(error)
		return;
	}
	if (contract) {
		if (backFunc) {
			backFunc(contract)
		}
		return window.mycs[caddr] = contract;
	}
	return contract;
}




window.mathUpToken = function (token, amount) {
	let amount2 = amount * window.decimals[token]
	amount2 = window.tronWeb.toHex(amount2)
	return amount2;
}

window.mathDownToken = function (token, amount) {
	return amount / window.decimals[token]
}

window.dftHexAddr = function () {
	if(!window.tronWeb.defaultAddress.hex||window.tronWeb.defaultAddress.hex==false){
		return window.tronWeb.defaultAddress.hex;
	}
	return window.tronWeb.defaultAddress.hex.substring(2);
}


window.dftAddr = function () {
	return window.tronWeb.defaultAddress.base58;
}



