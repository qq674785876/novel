<template>
  <div class="pushRecord-container">
    <div class="record-list" v-for="(item, index) in pushRecordArr" :key="index">
      <p class="title">{{item.title}}</p>
      <p class="state">推送状态：{{item.pushState === 0 ? '推送成功' : item.pushState === 1 ? '推送失败' : '推送中'}}</p>
      <p class="time">{{item.pushTime}}</p>
      <a href="javascript:;" @click="getDetails(item.id)">查看详情</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PushRecord",
  data() {
    return {
      pushRecordArr: [{
        id: 1,
        title: '解忧杂货店-东野圭吾.mobi',
        pushState: 1,
        pushTime: '2019-01-01 00:00:00'
      },{
        id: 1,
        title: '解忧杂货店-东野圭吾.mobi',
        pushState: 0,
        pushTime: '2019-01-01 00:00:00'
      },{
        id: 1,
        title: '解忧杂货店-东野圭吾.mobi',
        pushState: 1,
        pushTime: '2019-01-01 00:00:00'
      }]
    };
  },
  methods: {
    getDetails(id){
      this.$router.push({
        name: 'PushDetails',
        query: {
          id: id
        }
      })
    }
  },
  created() {}
};
</script>

<style lang="sass" scoped>
.pushRecord-container
  padding: 0 .4rem;
  background-color: #fff;
.record-list
  padding: .4rem 0;
  border-bottom: 1px solid #eee;
  font-size: .4rem;
  color: #676869;
  position: relative;
  p
    padding-bottom: .1rem;
  .state
    color: #666666;
  .time
    color: #3E3508;
  a
    background-color: #FFD400;
    color: #3E3508;
    position: absolute;
    right: .4rem;
    top: 50%;
    transform: translateY(-50%);
    padding: .1rem .4rem;
    border-radius: .4rem;
</style>

