<template>
  <div class="receiver">
    <span class="receiver__title">
      {{ title }}：
    </span>
    <el-tag
      v-for="tag in list"
      :key="tag"
      closable
      :disable-transitions="false"
      @close="del(tag)"
    >
      {{ tag }}
    </el-tag>
    <el-input
      v-if="inputVisible"
      ref="saveTagInput"
      v-model="val"
      placeholder="例：789@qq.com 或 123@qq.com,456@qq.com"
      class="input-new-tag"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    />
    <el-button
      v-else
      class="button-new-tag"
      @click="showInput"
    >
      + 添加邮箱，支持输入一个或多个，多个以英文逗号(,)分隔
    </el-button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      inputVisible: false,
      val: ''
    }
  },
  methods: {
    del (tag) {
      const dup = this.list.slice(0)
      const index = dup.findIndex(item => item === tag)
      dup.splice(index, 1)
      this.$emit('update:list', dup)
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm () {
      const inputValue = this.val
      if (inputValue) {
        // 这里更新
        // this.dynamicTags.push(inputValue)
        const dup = this.list.slice(0)
        this.$emit('update:list', dup.concat(inputValue.split(',')))
      }
      this.inputVisible = false
      this.val = ''
    }
  }
}
</script>

<style scoped>
/* .receiver + .receiver {
  margin-top: 12px;
} */
.input-new-tag {
    width: 320px!important;
    margin-left: 10px;
  }
  .el-tag,
   .input-new-tag,
  .button-new-tag {
    margin-bottom: 12px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
  }
</style>
