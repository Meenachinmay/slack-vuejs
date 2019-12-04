<template>
  <transition name="fademodal">
    <div class="modal-backdrop" @keyup.esc="close">
      <div class="flex-col flex bg-white text-gray-800 text-sm rounded-lg p-6 w-full max-w-md">
        <header class="flex items-center justify-center p-3">
          <p class="text-lg font-semibold">
              Add a new Channel
          </p>
        </header>
        <form>
            <input v-model="new_channel" type="text" class="border border-gray-300 p-2 rounded w-full 
            focus:outline-none hover:border-gray-500 text-lg" 
            placeholder="Enter channel name...">
            <ul v-if="hasErrors">
                <li class="text-red-800 text-xs font-semibold" v-for="error in errors" :key="error.id">{{ error }}</li>
            </ul>
            <sweetalert-icon v-if="channelAddedSuccesfully" icon="success"></sweetalert-icon>
            <sweetalert-icon v-if="addingChannel" icon="loading"></sweetalert-icon>
            <sweetalert-icon v-if="addingChannelhasErrors" icon="error"></sweetalert-icon>
        </form>
        <footer class="flex items-center justify-between mt-12">
            <button @click="add_new_channel" class="block p-2 text-sm rounded bg-blue-400 font-semibold text-white hover:bg-blue-600">
                Add new Channel
            </button>
            <button @click="close" class="block p-2 text-sm rounded bg-red-400 font-semibold text-white hover:bg-red-600">
                Cancel
            </button>

        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import firebase from 'firebase/app';
import SweetalertIcon from 'vue-sweetalert-icons';
  export default {
    name: 'addchannel',
    components: { SweetalertIcon },
    data(){
        return{
            new_channel: '',
            errors: [],
            channelsRef: firebase.database().ref('channels'),
            channels: [],
            channelAddedSuccesfully: false,
            addingChannel: false,
            addingChannelhasErrors: false,
            hasDuplicateEntry: false,
        }
    },
    computed: {
        hasErrors(){
            return this.errors.length > 0;
        },
    },
    created(){
        // get all the names from database
        this.channelsRef.on('child_added', snapshot => {
            this.channels.push(snapshot.val());
        })
    },
    beforeDestroy(){
      this.channelsRef.off();
    },
    methods: {
      close() {
        this.errors = [];
        this.new_channel = '';
        this.$emit('close');
      },
      add_new_channel(){
          // loop through names
          this.channels.forEach(item => {
            if (item.name == this.new_channel){
              this.hasDuplicateEntry = true;
            }
          });
          // make an if loop for stopping the method
          if (this.hasDuplicateEntry){
            this.errors.push('Duplicate entry!');
            this.addingChannelhasErrors = true;
            setTimeout(() => {
                this.addingChannelhasErrors = false;
            }, 2000);
            this.errors = [];
            this.hasDuplicateEntry = false;
            return;
          }
          // if all is okay then add a new channel
          this.addingChannel = true;
          let key = this.channelsRef.push().key;
          let new_channel = {
              id: key,
              name: this.new_channel,
          }
          this.channelsRef.child(key).update(new_channel)
            .then(() => {
                this.addingChannel = false;
                this.new_channel = '',
                this.show_success_sweet_alert();
            })
            .catch(error => {
                this.addingChannel = false;
                this.addingChannelhasErrors = true;
                this.errors.push(error.message);
                setTimeout(() => {
                    this.addingChannelhasErrors = false;
                }, 2000);
            })
      },
      show_success_sweet_alert(){
          this.channelAddedSuccesfully = true;
          setTimeout(() => {
                this.close();
            }, 1000);
          setTimeout(() => {
                this.hide_success_sweet_alert(); 
            }, 1000);
      },
      hide_success_sweet_alert(){
          this.channelAddedSuccesfully = false;
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fademodal-enter-active, .fademodal-leave-active {
  transition: opacity .5s;
  }
  .fademodal-enter, .fademodal-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  }
</style>