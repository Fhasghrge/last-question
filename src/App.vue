<template>
  <div id="app">
    <div id="music" @click="changeMusic">
      <img id='musicImg' :src="isMusicon?onimage:offimage" alt="music" />
    </div>
    <!-- 等待解决 -->
    <audio id="musicPlay">
      <source
        src="./assets/music/bgm.mp3"
        type="audio/mpeg"
      />
    </audio>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      onimage: require('./assets/img/musicon.png'),
      offimage: require('./assets/img/musicoff.png'),
      isMusicon: false
    }
  },
  methods: {
    changeMusic() {
      let musicPlay = document.getElementById('musicPlay')
      if (this.isMusicon) {
        this.isMusicon = false
        musicPlay.pause()
      }else {
        this.isMusicon = true
        musicPlay.play()
      }
    }
  },
  mounted: function() {
        let ua = window.navigator.userAgent.toLowerCase();
        console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
          // 获取用户信息的模块
          // http://localhost/BiYe2/public/users/getuserinfo 获取用户答题的次数
          axios( {
            url: 'http://localhost/BiYe2/public/users/getuserinfo',
            method: 'post',
            headers: { 'Content-Type': 'multipart/form-data'},
            params: {
              openid: this.$store.state.openid
            }
          }).then( (res) => {
            if(res.try === 1) {
                this.$commit('updateGrade')
                this.$router.push('show')
            }
          }).catch( err => {
            console.log(err)
          })
            return true;
        }
        else {
          console.log('不是微信')
          // window.parent.location.replace('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx135f29e2d2abe22f&redirect_uri=http%3A%2F%2Fbiye.stuhome.com%2Fstaging%2Fwxlogin.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect');
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
