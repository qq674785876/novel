<template>
  <div class="feedback-container">
    <p class="title">求书&反馈</p>
    <div class="select-box">
      <el-select v-model="selectValue" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
		<el-row style="padding: .2rem .4rem;">
			<el-col :span="12" v-if="selectValue === 1"><el-input placeholder="在此输入书名" v-model="bookName" /></el-col>
			<el-col :span="12" v-if="selectValue === 1"><el-input placeholder="在此输入作者" v-model="bookAuthor" /></el-col>
			<el-input v-else type="textarea" rows="5" v-model="feedback" placeholder="在此输入您遇到的问题"></el-input>
		</el-row>
		<a href="javascript:;" class="tj-btn" @click="submit">确认提交</a>
  </div>
</template>

<script>
export default {
  name: "Feedback",
  data() {
    return {
			selectValue: 1,
			bookName: '',
			bookAuthor: '',
			feedback: '',
      options: [
        {
          value: 1,
          label: "求书"
        },
        {
          value: 2,
          label: "反馈"
        }
      ]
    };
  },
  methods: {
		submit(){
			
		}
	},
  created() {}
};
</script>

<style lang="sass" scoped>

.feedback-container
	height: 100vh
  background-color: #fff;
	.title
		font-size: .5rem;
		padding: .6rem .4rem;
	.select-box
		padding: 0 .4rem;
		width: 3rem;
.tj-btn
	display: block;
	margin: .8rem auto;
	width: 90%;
	padding: .3rem 0;
	border-radius: .8rem;
	font-size: .46rem;
	color: #000;
	text-align: center;
	background-color: #FFD400;
</style>

