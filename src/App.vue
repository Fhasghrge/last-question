<template>
  <div id="app">
    <div id="music" @click="changeMusic">
      <img src="./assets/img/musicoff.png" alt="music" />
    </div>
    <!-- 等待解决 -->
    <!-- <audio autoplay="autoplay">
      <source
        src="./assets/music/bgm.mp3"
        type="audio/mpeg"
      />
    </audio> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    changeMusic() {
      this.$store.commit('turnMusic');
    }
  }
};
</script>

<style>
#music {
  position: fixed;
  right: 8vw;
  top: 8vw;
}
#music > img {
  width: 12vw;
}
</style>
