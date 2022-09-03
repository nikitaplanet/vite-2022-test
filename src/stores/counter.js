import {defineStore} from 'pinia'
import {ref} from "vue"
export const useCounterStore = defineStore('counter', () => {
    const counter = ref(0);
    const addCount = () => {
        counter.value ++;
    }
    // const doubleCount = computed(() => {
    //     return counter.value * 2;
    // });

    return {
        counter,
        addCount
    }
});

// export const useCounterStore = defineStore('counter', {
//     id: "counter",
//     state: () => ({
//         counter: 0
//     }),
//     getters: {
//         doubleCount: (state) => state.counter * 2
//     },
//     actions: {
//         addCount() {
//             this.counter++
//         }
//     }
// })
