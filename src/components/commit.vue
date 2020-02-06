<template>
  <div id="commit">
    <div id="title">承诺书</div>
    <p>党按照德才兼备、以德为先的原则选拔干部，坚持五湖四海、任人唯贤，反对任人唯亲，努力实现干部队伍的革命化、年轻化、知识化、专业化。</p>
    <div id="btn">
      <router-link to="/quest" tag="button">开始答题</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "commit"
};
</script>
<style scoped>
@import url("./../assets/css/index.css");
#title {
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  margin-top: 10vh;
  font-family: STXingkai;
}
p {
  border: 1px solid rgb(255, 191, 111);
  width: 12em;
  margin: 2em auto;
  text-align: center;
  line-height: 2em;
  padding: 0 12px
}
button {
  background-color: rgb(246, 174, 68);
  border: 0.3px solid black;
  color: white;
  height: 1.8em;
  width: 6em;
  margin: 0 auto;
  border-radius: 2px;
}
#btn {
  display: flex;
}
</style>
