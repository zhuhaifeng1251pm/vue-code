<template>
    <div class="main">
        <nav>
            <ul>
                <li>
                    <router-link :to='`/`' :class="{selected:type==='all'}" @click.native="handleClick('all')">全部</router-link>
                </li>
                <li>
                    <router-link :to='`/`' :class="{selected:type==='good'}" @click.native="handleClick('good')">精华</router-link>
                </li>
                <li>
                    <router-link :to='`/`' :class="{selected:type==='share'}" @click.native="handleClick('share')">分享</router-link>
                </li>
                <li>
                    <router-link :to='`/`' :class="{selected:type==='ask'}" @click.native="handleClick('ask')">问答</router-link>
                </li>
                <li>
                    <router-link :to='`/`' :class="{selected:type==='job'}" @click.native="handleClick('job')">招聘</router-link>
                </li>
                <li>
                    <router-link :to='`/`' :class="{selected:type==='dev'}" @click.native="handleClick('dev')">客户端测试</router-link>
                </li>
            </ul>
        </nav>
        <div class="show-list" v-if="topics.length">
            <ul>
                <li v-for="topic in showTAb" :key='topic.id'><img :src="topic.author.avatar_url" alt="">
                    <span style="width:2.5em" class="title-type" :class="{active:topic.good,disappear:type!=='good'&type!=='all'}">{{type!=='good'&type!=='all'?'':topic.tab}}</span>
                    <div class="title">
                        <p>
                            <router-link :to='`/topic/${topic.id}`'>{{topic.title}}</router-link>
                        </p>
                        <p>
                            <span style="color: #9e78c0">{{topic.reply_count }}
                            </span>
                            <span style="color: #333">/</span>
                            <span>{{topic.visit_count }}
                            </span>
                        </p>
                    </div>
                    <span style="border:0;margin:0">
                        {{ topic.last_reply_at | moment("from", "now", true) }}
                    </span>
                </li>
            </ul>
            <el-pagination background small layout="prev, pager, next" :total="1000"
            @current-change='handlePage' :current-page='page'
            >
            </el-pagination>
        </div>
        <div v-else>数据加载中........</div>
    </div>
</template>
<script>
import { URL } from "../assets/Url";
import axios from "axios";
export default {
  name: "home",
  data: () => ({
    topics: [],
    type: "all",
    page:1
  }),
  mounted() {
    axios
      .get(`${URL}/topics`)
      .then(res => {
         console.log(res.data.data)
        this.topics = res.data.data;
      })
      .catch(err => {});
  },
  methods: {
    handleClick(types) {
      // console.log(types)
      this.type = types;
      this.page=1
      axios
        .get(`${URL}/topics/?tab=${this.type}&page=${this.page}`)
        .then(res => {
           console.log(res.data.data)
          this.topics = res.data.data;
        })
        .catch(err => {});
    },
    handlePage(n){
      console.log(n)
      this.page=n
      axios
        .get(`${URL}/topics/?tab=${this.type}&page=${this.page}`)
        .then(res => {
           console.log(res.data.data)
          this.topics = res.data.data;
        })
        .catch(err => {});
    }
  },
  computed: {
    showTAb() { 
    return this.topics.map(t=>({...t,tab:t.good?'精华':t.tab==='ask'?'问答':t.tab==='share'?'分享':' '}))
      }
    }
  
};
</script>


<style scoped>
.main {
  width: 97%;
  background-color: #fff;
  margin-top: 1.5em;
  border-radius: 5px 5px 0 0;
}
.main > nav {
  width: 100%;
  height: 2.9em;
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main > nav > ul {
  display: flex;
  padding: 0;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}
.main > nav > ul > li {
  display: flex;
}
.main > nav > ul > li > a {
  color: #80bd01;
  font-size: 0.8em;
  line-height: 1.2em;
  padding: 3px;
  color: #80bd01;
  background-color: #f6f6f6;
  border-radius: 3px;
}
.main > nav > ul > li > a.selected {
  color: #fff;
  background-color: #80bd01;
}
.main .show-list {
  width: 100%;
  padding: 0 10px;
}
.show-list .el-pagination .is-background {
  width: 100%;
  padding: 0 3px;
}
.main .show-list > ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main .show-list > ul > li {
  display: flex;
  width: 100%;
  align-items: center;
  border-top: 1px solid #f6f6f6;
}
.main .show-list > ul > li > img {
  width: 2em;
}
.main .show-list > ul > li > span {
  border: 1px solid #ccc;
  text-align: center;
  background-color: #fff;
  border-radius: 3px;
  font-size: 0.8em;
  margin-left: 0.5em;
    margin-right: 0.5em;
}
.main .show-list > ul > li .title {
  width: 58%;
}
.main .show-list > ul > li .title > p {
  font-size: 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
.main .show-list > ul > li .title > p > a {
  color: #333;
  font-size: 1em;
  width: 100%;
  line-height: 30px;
}
.main .show-list > ul > li .title > p > span {
  text-align: left;
  line-height: 2em;
  font-size: 0.8em;
  color: #b4b4b4;
}
.main .show-list > ul > li >span.active{
        background: #80bd01;
        color:#fff;
}
.main .show-list > ul > li >span.disappear{
    background-color: #fff;
    border: 0;
}
</style>

