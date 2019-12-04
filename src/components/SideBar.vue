<template>
    <div class="block w-full bg-white max-w-xs p-3 overflow-y-auto border-r">
        <div class="bg-white rounded flex items-center justify-between p-2 mb-3 border-b">
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
        <!-- channels panel starts -->
        <div class="flex items-center justify-between">
            <h1 class="uppercase text-gray-600 tracking-wide font-semibold p-2 text-xs">
                Channels
            </h1>
            <div @click="showModal" class="block p-2 cursor-pointer">
                <svg class="w-4 h-4" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve">
                    <g>
                        <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26
                            S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/>
                        <path d="M38.5,25H27V14c0-0.553-0.448-1-1-1s-1,0.447-1,1v11H13.5c-0.552,0-1,0.447-1,1s0.448,1,1,1H25v12c0,0.553,0.448,1,1,1
                            s1-0.447,1-1V27h11.5c0.552,0,1-0.447,1-1S39.052,25,38.5,25z"/>
                    </g>
                </svg>
            </div>
        </div>
        <div>
            <p v-for="channel in channels" :key="channel.id" class="hover:bg-gray-100 hover:font-semibold p-2 ml-2 
            text-sm uppercase text-gray-800 font-medium">
                {{ channel.name }}
            </p>
        </div>
        <add-channel v-show="isAddChannelVisible" @close="closeModal"></add-channel>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import AddChannel from '../components/AddChannel';
import firebase from 'firebase/app';
export default {
    name: 'sidebar',
    components: {AddChannel},
    computed: {
        ...mapGetters(['currentUser'])
    },
    data(){
        return{
            user_online: false,
            isAddChannelVisible: false,
            channels: [],
            channelsref: firebase.database().ref('channels'),
        }
    },
    methods: {
      showModal() {
        this.isAddChannelVisible = true;
      },
      closeModal() {
        this.isAddChannelVisible = false;
      },
      addListeners(){
          this.channelsref.on('child_added', snapshot => {
              this.channels.push(snapshot.val());
          })
      },
      detachListeners(){
          this.channelsref.off();
      }
    },
    mounted(){
        this.addListeners();
    },
    beforeDestroy(){
        this.detachListeners();
    }
}
</script>