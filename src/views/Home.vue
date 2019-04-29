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
              <img :src="item.imgSrc" alt style="width: 100%;">
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
          <span class="time">
            距离结束
            <i>6</i>天
            <i>24</i>小时
          </span>
        </p>
        <div class="heng-book-container">
          <div class="heng-book-box">
            <div class="heng-book-list" v-for="(item, index) in activityBookArr" :key="index" @click="gnJump(item.path)">
              <img :src="item.imgSrc" alt>
              <p class="title">去推送</p>
            </div>
          </div>
        </div>
      </div>
      <div class="shelf-list one-book">
        <p class="title clear">
          本周新书
          <a href="javascript:;" class="pull_right">
            全部
            <i class="iconfont icon-iconzhengli-"></i>
          </a>
        </p>
        <div class="one-book-box clear" @click="goBookDetails">
          <img src="static/images/test/book-1.jpg" alt>
          <div class="right-content">
            <p class="title">曾今，我爱国一个少年的人很大爱戴曾今，我爱国一个少年的人很大爱戴</p>
            <p class="tips">两分钟的高能量的暴增发</p>
          </div>
        </div>
      </div>
      <div class="shelf-list">
        <p class="title clear">
          近期更新
          <a href="javascript:;" class="pull_right">
            全部
            <i class="iconfont icon-iconzhengli-"></i>
          </a>
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
    <div class="bookshelf-container" v-else>
      <div class="shelf-list">
        <div class="shu-book-box">
          <div class="shu-book-list clear" v-for="(item, index) in recentUpdateArr" :key="index">
            <img src="static/images/test/book-1.jpg" alt>
            <div class="right-content">
              <p class="title">曾今，我爱国一个少年的人很大爱戴曾今，我爱国一个少年的人很大爱戴</p>
              <p class="tips">两分钟的高能量的暴增发人很大爱戴人很大爱戴人很大爱戴人很大爱戴人很大爱戴人很大爱戴人很大爱戴人很大爱戴人很大爱戴人很大爱戴</p>
              <p class="author">张震<span>推送151301次</span></p>
            </div>
          </div>
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
        {
          imgSrc: "static/images/index/1@2x.png"
        },
        {
          imgSrc: "static/images/index/2@2x.png"
        },
        {
          imgSrc: "static/images/index/3@2x.png"
        },
        {
          imgSrc: "static/images/index/4@2x.png"
        }
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
      activityBookArr: [
        {
          imgSrc: "static/images/test/book-1.jpg",
          path: 'OneClass'
        },
        {
          imgSrc: "static/images/test/book-2.jpg"
        },
        {
          imgSrc: "static/images/test/book-1.jpg"
        },
        {
          imgSrc: "static/images/test/book-2.jpg"
        },
        {
          imgSrc: "static/images/test/book-1.jpg"
        },
        {
          imgSrc: "static/images/test/book-2.jpg"
        }
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
    getAdvertList: function(){
      var _this = this;
      _this.$ajax.get('/v1/advertList').then((res) => {
      // 　　console.log(res)
      })
    },
    activeMyNav: function(type) {
      var _this = this;
      _this.activeNavIndex = type;
    },
    gnJump(path){
      var _this =this;
      _this.$router.push({path: path})
    },
    goBookDetails(){
      var _this =this;
      _this.$router.push({path: 'BookDetails'})
    }
  },
  created: function() {
    var _this = this;
    document.body.style.display = "block"
    // this.$toast.center('已经加入推送队列');
    _this.getAdvertList()
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