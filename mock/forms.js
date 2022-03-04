const form = [
  {
    name: '火锅新店开业限时6.8折',
    region: '深圳',
    date1: '2022-02-28',
    date2: new Date(2022, 3, 2, 18, 40),
    delivery: true,
    type: ['地推活动'],
    resource: '线下场地免费',
    desc: '传单派发,通过地推方式给予最大折扣力度吸引用户到店消费'
  }
]

module.exports = [
  {
    url: '/vue-element-admin/forms/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: form.length,
          items: form
        }
      }
    }
  }
]

