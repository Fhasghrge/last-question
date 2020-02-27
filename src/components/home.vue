<template>
  <div id="home">
    <div id="logo">
      <img src="./../assets/img/logo.png" alt="图标" />
    </div>
    <div id="main">
      <div id="title">
        <p>2020年毕业生的最后一次考试</p>
        <p class="animated jackInTheBox " style="font-size: 1.2em">开考啦!</p>
      </div>
      <p style="font-size: 1em; font-weight: normal">快来看看你对成电有多了解</p>
      <router-link to="/commit" tag="button">开始考试</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>
<style scoped>
@import url("./../assets/css/index.css");
#logo {
  /* border: 1px solid red; */
  margin-top: 50px;
  margin-bottom: -170px;
}
#logo > img {
  width: 100vw;
}
#main {
  border: 1px solid black;
  border-radius: 3vw;
  width: 80vw;
  margin: 0vh auto;
  padding: 80px 0 5vh;
  text-align: center;
  background-color: white;
  font-weight: bold;
}
button {
  background-color: rgb(246, 186, 94);
  border: none;
  border-radius: 5px;
  color: white;
  width: 7em;
  height: 2.2em;
  margin-top: 1em;
  box-shadow: -1px 1px 3px rgb(189, 138, 80);
}
p {
  font-family: STXingkai;
  margin: 12px 0;
}
#title {
  margin: 36px 0;
  font-size: 1.2em
}
</style>
