<template>
  <div class="app">
    <Headers/>
    <router-view></router-view>
   
  </div>
</template>
<script>
import Headers from "./components/Headers";
export default {
  name: "app",
  components: {
    Headers
  }
  
};
</script>
<style scoped>
.app {
    width: 100%;
    height: 100%;
    background-color: #e1e1e1;
    font-size: 1em;
    word-break: break-word;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

</style>


