<template>
    <div class="show-article">
        <div class="title"><h3>{{article.title}}</h3>
        <p>•发布于<span> {{ article.last_reply_at | moment("from", "now", true) }}</span>•作者<span>{{article?article.author.loginname:''}}</span>•<span>{{article.visit_count
}}</span>次浏览•来自<span>{{article.tab}}</span></p>
        </div>
        <article  v-html="article.content"></article>
    </div>
</template>
<script>
export default {
    props:[
        "article"
    ]
}
</script>
<style >
.show-article{
    width: 98%;
    margin: 0 auto;
}
 .show-article .title{
width: 97%;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
 }
 .show-article  .title>h3{
     width: 11em;
    font-size: 1.6em;
     align-self: flex-start;
     margin: 0;
 }
 .show-article  p:nth-child(2){
    font-size: 0.86em;
    color: #838383;
    text-align: left;
    letter-spacing: 0.01em;
 }
  .show-article article img{
     width: 95%;
     margin: 0 auto;
 }
 .show-article ul{
     margin: 0;
     padding: 0;
 }
</style>

