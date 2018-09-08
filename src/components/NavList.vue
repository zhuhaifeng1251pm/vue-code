<template>
    <ul>
        <li>
            <router-link :to='`/`'>首页</router-link>
        </li>
        <li>
            <router-link  :to='`/`'>新手入门</router-link>
        </li>
        <li>
            <router-link  :to='`/`'>API</router-link>
        </li>
        <li>
            <router-link :to='`/`'>关于</router-link>
        </li>
        <li>
            <router-link :to='`/`'>注册</router-link>
        </li>
        <li>
            <router-link  :to='`/`'>登录</router-link>
        </li>
    </ul>
</template>

<style scoped>
ul{
    margin: 0;
    width: 80%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}
li{
    display: flex;
    
}
li>a{
    color: #ccc;
    font-size: 0.8em;
    line-height: 3.5em;
}
</style>

