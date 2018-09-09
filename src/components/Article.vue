<template>
<div class="show">
    <Topic :article="newArticle"/>
    <Comments  :article="newArticle"/>
</div>
</template>
<script>
import axios from 'axios';
import {URL }from '../assets/Url'
import Topic from './Topic'
import Comments from "./Comments";
export default {
name:'articles',
data:()=>({
    article:null
}),
mounted(){
    const uri=`${URL}/topic/${this.$route.params.id}`
    // console.log(uri)
    axios.get(uri).then(res=>{
        console.log(res.data.data)
        this.article=res.data.data
    }).catch(err=>{})

},components:{
    Topic,Comments
},computed:{
        newArticle(){
            return this.article?this.article:''
        }
    }
}
</script>
<style scoped>
.show{
    width: 97%;
  background-color: #fff;
  margin-top: 1.5em;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
}

</style>
