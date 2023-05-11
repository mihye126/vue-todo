<template>
    <div>
        <h1 class="underline">도서 목록</h1>
        <div style="text-align: right">
            <button @click="movePage">할일 등록</button>
        </div>
        <div v-if="todolist.length">
            <table id="todo-list">
            
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>내용</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(todo, index) in todolist" :key="index">
                        <td>{{todo.no}}</td>
                        <td>
                            <router-link :to="`/todoview/${todo.no}`">{{todo.content}}</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else class="text-center">내용이 없습니다.</div>
    </div>
</template>

<script>
// import axios from "axios"
import http from "@/axios/axios-common"
export default {
    data() {
        return {
          // 도서목록을 저장할 배열
            todolist: [],
        };
    },
    created() {
        // localStorage에서 todoLists 얻어온다.
        this.selectAll();
    },
    methods: {
        selectAll(){
            http
            .get('/todoLists/allList')
            .then(response=> this.todolist=response.data)
        },
        movePage() {
            //location.href = "/todocreate";
            this.$router.push({path: `/todocreate`});
        },
    },
}
</script>

<style>

</style>