/*
 ** V1.0CRM后台管理列表枚举map表
 ** 文档地址: https: //docs.qq.com/sheet/DSER2TG9kbVZzRERJ?tab=BB08J2
 */
const cardType = {
  1: '季卡',
  2: '月卡'
}

const cardChannel = {
  1: '和缓医疗'
}

const cardKeyStatus = {
  1: '未发放',
  2: '已发放未激活',
  3: '已激活未使用',
  4: '已使用',
  5: '已使用已过期',
  6: '未发放已过期'
}

const gradeCycle = {
  1: '月',
  2: '季',
  3: '年',
  11: '连续包月',
  21: '连续包季',
  31: '连续包年'
}

const mapState = {
  cardType,
  cardChannel,
  cardKeyStatus,
  gradeCycle
}

export default mapState
