<template>
  <div>
    <div class="bind-mail">
      <p class="tips">您已绑定的邀请码</p>
      <p class="mail">{{oldInviteCode}}</p>
    </div>
		<div class="input-box">
			<el-input type="text" v-model="inviteCode" placeholder="请输入您的邀请码"></el-input>
		</div>
		<a href="javascript:;" class="bind-btn" @click="bind">确认绑定</a>
  </div>
</template>

<script>
export default {
  name: "InviteCodeActive",
  data() {
    return {
			oldInviteCode: 'ADS14343',
			inviteCode: ''
    };
  },
  methods: {
    bind() {
		}
  },
  created() {}
};
</script>

<style lang="sass" scoped>
.bind-mail
	padding: 1.6rem .6rem .6rem;
	text-align: center;
	font-size: .5rem;
	color: #000;
	.mail
		color: #333;
		font-size: .46rem;
		padding-top: .1rem;
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
.input-box
	width: 80%;
	margin: 0 auto;
	input
		text-align: center;
</style>

