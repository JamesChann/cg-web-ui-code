<template>
  <section class="cg-button">
    <el-button :class="[type ? 'cg-button--' + type : '']"
               @click="handleClick">
      <span class="cg-button__icon"
            v-if="icon">
        <svg-icon :icon-class="icon" />
      </span>
      <slot></slot>
    </el-button>
  </section>
</template>

<script>
export default {
  name: 'cg-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" src="./cg-button.scss" />
