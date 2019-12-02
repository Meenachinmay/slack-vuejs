<template>
    <div class="block w-full bg-white max-w-xs p-3 overflow-y-auto border-r">
        <div class="bg-white rounded flex items-center justify-between p-2 border-b border-gray-300">
            <div>
                <span class="block font-semibold text-gray-800 text-lg tracking-wide">
                    {{ currentUser.displayName }}
                </span>
                <p v-if="user_online" class="text-xs font-semibold text-gray-800">
                    online
                </p>
            </div>
            <div>
                <img class="block flex-shirnk-0 w-10 h-10 rounded-full" :src="currentUser.photoURL" alt="user profile">
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'sidebar',
    computed: {
        ...mapGetters(['currentUser'])
    },
    data(){
        return{
            user_online: false
        }
    }
}
</script>