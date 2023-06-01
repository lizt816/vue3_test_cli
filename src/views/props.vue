<template>
  <div>
     <props @b='b' :a='a' />
  </div>
</template>

<script>
import { ref,reactive } from 'vue'
import props from '@/components/props.vue'
export default {
  components: {props},
  setup(){
    let a = '111'
    function b(e){
        console.log('触发',e,111)
    }
    return{
        a,
        b
    }
  }
}
</script>

<style>

</style>
