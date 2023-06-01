<template>
  <div>
     {{a}}
     <span @click="ccc">点击触发子传父</span>
  </div>
</template>

<script>

export default {
    props:['a'],
    components: {},
    setup(props,b){
      console.log(props,b,"000")
      function ccc(){
        b.emit('b',{name:'111'})
      }
      return{
        ccc
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
