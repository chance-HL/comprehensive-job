<template>
  <div class="SwitchRoles">
    <el-radio-group v-model="switchRoles">
      <el-radio-button label="editor" />
      <el-radio-button label="admin" />
    </el-radio-group>
  </div>
</template>

<script>
import checkPermission from '@/utils/permission' // 权限判断函数
export default {
  computed: {
    roles() {
      return this.$store.getters.roles
    },
    switchRoles: {
      get() {
        return this.roles[0]
      },
      set(val) {
        this.$store.dispatch('user/changeRoles', val).then(() => {
          this.$emit('change')
        })
      }
    }
  },
  methods: {
    checkPermission
  }
}
</script>

<style scoped>
.SwitchRoles{
  display: inline-block;
  margin-left: 10px;

}
</style>
