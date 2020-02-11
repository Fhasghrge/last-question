<template>
  <div id="quest">
    <div id="title">题目</div>
    <p>{{questions[this.$store.state.turn].question}}?</p>
    <ul>
      <li>A.{{questions[this.$store.state.turn].options.split(",")[0]}}</li>
      <li>B.{{questions[this.$store.state.turn].options.split(",")[1]}}</li>
      <li>C.{{questions[this.$store.state.turn].options.split(",")[2]}}</li>
      <li>D.{{questions[this.$store.state.turn].options.split(",")[3]}}</li>
    </ul>
    <div id="btn">
      <div>
        <button @click="lastquest">上一题</button>
      </div>
      <div>
        <button @click="nextquest">下一题</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "quest",
  data() {
    return {
      questions: [
        {
          id: 21,
          question: "清水河校区主楼一共有几层",
          options: "5,6,7,8",
          answer: "8",
          type: "基础知识",
          show_time: 0,
          pass_time: 0
        },
        {
          id: 11,
          question: "我电本科专业共有多少个",
          options: "63,61,56,51",
          answer: "63",
          type: "基础知识",
          show_time: 0,
          pass_time: 0
        },
        {
          id: 37,
          question: "清水河校区哪个食堂的男生最多",
          options: "银桦餐厅,桃园餐厅,家园餐厅,朝阳餐厅",
          answer: "朝阳餐厅",
          type: "基础知识",
          show_time: 0,
          pass_time: 0
        },
        {
          id: 10,
          question: "我电有几个国家级重点实验室",
          options: "2,3,4,5",
          answer: "4",
          type: "基础知识",
          show_time: 0,
          pass_time: 0
        },
        {
          id: 50,
          question:
            "“明明可以靠颜值，却偏要靠实力。“她是我电最年轻的副院长，她于_____年来我电工作",
          options: "2014,2015,2016,2017",
          answer: "2015",
          type: "名教师",
          show_time: 0,
          pass_time: 0
        },
        {
          id: 55,
          question: "下列选项中，在大一必修的两门课是",
          options:
            "毛概与概率论,微积分和信号与系统,大学物理和马原,近代史和思修",
          answer: "近代史和思修",
          type: "名课程",
          show_time: 1,
          pass_time: 1
        },
        {
          id: 62,
          question: "刘若英来过我电_____次",
          options: "1,2,3,4",
          answer: "3",
          type: "名讲座",
          show_time: 0,
          pass_time: 0
        },
        {
          id: 84,
          question: "2019年成都版快闪《我和我的祖国》，我电共有多少学子参加",
          options: "40人,50人,60人,70人",
          answer: "70人",
          type: "大事记",
          show_time: 1,
          pass_time: 0
        },
        {
          id: 83,
          question:
            "我电在2014-2018年中国高校创新人才培养暨学科竞赛评估中排名第几",
          options: "1,2,3,4",
          answer: "4",
          type: "大事记",
          show_time: 1,
          pass_time: 0
        },
        {
          id: 64,
          question: "我电清水河校区幼儿园建设于几号启动",
          options: "5.1,5.11,6.1,6.11",
          answer: "6.1",
          type: "大事记",
          show_time: 0,
          pass_time: 0
        }
      ]
    };
  },
  methods: {
    lastquest() {
      if(this.$store.state.turn == 0) {
        alert('这是第一道题!')
      }else {
        this.$store.commit('reduceTurn')
      }
    },
    nextquest() {
      if(this.$store.state.turn == this.questions.length - 1) {
        this.$router.push('show')
      }else {
        this.$store.commit('addTurn')
      }
    }
  },
};
</script>
<style scoped>
@import url("./../assets/css/index.css");
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
li {
  list-style: none;
  margin-top: 5vh;
  background-color: rgb(242, 169, 8);
  border-radius: 1vw;
  font-size: 1.2em;
  width: 70vw;
  height: 1.5em;
  padding: 0 2vw;
}
#btn {
  margin: 10vh auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
button {
  width: 7em;
  height: 2.2em;
  background-color: rgb(237, 163, 5);
  border: 0.1px solid black;
  color: white;
  /* font-size: 1.3em */
  border-radius: 4px;
}
</style>
