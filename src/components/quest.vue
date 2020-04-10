<template>
  <div id="quest">
    <div id="title">题目
      <span>
        {{this.$store.state.turn + 1}}
      </span>
    </div>
    <p>
      {{questions[this.$store.state.turn].question}}?
    </p>
    <ul>
      <li
        v-for="(option, index) in options"
        :value="index"
        :class="liStyle[index]"
        :key="index"
        @click="xuanze"
      >{{abc[index]}}{{option}}</li>
    </ul>
    <div id="btn">
      <div>
        <button @click="lastquest">上一题</button>
      </div>
      <div>
        <button @click="nextquest">{{nextBtn}}</button>
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
            "“明明可以靠颜值，却偏要靠实力。”她是我电最年轻的副院长，她于_____年来我电工作",
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
      ],
      corrects: new Array(20).fill(false), // 记录选择的答案是否正确
      examid: -1,
      selectNums: new Array(20).fill(-1), // 记录选择的答案，'-1'表示没有选择
      liClass: new Array(4).fill(false),
      liStyle: new Array(4).fill("defaultStyl"),
      abc: ["A.", "B.", "C.", "D."],
      nextBtn: "下一题"
    };
  },
  computed: {
    options() {
      return this.questions[this.$store.state.turn].options.split(",");
    },
    handelCorrects () {
      let resCorrects = [];
      for(let i = 0; i < this.corrects.length; i++) {
        if(this.corrects[i] === true) {
          resCorrects.push(i)
        }
      }
      return resCorrects;
    }
  },
  methods: {
    lastquest() {
      if (this.$store.state.turn == 0) {
        alert("这是第一道题!");
      } else {
        this.$store.commit("reduceTurn");
        this.toggle();
      }
    },
    nextquest() {
      if (this.$store.state.turn == this.questions.length - 1) {
        this.$store.commit("tiJiao", this.corrects);
        // 提交答卷
        this.$http({
          url: 'http://localhost/BiYe2/public/users/submit',
          method: 'post',
          headers: {'Content-Type': 'multipart/form-data'},
          params: {
            openid: this.$store.state.openid,
            examid: this.examid,
            correct: this.handelCorrects
          }
        }).then( (res) => {
          if(res.try === -1) {
            console('err')
          }else if(res.try === 1){
            alert('提交成功')
          } else {
            alert('你已经提交')
          }
        }).catch( (err) => {
          console.log(err)
        })
        this.$router.push("show");
      } else {
        this.$store.commit("addTurn");
        this.toggle();
      }
    },
    xuanze(event) {
      this.selectNums[this.$store.state.turn] = event.target.value;
      if (
        event.target.innerText.endsWith(
          this.questions[this.$store.state.turn].answer
        )
      ) {
        // console.log("答对了"); // 测试
        this.corrects[this.$store.state.turn] = true;
      } else {
        this.corrects[this.$store.state.turn] = false;
        // console.log("答错了"); // 测试
      }
      this.toggle();
    },
    toggle() {
      let targetLiNum = this.selectNums[this.$store.state.turn];
      this.liStyle = new Array(4).fill("defaultStyl");
      if (targetLiNum != -1) {
        this.liStyle[targetLiNum] = "activeStyl";
      }
      if (this.$store.state.turn == this.questions.length - 1) {
        this.nextBtn = "交卷";
      } else {
        this.nextBtn = "下一题";
      }
    }
  },
  mounted: function() {
    // 获取题目信息
    this.$http({
      url: "http://localhost/BiYe2/public/users/getproblem",
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      params: {
        openid: this.$store.state.openid
      }
    })
      .then(res => {
        this.questions = res.data;
        this.examid = res.examid;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
@import url("./../assets/css/index.css");
#title {
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  margin-top: 15vh;
  font-family:  LiSu
}
p {
  text-align: center;
  font-family: LiSu;
  font-size: 1.1em;
  height: 3em;
  padding: 0 2em;
  /* border: 1px solid red; */
}
#title > span {
  /* border: 1px solid #353b48; */
  display: inline-block;
  width: 1em;
  height: 1em;
  line-height: 1em;
  border-radius: 50%;
  box-shadow: 1px 1px 9px  #353b48;
  padding: .01em;
  font-size: .9em;
}
ul {
  margin: 0 auto;
  width: 60vw;
  padding: 0;
}
ul > li {
  list-style: none;
  margin: 1em 0;
  height: 2em;
  line-height: 2em;
  text-indent: .3em;
}
.defaultStyl {
  background-color: rgb(242, 169, 8);
  border-radius: 1vw;
  font-size: 1.2em;
}
.activeStyl {
  background-color: rgb(186, 129, 6);
  border-radius: 1vw;
  font-size: 1.2em;
}
#btn {
  margin: 10vh 15vw;
  display: flex;
  flex-direction: row;
  justify-content:space-around;
}
button {
  width: 7em;
  height: 2.2em;
  background-color: #f0932b;
  border: none;
  color: white;
  /* font-size: 1.3em */
  border-radius: 4px;
  box-shadow: -1px 1px 3px rgb(189, 138, 80);
}
</style>
