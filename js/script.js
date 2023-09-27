console.log('ciao')
const {createApp} = Vue;

createApp({

    data(){
        return{
            nome:'Kira',
            cognome:'The dog'
        }
    }

}).mount('#app')