<!-- eslint-disable vue/multi-word-component-names
<template>
    <div id="visa">
        <h1>Create a New Vue Account</h1>
        <form>
            <label for="full name">Full Name:</label>
            <input type="text" v-model="name" required>
            <br>
            <label for="email">Email Address:</label>
            <input type="text" v-model="email" required> <br>
            <span v-if="msg.email">{{msg.email}}</span>
            <label for="password">Password:</label>
            <input type="text" v-model="password" required><br>
            <span v-if="msg.password">{{msg.password}}</span>
            

        </form>
    </div>
</template>
<script>
export default {
    name: 'ValidateView',
    data() {
        return {
            name: '',
            password: '',
            email: '',
            msg: [],
            twitter: ''
        }
    },
    watch: {
        email(value) {
            // binding this to the data value in the email input
            this.email = value;
            this.validateEmail(value);
        },
        password(value) {
            this.password = value;
            this.validatePassword(value);
        }
    },
    methods: {
        validateEmail(value) {
            // eslint-disable-next-line no-useless-escape
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                this.msg['email'] = '';
            } else {
                this.msg['email'] = 'Invalid Email Address';
            }
        },
        validatePassword(value) {
            let difference = 8 - value.length;
            if (value.length < 8) {
                this.msg['password'] = 'Must be 8 characters! ' + difference + ' characters left';
            } else {
                this.msg['password'] = '';
            }
        }
    }
}
</script>
     -->