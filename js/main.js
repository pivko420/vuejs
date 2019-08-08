import AddUserForm from "./components/AddUserForm.vue"

let app = new Vue({
    el: '#app',
    data: {
        userNames: [],
        userName: ''
    },
    components: {
        AddUserForm
    },
    methods: {
        addUser(event) {
            this.userNames.push(event)
        }
    }
});