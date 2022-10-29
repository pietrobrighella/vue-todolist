const { createApp } = Vue

const app = createApp({
    data(){
        return {
            newToDo: {
                text: '',
                done: false,
                isMouseOver: true,
            },
            hasError: false,
            activities: [{
                text: 'prova',
                done: false,
                isMouseOver: true,
            },
            {
                text: 'prova',
                done: false,
                isMouseOver: true,
            }]
        }
    },
    methods: {
        addToDo(){
            if(this.newToDo.text.length != 0){
                this.activities.unshift({...this.newToDo});
                this.hasError = false;
            } else {
                this.hasError = true;
            }
            this.newToDo.text = '';
        },
        removeToDo(index){
            this.activities.splice(index,1);
            console.log('ciao')
        }
    },
    computed: {

    },
    mounted(){
        console.log(this.activities);
    },
});
app.mount('#app');