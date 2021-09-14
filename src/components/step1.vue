<template>
  <div>
    <h1>一、本周完成重点工作</h1>
    <MyForm
      ref="currentJob"
    />
    <h1>二、下周重点工作</h1>
    <MyForm
      ref="nextJob"
      :is-progress="false"
    />
    <h1>三、意见建议</h1>
    <el-input
      v-model="form.suggestion"
      type="textarea"
      autosize
      placeholder="意见建议（不填默认为“暂无”）"
    />
    <h1>四、培训需求</h1>
    <el-input
      v-model="form.train"
      type="textarea"
      autosize
      placeholder="培训需求（不填默认为“暂无”）"
    />
    <h1>五、待解决问题</h1>
    <el-input
      v-model="form.unresolved"
      type="textarea"
      autosize
      placeholder="待解决问题（不填默认为“暂无”）"
    />
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
      form: new Form()
    }
  },
  methods: {
    getData () {
      return {
        ...this.form,
        currentJob: this.$refs.currentJob.formList,
        nextJob: this.$refs.nextJob.formList
      }
    }
  }
}
</script>

<style>

</style>
