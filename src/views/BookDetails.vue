<template>
  <div>
    <div class="book-info-box">
      <img :src="bookInfo.bookImgSrc" alt>
      <div class="right-content">
        <p class="title">{{bookInfo.name}}</p>
        <p class="name">{{bookInfo.author}}</p>
        <p class="tips">{{bookInfo.tips}}</p>
        <p class="readNum"><span>{{bookInfo.readNum}}</span>人已订阅</p>
        <i class="iconfont icon-iconzhengli-"></i>
      </div>
    </div>
    <div class="bookshelf-container">
      <div class="shelf-list">
        <p class="title sign">
          往日期刊
        </p>
        <div class="shu-book-box">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "BookDetails",
  data() {
    return {
      id: null,
      bookInfo: {
        name: '时代周刊',
        author: '东野圭吾',
        bookImgSrc: "static/images/test/book-1.jpg",
        tips: '该书讲述了在僻静街道旁的一家杂货店，只要写下烦恼投进店前门卷帘门的投信...',
        readNum: 123
      },
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
  methods: {},
  created() {
    var _this = this;
    _this.id = _this.$route.params.id;
  }
};
</script>

<style lang="sass" scoped>
@import '../assets/scss/common.css';

.book-info-box
  position: relative;
  padding: .6rem .4rem;
  background-color: #fff;
  img
    width: 3rem;
  .right-content
    width: calc(100% - 4.8rem);
    padding-left: 3.8rem;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    .title
      font-size: .5rem;
      font-weight: bold;
    .name
      font-size: .44rem;
      padding: .2rem 0;
    .icon-iconzhengli-
      position: absolute;
      right: -.6rem;
      font-size: .8rem;
      top: 1.74rem;
      color: #ccc;
    .tips
      font-size: .38rem;
      height: 1rem;
      color: #666;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      text-overflow: ellipsis;
    .readNum
      font-size: .34rem;
      padding-top: .2rem;
      span
        font-size: .46rem;
</style>

