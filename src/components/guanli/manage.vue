<template>
  <div id="manage">
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>问题</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in questions" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.question}}</td>
          <td>
            <a v-bind:a="'/questions/edit?=' + item.id">编辑</a>
            <a v-bind:a="'/questions/delete?id=' + item.id">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'manage',
  data() {
    return {
      questions
    };
  },
  mounted: function() {
    this.$axios({
      methods: 'get',
      url: 'questions',
      data: this.qs.stringify({
        //这里是发送给后台的数据
        openid: 'shuang'
      })
    })
      .then(res => {
        this.questions = res.data;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
@import url('../../assets/css/index.css');
</style>
