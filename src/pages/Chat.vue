<template>
    <div>
        <!-- header goes from here -->
        <header-bar></header-bar>
        <!-- main area goes from here -->
        <main class="flex h-screen overflow-hidden">
            <!-- sidebar goes from here -->
            <side-bar></side-bar>
            <!-- second part of main area goes from here -->
            <div class="block flex-1 flex bg-green-500 p-3">
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
</style>