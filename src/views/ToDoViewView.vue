<template>
    <div>
        <ToDoHeader/>
            <ToDoView/>
        <ToDoFooter/>
    </div>
</template>

<script>
import ToDoView from "@/components/ToDoView.vue"
import ToDoFooter from "@/components/ToDoFooter.vue"
import ToDoHeader from "@/components/ToDoHeader.vue"
export default {
    name: "BookViewView",
    components: { 
        ToDoView,
        ToDoFooter,
        ToDoHeader
    },
    
}
</script>

<style>

</style>