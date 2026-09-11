import conf from "../conf/conf";
import {Client, Account, ID} from 'appwrite'


export class AuthService {
    client = new Client();
    account;

    constructor(){
        // console.log(conf.appwriteProjectId);
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            // await this.account.create({
            //     userId: ID.unique(),
            //     email: email,
            //     password: password,

            // })

            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                // call another method
                this.loginAccount(email,password);
            }else{
                return userAccount;
            }
        }
        catch(error){
            throw error;
        }
    }

    async loginAccount({email, password}){
        return await this.account.createEmailPasswordSession(email, password);
    }

    async  getCurrentUser(){
        try {
            return await this.account.get();
        } 
        catch (error) {
            console.log('Appwrite service :: getCurrentUser :: error', error);
               
        }
        return null; // try catch has some problem
    }

    async logoutAccount(){
        try {
           await this.account.deleteSessions();
        } catch (error) {
            console.log('Appwrite service :: logout :: error', error);
        }
    }

}

const authService = new AuthService();

export default authService