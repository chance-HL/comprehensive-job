<template>
  <div class="conditions-wrapper">
    <el-row :gutter="20" style="width: 100%; display: flex">
      <el-col :span="6" style=" display: flex;">
        <el-input placeholder="昵称">
          <template slot="prepend">昵称</template>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-select v-model="value" placeholder="请选择学科" style="width:100%">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-input placeholder="职位">
          <template slot="prepend">职位</template>
        </el-input>
      </el-col>
      <el-col :span="6" style="display: flex;">
        <el-input placeholder="起">
          <template slot="prepend">工作年限</template>
        </el-input>
        <el-input style="width:100px" placeholder="止" />
      </el-col>
      <el-col :span="6">
        <el-input placeholder="手机号码">
          <template slot="prepend">手机号码</template>
        </el-input>
      </el-col>
      <el-col :span="6" style="display:flex">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="Info" icon="el-icon-refresh-left">重置</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '语文'
      }, {
        value: '选项2',
        label: '数学'
      }, {
        value: '选项3',
        label: '英语'
      }],
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.conditions-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-left: 5px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple-light {
  background: #e5e9f2;
}

</style>
