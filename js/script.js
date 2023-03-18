const DateTime = luxon.DateTime;

let currentTime = DateTime.now().toString('dd/mm/yyyy HH:mm:ss')

const { createApp } = Vue;

createApp({

  data() {
    return {
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        menu: false,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        menu: false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        menu: false,
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        menu: false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        menu: false,
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 14:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        menu: false,
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 15:21:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        menu: false,
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 15:53:00',
                        message: 'Non ancora',
                        status: 'received',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        menu: false,
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:23:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        menu: false,
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 15:52:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        menu: false,
                    }
                ],
            },
        ],
        activeChat: 0,
        newMessage: '',
        searchMessage: '',
        isActive: false,
    }
  },

  methods: {
    hourLastMessage(activeChat){
        if (this.contacts[this.activeChat].messages.length == 0){
            return '';
        } else {
            return this.contacts[this.activeChat].messages[this.contacts[this.activeChat].messages.length - 1].date[11] + this.contacts[this.activeChat].messages[this.contacts[this.activeChat].messages.length - 1].date[12] + this.contacts[this.activeChat].messages[this.contacts[this.activeChat].messages.length - 1].date[13] + this.contacts[this.activeChat].messages[this.contacts[this.activeChat].messages.length - 1].date[14] + this.contacts[this.activeChat].messages[this.contacts[this.activeChat].messages.length - 1].date[15]
        }
    },

    sendMessage(){
        if (this.newMessage == '') {
        } else {
            
            this.newMessages =
            {
                date: currentTime,
                message: this.newMessage,
                status: 'sent',
                menu: false,
            },
    
    
            this.contacts[this.activeChat].messages.push(this.newMessages);
                
            this.newMessage = '';
        }
        setTimeout(this.responseMessage, 1000);
    },

    lastMessageHour(contact){
        if (this.contacts[this.activeChat].messages.length == 0){
            return '';
        } else {
            return contact.messages[contact.messages.length - 1].date[11] + contact.messages[contact.messages.length - 1].date[12] + contact.messages[contact.messages.length - 1].date[13] + contact.messages[contact.messages.length - 1].date[14] + contact.messages[contact.messages.length - 1].date[15]
        }
    },

    

    lastMessage(contact){
        if (this.contacts[this.activeChat].messages.length == 0){
            return '';
        } else {
            return contact.messages[contact.messages.length - 1].message
        }
        
    },

    responseMessage(){
        this.newMessages =
            {
                date: currentTime ,
                message: 'ok',
                status: 'received',
                menu: false,
            },
    
    
            this.contacts[this.activeChat].messages.push(this.newMessages);
                
            this.newMessage = '';
    },


    changeActiveChat(index) {
        this.activeChat = index;
    },

    filteredList(contact) {
        return contact.name.toLowerCase().includes(this.searchMessage.toLowerCase())
      },

    deleteMessage(index) {
        
        this.contacts[this.activeChat].messages.splice(index,1);
    },

    showOthers(index) {
        this.contacts[this.activeChat].messages[index].menu = !this.contacts[this.activeChat].messages[index].menu
      },
},


}).mount('#app')