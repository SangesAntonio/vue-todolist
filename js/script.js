/*Rifare l'esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)*/



console.log('JS OK', Vue);

const app = new Vue({
    el:'#root',
    data:{
        newTask:'',
        tasks:[
            {text: 'Preparare il caffè', done: true,},
            {text: 'Pagare le multe', done: true,},
            {text: 'Trovare un lavoro', done: true,},
            {text: 'Accendere la macchina', done: false,},
        ]
    },
    methods:{
        dellTask(index){
            this.tasks.splice(index,1)
        },
        addTask(){
            const newTask = this.newTask.trim();
            if(newTask){
                this.tasks.push({text: newTask, done: true,})
            }
            this.newTask= '';
            //this.tasks=[...this.tasks, this.newTask]
        },
        doneTask(index){
            return this.tasks[index].done = !this.tasks[index].done
        },
        classDone(index){
            return this.tasks[index].done == false ? 'far fa-check-square': 'far fa-square';
                
        }




    },
})