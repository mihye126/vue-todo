<template>
    <div>
        <ToDoHeader/>
            <ToDoCreate/>
        <ToDoFooter/>
    </div>
</template>

<script>
import ToDoCreate from "@/components/ToDoCreate.vue"
import ToDoFooter from "@/components/ToDoFooter.vue"
import ToDoHeader from "@/components/ToDoHeader.vue"
export default {
    name: "ToDoCreateView",
    components: { 
        ToDoHeader,
        ToDoFooter,
        ToDoCreate
    },
    
}
</script>

<style>

</style>