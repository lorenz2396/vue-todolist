const { createApp } = Vue;

createApp ({
    data(){
        return {
            toDoTitle : "Che cosa vuoi comprare?",
            newTodo : {
                text: '',
                done: false
            },
            todos: [
                {
                    text:'Uova',
                    done: true
                },
                {
                    text:'Affettati',
                    done: false
                },
                {
                    text:'Latte',
                    done: false
                }
            ]
        }
    },
    methods: {
        addTodo(){
            console.log('Cliccato su aggungi', this.newTodo.text);
            const newTodoCreato = {
                text: this.newTodo.text,
                done: false
                // o ...this.newTodo   x creare una nuova copia esplicita
            }
            this.todos.push(newTodoCreato);
            
            this.newTodo.text = '';
        },
        removeToDo(index){
            console.log('Cliccato su X', index);
            this.todos.splice(index, 1);
        },
        checkTastiera(){
            console.log(this.newTodo.text)
        }
    },

}).mount('#app');

