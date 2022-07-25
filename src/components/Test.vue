<script>
import {setData, getData} from '../assets/js/db.js'
import {ref, reactive} from 'vue'

function getRandom(x) {
    return Math.floor(Math.random() * x) + 1;
}

export default {
    name: "Test",
    props: {},
    setup(props) {
        let dataAry = reactive([]);
        let dataUserId = ref(null);
        let userName = ref(null);
        let userEmail = ref(null);
        let userId = getRandom(99);

        const updateField = () => {
            let apiPath = `users/${userId}`;
            setData(apiPath, {
                name: userName.value,
                email: userEmail.value
            });
        }

        const getDataFromDB = async () => {
            let apiPath = `users/${dataUserId.value}`;
            let resData = await getData(apiPath);

            if (resData) {
                dataAry.push(resData);
            } else {
                dataAry = [];
            }
        }

        return {
            dataAry,
            dataUserId,
            userName,
            userEmail,
            updateField,
            getDataFromDB
        }
    }
}

</script>

<template>
    <label for="name">姓名:</label>
    <input type="text" id="name" v-model="userName">
    <label for="name">Email:</label>
    <input type="text" id="email" v-model="userEmail">
    <button type="button" @click="updateField">更新資料</button>
    <br>
    <label for="dataUserId">UserId:</label>
    <input type="number" id="dataUserId" v-model="dataUserId">
    <button type="button" @click="getDataFromDB">讀取資料</button>
    <div class="homebox shadow-md">
        {{ dataAry }}
    </div>
</template>

<style scoped>
.homebox {
    width: 300px;
    height: 300px;
}
</style>
