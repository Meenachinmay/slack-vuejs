<template>
    <header class="flex items-center justify-between p-3 border-b">
            <div class="flex items-center">
                <svg class="w-12 h-12 mr-3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 378.22 378.22" style="enable-background:new 0 0 378.22 378.22;" xml:space="preserve">
                <path style="fill:#88C9B3;" d="M378.22,142.485v126.25c0,14.05-11.39,25.44-25.44,25.44h-24.37v40.88l-39.35-40.88H131.15
                    c-14.05,0-25.44-11.39-25.44-25.44v-48.44v-77.81c0-14.05,11.39-25.44,25.44-25.44H272.5h80.28
                    C366.83,117.045,378.22,128.435,378.22,142.485z"/>
                <path style="fill:#7C6655;" d="M272.5,68.605v48.44H131.15c-14.05,0-25.44,11.39-25.44,25.44v77.81H89.15l-2.19,2.28l-37.16,38.6
                    v-40.88H25.43c-14.05,0-25.43-11.39-25.43-25.44V68.605c0-14.05,11.38-25.44,25.43-25.44h221.64
                    C261.11,43.165,272.5,54.555,272.5,68.605z"/>
                <path style="fill:#665040;" d="M272.5,98.295v18.75H131.15c-14.05,0-25.44,11.39-25.44,25.44v77.81H89.15l-2.19,2.28v-98.84
                    c0-14.05,11.39-25.44,25.44-25.44H272.5z"/>
                </svg>
                <span class="text-xl tracking-wide text-gray-800">
                    Chats
                </span>
            </div>
            <div class="relative">
                <!-- user dropdown button with profile icon svg -->
                <button @blur="hide" v-on:click="showDropdown = !showDropdown" class="block px-5 py-1 border border-gray-300 hover:border-gray-500 rounded cursor-pointer focus:outline-none focus:bg-gray-200">
                    <svg class="w-6 h-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 53 53" style="enable-background:new 0 0 53 53;" xml:space="preserve">
                        <path style="fill:#E7ECED;" d="M18.613,41.552l-7.907,4.313c-0.464,0.253-0.881,0.564-1.269,0.903C14.047,50.655,19.998,53,26.5,53
                            c6.454,0,12.367-2.31,16.964-6.144c-0.424-0.358-0.884-0.68-1.394-0.934l-8.467-4.233c-1.094-0.547-1.785-1.665-1.785-2.888v-3.322
                            c0.238-0.271,0.51-0.619,0.801-1.03c1.154-1.63,2.027-3.423,2.632-5.304c1.086-0.335,1.886-1.338,1.886-2.53v-3.546
                            c0-0.78-0.347-1.477-0.886-1.965v-5.126c0,0,1.053-7.977-9.75-7.977s-9.75,7.977-9.75,7.977v5.126
                            c-0.54,0.488-0.886,1.185-0.886,1.965v3.546c0,0.934,0.491,1.756,1.226,2.231c0.886,3.857,3.206,6.633,3.206,6.633v3.24
                            C20.296,39.899,19.65,40.986,18.613,41.552z"/>
                        <g>
                            <path style="fill:#556080;" d="M26.953,0.004C12.32-0.246,0.254,11.414,0.004,26.047C-0.138,34.344,3.56,41.801,9.448,46.76
                                c0.385-0.336,0.798-0.644,1.257-0.894l7.907-4.313c1.037-0.566,1.683-1.653,1.683-2.835v-3.24c0,0-2.321-2.776-3.206-6.633
                                c-0.734-0.475-1.226-1.296-1.226-2.231v-3.546c0-0.78,0.347-1.477,0.886-1.965v-5.126c0,0-1.053-7.977,9.75-7.977
                                s9.75,7.977,9.75,7.977v5.126c0.54,0.488,0.886,1.185,0.886,1.965v3.546c0,1.192-0.8,2.195-1.886,2.53
                                c-0.605,1.881-1.478,3.674-2.632,5.304c-0.291,0.411-0.563,0.759-0.801,1.03V38.8c0,1.223,0.691,2.342,1.785,2.888l8.467,4.233
                                c0.508,0.254,0.967,0.575,1.39,0.932c5.71-4.762,9.399-11.882,9.536-19.9C53.246,12.32,41.587,0.254,26.953,0.004z"/>
                        </g>
                    </svg>
                </button>
                <transition name="fademodal">
                    <div v-show="showDropdown" class="mt-1 absolute right-0 w-40 flex-col flex bg-white border-t rounded-lg py-2 shadow-xl">
                        <a class="block px-4 py-2 hover:bg-indigo-500 hover:text-white text-sm text-gray-800 cursor-pointer">Profile</a>
                        <a class="block px-4 py-2 hover:bg-indigo-500 hover:text-white text-sm text-gray-800 cursor-pointer">Account Setting</a>
                        <a @click="logout" class="block px-4 py-2 hover:bg-red-500 hover:text-white text-sm text-gray-800 cursor-pointer">Logout</a>
                    </div>
                </transition>
            </div>
        </header>
</template>

<script>
import firebase from 'firebase/app';
export default {
    name: 'headerbar',
    data(){
        return{
            showDropdown: false,
        }
    },
    methods: {
        logout(){
            firebase.auth().signOut();
            this.$store.dispatch('setUser', null);
            this.$router.push('/login');
        },
        hide(){
            this.showDropdown = false;
        }
    }
}
</script>

<style scoped>
 .fademodal-enter-active, .fademodal-leave-active {
  transition: opacity .5s;
  }
  .fademodal-enter, .fademodal-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  }
</style>