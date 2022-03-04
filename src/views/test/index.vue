<template>
  <div class="test-wrapper">
    <ListLayout>
      <template slot="header">
        <Conditions />
      </template>
      <template slot="content">
        <LbTable :column="formData.column" :data="formData.list" :row-class-name="rowClassName" />
      </template>
    </ListLayout>

  </div>
</template>

<script>
import ListLayout from '@/components/ListLayout/index.vue'
import LbTable from '@/components/lb-table/lb-table.vue'
import Conditions from './components/conditions'
// 引入混入对象
import getUsers from './mixin/getUsers'

export default {
  name: 'Test',
  components: {
    ListLayout,
    LbTable,
    Conditions
  },
  mixins: [getUsers],
  data() {
    return {
      formData: {
        column: [
          {
            prop: 'nick',
            label: '昵称' },
          {
            prop: 'phone',
            label: '手机号' },
          {
            prop: 'name',
            label: '真实姓名' },
          {
            prop: 'subject',
            label: '所属学科' },
          {
            prop: 'job',
            label: '职位' },
          {
            prop: 'year',
            label: '工作年限' },
          {
            prop: 'updateTime',
            label: '录入时间' },
          {
            prop: 'actions',
            label: '操作',
            render(_, scope) {
              return (<div class='operateBtn' style='display:flex;justify-content:flex-start'>
                <el-button size='mini' type='success'>编辑</el-button>
                <el-button size='mini' type='danger' style='margin-left:3px'>删除</el-button>
              </div>)
            }
          }
        ],
        list: []
      }
    }
  },
  methods: {
    rowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

<style scoped>
.test-wrapper{
  padding:15px
}
</style>
