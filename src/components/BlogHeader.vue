<template>
  <div class="header-container">
    <div class="logo">
      <img :src="logoImg" alt="" />
      <h1>
        VueJS
        <span>博客系统</span>
      </h1>
    </div>
    <div class="btn">
      <div class="btn-left">
        <router-link to="blog">博客列表</router-link>
      </div>
      <div class="btn-right">
        <router-link to="add">添加博客</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import logoImg from '@/assets/logo.png'
export default {
  name: 'BlogSystemBlogHeader',

  data() {
    return {
      logoImg,
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 80px;
  background: #40b784;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  .logo {
    display: flex;
    height: 80px;
    align-items: center;
    color: #fff;
    cursor: initial;
    img {
      height: 50px;
    }
    h1 {
      padding-left: 20px;
      font-weight: normal;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
    }
    span {
      display: block;
      font-size: 20px;
      color: #fff;
    }
  }
  .btn {
    & > div {
      width: 100px;
      display: inline-block;
    }
    a {
      color: #fff;
      padding: 5px 10px;
      transition: 0.3s;
      &:hover,
      &.myActive {
        background: #fff;
        border-radius: 5px;
        border: 1px solid #fff;
        color: #40b784;
      }
    }
  }
}
</style>
