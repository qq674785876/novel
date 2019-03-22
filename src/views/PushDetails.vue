<template>
  <div class="pushDetails-container">
    <div class="push-info">
      <p class="title">已加入推送队列</p>
      <p class="tips">（一般2-10分钟可以完成推送）</p>
      <p class="info">
        书名：
        <span class="cont">{{bookInfo.name}}</span>
      </p>
      <p class="info">
        接收地址：
        <span class="cont">{{bookInfo.receiveAddr}}</span>
      </p>
      <p class="info">
        发送地址：
        <span class="cont">{{bookInfo.sendAddr}}</span>
      </p>
    </div>
    <div class="bookshelf-container">
      <div class="shelf-list">
        <p class="title sign">进度</p>
        <div class="progress-box">
          <div class="progress-list" v-for="(item, index) in progressArr" :key="index">
            <span class="num">{{index + 1}}</span>
            <span class="name">{{item.name}}</span>
            <span class="time">{{item.time}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bookshelf-container">
      <div class="shelf-list">
        <p class="title sign">帮助</p>
        <div class="help-box">
          <div class="help-list" v-for="(item, index) in helpArr" :key="index">
            <img :src="item.imgSrc" alt="">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PushDetails",
  data() {
    return {
      bookInfo: {
        name: "解忧杂货店",
        receiveAddr: "kindle@kindle.cn",
        sendAddr: "kindle@423du.com"
      },
      helpArr: [{
        name: '使用帮助（推送常见问题）',
        url: '',
        imgSrc: 'static/images/test/book-1.jpg'
      },{
        name: '使用帮助（推送网盘链接）',
        url: '',
        imgSrc: 'static/images/test/book-1.jpg'
      },{
        name: '使用帮助（杂志订阅问题）',
        url: '',
        imgSrc: 'static/images/test/book-1.jpg'
      }],
      progressArr: [{
        name: '提交推送',
        time: '2018-09-01 00:00:00'
      },{
        name: '后台推送',
        time: '2018-09-01 00:00:00'
      },{
        name: '完成推送',
        time: '2018-09-01 00:00:00'
      }]
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang="sass" scoped>
@import '../assets/scss/common.css';

.push-info
  background-color: #fff;
  padding: 0 .4rem .4rem;
  font-size: .42rem;
  .title
    text-align: center;
    font-size: .6rem;
    padding-top: .6rem;
  .tips
    text-align: center;
    font-size: .36rem;
    color: #999;
    padding-bottom: .8rem;
  .info
    padding-bottom: .1rem;
    .cont
      color: #666;
      float: right;
.progress-box
  font-size: .4rem;
  padding-left: .8rem;
  padding-top: .6rem;
  padding-bottom: .6rem;
  .progress-list
    padding-left: .8rem;
    border-left: 4px solid #FFD400;
    padding-bottom: 1rem;
    position: relative;
    &:last-child
      padding-bottom: 0;
    .num
      width: .8rem;
      height: .8rem;
      line-height: .8rem;
      font-size: .4rem;
      color: #3E3508;
      background-color: #FFD400;
      text-align: center;
      position: absolute;
      left: -.45rem;
      top: -.15rem;
      border-radius: 100%;
    .time
      float: right;
      color: #666;
.help-box
  padding: .2rem 0;
  .help-list
    padding: .6rem .2rem;
    img
      width: 2.6rem;
      height: 1.6rem;
      vertical-align: middle;
    span
      font-size: .42rem;
      color: #666;
      padding-left: .4rem;
</style>

