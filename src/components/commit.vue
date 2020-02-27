<template>
  <div id="commit">
    <div id="title">承诺书</div>
    <p>
      党按照德才兼备、以德为先的原则选拔干部，坚持五湖四海、任人唯贤，反对任人唯亲，努力实现干部队伍的革命化、年轻化、知识化、专业化。
    </p>
    <div id="btn">
      <router-link to="/quest" tag="button">开始答题</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'commit'
};
</script>
<style scoped>
@import url('./../assets/css/index.css');
#title {
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  margin-top: 10vh;
  font-family: STXingkai;
}
p {
  border: 1px solid rgb(255, 191, 111);
  width: 10em;
  height: 16em;
  font-size: 1.2em;
  margin: 2em auto;
  text-align: center;
  line-height: 2em;
  padding: 0 12px;
  font-family: KaiTi;
}
button {
  background-color: rgb(246, 174, 68);
  border:none;
  color: white;
  height: 2.2em;
  width: 7em;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: -1px 1px 3px rgb(189, 138, 80);
}
#btn {
  display: flex;
}
</style>
