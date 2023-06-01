<template>
  <div>
    第一个数字：<input type="text" v-model="nu1">{{nu1}}  <br/>
    第一个数字：<input type="text" v-model="nu2">{{nu2}}  <br/>
    计算后的属性：{{nu3}}
  </div>
</template>

<script>
import { ref,reactive,computed } from 'vue'
export default {
  setup(){
    let nu1 = ref(1)
    let nu2 = ref(1)
    let nu3 = computed(()=>{
        return nu1.value+nu2.value
    })
    return{
        nu1,
        nu2,
        nu3
    }
  }
}
</script>

<style>

</style>
