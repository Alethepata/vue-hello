
const {createApp} = Vue;
let message;

createApp({

    data(){
        return{
            nome:'Kira',
            cognome:'The dog',
            img:'https://placedog.net/600',
        }
    },
    methods:{
        salutoFunzione(){
            return `Ciao ${this.nome} ${this.cognome}` 
        }
    },
    mounted(){
        salutoFunzione();
    }
   
}).mount('#app')