<template>
    <header>
        <router-link :to="`/`">
            <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="">
        </router-link>
        <input type="text" class="search">
            <NavList/>
    </header>
</template>
<script>
import NavList from './NavList'
export default {
    name:'headers',components:{
        NavList
    }
};
</script>
<style scoped>
header {
    width: 97%;
    background: #444;
    text-align: center;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
header img {
    width: 8.58em;
    text-align: center;
}
header .search {
    height: 1.85em;
    width: 16.7em;
    margin: 0 auto;
    background: url(http://pcgnine5c.bkt.clouddn.com/%E6%90%9C%E7%B4%A2.png) 4px 5px no-repeat
        #888;
    background-size: 7%;
    padding: 3px 5px 3px 22px;
    color: #666;
    border: 0;
    outline: 0;
    border-radius: 1em;
    transition: all 0.5s linear;
}
header .search:focus{
    background-color: #fff;
}
header .mint-search .mint-searchbar {
    margin: 0 auto;
}
</style>

