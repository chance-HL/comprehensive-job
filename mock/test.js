const list = [
  {
    nick: 'Brody',
    phone: 18072709958,
    name: '张三丰',
    subject: '数学',
    job: '打野',
    year: 22,
    updateTime: '2021-9-12'

  },
  {
    nick: '杰克',
    phone: 18072709958,
    name: '利昂列夫',
    subject: '英语',
    job: '上单',
    year: 23,
    updateTime: '2022-1-12'

  },
  {
    nick: '艾琳',
    phone: 18072709958,
    name: '黛丝缇妮',
    subject: '语文',
    job: '法师',
    year: 22,
    updateTime: '2022-3-10'
  }
]

module.exports = [
  {
    url: '/vue-element-admin/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]
