<template>
    <div class="row">
        <form @submit.prevent @keydown.enter="$emit('add-user', {firstName, lastName})" class="col s12">
            <div class="row">
                <div class="input-field col s6">
                    <label for="firstName">First Name</label>
                    <input type="text" v-model="firstName" id="firstName" >
                </div>
                <div class="input-field col s6">
                    <label for="lastName">Last Name</label>
                    <input type="text" v-model="lastName" id="lastName" >
                </div>
                <div class="input-field col s12">
                    <a class="waves-effect waves-light btn" @click="$emit('add-user', {firstName, lastName})">Submit</a>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstName: '',
                lastName: ''
            }
        }
    }
</script>

<style scoped>

</style>