<template>
  <div>
    第一个数字：<input type="text" v-model="nu1.a">{{nu1.a}}  <br/>
    第一个数字：<input type="text" v-model="nu1.b">{{nu1.b}}  <br/>
  </div>
</template>

<script>
import { ref,reactive,watch } from 'vue'
export default {
  setup(){
    let nu1 = reactive({
        a:'1',
        b:2,
    })
    watch(nu1,(n,o)=>{
        console.log(n,o,"0000")
    },
    {immediate:true,deep:true}
    )
    return{
        nu1,
    }
  }
}
</script>

<style>

</style>
