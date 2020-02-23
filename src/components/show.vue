<template>
  <div id="show">
    <div id="title">成电毕业生认证</div>
    <div id="userbg">
      <img src="./../assets/img/cat.png" alt="图标" width="70" />
      <div id="head"><img :src="headUrl" /></div>
    </div>
    <div id="username">{{ username }}</div>
    <div id="grade">{{ endGrade }}</div>
    <div id="logo">
      <img
        src="./../assets/img/GG.png"
        alt="图标"
        width="100em"
        height="100em"
      />
    </div>
    <div id="wish">
      愿亲爱的你<br />不羁过往<br />不畏将来<br />归来仍是少年
    </div>
    <div id="code">
      <img src="../assets/img/code.png" alt="二维码" />
      <!-- 有待替换 -->
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'show',
  data() {
    return {
      username: '用户名',
    };
  },
  computed: {
    endGrade() { // 分数计算有待
      return this.$store.state.grade * 10
    },
    headUrl() {
      return this.$store.state.info.headimgurl
    }
  }
};
</script>
<style scoped>
@import url('../assets/css/show.css');
#title {
  text-align: center;
  margin-top: 8vh;
  font-family: 'STXingkai';
  font-size: 1.5em;
}
#head {
  /* border: 1px solid red; */
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: -26px auto 0;
  overflow: hidden;
}
#head > img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
#userbg {
  text-align: center;
}
#userbg > img {
  position: relative;
}
#username {
  text-align: center;
  font-size: 0.8em;
  line-height: 3em;
  color: rgb(151, 128, 82);
  font-weight: bold;
}
#grade {
  font-family: FZShuTi;
  font-size: 3em;
  color: rgb(114, 90, 38);
  text-align: center;
}
#wish {
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  font-family: 'STXingkai';
}
#logo {
  text-align: center;
}
#code > img {
  height: 5em;
  width: 5em;
  margin-left: 5vw;
  margin-top: 1vh;
}
</style>
