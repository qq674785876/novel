<template>
  <div class="container" :class="{myCollection: activeNavIndex === 1}" id="scrollBox">
    <div class="header-box">
      <div class="search-box">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜索" readonly @click="$router.push({path: 'Search'})">
      </div>
      <div class="my-nav-box">
        <span
          v-for="(nav, index) in myNavArr"
          :class="{active: activeNavIndex === index}"
          @click="activeMyNav(nav.type)"
          :key="index"
        >{{nav.name}}</span>
      </div>
      <div v-if="activeNavIndex === 0">
        <div class="swiper-box">
          <swiper :options="swiperOption()">
            <!-- slides -->
            <swiper-slide v-for="(item, index) of swiperArr" :key="index">
              <img :src="item.image" alt style="width: 100%;">
            </swiper-slide>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="gn-box clear">
          <div class="gn-list pull_left" v-for="(item, index) in gnArr" :key="index" @click="gnJump(item.path)">
            <img :src="item.imgSrc" alt>
            <p class="name">{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bookshelf-container" v-if="activeNavIndex === 0">
      <div class="shelf-list">
        <p class="title clear">
          拓广对世界的认知与眼界
          <a href="javascript:;" class="pull_right">
            查看详情
            <i class="iconfont icon-iconzhengli-"></i>
          </a>
        </p>
        <p class="sub-title">
          <span class="tag">免费推送</span>
          <span class="time" v-if="activityBook.expireTime" v-html="activityBook.expireTime"></span>
          <span class="time" v-else>已过期</span>
        </p>
        <div class="heng-book-container">
          <div class="heng-book-box">
            <div class="heng-book-list" v-for="(item, index) in activityBook.books" :key="index" @click="gnJump(item.path)">
              <img :src="item.imgSrc" alt>
              <p class="title">{{item.name || '去推送'}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="shelf-list one-book" v-if="thisWeekNewBook && thisWeekNewBook.books.length > 0">
        <p class="title clear">
          本周新书
          <a href="javascript:;" class="pull_right">
            全部
            <i class="iconfont icon-iconzhengli-"></i>
          </a>
        </p>
        <div class="one-book-box clear" @click="goBookDetails">
          <img :src="thisWeekNewBook.books[0].img" alt>
          <div class="right-content">
            <p class="title">{{thisWeekNewBook.books[0].title}}</p>
            <p class="tips">{{thisWeekNewBook.books[0].text}}</p>
          </div>
        </div>
      </div>
      <div class="shelf-list">
        <p class="title clear sign">
          本周推荐
          <a href="javascript:;" class="pull_right">
            全部
            <i class="iconfont icon-iconzhengli-"></i>
          </a>
        </p>
        <div class="shu-book-box">
          <div class="shu-book-list clear" v-for="(item, index) in thisWeekRecommendBook.books" :key="index">
            <img :src="item.img" alt>
            <div class="right-content">
              <p class="title">{{item.title}}</p>
              <p class="tips">{{item.text}}</p>
              <p class="author">{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="shelf-list">
        <p class="title clear">
          杂志更新
          <a href="javascript:;" class="pull_right">
            查看全部
            <i class="iconfont icon-iconzhengli-"></i>
          </a>
          <p class="sub-title sign" v-html="updateMagazineBook.expireTime"></p>
        </p>
        <div class="heng-book-container">
          <div class="heng-book-box">
            <div class="heng-book-list" v-for="(item, index) in updateMagazineBook.books" :key="index" @click="gnJump(item.path)">
              <img :src="item.imgSrc" alt>
              <p class="title">{{item.name || '去推送'}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="shelf-list" v-for="(homePageItem, index) in homePageArr" :key="index">
        <p class="title clear sign">
          {{homePageItem.title}}
          <a href="javascript:;" class="pull_right">
            查看更多
            <i class="iconfont icon-iconzhengli-"></i>
          </a>
        </p>
        <div class="shu-book-box">
          <div class="shu-book-list clear" v-for="(item, index) in homePageItem.books" :key="index">
            <img :src="item.img" alt>
            <div class="right-content">
              <p class="title">{{item.title}}</p>
              <p class="tips">{{item.text}}</p>
              <p class="author">{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bookshelf-container" v-else>
      <div class="shelf-list">
        <div class="shu-book-box" v-if="collectBook.length > 0">
          <div class="shu-book-list clear" v-for="(item, index) in collectBook" :key="index">
            <img :src="item.img" alt>
            <div class="right-content">
              <p class="title">{{item.title}}</p>
              <p class="tips">{{item.text}}</p>
              <p class="author">{{item.name}}<span>推送151301次</span></p>
            </div>
          </div>
        </div>
        <div class="no-book-tips" v-else>
          赶紧去添加书籍到收藏吧~
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
import { setTimeout } from 'timers';

export default {
  name: "Index",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      myNavArr: [
        {
          name: "推荐",
          type: 0
        },
        {
          name: "我的收藏",
          type: 1
        }
      ],
      activeNavIndex: 0,
      swiperOption: function() {
        var _this = this;
        return {
          autoplay: true,
          pagination: {
            el: ".swiper-pagination"
          },
          loop: true
        };
      },
      swiperArr: [
        // {
        //   image: "static/images/index/1@2x.png",
        //   title: '',
        //   url: ''
        // },
        // {
        //   image: "static/images/index/2@2x.png",
        //   title: '',
        //   url: ''
        // },
        // {
        //   image: "static/images/index/3@2x.png",
        //   title: '',
        //   url: ''
        // },
        // {
        //   image: "static/images/index/4@2x.png",
        //   title: '',
        //   url: ''
        // }
      ],
      gnArr: [
        {
          imgSrc: "static/images/index/icon-1@2x.png",
          name: "全部书籍",
          path: 'OneClass'
        },
        {
          imgSrc: "static/images/index/icon-2@2x.png",
          name: "杂志期刊",
          path: 'Magazine'
        },
        {
          imgSrc: "static/images/index/icon-3@2x.png",
          name: "成长学堂"
        },
        {
          imgSrc: "static/images/index/icon-4@2x.png",
          name: "邀请好友"
        },
        {
          imgSrc: "static/images/index/icon-5@2x.png",
          name: "个人中心",
          path: 'UserCenter'
        }
      ],
      activityBook: {
        books: []
      },
      thisWeekNewBook: {
        books: []
      },
      thisWeekRecommendBook:{
        books: []
      },
      updateMagazineBook:{
        books: []
      },
      collectBook: {
        books: []
      },
      homePageArr: []
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
    getHomePageBook: function(){
      var _this = this
      return _this.$ajax.get('/v1/homePage').then((res) => {
        var result = res.result
        _this.homePageArr = result
      })
    },
    getAdvertList: function(){
      var _this = this
      return _this.$ajax.get('/v1/advertList').then((res) => {
          var result = res.result
          _this.swiperArr = result
          for(var i = 0 ; i < result.length; i++){
            if(!result[i].image){
              result[i].image = 'static/images/index/'+(i+1)+'@2x.png'
            }
          }
      })
    },
    getActivityList: function(type){
      var _this = this
      return _this.$ajax.get('v1/activity?type=' + type).then((res) => {
          var result = res.result
          switch(type){
            case 0:
              _this.activityBook = result;
              break;
            case 1:
              _this.thisWeekNewBook = result;
              break;
            case 2:
              _this.thisWeekRecommendBook = result;
              break;
            case 3:
              _this.updateMagazineBook = result;
              break;
            default: '';
          }
      })
    },
    getCollectList: function(){
      var _this = this
      _this.$loading.open('加载中')
      _this.$ajax.get('v1/collectList')
        .then((res) => {
          var result = res.result
          _this.collectBook = result
          _this.$loading.close()
        })
    },
    activeMyNav: function(type) {
      var _this = this
      _this.activeNavIndex = type
      if(type === 1) _this.getCollectList()
    },
    gnJump(path){
      var _this =this
      _this.$router.push({path: path})
    },
    goBookDetails(){
      var _this =this
      _this.$router.push({path: 'BookDetails'})
    }
  },
  created: function() {
    var _this = this;
    document.body.style.display = "block"
    // this.$toast.center('已经加入推送队列');
    _this.$loading.open('加载中')
    _this.$ajax.all([
        _this.getAdvertList(),  //加载轮播图
        _this.getActivityList(0), //加载免费推送模块
        _this.getActivityList(1), //加载本周新书
        _this.getActivityList(2), //加载本周推荐
        _this.getActivityList(3), //加载本周推荐
        _this.getHomePageBook() //获取分类小说模块
      ])
      .then(_this.$ajax.spread((acct, perms) => {
        _this.$loading.close()
      }))
      .catch(function (error) {
        console.log(error)
      })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/common.css';

.container{
  height: 100vh;
  overflow: auto;
}
.iconfont {
  font-size: 0.76rem;
  color: #ccc;
}
.header-box {
  padding: 0.4rem;
  background-color: #fff;
}
.search-box {
  position: relative;
}
.search-box input {
  height: 1rem;
  width: 100%;
  border-radius: 1rem;
  border: 1px solid #ccc;
  text-indent: 1rem;
  font-size: 0.4rem;
}
.search-box .iconfont {
  position: absolute;
  left: 0.2rem;
  top: 0.15rem;
}

/*轮播图*/
.swiper-box {
  padding: 0.4rem 0;
}
.swiper-pagination {
  text-align: right;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  left: -0.4rem;
}
.swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.8);
}
.swiper-pagination-bullet-active {
  background: #fff;
}

/* 功能模板 */
.gn-box {
}
.gn-box .gn-list {
  width: 20%;
  text-align: center;
  font-size: 0.38rem;
}
.gn-box .gn-list img {
  width: 100%;
}
</style>