<template>
  <div class="main">
    <div class="main-setup" @click="go('/setup')">学习setup</div>
    <div @click="go('/props')">props父传子</div>
    <div @click="go('/computed')">计算属性</div>
    <div @click="go('/watch')">侦听</div>
    <div @click="counterStore.registerUser()">{{userData}}pinia</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
  const counterStore = useUserStore()
  let store = storeToRefs(counterStore)
  const { userData } = storeToRefs(counterStore)
  console.log(store,userData,"----")
    const router = useRouter()
    function go(url){
      router.push(url)
    };
</script>

<style scoped lang='scss'>
.main {
  display: flex; 
  &-setup{ background: #ccc; }
}
</style>
