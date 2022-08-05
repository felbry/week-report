<template>
  <div class="home">
    <el-collapse
      v-model="activeName"
    >
      <el-collapse-item
        :title="`第0步：确认日期（可选） 当前日期 ${dateRange[0]} - ${dateRange[1]}`"
        name="0"
      >
        <el-alert
          title="默认情况，周报的起始日期为本周一至本周五。但是也有特殊情况，比如小长假或是其它原因，这时需要手动改变起始日期"
          type="error"
          style="margin: 0 0 8px"
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
          <el-form-item style="margin: 0">
            <el-button
              type="primary"
              @click="download"
            >
              下载Word
            </el-button>
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item
        title="第3步：点击按钮 启动客户端 确认信息并发送"
        name="3"
      >
        <el-alert
          title="标准邮件标题"
          type="success"
          :description="emailTitle"
          style="margin: 0 0 10px"
        />
        <div>
          <el-button
            type="primary"
            style="margin-bottom: 15px"
            @click="copy"
          >
            点击复制 标准邮件标题 并启动本地邮件客户端（foxmail/网易邮箱大师）
            <i
              class="el-icon-d-arrow-right"
            />
          </el-button>
        </div>
        <el-card style="margin-bottom: 15px">
          <div
            slot="header"
            class="clearfix"
          >
            <span>完善<el-tag>收件人和抄送人</el-tag>，自动填充邮件客户端。（缓存本地，一次填写，多次利用）</span>
            <!-- <el-button
              style="float: right; padding: 3px 0"
              type="text"
            >
              操作按钮
            </el-button> -->
          </div>
          <div style="margin-bottom: 10px;">
            邮件客户端（邮件客户端影响邮箱是否填充正确）：
            <el-radio-group
              v-model="radio"
              @change="changeRadio"
            >
              <el-radio label=";">
                foxmail
              </el-radio>
              <el-radio label=",">
                网易邮箱大师
              </el-radio>
            </el-radio-group>
          </div>

          <Receiver
            title="收件人"
            :list="sjList"
            @update:list="updateList('sjList', ...arguments)"
          />
          <Receiver
            title="抄送人"
            :list="csList"
            @update:list="updateList('csList', ...arguments)"
          />
        </el-card>
        在邮件客户端中确认 <el-tag>收件人和抄送人</el-tag>、<el-tag>邮件标题</el-tag>、<el-tag>附件是否已上传</el-tag>、<el-tag>邮件签名</el-tag> 无误，发送邮件
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import Step1 from '@/components/step1.vue'
import Receiver from '@/components/receiver.vue'
import { saveAs } from 'file-saver'
import { Packer } from 'docx'
import { CVCreator } from '@/components/cv-generator.js'
function copyToClip (str) {
  function listener (evt) {
    // 为什么会有两行设置呢？我记得看MDN上提到了一句：是为了降级处理
    // 假如只设置html形式，那么粘贴到input这种文本输入框中是无效的，只能粘贴到富文本域中
    // 举例：对于'<p>123</p>'这个字符串，如果设置成html形式，那么粘贴到文本输入框中为空，富文本域正常
    // 如果两种形式都设置，那么粘到文本输入框就是'<p>123</p>'，富文本域效果同上
    evt.clipboardData.setData('text/html', str)
    evt.clipboardData.setData('text/plain', str)
    evt.preventDefault()
  }
  document.addEventListener('copy', listener)
  document.execCommand('copy')
  document.removeEventListener('copy', listener)
}
export default {
  name: 'Home',
  components: {
    Step1,
    Receiver
  },
  data () {
    return {
      radio: ';',
      sjList: [],
      csList: [],
      activeName: ['0', '2', '3'],
      name: '',
      // eslint-disable-next-line
      dateRange: [dayjs().startOf('week').add(1, 'day').format('YYYYMMDD'), dayjs().endOf('week').subtract(1, 'day').format('YYYYMMDD')]
    }
  },
  computed: {
    emailTitle () {
      return `郑州开发中心-${this.name || '[先填写姓名]'}-周报-${this.dateRange[0]}_${this.dateRange[1]}`
    }
  },
  mounted () {
    this.radio = window.localStorage.getItem('radio') || ';'
    this.sjList = JSON.parse(window.localStorage.getItem('sjList') || '[]')
    this.csList = JSON.parse(window.localStorage.getItem('csList') || '[]')
  },
  methods: {
    changeRadio (val) {
      window.localStorage.setItem('radio', val)
    },
    updateList (key, list) {
      window.localStorage.setItem(key, JSON.stringify(list))
      this[key] = list
    },
    download () {
      const data = this.$refs.step1.getData()
      // eslint-disable-next-line
      const doc = new CVCreator().create({ ...data, name: this.name, dateRange: this.dateRange.map(str => dayjs(str).format('YYYY年MM月DD日')) })
      Packer.toBlob(doc).then(blob => {
        saveAs(blob, `郑州开发中心周报-${this.name}-${this.dateRange[0]}_${this.dateRange[1]}.docx`)
      })
    },
    copy () {
      copyToClip(this.emailTitle)
      this.$confirm('已复制 标准邮件标题，是否立即启动本地邮件客户端？', '提示').then(() => {
        const a = document.createElement('a')
        console.log(this.radio)
        a.href = `mailto:${this.sjList.join(this.radio)}?cc=${this.csList.join(this.radio)}&subject=${this.emailTitle}`
        a.style = 'display: none'
        document.body.appendChild(a)
        a.click()
      }).catch(() => {})
    }
  }
}
</script>
