<template>
  <div class="app-container">
    <elForms :form="form" />
  </div>
</template>

<script>
import elForms from '@/components/ElForms'
import { getForms } from '@/api/forms'
export default {
  components: { elForms },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  created() {
    getForms().then((res) => {
      const { code, data } = res
      if (Number(code) === 20000) {
        const { items } = data
        this.form = items[0]
      }
    })
  }

}
</script>

