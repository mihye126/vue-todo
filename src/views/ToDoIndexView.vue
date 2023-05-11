<template>
    <div>
        <ToDoHeader/>
            <ToDoIndex/>
        <ToDoFooter/>
    </div>
</template>

<script>
import ToDoIndex from "@/components/ToDoIndex.vue"
import ToDoFooter from "@/components/ToDoFooter.vue"
import ToDoHeader from "@/components/ToDoHeader.vue"
export default {
    name: "BookIndexView",
    components: { ToDoIndex, ToDoFooter, ToDoHeader },
}
</script>

<style>

</style>