<template>
    <div class="comments">
        <ul style="padding:0">
            <li v-for="comment in showComments" :key='comment.id'>
                <div class="top">
                    <div class="news">
                    <img :src="comment?comment.author.avatar_url:''" alt="" style="width:30px">
                    <b>
                    {{comment?comment.author.loginname:''}} 
                    </b>
                    <span>
                    {{1}}楼 • {{ comment.last_reply_at | moment("from", "now", true)}}
                    </span></div>
                    <div class="is-goood">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="body" v-html="comment.content">


                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: ["article"],
  computed:{
      showComments(){
          let  num =0
          return this.article?this.article.replies.map(t=>({...t,num:num++})):''
      }
  }
};
</script>
<style>
.comments{
    width: 98%;
    margin: 0 auto;
}
.comments img{
  width: 95%;
     margin: 0 auto;
}
.comments>ul>li{
    border-top: 1px solid #ccc;  
    display: flex;
    flex-direction: column;
}
.comments>ul>li .top{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.comments>ul>li .top .news{
    display: flex;
    align-items: center;
}
.comments>ul>li .top .news>img,.comments>ul>li .top .news>b{
    margin-right: 5px;
}
.comments>ul>li .top .is-good{
    display: flex;
    align-items: center;
}
.comments>ul>li .top .is-good>span:first-child{
    background-image: url(http://pcgnine5c.bkt.clouddn.com/%E7%82%B9%E8%B5%9E1.png);
    background-size: 2%;
    background-position: center;
    width: 1em;
    height: 1em;


}
</style>


