<template>
  <div class="user-container">
    <div class="user-header">
      <img :src="userInfo.head" alt>
      <div class="user-info-box">
        <p class="name">{{userInfo.name}}<span class="user-level">({{userInfo.level}})</span></p>
        <p class="time">推送版到期时间：{{userInfo.time}}</p>
        <p class="time">订阅版到期时间：{{userInfo.time}}</p>
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
      }
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang="sass" scoped>
@import '../assets/scss/common.css';

.user-header
  background-color: #fff;
  padding: 1rem .6rem .4rem;
  img
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 100%;
  .user-info-box
    position: absolute;
    left: 3.4rem;
    top: 1rem;
    .name
      font-size: .5rem;
      padding-bottom: .2rem;
      span
        font-size: .42rem;
        color: #999;
    .time
      font-size: .38rem;
      padding-bottom: .1rem;
</style>

