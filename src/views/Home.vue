<template>
  <div class="home">
    <Step1
      ref="step1"
      @down="download"
    />
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
  methods: {
    download () {
      const data = this.$refs.step1.getData()
      const doc = new CVCreator().create(data)
      Packer.toBlob(doc).then(blob => {
        // eslint-disable-next-line
        saveAs(blob, `郑州软件开发中心周报-${data.name}-${dayjs().startOf('week').add(1, 'day').format('YYYYMMDD')}_${dayjs().endOf('week').subtract(1, 'day').format('YYYYMMDD')}.docx`)
      })
    }
  }
}
</script>
