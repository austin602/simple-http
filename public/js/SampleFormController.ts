namespace App {
    export class SampleFormController {

        public fullName;
        public userName;
        public email;
        public password;

        public btnGroup;


        constructor () {
            this.fullName = '';
            this.userName = '';
            this.email = '',
            this.password= '';
            this.btnGroup= '';
        }

        public saveUser (userRegister) {
            console.log ('Saving the new user.');
            console.log ('Form object: ',userRegister);

            if (userRegister.$valid == false) {
                alert ('Please fill out the form correctly.');
            }
            else {
                console.log ('Submitting new user data...')
            }
        }

    }
}
