<template>
    <nav class="w-full h-16 fixed flex justify-center items-center bg-slate-900">
        <span class="w-11/12 flex items-center">
            <img class="h-9 hover:opacity-90" src="@/assets/images/planet.png" alt="planet">
            <router-link :to="item.url"
                         class="text-yellow-300 font-bold tracking-wide mr-5 hover:text-pink-400 hover:border-b-2 hover:border-b-pink-400 transition ease-in-out delay-50"
                         :class="{'ml-8':index === 0}"
                         v-for="(item, index) in menu">
                {{ item.name }}
            </router-link>
        </span>
    </nav>
    <div class="w-full min-h-screen bg-indigo-900 contentContainer">
        <h1>
            {{ store.counter }} / {{ store.counter }}
        </h1>
        <button type="button"
                @click="clickAdd">
            Add Count
        </button>
    </div>
</template>

<script>
import {ref,reactive} from 'vue'
import {useCounterStore} from "@/stores/counter.js";

export default {
    props: {},
    setup(props) {
        const menu = [
            {
                name: "HOME",
                url: "/"
            },
            {
                name: "PORTFOLIO",
                url: "/portfolio"
            },
            {
                name: "CONTACT",
                url: "contact"
            }
        ];

        const store = useCounterStore();
        const clickAdd = function() {
            store.addCount();
        }

        return {
            menu,
            store,
            clickAdd
        }
    }
}

</script>

<style lang="scss" scoped>
.contentContainer {
    padding-top: 64px;

    h1 {
        color: white;
        font-size: 20px;
    }
}
</style>
