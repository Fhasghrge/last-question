<template>
  <div id="show">
<div id="title">成电毕业生认证</div>
<div id="userbg"><img src="./../assets/img/user.png" alt="图标" width="100" ></div>
<div id="use"> 
{{username}}<br>
{{usergrade}}
</div>
<div id="logo">
      <img src="./../assets/img/GG.png" alt="图标" width="150em" height="150em">
    </div>
<div id="wish">愿亲爱的你<br>不羁过往<br>不畏将来<br>归来仍是少年</div>
  <div id="code"></div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'show'
}
var username="用户名";

var usergrade="分数";
</script>
<style scoped>
@import url('../assets/css/show.css');
#wish {
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 3vh;
  font-family:"STXingkai";
}
#title{
text-align: center;
  margin-top: 8vh;
  font-family: "STXingkai";
font-size: 1.5em;
}
#logo { 
text-align: center;

  margin-top: 20vh;

}
#userbg{
text-align: center;
  margin-top: 3vh;

}
#code{height:85px;
width:85px;
  border: 1px solid white;
  margin-left:5vw;
   margin-top:1vh;
}
</style>
