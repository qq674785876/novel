<template>
  <div class="user-container">
    <div class="user-header">
      <img :src="userInfo.head" alt>
      <div class="user-info-box">
        <p class="name">{{userInfo.name}}  <span class="user-level">({{userInfo.level}})</span></p>
        <p class="time">推送版到期时间：{{userInfo.time}}</p>
        <p class="time">订阅版到期时间：{{userInfo.time}}</p>
      </div>
    </div>
    <div class="set-box" v-for="(item, index) in setArr" :key="index">
      <div class="set-list" v-for="(list, listIndex) in item" :key="listIndex" @click="gnJump(list.url)">
        <img :src="list.icon" alt="">
        <span>{{list.name}}</span>
        <i class="iconfont icon-iconzhengli-"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCenter",
  data() {
    return {
      userInfo: {
        head: "static/images/test/book-1.jpg",
        name: "用户名",
        level: '高级会员',
        time: '2019-05-29'
      },
      setArr: [
        [
          {
            name: '购买会员',
            url: 'BuyMember',
            icon: 'static/images/userCenter/icon-1.png'
          }
        ],
        [
          {
            name: '推送码激活',
            url: 'InviteCodeActive',
            icon: 'static/images/userCenter/icon-2.png'
          },{
            name: '推送记录',
            url: '',
            icon: 'static/images/userCenter/icon-3.png'
          },{
            name: '杂志订阅',
            url: 'Magazine',
            icon: 'static/images/userCenter/icon-4.png'
          },{
            name: '缺书登记',
            url: 'Feedback',
            icon: 'static/images/userCenter/icon-5.png'
          }
        ],
        [
          {
            name: '邮箱设置',
            url: 'MailSet',
            icon: 'static/images/userCenter/icon-6.png'
          }
        ]
      ]
    };
  },
  methods: {
    gnJump(path){
      var _this =this;
      _this.$router.push({path: path})
    }
  },
  created() {}
};
</script>

<style lang="sass" scoped>
@import '../assets/scss/common.css';

.user-header
  background-color: #fff;
  padding: .6rem .6rem .4rem;
  img
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 100%;
  .user-info-box
    position: absolute;
    left: 3.4rem;
    top: .6rem;
    .name
      font-size: .5rem;
      padding-bottom: .2rem;
      span
        font-size: .42rem;
        color: #999;
    .time
      font-size: .38rem;
      padding-bottom: .1rem;
      color: #676869;
.set-box
  font-size: .48rem;
  background-color: #fff;
  margin-top: .4rem;
  .set-list
    position: relative;
    padding: .4rem .6rem;
    position: relative;
    &::after
      position: absolute;
      content: '';
      bottom: 0;
      left: 1.7rem;
      width: calc(100% - 1.7rem);
      border-bottom: 1px solid #eee;
    &:last-child::after
      border-bottom: 0;
    span
      position: relative;
      top: -.04rem;
    img
      width: .6rem;
      padding-right: .4rem;
      position: relative;
      top: .1rem;
    .icon-iconzhengli-
      font-size: 1rem;
      position: absolute;
      top: .24rem;
      right: .6rem;
      color: #ccc;
</style>

