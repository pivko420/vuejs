var app = new Vue({
    el: '#app',
    data: {
        newName: '',
        newAge: '',
        guys: [
            {
                name: 'pivko420',
                age: '17',
                cool: '100'
            }, {
                name: 'daveloper',
                age: '18',
                cool: '10'
            }, {
                name: 'majir',
                age: '18',
                cool: '70'
            }
        ]
    },
    methods: {
        add: function () {
            this.guys.push({
                name: this.newName,
                age: this.newAge,
                cool: '50'
            });
            this.newName = '';
            this.newAge = '';
            $('.name').focus();
        },
        remove: function (guy) {
            this.guys = this.guys.filter( item => item !== guy );
        }
    }
});