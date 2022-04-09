<script>
    export default {
        data(){
            return{
                isActive: true,
                hasError: false,
                error: null,
                activeClass: 'active',
                errorClass: 'text-danger',
                classObject: {
                    active: true,
                    'text-danger': false
                }
            }
        },
        computed: {
                classObjectComputed() {
                    return {
                    active: this.isActive && !this.error,
                    'text-danger': this.error && this.error.type === 'fatal'
                }
            }
        }
    }
</script>


<template>
    <button class="btn" :class="{ active: isActive, 'text-danger': hasError  }">parraf</button>
    <button class="btn" :class="classObject">parraf</button>
    <button class="btn" :class="classObjectComputed">parraf</button>
    <div class="btn" :class="[activeClass, errorClass]">El div</div>
    <div class="btn" :class="[isActive ? activeClass : '', errorClass]">otro div</div>
    <div class="btn" :class="[{ active: isActive }, errorClass]">another div</div>
</template>

<style>
    .btn{
        background:black;
        padding:8px;
        width:100px;
        outline:none;
        border:1px solid black;
        border-radius:5px;
        color:white;
    }

    .active{
        background:blue;
    }

    .text-danger{
        background:red;
    }
</style>