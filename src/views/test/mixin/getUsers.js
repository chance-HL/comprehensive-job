import { getTestList } from '@/api/test.js'

export default {

  created() {
    getTestList().then((res) => {
      const { code, data } = res
      if (Number(code) === 20000) {
        const { items } = data
        this.formData.list = items
      }
    })
  }
}
