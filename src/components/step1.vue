<template>
  <div>
    <el-card header="一、本周完成重点工作">
      <el-switch
        v-model="isShowCurrentWeekProgress"
        active-text="我需要填写进度"
        inactive-text="我不需要填写进度"
        style="margin-bottom: 15px"
      />
      <MyForm
        ref="currentJob"
        :is-progress="isShowCurrentWeekProgress"
      />
    </el-card>
    <el-card header="二、下周重点工作">
      <MyForm
        ref="nextJob"
        :is-progress="false"
      />
    </el-card>
    <el-card header="三、意见建议">
      <el-input
        v-model="form.suggestion"
        type="textarea"
        autosize
        placeholder="意见建议（不填默认为“暂无”）"
      />
    </el-card>
    <el-card header="四、培训需求">
      <el-input
        v-model="form.train"
        type="textarea"
        autosize
        placeholder="培训需求（不填默认为“暂无”）"
      />
    </el-card>
    <el-card header="五、待解决问题">
      <el-input
        v-model="form.unresolved"
        type="textarea"
        autosize
        placeholder="待解决问题（不填默认为“暂无”）"
      />
    </el-card>
  </div>
</template>

<script>
import MyForm from '@/components/form.vue'
class Form {
  constructor () {
    this.suggestion = ''
    this.train = ''
    this.unresolved = ''
  }
}
export default {
  components: {
    MyForm
  },
  data () {
    return {
      isShowCurrentWeekProgress: true,
      form: new Form()
    }
  },
  methods: {
    getData () {
      return {
        ...this.form,
        isShowCurrentWeekProgress: this.isShowCurrentWeekProgress,
        currentJob: this.$refs.currentJob.formList,
        nextJob: this.$refs.nextJob.formList
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-card {
  margin: 15px 30px 0;
}
</style>
