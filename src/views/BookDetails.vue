<template>
  <div>
    <div class="book-info-box">
      <img :src="bookInfo.bookImgSrc" alt>
      <div class="right-content">
        <p class="title">{{bookInfo.name}}</p>
        <p class="name">{{bookInfo.author}}</p>
        <p class="tips" @click="dialogVisible = true">{{bookInfo.tips}}</p>
        <p class="readNum">
          <span>{{bookInfo.readNum}}</span>人已推送
        </p>
        <div class="btn-box">
          <a href="javascript:;">推送</a>
          <a href="javascript:;">收藏</a>
        </div>
        <i class="iconfont icon-iconzhengli-"></i>
      </div>
    </div>
    <div class="bookshelf-container">
      <div class="shelf-list">
        <p class="title sign">来源分析</p>
        <div class="pushRecord-container">
          <div class="record-list" v-for="(item, index) in pushRecordArr" :key="index">
            <p class="title">{{item.title}}</p>
            <p class="person">分享者：{{item.sharePerson}}</p>
            <p class="url">{{item.url}}</p>
            <a href="javascript:;" @click="getDetails(item.id)">推送链接</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bookshelf-container">
      <div class="shelf-list">
        <p class="title sign">声明</p>
        <div class="statement-box">
          资源均来自互联网公开资源，仅提供搜索及链接推送服务，搜索结果仅供公众号用户个人学习，如有版权问题，请联系相关网盘或网站，资源删除后本站文档将自动失效。
        </div>
      </div>
    </div>
    <el-dialog
      title="简介"
      :visible.sync="dialogVisible"
      width="80%">
      <span>{{bookInfo.tips}}</span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "BookDetails",
  data() {
    return {
      id: null,
      dialogVisible: false,
      bookInfo: {
        name: "解忧杂货店",
        author: "东野圭吾",
        bookImgSrc: "static/images/test/book-1.jpg",
        tips:
          "该书讲述了在僻静街道旁的一家杂货店，只要写下烦恼投进店前门卷帘门的投信...",
        readNum: 123
      },
      pushRecordArr: [
        {
          id: 1,
          title: "解忧杂货店-东野圭吾.mobi",
          sharePerson: "3",
          url: "pan.baidu.com"
        },
        {
          id: 1,
          title: "解忧杂货店-东野圭吾.mobi",
          pushState: 0,
          url: "pan.baidu.com"
        },
        {
          id: 1,
          title: "解忧杂货店-东野圭吾.mobi",
          sharePerson: 1,
          url: "pan.baidu.com"
        }
      ]
    };
  },
  methods: {},
  created() {
    var _this = this;
    _this.id = _this.$route.query.id;
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
      padding: .1rem 0;
    .icon-iconzhengli-
      position: absolute;
      right: -.6rem;
      font-size: .8rem;
      top: 1.58rem;
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
      padding-top: .1rem;
      span
        font-size: .46rem;
    .btn-box
      padding-top: .2rem;
      a
        display: inline-block;
        font-size: .44rem;
        color: #3E3508;
        background: #FFD400;
        padding: .1rem .6rem;
        border-radius: .4rem;
        &:first-child
          margin-right: .4rem;
.pushRecord-container
  background-color: #fff;
  .record-list
    padding: .4rem 0;
    border-bottom: 1px solid #eee;
    font-size: .4rem;
    color: #676869;
    position: relative;
    p
      padding-bottom: .1rem;
    .person
      color: #666666;
    .url
      color: #3E3508;
    a
      background-color: #FFD400;
      color: #3E3508;
      position: absolute;
      right: .4rem;
      top: 50%;
      transform: translateY(-50%);
      padding: .1rem .4rem;
      border-radius: .4rem;
.statement-box
  padding: .4rem .2rem;
  font-size: .38rem;
  color: #676869;
</style>

