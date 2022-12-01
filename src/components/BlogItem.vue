<template>
  <div class="blog-item">
    <div class="blog-item-header">
      <h2 class="title">{{ resetStr(itemObj.title, 15) }}</h2>
      <span class="date">{{ formatDate(itemObj.posttime, true) }}</span>
    </div>
    <div class="blog-item-content">
      {{ resetStr(itemObj.content, 300) }}
    </div>
    <div class="blog-item-info">
      <div class="category">
        文章分类：<span>{{ itemObj.classify }}</span>
      </div>
      <div class="auth">
        作者：<span>{{ itemObj.author }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from '@/utils/formatTime'
import resetStr from '@/utils/resetStr'

export default {
  name: 'BlogSystemBlogItem',
  props: {
    itemObj: {
      type: Object,
      default: () => ({
        title: 123,
        posttime: 11111111111,
        content: 7654321,
        classify: 'js',
        author: '加里奥德曼',
      }),
    },
  },
  mounted() {},
  methods: { formatDate, resetStr },
}
</script>

<style lang="less" scoped>
.blog-item {
  margin: 30px 0;
  .blog-item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 22px;
      color: #333;
    }
    .date {
      font-size: 12px;
      color: #666;
    }
  }
  .blog-item-content {
    margin: 10px 0;
    background: #f5f5f5;
    line-height: 1.6em;
    font-size: 14px;
  }
  .blog-item-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .category {
      font-size: 10px;
      color: #666;
      span {
        font-size: 12px;
        color: #333;
      }
    }
    .auth {
      font-size: 10px;
      color: #666;
      span {
        font-size: 12px;
        color: #333;
      }
    }
  }
}
</style>
