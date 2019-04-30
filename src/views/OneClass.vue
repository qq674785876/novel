<template>
  <div>
    <div class="my-nav-box">
      <span
        v-for="(nav, index) in myNavArr"
        :class="{active: activeNavIndex === index}"
        @click="activeMyNav(nav.type)"
        :key="index"
      >{{nav.name}}</span>
    </div>
    <div class="book-container" id="scrollBox">
      <div class="book-box clear">
        <div class="book-list pull_left" v-for="(item, index) in bookArr" :key="index" @click="tzUrl()">
          <p class="name">{{item.name}}</p>
          <p class="tips">{{item.num}}本书</p>
          <img :src="item.imgSrc" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneClass",
  data() {
    return {
      myNavArr: [
        {
          name: "出版读物",
          type: 0
        },
        {
          name: "网络文学",
          type: 1
        }
      ],
      activeNavIndex: 0,
      bookArr: [
        {
          name: '小说',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '文学',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '人文社科',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '经济管理',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '计算机与网络',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '成功与励志',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '经济管理',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '计算机与网络',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '成功与励志',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '经济管理',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '计算机与网络',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '成功与励志',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '经济管理',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '计算机与网络',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '成功与励志',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '经济管理',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '计算机与网络',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '成功与励志',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '经济管理',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '计算机与网络',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '成功与励志',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '经济管理',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '计算机与网络',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '成功与励志',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '经济管理',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '计算机与网络',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        },{
          name: '成功与励志',
          num: 213312,
          imgSrc: 'static/images/test/class-1.jpg'
        }
      ]
    };
  },
  //在页面离开时记录滚动位置
  beforeRouteLeave (to, from, next) {
    this.scrollTop = document.getElementById('scrollBox').scrollTop;
    next()
  },
  //进入该页面时，用之前保存的滚动位置赋值
  beforeRouteEnter (to, from, next) {
    next(vm => {
      setTimeout(function(){
        document.getElementById('scrollBox').scrollTop = vm.scrollTop
      }, 400)
    })
  },
  methods: {
    tzUrl: function(bookType){
      var _this =this
      _this.$router.push({path: 'TwoClass',
        query: {
          id: bookType
        }
      })
    },
    activeMyNav: function(type) {
      var _this = this;
      _this.activeNavIndex = type;
    },
  },
  created() {}
};
</script>

<style lang="sass" scoped>
@import '../assets/scss/common.css';

/* 分类导航 */
.my-nav-box
  background-color: #fff;
  text-align: center;
  padding-bottom: .4rem;
  border-bottom: 1px solid #eee;
  box-shadow: 0 0 5px rgba(0,0,0,.3);
  span 
    margin: 0 .4rem;
    &.active::after
      width: 36%;
      left: 32%;
.book-container
  height: calc(100vh - 1.6rem);
  overflow: auto;
  background: #fff;
  .book-box
    padding: 0 .4rem;
    .book-list
      height: 2.8rem;
      width: calc(50% - 1rem);
      padding: 0 .4rem;
      background-color: #f5f5f5;
      border-radius: .2rem;
      margin-top: .4rem;
      position: relative;
      overflow: hidden;
      &:nth-of-type(2n+1)
        margin-right: .4rem;
      .name
        font-size: .4rem;
        padding-top: .6rem;
        font-weight: bold;
        width: 2.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      .tips
        font-size: .32rem;
        color: #666;
        padding-top: .8rem;
      img
        position: absolute;
        bottom: 0;
        right: 0;
        height: 1.6rem;
</style>

