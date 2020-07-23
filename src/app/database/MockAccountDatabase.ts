export class MockAccountDatabase {
    private accounts: Array<Account> = [];

    constructor() {
        this.accounts = [
            new Account(1, 'Brendon', 'Willoughby', 'brendon@week3.com', '123456', 'brendon.jpeg'),
            new Account(2, 'John', 'Doe', 'john@week3.com', '123456', 'john.jpg'),
            new Account(3, 'Jane', 'Smith', 'jane@week3.com', '123456', 'jane.jpeg'),
        ];
    }

    getAccounts(): Array<Account> {
        return this.accounts;
    }

    getAccount(id: number): Account {
        let account: Account = new Account();
        this.accounts.forEach(acc => {
            if (acc.getId() == id) {
                account = acc;
            }
        });
        return account;
    }

    authenticate(email: string, password: string): Account {
        let account: Account = new Account();
        this.accounts.forEach(acc => {
            if (acc.getEmail() == email && acc.getPassword() == password) {
                account = acc;
            }
        });

        return account;
    }
}

export class Account {
    private id: number = 0;
    private firstName: string = "";
    private lastName: string = "";
    private email: string = "";
    private password: string = "";
    private avatar: string = ""

    constructor(id: number = 0, firstName: string = "", lastName: string = "", email: string = "", password: string = "", 
                avatar: string = "") {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
    }

    isEmpty(): boolean {
        return this.id == 0 && this.firstName == "" && this.lastName == "" && this.email == "" && this.password == ""
        && this.avatar == "";
    }

    getId(): number {
        return this.id;
    }

    getFullName(): string {
        return this.isEmpty() ? 'Foo Bar' : `${this.firstName} ${this.lastName}`;
    }

    getEmail(): string {
        return this.isEmpty() ? 'foobar@email.com' : this.email;
    }

    getPassword(): string {
        return this.password;
    }

    getAvatar(): string {
        return this.isEmpty() ? 'placeholder.jpg' : this.avatar;
    }
  }
  