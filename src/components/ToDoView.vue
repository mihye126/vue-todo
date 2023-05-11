<template>
    <div class="regist">
        <h1 class="underline">SSAFY 도서 정보</h1>
        <div class="regist_form">
            <label for="isbn">번호</label>
            <div class="view">{{todo.no}}</div>
            <label for="title">내용</label>
            <div class="view">{{todo.content}}</div>
            <label for="author">User</label>
            <div class="view">{{todo.userid}}</div>
            <div style="padding-top: 15px">
                <router-link to="/todolist"><button>목록</button></router-link>
                <button @click="remove(todo.no)">삭제</button>
            </div>
        </div>
    </div>
</template>

<script>
import http from "@/axios/axios-common"

export default {
    data: function () {
        return {
            todo: {}
        };
    },
    created() {
        // url에서 파라미터정보 얻기.
        const no = this.$route.params.no;
        http
        .get("todoLists/"+no)
        .then(response => this.todo=response.data)
    },
    methods: {
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        enterToBr(str) {
            // 문자열에 enter값을 <br />로 변경.(html상에서 줄바꿈 처리)
            return str.replace(/(?:\r\n|\r|\n)/g, "<br />");
        },
        remove(no) {
            http.delete("todoLists/"+no)
            this.$router.push({path: `/todolist`});

        }
    }
}
</script>

<style>

</style>