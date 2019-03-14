<template>
  <div class="container">
      <div class="header-box">
          <div class="search-box">
              <i class="iconfont icon-sousuo"></i>
              <input type="text" placeholder="搜索">
          </div>
          <div class="my-nav-box">
              <span v-for="(nav, index) in myNavArr" :class="{active: activeNavIndex === index}" @click="activeMyNav(nav.type)" :key="index">{{nav.name}}</span>
          </div>
          <div class="swiper-box">
              <swiper :options="swiperOption()">
                  <!-- slides -->
                  <swiper-slide v-for="(item, index) of swiperArr" :key="index">
                      <img :src="item.imgSrc" alt="" style="width: 100%;">
                  </swiper-slide>
                  <!-- 如果需要分页器 -->
                  <div class="swiper-pagination"  slot="pagination"></div>
              </swiper>
          </div>
          <div class="gn-box clear">
              <div class="gn-list pull_left" v-for="(item, index) in gnArr" :key="index">
                  <img :src="item.imgSrc" alt="">
                  <p class="name">{{item.name}}</p>
              </div>
          </div>
      </div>
      <div class="bookshelf-container">
          <div class="shelf-list">
              <p class="title clear">
                  拓广对世界的认知与眼界
                  <a href="javascript:;" class="pull_right">查看详情<i class="iconfont icon-iconzhengli-"></i></a>
              </p>
              <p class="sub-title">
                  <span class="tag">免费推送</span>
                  <span class="time">距离结束<i>6</i>天<i>24</i>小时</span>
              </p>
              <div class="heng-book-container">
                  <div class="heng-book-box">
                      <div class="heng-book-list" v-for="(item, index) in activityBookArr" :key="index">
                          <img :src="item.imgSrc" alt="">
                          <p class="title">去推送</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="shelf-list one-book">
              <p class="title clear">
                  本周新书
                  <a href="javascript:;" class="pull_right">全部<i class="iconfont icon-iconzhengli-"></i></a>
              </p>
              <div class="one-book-box clear">
                  <img src="static/images/test/book-1.jpg" alt="">
                  <div class="right-content">
                      <p class="title">曾今，我爱国一个少年的人很大爱戴曾今，我爱国一个少年的人很大爱戴</p>
                      <p class="tips">两分钟的高能量的暴增发</p>
                  </div>
              </div>
          </div>
          <div class="shelf-list">
              <p class="title clear">
                  近期更新
                  <a href="javascript:;" class="pull_right">全部<i class="iconfont icon-iconzhengli-"></i></a>
              </p>
              <div class="shu-book-box">
                  <div class="shu-book-list clear" v-for="(item, index) in recentUpdateArr" :key="index">
                      <img src="static/images/test/book-1.jpg" alt="">
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
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'Index',
    components: {
        swiper,
        swiperSlide
    },
	data () {
		return {
			myNavArr: [{
                name: '推荐',
                type: 0
            },{
                name: '我的收藏',
                type: 1
            }],
            activeNavIndex: 0,
            swiperOption: function () {
                var _this = this;
                return {
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop: true,
                }
            },
            swiperArr: [{
                imgSrc: 'static/images/index/1@2x.png'
            },{
                imgSrc: 'static/images/index/2@2x.png'
            },{
                imgSrc: 'static/images/index/3@2x.png'
            },{
                imgSrc: 'static/images/index/4@2x.png'
            }],
            gnArr: [{
                imgSrc: 'static/images/index/icon-1@2x.png',
                name: '全部书籍'
            },{
                imgSrc: 'static/images/index/icon-2@2x.png',
                name: '杂志期刊'
            },{
                imgSrc: 'static/images/index/icon-3@2x.png',
                name: '成长学堂'
            },{
                imgSrc: 'static/images/index/icon-4@2x.png',
                name: '邀请好友'
            },{
                imgSrc: 'static/images/index/icon-5@2x.png',
                name: '签到有礼'
            }],
            activityBookArr: [{
                imgSrc: 'static/images/test/book-1.jpg'
            },{
                imgSrc: 'static/images/test/book-2.jpg'
            },{
                imgSrc: 'static/images/test/book-1.jpg'
            },{
                imgSrc: 'static/images/test/book-2.jpg'
            },{
                imgSrc: 'static/images/test/book-1.jpg'
            },{
                imgSrc: 'static/images/test/book-2.jpg'
            }],
            recentUpdateArr: [{
                imgSrc: 'static/images/test/book-1.jpg',
                title: '大京东',
                author: '张三',
                tips: '测试测试测试测试测试测试测试'
            },{
                imgSrc: 'static/images/test/book-2.jpg',
                title: '大京东',
                author: '张三',
                tips: '测试测试测试测试测试测试测试'
            },{
                imgSrc: 'static/images/test/book-1.jpg',
                title: '大京东',
                author: '张三',
                tips: '测试测试测试测试测试测试测试'
            },{
                imgSrc: 'static/images/test/book-2.jpg',
                title: '大京东',
                author: '张三',
                tips: '测试测试测试测试测试测试测试'
            },{
                imgSrc: 'static/images/test/book-1.jpg',
                title: '大京东',
                author: '张三',
                tips: '测试测试测试测试测试测试测试'
            },{
                imgSrc: 'static/images/test/book-2.jpg',
                title: '大京东',
                author: '张三',
                tips: '测试测试测试测试测试测试测试'
            }]
		}
	},
	methods: {
		activeMyNav: function(type){
			var _this =this;
			_this.activeNavIndex = type;
		},
	},
	created: function(){
		var _this = this;
		document.body.style.display = 'block';

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.iconfont{
    font-size: .76rem;
    color: #ccc;
}
.header-box{
    padding: .4rem;
    background-color: #fff;
}
.search-box{
    position: relative;
}
.search-box input{
    height: 1rem;
    width: 100%;
    border-radius: 1rem;
    border: 1px solid #ccc;
    text-indent: 1rem;
    font-size: .4rem;
}
.search-box .iconfont{
    position: absolute;
    left: .2rem;
    top: .15rem;
}

/* 推荐 收藏导航*/
.my-nav-box{
    color:rgba(117,117,117,1);
    padding: .4rem 0;
    font-size: .5rem;
}
.my-nav-box > span{
    position: relative;
}
.my-nav-box > span.active{
    color: #000;
    font-size: .54rem;
}
.my-nav-box > span.active::after{
    content: '';
    position: absolute;
    width: 80%;
    height: .1rem;
    background-color: #FFD100;
    bottom: -.25rem;
    left: 10%;
    border-radius: .1rem;
}
.my-nav-box > span:first-child{
    margin-right: .4rem;
}

/*轮播图*/
.swiper-box{
    padding: .4rem 0;
}   
.swiper-pagination{
    text-align: right;
}
.swiper-container-horizontal > .swiper-pagination-bullets{
    left: -.4rem;
}
.swiper-pagination-bullet{
    background: rgba(255,255,255,.8);
}
.swiper-pagination-bullet-active{
    background: #fff;
}


/* 功能模板 */
.gn-box{

}
.gn-box .gn-list{
    width: 20%;
    text-align: center;
    font-size: .38rem;
}
.gn-box .gn-list img{
    width: 100%;
}


/* 书架 */
.shelf-container{

}
.title{
    font-weight: bold;
}
.shelf-list{
    margin-top: .4rem;
    padding: .4rem .4rem 0;
    background-color: #fff;
}
.shelf-list > .title{
    padding: .2rem 0;
    font-size: .54rem;
}
.shelf-list > .title a{
    font-size: .36rem;
}
.shelf-list > .title a .iconfont{
    vertical-align: middle;
}
.shelf-list > .sub-title{
    font-size: .36rem;
}
.shelf-list > .sub-title .tag{
    color: #3E3508;
    background-color: #FFD400;
    padding: .1rem .2rem;
    border-top-left-radius: .4rem;
    border-top-right-radius: .4rem;
    border-bottom-right-radius: .4rem;
    margin-right: .1rem;
}
.shelf-list > .sub-title .time{
    color: #666;
}
.shelf-list > .sub-title .time i {
    font-size: .48rem;
    color: #333;
}
.heng-book-container{
    padding: .8rem 0;
    white-space: nowrap;
    overflow: hidden;
    overflow-x: scroll; /* 1 */
}
.heng-book-box{
}
.heng-book-list{
    display: inline-block;
    width: 2.4rem;
    padding: .6rem .6rem 0;
    border: 1px solid rgb(216,216,216);
    text-align: center;
    border-radius: .2rem;
    margin-right: .4rem;
}
.heng-book-list > img{
    width: 100%;
}
.heng-book-list .title{
    padding: .4rem 0;
    font-size: .42rem
}
.one-book-box{
    padding: .4rem;
    border: 1px solid rgb(216,216,216);
    border-radius: .2rem;
    position: relative;
}
.shelf-list.one-book{
    padding-bottom: .4rem;
}
.one-book-box > img{
    width: 2.6rem;
    float: left;
    vertical-align: middle;
}
.one-book-box .right-content{
    width: calc(100% - 3.6rem);
    padding-left: .4rem;
    padding-right: .2rem;
    position: absolute;
    left: 3rem;
    top: 50%;
    transform: translateY(-50%);
}
.one-book-box > .right-content > .title{
    font-size: .5rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.one-book-box > .right-content > .tips{
    font-size: .38rem;
    padding-top: .2rem;
    color:rgba(102,102,102,1);
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
/* 竖排书架 */
.shu-book-box{
    padding-bottom: .4rem;
}
.shu-book-list{
    position: relative;
    margin-top: .6rem;
}
.shu-book-list > img{
    width: 2.6rem;
    float: left;
    vertical-align: middle;
    border-radius: .2rem;
}
.shu-book-list .right-content{
    width: calc(100% - 3.6rem);
    padding-left: .4rem;
    padding-right: .2rem;
    position: absolute;
    left: 3rem;
    top: 50%;
    transform: translateY(-50%);
}
.shu-book-list > .right-content > .title{
    font-size: .5rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.shu-book-list > .right-content > .tips{
    font-size: .38rem;
    padding-top: .1rem;
    color:rgba(102,102,102,1);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}
.shu-book-list > .right-content > .author{
    font-size: .36rem;
    color:rgba(76,76,76,1);
    padding-top: .2rem;
}
</style>