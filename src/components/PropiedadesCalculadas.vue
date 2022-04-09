<script>
    export default {
        data(){
            return{
                author: {
                    name: 'John Doe',
                    books: [
                    'Vue 2 - Advanced Guide',
                    'Vue 3 - Basic Guide',
                    'Vue 4 - The Mystery'
                    ]
                }
            }
        },
        /*
            La logica mas compleja debe ir en la seccion computed
            Una propiedad calculada solo se volverá a evaluar cuando algunas de sus dependencias reactivas hayan cambiado. 
            Esto significa que siempre que author.
            books no haya cambiado, el acceso múltiple publishedBooksMessagedevolverá inmediatamente el resultado calculado previamente 
            sin tener que ejecutar la función getter nuevamente.
            En comparación, la invocación de un método siempre ejecutará la función cada vez que ocurra una nueva representación.
            En los raros casos en los que necesite una propiedad computada "escribible", puede crear una proporcionando tanto un getter como un setter.
            ¡no haga solicitudes asíncronas ni mute el DOM dentro de un getter computado
            Evite mutar el valor calculado
        */
        computed:{
            publishedBooksMessage() {
                // `this` points to the component instance
                return this.author.books.length > 0 ? 'Yes' : 'No'
            }
        },
        methods:{
            changeAuthor(){
                console.log(this.author.books.length)
                if(this.author.books.length == 0){
                    this.author.books = ['Vue 2 - Advanced Guide',
                    'Vue 3 - Basic Guide',
                    'Vue 4 - The Mystery']
                }else{
                    this.author.books = []
                }
            }
        }
    }
</script>


<template>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <button @click="changeAuthor">Change books</button>
</template>