<template>
  <div class="app-container">
    <BlogHeader />
    <RouterView />
    <BlogFooter />
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader'
import BlogFooter from '@/components/BlogFooter'
export default {
  name: 'BlogSystemApp',
  components: {
    BlogHeader,
    BlogFooter,
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="less" scoped>
.app-container {
  width: 1000px;
  min-height: 200px;
  border: 1px solid #40b784;
  margin: 50px auto;
  box-shadow: 0 0 30px 0 #40b784;
  box-sizing: border-box;
}
</style>
