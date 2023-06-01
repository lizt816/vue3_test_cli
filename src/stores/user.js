import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({ userData: 999 }),
  persist: {
    enabled: true
  },
  getters: {
      doubleCount(state) {
        return this.userData * 2
      },
      doublePlusOne() {
  	  console.log(this,"*-*-*-")
        return this.doubleCount + 1
      }
    },
  actions: {
    async registerUser(login, password) {
      try {
        this.userData = await new Promise((resolve, reject)=>{
			resolve(this.userData+1)
		})
      } catch (error) {
        return error
      }
    }
  }
})