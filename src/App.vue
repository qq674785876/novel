<template>
  <div id="app">
    <transition :name="transitionName">
      <navigation>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" class="child-view"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" class="child-view">
          <!-- 这里是不被缓存的视图组件，比如 page3 -->
        </router-view>
      </navigation>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      transitionName: 'slideLeft'
    }
  },
  created () {
    // bind event ， 更多参数移步vue-navigation
    this.$navigation.on('forward', (to, from) => {
      this.transitionName = 'slideLeft'
    })
    this.$navigation.on('back', (to, from) => {
      this.transitionName = 'slideRight'
    })
  }
}
</script>

<style>
.child-view {  
  transition: all .3s ease;
} 
.slideLeft-enter,
.slideRight-leave-to {
  opacity: 0;
  transform: translate(100%, 0);
}
.slideRight-enter,
.slideLeft-leave-to {
  opacity: 0;
  transform: translate(-100%, 0);
}
</style>
