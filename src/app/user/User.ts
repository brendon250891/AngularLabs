export interface IUser {
    username:string;
    birthdate:string;
    age:number;
    email:string;
    avatar:string;
}

export class User implements IUser {
    public username:string = "";
    public birthdate:string = "";
    public age:number = 0;
    public email:string = "";
    public avatar:string = ""

    constructor(username:string = "", birthdate:string = "", age:number = 0, email:string = "", avatar:string = "") {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.avatar = avatar;
    }
}

  