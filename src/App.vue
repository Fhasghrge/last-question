<template>
  <div id="app">
    <div id="music" @click="changeMusic">
      <img id="musicImg" :src="isMusicon?onimage:offimage" alt="music" />
    </div>
    <!-- 等待解决 -->
    <audio id="musicPlay">
      <source src="./assets/music/bgm.mp3" type="audio/mpeg" />
    </audio>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      onimage: require("./assets/img/musicon.png"),
      offimage: require("./assets/img/musicoff.png"),
      isMusicon: false
    };
  },
  methods: {
    changeMusic() {
      let musicPlay = document.getElementById("musicPlay");
      if (this.isMusicon) {
        this.isMusicon = false;
        musicPlay.pause();
      } else {
        this.isMusicon = true;
        musicPlay.play();
      }
    }
  },
  mounted: function() {
    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      // 获取用户信息
      this.$http({
        url: "http://localhost/BiYe2/public/users/getcode",
        method: "get"
      })
        .then(res => {
          res = JSON.parse(res);
          this.$commit("infoUpdate", res);
        })
        .catch(err => {
          console.log(err);
        });
      // 获取用户答题的次数，如果已经答完题目就直接显示
      this.$http({
        url: "http://localhost/BiYe2/public/users/getuserinfo",
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        params: {
          openid: this.$store.state.openid
        }
      })
        .then(res => {
          if (res.try === 1) {
            this.$commit("updateGrade", res.score);
            this.$router.push("show");
          }
        })
        .catch(err => {
          console.log(err);
        });
      return true;
    } else {
      console.log("不是微信"); // 测试版本
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
