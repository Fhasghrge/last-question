<template>
  <div id="home">
    <div id="logo">
      <img src="./../assets/img/logo.png" alt="图标" />
    </div>
    <div id="main">
      <p>2020年毕业生的最后一次考试</p>
      <p>开考啦！</p>
      <p style="font-size: .8em; font-weight: normal">
        快来看看你对成电有多了解
      </p>
      <router-link to="/commit" tag="button">开始考试</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home'
};
</script>
<style scoped>
@import url('../assets/css/index.css');
#logo {
  border: 1px solid red;
}
#logo > img {
  position: absolute;
  width: 100vw;
  top: 15vh;
}
#main {
  border: 1px solid black;
  border-radius: 3vw;
  width: 80vw;
  margin: 36vh auto;
  padding: 14vh 0 5vh;
  text-align: center;
  background-color: white;
  font-weight: bold;
}
button {
  background-color: rgb(246, 186, 94);
  border: 0.4px solid black;
  border-radius: 4px;
  color: white;
  width: 7em;
  height: 2.2em;
  margin-top: 1em;
}
</style>
