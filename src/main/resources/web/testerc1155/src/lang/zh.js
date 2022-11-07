export default {
  route: {
    home: 'Kios',
    invitationDetails: '邀请明细',
    rules: '规则',
    auditreport: '审计报告',
    reportquery: '报告查询',
  },
  popup: {
    noLoginWallet: '没有登录钱包',
    noInstallWallet: '没有检测到你安装钱包',
    copySuccess: '复制成功',
    buySuccess: '购买成功',
    depositedSuccessed: '存入成功',
    extractedSuccessed: '提取成功',
    exchangeSuccessed: '兑换成功',
    approveSuccessed: '授权成功',
    exchangeFail: '兑换失败',
    buyFailed: '购买失败',
    depositedFailed: '存入失败',
    extractedFailed: '提取失败',
    loading: '处理中',
    fail: '处理失败',
    success: '成功',
    cancel: '取消操作',
    outOfStock: '可用数量不足',
    mustApproveAmount: '请输入授权金额',
    inputBuyAmount: '至少购买1个',
    inputApproveAmount: '至少授权1个',
  },
  wallet: {
    name: '我的钱包',
    loadingTxt: '连接中...',
    failedTxt: '钱包未连接'
  },
  home: {
    keyPoint1: '返现比例高达85%',
    keyPoint2: '一次投资永远受益',
    keyPoint3: '最后一个存入的用户可获得100%资金池',
    amounts: '资金池总额',
    depositAmounts: '存入数量',
    digoutAmounts: '挖出数量',
    exchangeAmounts: '兑换数量',
    lookOverRules: '查看规则',
    contractAddress: '合约地址',
    button: {
      get: '直接领取',
      buy: '购买',
      exchange: '兑换',
      auth: '授权',
      mining: '存入挖矿',
      kitExtract: 'Kit提取',
      kioExtract: 'Kio提取',
      kisExtract: 'Kis提取',
      quicken: '存入加速'
    },
    stage1Step1: {
      tit: '购买Kid',
      placeholder: '请输入购买Kid的数量',
      usdtBalances: 'usdt余额',
      comment1: '一个Kid=100USDT',
      comment2: '请使用TRC-20的USDT进行支付',
      rule: 'TRC 20 USDT购买Kid, 1Kid = 100U, Kid销售额的10%会进入Kio资金池'
    },
    stage1Step2: {
      tit: 'Kid-Kit挖矿',
      placeholder: '请输入Kid挖矿数量',
      comment1: 'Kid可用数量：',
      comment2: 'Kid正在挖矿数量：',
      comment3: 'Kit可提取数量：',
      rule: '存入Kid Kit矿池中进行挖矿，1个Kid存入120h可获得1个Kit，Kid不可提出'
    },
    stage1Step3: {
      tit: 'Kid-Kio挖矿',
      placeholder: '请输入Kid挖矿数量',
      comment1: 'Kid可用数量：',
      comment2: 'Kid正在挖矿数量：',
      comment3: 'Kio可提取数量：',
      rule: '5个Kid存入120h可获得一个Kio，Kid不可提出'
    },
    stage1Step4: {
      tit: 'Kio兑换',
      drawKioTxt: '个Kio可领',
      comment1: 'Kio可用数量：',
      rule: '一个Kio可换取Kios资金池总量的0.5%，每次只能兑换1个'
    },
    stage2Step1: {
      tit: '购买Kia',
      placeholder: '请输入购买Kia的数量',
      comment1: '一个Kia=200USDT',
      comment2: '请使用TRC-20的USDT进行支付',
      rule: 'TRC-20 USDT购买 Kia，1Kia = 200U，Kia销售额的20%会进入Kis资金池'
    },
    stage2Step2: {
      tit: 'Kia-Kis挖矿',
      placeholder: '请输入Kia挖矿数量',
      comment1: 'Kia可用数量：',
      comment2: 'Kia正在挖矿数量：',
      comment3: 'Kis可提取数量：',
      rule: '存入Kia-Kis矿池中进行挖矿，1个Kia存入48h可获得1个Kis，Kia不可提出'
    },
    stage2Step3: {
      tit: 'Kio加速',
      placeholder: '请输入Kio存入加速数量',
      comment1: 'Kio可用数量：',
      rule: '存入1个kio可加速1个kis5倍的生产速度'
    },
    stage2Step4: {
      tit: 'Kis兑换',
      comment1: 'Kis可用数量：',
      rule: '一个Kis可换取Kis资金池总量的0.1%，每次只能兑换1个'
    }
  },
  invitation: {
    button: {
      copy: '复制',
      auth: '授权',
      extractAward: '提取奖励',
      depositKit: '存入Kit'
    },
    stageOneTit: 'Stage1邀请明细',
    stageTwoTit: 'Stage2邀请明细',
    myInvitationLink: '我的邀请链接',
    placeholder: '请输入内容',
    people: '人',
    invitedNumber: '邀请人数',
    USDTAmounts: '邀请奖励总额',
    KitUsableAmounts: 'Kit可用数量',
    invitationDetailsTit: '邀请明细',
    tableEmptyText: '暂无数据',
    stageOneTable: {
      address: '好友地址',
      level: '级别',
      lockedKisAmounts: '锁仓Kid数量'
    },
    stageTwoTable: {
      address: '好友地址',
      level: '级别',
      lockedKiaAmounts: '锁仓Kia数量'
    }
  },
  rules: {
    stageOneTit: 'Stage1规则说明',
    stageTwoTit: 'Stage2规则说明',
    gameRules: '游戏规则',
    invitationRules: '邀请规则',
    stageOneGameRule1: '1.先使用TRC-20 USDT购买 Kid，1Kid = 100U，Kid销售额的10%会进入Kio资金池',
    stageOneGameRule2: '2.购买Kid后，存入Kid-Kio矿池中进行挖矿，5个Kid存入120h可获得1个Kio，Kid不可提出',
    stageOneGameRule3: '3.从首次存入Kid开始，Kio的生产速度每120h递减1%',
    stageOneGameRule4: '4.一个Kio可换取Kio资金池总量的0.5%，每次只能兑换1个',
    stageOneGameRule5: '5.如果24h内没有新用户存入Kid，则最后一个存入Kid的人可以直接领取一次资金池全额资金，游戏重新开始',
    stageOneIvtcdt2Rule1: '1级推荐好友可奖励<span>好友存入</span>Kid数量 × 55%等值的USDT',
    stageOneIvtcdt2Rule2: '2级推荐好友可奖励<span>好友存入</span>Kid数量 × 15%等值的USDT',
    stageOneIvtcdt2Rule3: '3级推荐好友可奖励<span>好友存入</span>Kid数量 × 5%等值的USDT',
    stageOneIvtcdt2Rule4: '4级推荐好友可奖励<span>好友存入</span>Kid数量 × 2%等值的USDT',
    stageOneIvtcdt2Rule5: '5-12级推荐好友可奖励<span>好友存入</span>Kid数量 × 1%等值的USDT',
    stageTwoGameRule1: '1.先使用TRC-20 USDT购买 Kia，1Kia = 200U，Kia销售额的20%会进入Kis资金池',
    stageTwoGameRule2: '2.购买Kia后，存入Kia-Kis矿池中进行挖矿，1个Kia存入48h可获得1个Kis，Kia不可提出',
    stageTwoGameRule3: '3.一个Kis可换取Kis资金池总量的0.1%，每次只能兑换1个',
    stageTwoGameRule4: '4.如果12h内没有新用户存入Kia，则最后一个存入Kia的人可以直接领取一次资金池全额资金，游戏重新开始',
    stageTwoGameRule5: '5.针对一枚已存入的Kia使用一枚Kio后，48小时内将生产出五枚Kis。之后恢复每48小时生产一枚Kis',
    stageTwoIvtSubcdt2: '好友存入Kia数量 < 我存入Kia的数量',
    stageTwoIvtSubcdt2Rule1: '1级推荐好友可奖励<span>好友存入</span>Kia数量 × 30%等值的USDT',
    stageTwoIvtSubcdt2Rule2: '2级推荐好友可奖励<span>好友存入</span>Kia数量 × 10%等值的USDT',
    stageTwoIvtSubcdt2Rule3: '3-9级推荐好友可奖励<span>好友存入</span>Kia数量 × 5%等值的USDT'
  }
}
