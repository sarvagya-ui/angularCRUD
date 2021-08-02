import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _httpClient:HttpClient) { }

  createUser(user){
    return this._httpClient.post("http://localhost:3000/user",user);
  }
  getAllUser(){
    return this._httpClient.get("http://localhost:3000/user");
  }
  updateUser(user){
   return this._httpClient.put("http://localhost:3000/user/" + user.id , user);
  }

  deleteUser(user){
    return this._httpClient.delete("http://localhost:3000/user/"+ user.id)
  }
}
