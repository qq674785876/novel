<template>
  <div>
    <p class="step-tips">当前步骤：{{active + 1}}/3</p>
    <div class="step-box">
      <div class="step-list" :class="{active: active >= 0}" @click="activeStep(0)">1</div>
      <div class="step-list" :class="{active: active >= 1}" @click="activeStep(1)">2</div>
      <div class="step-list" :class="{active: active >= 2}" @click="activeStep(2)">3</div>
    </div>
    <div class="bind-mail">
      <p class="tips">{{active === 0 ? '您已绑定的kindle接收邮箱' : active === 1 ? '已为您生成发送邮箱' : '您已绑定成功'}}</p>
      <p class="mail" v-if="active < 2">{{active === 0 ? oldMail : mail}}</p>
    </div>
    <div class="mail-box" v-if="active === 0">
      <el-input placeholder="请输入kindle邮箱" v-model="mail" class="input-with-select">
        <el-select v-model="mailType" slot="append" placeholder="请选择" style="width: 3.4rem;">
          <el-option label="@kindle.cn" value="1"></el-option>
          <el-option label="@zare.cn" value="2"></el-option>
          <el-option label="@mail.cn" value="3"></el-option>
        </el-select>
      </el-input>
    </div>
		<a href="javascript:;" class="bind-btn" @click="bind">{{active === 0 ? '确定绑定' : active === 1 ? '复制上面地址添加到亚马逊信任列表' : '进行推送kindle测试（60S）'}}</a>
		<p class="tips-btn-box">
			<a href="javascript:;" class="tips-btn" v-if="active < 2">{{active === 0 ? 'kindle邮箱是什么?' : active === 1 ? '怎么加入亚马逊信任认可邮箱？' : ''}}</a>
		</p>
  </div>
</template>

<script>
export default {
  name: "MailSet",
  data() {
    return {
			active: 0,
			oldMail: "8612345678@kindle.cn",
			mail: '',
			mailType: '1'
    };
  },
  methods: {
    bind() {
			if(this.active === 0){

			}else if(this.active === 1){

			}else{

			}
      if(this.active < 2) this.active++;
		},
		activeStep(index){
			var _this = this;
			if(index < _this.active){
				_this.active = index;
			}
		}
  },
  created() {}
};
</script>

<style lang="sass" scoped>
.step-tips
	text-align: center;
	font-size: .5rem;
	color: #333;
	padding-top: .8rem;
.step-box
	width: 60%;
	padding: .5rem 0;
	margin: 0 auto;
	padding-top: .6rem;
	border-bottom: 5px solid #ccc;
	position: relative;
	.step-list
		height: 1rem;
		line-height: 1rem;
		width: 1rem;
		text-align: center;
		border: 1px solid #7E7E7E;
		font-size: .5rem;
		background-color: #fff;
		border-radius: 100%;
		position: absolute;
		&:nth-of-type(2)
			left: 50%;
			margin-left: -.5rem;
		&:nth-of-type(3)
			left: inherit;
			right: 0;
		&.active
			background-color: #FFD400;
			border: 0;
.bind-mail
	padding: 1.6rem .6rem .6rem;
	text-align: center;
	font-size: .5rem;
	color: #000;
	.mail
		color: #333;
		font-size: .46rem;
		padding-top: .1rem;
.mail-box
	padding: 0 1rem;
.bind-btn
	display: block;
	margin: .8rem auto;
	width: 80%;
	padding: .3rem 0;
	border-radius: .8rem;
	font-size: .46rem;
	color: #000;
	text-align: center;
	background-color: #FFD400;
.tips-btn-box
	text-align: center;
	font-size: .38rem;
</style>

