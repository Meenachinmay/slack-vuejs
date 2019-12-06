<template>
    <div>
        <!-- header goes from here -->
        <header-bar></header-bar>
        <!-- main area goes from here -->
        <main class="custom flex overflow-hidden">
            <!-- sidebar goes from here -->
            <side-bar></side-bar>
            <!-- second part of main area goes from here -->
            <div class="flex-1 text-xl text-white flex bg-green-500 p-3 overflow-y-auto">
               chats
            </div>
        </main>
    </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar';
import SideBar from '../components/SideBar';
export default {
    name: 'chat',
    components: {
        HeaderBar,
        SideBar
    },
}
</script>

<style scoped>
.custom{
    height: 92vh;
}
</style>