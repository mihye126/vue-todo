<template>
    <div>
        <ToDoHeader/>
            <ToDoList/>
        <ToDoFooter/>
    </div>
</template>

<script>
import ToDoList from "@/components/ToDoList.vue"
import ToDoFooter from "@/components/ToDoFooter.vue"
import ToDoHeader from "@/components/ToDoHeader.vue"
export default {
    name: "BookListView",
    components: { 
        ToDoList,
        ToDoFooter,
        ToDoHeader
    },
    
}
</script>

<style>

</style>