<template>
  <section class="cg-input">
    <el-input v-model.trim="inner_data_model"
              :class="['cg-input--'+size]"
              :size="size"
              :type="type"
              :placeholder="placeholder"
              @input="_handle_change"
              clearable />
  </section>
</template>

<script>
  export default {
    name: 'cg-input',
    props: {
      dataModel: {
        type: String,
        default: null
      },
      size: {
        type: String,
        default: 'normal'
      },
      type: {
        type: String,
        default: null
      },
      placeholder: {
        type: String,
        default: '请输入'
      }
    },
    data() {
      return {
        inner_data_model: ''
      }
    },
    watch: {
      dataModel: {
        immediate: true,
        handler(data) {
          this.inner_data_model = data
        }
      }
    },
    methods: {
      _handle_change() {
        this.$emit('update:dataModel', this.inner_data_model)
      }
    }
  }
</script>

<style lang="scss" src="./cg-input.scss" />