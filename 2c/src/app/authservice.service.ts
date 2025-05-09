import { Injectable } from '@angular/core';
////Angular injects services into components as needed

@Injectable({
  providedIn: 'root'
})



export class AuthserviceService {

   users:any[]=[]
   loggedInUser:any=null;

  constructor() { }

  register(user:any){
    this.users.push(user);
  }

  login(email:string , password:string){
    const user =this.users.find(user=>user.email===email && user.password ===password);
    if(user){
      this.loggedInUser=user;
    }

    return !!user;
  }

  logout(){
    this.loggedInUser=null
  }

  getLoggedInUser(){
    return this.loggedInUser;
  }
}




 //!!user is a double negation used to convert any value to a boolean (true or false).
//!!user === Boolean(user)
//It does not check if the value is strictly true or false, but whether it is "truthy" or "falsy"

//This creates an Angular service class, which will be injected into components that need to use authentication features.
