<template>
  <div class="home">
    <el-collapse
      v-model="activeName"
      accordion
    >
      <el-collapse-item
        :title="`第0步：确认日期（可选） 当前日期 ${dateRange[0]} - ${dateRange[1]}`"
        name="0"
      >
        <el-alert
          title="默认情况，周报的起始日期为本周一至本周五。但是也有特殊情况，比如小长假或是其它原因，这时需要手动改变起始日期"
          type="error"
          style="margin: 15px 0"
        />
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="yyyyMMdd"
          value-format="yyyyMMdd"
        />
      </el-collapse-item>
      <el-collapse-item
        title="第1步：填写表单"
        name="1"
      >
        <Step1
          ref="step1"
        />
      </el-collapse-item>
      <el-collapse-item
        title="第2步：填写“姓名”并“下载Word”"
        name="2"
      >
        <el-form label-width="auto">
          <el-form-item label="你的姓名：">
            <el-input v-model="name" />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              style="margin-top: 20px"
              @click="download"
            >
              下载Word
            </el-button>
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item
        title="第3步：新建邮件"
        name="3"
      >
        <el-alert
          title="标准邮件标题"
          type="success"
          :description="`郑州开发中心-${name || '[先完善姓名]'}-周报-${dateRange[0]}_${dateRange[1]}`"
          style="margin: 15px 0"
        />
        打开 <el-link
          type="primary"
          href="http://mail.chinatelecom.cn/webmail/signOn.do"
          target="_blank"
        >
          邮箱地址
        </el-link> ，新建邮件（提示：也可以在“已发送”中“再次编辑”邮件，这样省去了填写收件人和抄送人的步骤），并将 标准邮件标题 和 Word全部内容 复制粘贴进邮件（如果不是新建而是再次编辑，请确保粘贴过程中“保留邮件签名”）
      </el-collapse-item>
      <el-collapse-item
        title="第4步：确认并发送"
        name="4"
      >
        确认 <el-tag>收件人和抄送人</el-tag>、<el-tag>邮件标题</el-tag>、<el-tag>附件是否已上传</el-tag>、<el-tag>邮件签名</el-tag> 点击发送
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import Step1 from '@/components/step1.vue'
import { saveAs } from 'file-saver'
import { Packer } from 'docx'
import { CVCreator } from '@/components/cv-generator.js'
export default {
  name: 'Home',
  components: {
    Step1
  },
  data () {
    return {
      activeName: '0',
      name: '',
      // eslint-disable-next-line
      dateRange: [dayjs().startOf('week').add(1, 'day').format('YYYYMMDD'), dayjs().endOf('week').subtract(1, 'day').format('YYYYMMDD')]
    }
  },
  methods: {
    download () {
      const data = this.$refs.step1.getData()
      // eslint-disable-next-line
      const doc = new CVCreator().create({ ...data, name: this.name, dateRange: this.dateRange.map(str => dayjs(str).format('YYYY年MM月DD日')) })
      Packer.toBlob(doc).then(blob => {
        saveAs(blob, `郑州软件开发中心周报-${this.name}-${this.dateRange[0]}_${this.dateRange[1]}.docx`)
      })
    }
  }
}
</script>
