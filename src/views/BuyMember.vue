<template>
  <div class="buy-container">
    <div class="user-header">
      <img :src="userInfo.head" alt>
      <div class="user-info-box">
        <p class="name">
          {{userInfo.name}}
          <span class="user-level">({{userInfo.level}})</span>
        </p>
        <p class="time">推送版到期时间：{{userInfo.time}}</p>
        <p class="time">订阅版到期时间：{{userInfo.time}}</p>
      </div>
    </div>
		<div class="bookshelf-container">
			<div class="shelf-list">
				<p class="title sign">推送会员</p>
				<div class="package-box">
					<div class="package-list" v-for="(item, index) in packageArr" :key="index" @click="selectPackage(item)">
						<span class="name"><i class="recommend" v-if="item.isRecommend">荐</i>{{item.name}}</span>
						<span class="time">{{item.time}}</span>
						<span class="price">￥{{item.price}}<i>原价￥{{item.oldPrice}}</i></span>
						<div class="checkbox">
							<span class="checked" :class="{active: item.id === activePackage.id}"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bookshelf-container package-tips-container">
			<div class="shelf-list">
				<p class="title sign">套餐说明</p>
				<div class="package-tips-box clear">
					<p class="title">
						<span>推送版</span>
						<span>订阅版</span>
						<span>高级版</span>
					</p>
					<div class="tips-box">
						<div class="tips-list" v-for="(item, index) in tipsArr" :key="index">
							<span class="name">{{item.name}}</span>
							<div class="checkbox" v-for="(list, listIndex) in item.ischecked" :key="listIndex">
								<span class="checked" :class="{active: list}"></span>
							</div>
							<span class="tips" v-for="(list, listIndex) in item.text" :key="listIndex">{{list}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="btn-box">
			<p class="price">待支付<span>￥{{activePackage.price}}<i>￥{{activePackage.oldPrice}}</i></span></p>
			<a href="javascript:;">确认支付</a>
		</div>
  </div>
</template>

<script>
export default {
  name: "BuyMember",
  data() {
    return {
			userInfo: {
        head: "static/images/test/book-1.jpg",
        name: "用户名",
        level: '高级会员',
        time: '2019-05-29'
			},
			activePackage: {
				id: 3,
				price: 69,
				oldPrice: 189
			},
			packageArr: [
				{
					name: '书籍推送版',
					time: '1年',
					price: 39,
					oldPrice: 159,
					id: 1,
					isRecommend: false
				},{
					name: '杂志订阅版',
					time: '1年',
					price: 49,
					oldPrice: 169,
					id: 2,
					isRecommend: false
				},{
					name: '综合高级版',
					time: '1年',
					price: 69,
					oldPrice: 189,
					id: 3,
					isRecommend: true
				}
			],
			tipsArr: [
				{
					name: '书籍推送',
					ischecked: [true,true,true],
					text: ''
				},{
					name: '杂志推送',
					ischecked: [true,true,true],
					text: ''
				},{
					name: '杂志订阅',
					ischecked: [false,true,true],
					text: ''
				},{
					name: '链接推送',
					ischecked: [true,false,true],
					text: ''
				},{
					name: '书籍推送限制',
					ischecked: [],
					text: ['20次/天','10次/天','30次/天']
				},{
					name: '缺书登记',
					ischecked: [],
					text: ['10次/月','5次/月','30次/月']
				}
			]
		};
  },
  methods: {
		selectPackage(item){
			var _this =this;
			_this.activePackage = item;
		}
	},
  created() {}
};
</script>

<style lang="sass" scoped>
@import '../assets/scss/common.css';

.buy-container
	padding-bottom: 1.4rem;
	background-color: #fff;

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
.shelf-list
	margin-top: 0;
	border-top: 1px solid #ccc;
	padding: 0;
	& > .title
		padding: .6rem .4rem 0;
		&.sign::after
			left: .4rem;
			bottom: -.2rem;
.package-box
	padding-top: .2rem;
	.package-list
		padding: 0 .6rem;
		height: 1.6rem;
		line-height: 1.65rem;
		border-bottom: 1px solid #ccc;
		color: #333;
		&::after
			content: '';
			display: block;
			clear: both;
		span
			float: left;
			font-size: .42rem;
		.recommend
			background-color: #FFD400;
			padding: .05rem .1rem;
			border-radius: .2rem;
			font-size: .38rem;
			margin-right: .1rem;
		.name
			width: 3.6rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		.time
			margin-right: .2rem;
		.price
			color: #3E3508;
			font-size: .46rem;
			i
				font-size: .4rem;
				color: #C9CCCE;
				text-decoration: line-through;
				margin-left: .2rem;
		.checkbox
			float: right;
			height: .5rem;
			width: .5rem;
			border: 1px solid #ccc;
			border-radius: 100%;
			margin: .5rem .2rem 0 0;
			position: relative;
			.checked
				&.active
					height: .3rem;
					width: .3rem;
					position: absolute;
					top: .1rem;
					left: .1rem;
					background-color: #FFD400;
					border-radius: 100%;
.package-tips-box
	font-size: .4rem;
	color: #999;
	.title
		text-align: right;
		span
			display: inline-block;
			width: 2rem;
			text-align: center;
	.tips-box
		margin-top: .2rem;
		border-top: 1px solid #ccc;
		.tips-list
			height: 1rem;
			line-height: 1rem;
			.name
				display: inline-block;
				width: 3.2rem;
				border-right: 1px solid #ccc;
				padding-left: .6rem;
			.checkbox
				display: inline-block;
				height: .5rem;
				width: .5rem;
				border: 1px solid #ccc;
				border-radius: 100%;
				position: relative;
				left: .6rem;
				top: .15rem;
				&:nth-of-type(2)
					left: 2.12rem;
				&:nth-of-type(3)
					left: 3.65rem;
				.checked
					&.active
						height: .3rem;
						width: .3rem;
						position: absolute;
						top: .1rem;
						left: .1rem;
						background-color: #ccc;
						border-radius: 100%;
		.tips
			display: inline-block;
			width: 2rem;
			text-align: center;
.btn-box
	position: fixed;
	bottom: 0;
	height: 1.4rem;
	line-height: 1.4rem;
	background-color: #333;
	padding: 0 .6rem;
	width: calc(100% - 1.2rem);
	color: #fff;
	font-size: .56rem;
	.price
		span
			color: #D7B402;
			i
				font-size: .46rem;
				color: #999;
				text-decoration: line-through;
	a
		font-size: .56rem;
		background-color: #FFD400;
		color: #3E3508;
		width: 4rem;
		height: 1.4rem;
		line-height: 1.4rem;
		text-align: center;
		position: absolute;
		right: 0;
		top: 0;
</style>

