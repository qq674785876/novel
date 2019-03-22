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
      <div class="book-box">
        <div class="notice-switch-box" v-if="activeNavIndex === 2">
          每期更新通知
          <el-switch
            v-model="noticeSwitch"
            active-color="#FFD400">
          </el-switch>
        </div>
        <div class="book-list" v-for="(item, index) in bookArr" :key="index" @click="jump(index)">
          <img :src="item.imgSrc" alt>
          <div class="right-content">
            <p class="name">{{item.name}}</p>
            <p class="tips">{{item.num}}</p>
            <div class="btn-box clear" @click.stop>
              <a href="javascript:;" :class="{'pull_right': activeNavIndex === 1}">推送</a>
              <a href="javascript:;" v-if="activeNavIndex === 0">订阅</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Magazine",
  data() {
    return {
      noticeSwitch: false,
      myNavArr: [
        {
          name: "杂志列表",
          type: 0
        },
        {
          name: "最近更新",
          type: 1
        },
        {
          name: "更新提醒",
          type: 2
        }
      ],
      activeNavIndex: 0,
      newUpdateArr: [{
        name: '时代周刊20200101期',
        num: '2020.01.01更新',
        imgSrc: 'static/images/test/class-1.jpg'
      }],
      magazineArr: [
        {
          name: '小说',
          num: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
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
      ],
      bookArr: []
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
    jump(id){
      var _this = this;
      _this.$router.push({
        name: 'MagazineDetails',
        query: {
          id: id
        }
      })
    },
    activeMyNav: function(type) {
      var _this = this;
      _this.activeNavIndex = type;
      _this.bookArr = [];
      if(type === 0){
        _this.bookArr = _this.magazineArr;
      }else if(type === 1){
        _this.bookArr = _this.newUpdateArr;
      }else{

      }
    },
  },
  created() {
    var _this = this;
    _this.bookArr = _this.magazineArr;
  }
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
    .book-list
      padding: .4rem;
      border-bottom: 1px solid #ccc;
      position: relative;
    img
      width: 3rem;
      border-radius: .2rem;
    .right-content
      width: calc(100% - 4.2rem);
      padding-left: 3.8rem;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      .name
        font-size: .46rem;
        padding-bottom: .1rem;
      .tips
        font-size: .36rem;
        height: 1rem;
        color: #666;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        text-overflow: ellipsis;
      .btn-box
        padding-top: .4rem;
        a
          display: inline-block;
          font-size: .44rem;
          color: #3E3508;
          background: #FFD400;
          padding: .1rem .6rem;
          border-radius: .4rem;
          &:first-child
            margin-right: .4rem;
.notice-switch-box
  font-size: .5rem;
  padding: .5rem .8rem;
  border-bottom: 1px solid #eee;
.el-switch
  float: right;
  transform: scale(1.2);
  position: relative;
  top: 4px;
</style>

