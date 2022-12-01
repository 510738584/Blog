<template>
  <div class="content-container" ref="contentContainer">
    <BlogItem v-for="item in arrList" :itemObj="item" :key="item.id" />
    <div class="btn-container">
      <button @click="prev">&lt; 上一页</button>
      <button @click="next">下一页 &gt;</button>
    </div>
  </div>
</template>

<script>
import BlogItem from '@/components/BlogItem'
import getItems from '@/api/getItems'
export default {
  name: 'BlogSystemBlogContent',
  components: {
    BlogItem,
  },
  data() {
    return {
      arrList: [],
      pageNum: 1,
    }
  },
  async created() {
    this.arrList = await getItems()
  },
  mounted() {},

  methods: {
    async prev() {
      if (this.pageNum <= 1) {
        alert('已经是第一页了')
        return
      }
      this.pageNum--
      this.arrList = await getItems(this.pageNum)
      document.documentElement.scrollTop = 0
    },
    async next() {
      if (this.arrList.length < 9 || this.arrList.length === 0) {
        alert('没有更多数据了')
        return
      }
      this.pageNum++
      this.arrList = await getItems(this.pageNum)
      document.documentElement.scrollTop = 0
    },
  },
}
</script>

<style lang="less" scoped>
.content-container {
  margin: 30px;
}
.btn-container {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  button {
    background: #fff;
    color: #40b784;
    border: 1px solid #40b784;
    padding: 5px 10px;
    border-radius: 3px;
    margin: 0 5px;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      background: #40b784;
      color: #fff;
    }
  }
}
</style>
