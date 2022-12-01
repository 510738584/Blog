<template>
  <div class="add-container">
    <div class="add-main">
      <div class="row">
        <div class="text">博客标题：</div>
        <div class="inp">
          <input type="text" placeholder="请输入标题" v-model="dataObj.title" />
        </div>
      </div>
      <div class="row">
        <div class="text">作者：</div>
        <div class="inp">
          <input
            type="text"
            placeholder="请输入作者"
            v-model="dataObj.author"
          />
        </div>
      </div>
      <div class="row">
        <div class="text">博客分类：</div>
        <div class="inp">
          <select v-model="dataObj.classify">
            <option
              v-for="item in typeArr"
              :key="item.id"
              :value="item.classname"
            >
              {{ item.classname }}
            </option>
          </select>
        </div>
      </div>
      <div class="row rowArea">
        <div class="text">主体内容：</div>
        <div class="inp">
          <textarea v-model="dataObj.content"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="text"></div>
        <div class="inp"><button @click="onSubmit(dataObj)">提交</button></div>
      </div>
    </div>
    <div class="add-view" v-if="showView">
      <h2>博客预览</h2>
      <BlogItem :itemObj="dataObj" />
    </div>
  </div>
</template>

<script>
import BlogItem from '@/components/BlogItem.vue'
import getType from '@/api/getType.js'
import postItem from '@/api/postItem.js'
import pick from '@/utils/pick'

export default {
  name: 'BlogSystemBlogAdd',
  components: {
    BlogItem,
  },
  data() {
    return {
      dataObj: {
        title: '',
        posttime: new Date().getTime() / 1000,
        content: '',
        classify: '',
        author: '',
      },
      typeArr: [],
    }
  },
  async created() {
    this.typeArr = await getType()
  },
  computed: {
    anyInfo() {
      const resObj = pick(
        this.dataObj,
        'title',
        'content',
        'classify',
        'author'
      )
      const valueArr = Object.values(resObj)
      return valueArr.find((item) => item !== '')
    },
    showView() {
      if (this.anyInfo) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    async onSubmit(obj) {
      for (const prop in obj) {
        if (obj[prop] === '') {
          alert('请填写完整')
          return
        }
      }
      const resp = await postItem(obj)
      if (resp.code === '200') {
        alert(resp.msg)
        this.$router.push({
          name: 'blog',
        })
      }
    },
  },
}
</script>

<style lang="less" scoped>
input,
textarea,
select {
  outline: none;
  padding: 0;
  margin: 0;
}
.add-container {
  padding: 20px;
  .add-main {
    padding: 20px 100px;
    .row {
      display: flex;
      align-items: center;
      padding: 20px 0;
      .text {
        width: 12%;
        text-align-last: justify;
        margin: 0 20px;
        font-size: 14px;
        color: #333;
      }
      .inp {
        width: 50%;
        input,
        select,
        button {
          width: 100%;
          border: 1px solid #40b784;
          border-radius: 5px;
          height: 25px;
          padding-left: 20px;
          transition: 0.3s;
          &:focus {
            box-shadow: 0 0 25px #40b784;
          }
        }
        select {
          width: 50%;
        }
        button {
          width: 50%;
          color: #fff;
          text-align: center;
          background: #40b784;
        }
      }
    }
    .rowArea {
      align-items: flex-start;
      textarea {
        width: 100%;
        height: 150px;
        padding: 5px 10px;
        border: 1px solid #40b784;
        border-radius: 5px;
      }
    }
  }
}
input:focus .inp {
  box-shadow: 0 0 30px rgba(65, 184, 131, 0.6);
}
.add-view {
  margin-top: 50px;
  border-top: 1px solid #ccc;
  padding: 20px 50px;
  h2 {
    text-align: center;
    color: #555;
    font-size: 18px;
  }
}
</style>
