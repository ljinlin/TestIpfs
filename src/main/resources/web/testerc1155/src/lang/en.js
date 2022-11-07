export default {
  route: {
    home: 'Kios',
    invitationDetails: 'Invitation Details',
    rules: 'Rules',
    auditreport: 'Audit Report',
    reportquery: 'Report Query',
  },
  popup: {
    noLoginWallet: 'No logged in wallet',
    noInstallWallet: 'Your installed wallet was not detected',
    copySuccess: 'cpoy successed',
    buySuccess: 'Purchase successed',
    depositedSuccessed: 'Save successed',
    extractedSuccessed: 'Extraction succeeded',
    exchangeSuccessed: 'Exchange successed',
    approveSuccessed: 'Authorization succeed',
    exchangeFail: 'Fail to exchange',
    buyFailed: 'Failed to purchase',
    depositedFailed: 'Failed to save',
    extractedFailed: 'Failed to extract',
    loading: 'Loading',
    fail: 'Failed',
    success: 'Succeeded',
    cancel: 'canceled',
    outOfStock: 'Out of stock',
    mustApproveAmount: 'Input the authorized amount',
    inputApproveAmount: 'Approve at least one',
    inputBuyAmount: 'Buy at least one',
  },
  wallet: {
    name: 'My Wallet',
    loadingTxt: 'Connecting...',
    failedTxt: 'Failed connect'
  },
  home: {
    keyPoint1: 'The rebate rate is as high as 85%',
    keyPoint2: 'One investment benefits lifelong',
    keyPoint3: 'Last depositor gets 100% of the pool',
    amounts: ' Pool total',
    depositAmounts: ' deposited qty',
    digoutAmounts: ' digout amount',
    exchangeAmounts: ' exchange quantity',
    lookOverRules: 'View rules',
    contractAddress: 'Contract address',
    button: {
      get: 'Get Directly',
      buy: 'Purchase',
      exchange: 'Exchange',
      auth: 'Auth',
      mining: 'Deposit Mining',
      kitExtract: 'Kit Extract',
      kioExtract: 'Kio Extract',
      kisExtract: 'Kis Extract',
      quicken: 'Deposit Accelerate'
    },
    stage1Step1: {
      tit: 'Purchase Kid',
      placeholder: 'Please enter the quantity of Kid to be purchased',
      usdtBalances: 'USD balance',
      comment1: 'One Kid=100USDT',
      comment2: 'Please make payment via TRC-20 USDT',
      rule: 'TRC 20 USDT to purcahse Kid, 1Kid=100U, 10% of Kid sales will go to Kio pool'
    },
    stage1Step2: {
      tit: 'Mining',
      placeholder: 'Please enter Kid mining quantity',
      comment1: 'Kid available qty:',
      comment2: 'Kid mining quantity:',
      comment3: 'Extratable quantity of Kit:',
      rule: 'Deposit Kid into Kit mine pool for mining, 1 Kit can be obtained after 1 kid has been deposited after 120 hours , Kid is not withdrawable'
    },
    stage1Step3: {
      tit: 'Mining',
      placeholder: 'Please enter Kid mining quantity',
      comment1: 'Kid available quantity:',
      comment2: 'Kid mining quantity:',
      comment3: 'Extractables quantity of Kio:',
      rule: 'Save 5 kids for 120h to get a Kio, Kid cannot be withdrawn'
    },
    stage1Step4: {
      tit: 'Kio exchange',
      drawKioTxt: ' Number of kio can be obtained',
      comment1: 'Number of Kio available:',
      rule: 'One Kio can be exchanged for 0.5% of the total amount of the Kios pool, only one at a time'
    },
    stage2Step1: {
      tit: 'Purchase Kia',
      placeholder: 'Please enter the quantity of Kia to be purchased',
      comment1: 'One Kia=200USDT',
      comment2: 'Please make payment via TRC-20 USDT',
      rule: 'Purchase Kia by TRC-20 USDT, 1KIA=200U, 20% of Kia\'s sales will go into the Kis pool'
    },
    stage2Step2: {
      tit: 'Mining',
      placeholder: 'Please enter Kia mining quantity',
      comment1: 'Kia available quantity:',
      comment2: 'Kia mining quantity:',
      comment3: 'Extractable Kia quantity of Kis:',
      rule: 'Deposit Kia into Kis pool for mining, 1 Kis can be obtained after 1 Kia has been deposited after 48hours, Kia is not withdrawable'
    },
    stage2Step3: {
      tit: 'Kio acceleration',
      placeholder: 'Please enter the number of Kio to be used for accelerating',
      comment1: 'Kio available quantity:',
      rule: 'Depositing 1 kio can speed up the production speed of 1 ki by 5 times'
    },
    stage2Step4: {
      tit: 'Kis exchange',
      comment1: 'Kis available quantity:',
      rule: 'One Kis can be exchanged for 0.1% of the total amount of the Kis pool, only one at a time'
    }
  },
  invitation: {
    button: {
      copy: 'Copy',
      auth: 'Auth',
      extractAward: 'Extract Award',
      depositKit: 'Deposit Kit'
    },
    stageOneTit: 'Invitation Details',
    stageTwoTit: 'Invitation Details',
    myInvitationLink: 'My Invitation Link',
    placeholder: 'Please enter content',
    people: 'People',
    invitedNumber: 'Numbers of Invitation',
    USDTAmounts: 'Total reward amount from invitations',
    KitUsableAmounts: 'Kit available mounts',
    invitationDetailsTit: 'Invitation Details',
    tableEmptyText: 'No data',
    stageOneTable: {
      address: 'Friend address',
      level: 'Level',
      lockedKisAmounts: 'Locked Kid Amounts'
    },
    stageTwoTable: {
      address: 'Friend Address',
      level: 'Level',
      lockedKiaAmounts: 'Klocked Kia Amountsia'
    }
  },
  rules: {
    stageOneTit: 'Stage 1 rules',
    stageTwoTit: 'Stage 2 rules',
    gameRules: 'Game rules',
    invitationRules: 'Invitation rules',
    stageOneGameRule1: '1. Purchase Kid by TRC-20 USDT, 1 kid=100U, 10% of Kid\'s sales will go into the Kio pool',
    stageOneGameRule2: '2. After the Kid is purchased, Deposit Kid into Kio pool for mining, 1 Kio can be obtained after 5 Kid has been deposited after 120hours, Kid is not withdrawable',
    stageOneGameRule3: '3. From the first deposit in Kid, the mining speed of Kio decreases by 1% every 120hour',
    stageOneGameRule4: '4. One Kio can be exchanged for 0.5% of the total amount of the Kio pool, only one at a time',
    stageOneGameRule5: '5. If no new user deposits Kid in 24 hours, the last depositor receives full amount of the pool, and the game reset',
    stageOneIvtcdt1: '1. Number of Kid deposited by friends >= number of Kid deposited by me',
    stageOneIvtcdt1Rule1: 'Level 1 recommended friends will be rewarded USDT that equivalent to 55% of Kid deposited by me',
    stageOneIvtcdt1Rule2: 'Level 2 recommended friends will be rewarded USDT that equivalent to 15% of Kid deposited by me',
    stageOneIvtcdt1Rule3: 'Level 3 recommended friends will be rewarded USDT that equivalent to 5% of Kid deposited by me',
    stageOneIvtcdt1Rule4: 'Level 4 recommended friends will be rewarded USDT that equivalent to 2% of Kid deposited by me',
    stageOneIvtcdt1Rule5: 'Level 5-12 rrecommended friends will be rewarded USDT that equivalent to 1% of Kid deposited by me',
    stageOneIvtcdt2: '2. The amount of Kid deposited by my friends <that amount of Kid deposited by me',
    stageOneIvtcdt2Rule1: 'Level 1 recommended friends will be rewarded USDT that equivalent to 55% of Kid deposited by friends',
    stageOneIvtcdt2Rule2: 'Level 2 recommended friends will be rewarded USDT that equivalent to 15% of Kid deposited by friends',
    stageOneIvtcdt2Rule3: 'Level 3 recommended friends will be rewarded USDT that equivalent to 5% of Kid deposited by friends',
    stageOneIvtcdt2Rule4: 'Level 4 recommended friends will be rewarded USDT that equivalent to 2% of Kid deposited by friends',
    stageOneIvtcdt2Rule5: 'Level 5-12 recommended friends will be rewarded USDT that equivalent to 1% of Kid deposited by friends',
    stageTwoGameRule1: '1. Purchase Kia by TRC-20 USDT, 1 kia=200U, 20% of Kia\'s sales will go into the Kis pool',
    stageTwoGameRule2: '2. Deposit Kia into Kis pool for mining, 1 Kis can be obtained after 1 Kia has been deposited after 48hours, Kia is not withdrawable',
    stageTwoGameRule3: '3. One Kis can be exchanged for 0.1% of the total amount of the Kis pool, only one at a time',
    stageTwoGameRule4: '4. If no new user deposits Kia in 12 hours, the last depositor receives full amount of the pool, and the game reset',
    stageTwoGameRule5: '5. If you spend one KIO on one KIA that you deposited, you will receive 5 KIS after 48hrs for once, and then the production/mining will back to one KIS per 48hrs. (This effect can be cumulated on one KIA )',
    stageTwoIvtSubcdt2: 'Number of Kia deposits by friends <number of Kia deposits by me',
    stageTwoIvtSubcdt2Rule1: 'Level 1 recommended friends will be rewarded USDT that equivalent to 30% of Kia deposited by friends',
    stageTwoIvtSubcdt2Rule2: 'Level 2 recommended friends will be rewarded USDT that equivalent to 10% of Kia deposited by friends',
    stageTwoIvtSubcdt2Rule3: 'Level 3-9 recommended friends will be rewarded USDT that equivalent to 5% of Kia deposited by friends'
  }
}
