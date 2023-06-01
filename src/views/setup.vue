<template>
  <div>
      vue3如何响应：
      <p> name : {{a}}</p>
      <p> age : {{b.name}}</p>
      <p @click="ccc">111</p>
      <p @click="ddd">数组：{{arr}}</p>
      <p @click="changeArr">改变数组</p>
  </div>
</template>

<script>
import { ref,reactive } from 'vue'
export default {
  components: {},
  setup(){
    let a = ref('111')
    let b = ref({name:'李'})
    let arr = reactive([0,1,2])
    
    function ccc(){
      a.value = "000"
    }
    function ddd(){
      b.value.name = 111
    }
    function changeArr(){
      arr[0] = 111
    }
    return{
      a,
      b,
      ccc,
      ddd,
      arr,
      changeArr
    }
  }
}
</script>

<style>

</style>
