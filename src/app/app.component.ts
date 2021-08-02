import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'crud';
  allUser: any;
  userObj={
    name:'',
    mobileno:'',
    email:'',
    password :'',
    id:''
  };
  isEdit:boolean=false;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getLatestUser();
  }


  addUser(fromObj: any) {
    console.log(fromObj);
    //POST Method of Service
    this.commonService.createUser(fromObj).subscribe(res => { this.getLatestUser(); })

  }
  getLatestUser() {
    this.commonService.getAllUser().subscribe(res => {
      this.allUser = res;
    })
  }


  editUser(user){
     this.isEdit=true;
    this.userObj=user;
  }
  deleteUser(user){
    this.commonService.deleteUser(user).subscribe(()=>{this.getLatestUser();})
  }

  updateUser(){
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{this.getLatestUser();})
  }
}
