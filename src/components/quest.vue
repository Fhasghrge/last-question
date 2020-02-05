<template>
  <div id="quest">
    <div id="title">题目</div>
    <p>电子科技大学位于那个省份?</p>
    <ul>
      <li>A.广东省</li>
      <li>B.四川省</li>
      <li>C.湖南省</li>
      <li>D.湖北省</li>
    </ul>
    <div id="btn">
      <router-link tag="button" to="/commit">上一题</router-link>
      <router-link tag="button" to="/show">下一题</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'quest'
}
</script>
<style scoped>
  @import url('./../assets/css/index.css');
  #title {
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    margin-top: 15vh;
  }
  p {
    text-align: center;
  }
  ul {
    margin: 0 auto;
  }
  li{
    list-style: none;
    margin-top: 5vh;
    background-color: rgb(242, 169, 8);
    border-radius: 1vw;
    font-size: 1.2em;
    width: 70vw;
    height: 1.5em;
    padding: 0 2vw
  }
  #btn {
    margin: 10vh auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around
  }
  button {
    width: 5em;
    height: 1.3em;
    background-color: rgb(237, 163, 5);
    border: .2px solid white;
    color: white;
    font-size: 1.3em
  }
</style>
