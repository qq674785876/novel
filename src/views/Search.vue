<template>
  <div class="search-container">
    <div class="header-box">
      <div class="search-box">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜索" v-model="searchKey">
      </div>
    </div>
    <div class="history-box" v-if="isShowHistory">
      <p class="name">热门搜索</p>
      <div class="word-box">
        <a
          href="javascript:;"
          class="history-word"
          v-for="(list, index) in historyWordArr"
          :key="index"
          @click="search(list)"
        >{{list}}</a>
      </div>
    </div>
    <div v-else class="shu-book-box">
      <div class="shu-book-list clear" v-for="(item, index) in recentUpdateArr" :key="index">
        <img src="static/images/test/book-1.jpg" alt>
        <div class="right-content">
          <p class="title">曾今，我爱国一个少年的人很大爱戴曾今，我爱国一个少年的人很大爱戴</p>
          <p class="tips">两分钟的高能量的暴增发人很大爱戴人很大爱戴人很大爱戴人很大爱戴人很大爱戴人很大爱戴人很大爱戴人很大爱戴人很大爱戴人很大爱戴</p>
          <p class="author">张震</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchKey: "",
      isShowHistory: true,
      historyWordArr: [
        "狼道",
        "解忧杂货店",
        "东宫",
        "万物简史+生活简史",
        "子弹笔记",
        "子弹笔记",
        "子弹笔记"
      ],
      recentUpdateArr: [
        {
          imgSrc: "static/images/test/book-1.jpg",
          title: "大京东",
          author: "张三",
          tips: "测试测试测试测试测试测试测试"
        },
        {
          imgSrc: "static/images/test/book-2.jpg",
          title: "大京东",
          author: "张三",
          tips: "测试测试测试测试测试测试测试"
        },
        {
          imgSrc: "static/images/test/book-1.jpg",
          title: "大京东",
          author: "张三",
          tips: "测试测试测试测试测试测试测试"
        },
        {
          imgSrc: "static/images/test/book-2.jpg",
          title: "大京东",
          author: "张三",
          tips: "测试测试测试测试测试测试测试"
        },
        {
          imgSrc: "static/images/test/book-1.jpg",
          title: "大京东",
          author: "张三",
          tips: "测试测试测试测试测试测试测试"
        },
        {
          imgSrc: "static/images/test/book-2.jpg",
          title: "大京东",
          author: "张三",
          tips: "测试测试测试测试测试测试测试"
        }
      ]
    };
  },
  methods: {
    search: function(list) {
      var _this = this;
      _this.searchKey = list;
    }
  },
  created() {}
};
</script>

<style lang="sass" scoped>
@import '../assets/scss/common.css';

.search-container
  height: 100vh;
  background-color: #fff;
.iconfont 
  font-size: 0.76rem;
  color: #ccc;
.header-box
  padding: 0.4rem;
  background-color: #fff;
.search-box
  position: relative;
  input
    height: 1rem;
    width: 100%;
    border-radius: 1rem;
    border: 1px solid #ccc;
    text-indent: 1rem;
    font-size: 0.4rem;
  .iconfont
    position: absolute;
    left: 0.2rem;
    top: 0.15rem;

.history-box
  padding: .6rem .6rem 0;
  .name
    padding-bottom: .4rem;
    font-size: .4rem;
  .word-box
    .history-word
      display: inline-block;
      padding: .2rem .4rem;
      background-color: #F0F0F0;
      color: #333;
      margin-right: .4rem;
      font-size: .38rem;
      margin-bottom: .4rem;
      border-radius: .4rem;
      &:active
        background-color: #ccc;

.shu-book-box
  padding: 0 .6rem;
  height: calc(100vh - 2rem);
  overflow: auto;
</style>

