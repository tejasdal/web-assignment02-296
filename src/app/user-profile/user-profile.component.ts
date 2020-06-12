import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public isInputEditable:boolean = true;
  public showSuccessMsg: boolean = false;
  public showErrorMsg: boolean = false;

  constructor() { }

  public user = this.getUser();
  public bindingUser = Object.assign({}, this.user);

  

  public getUser(): any{
    return {
      "id":"1",
      "firstName":"John",
      "lastName":"Deo",
      "emailId":"john.deo@dal.ca",
      "userName":"johndeo",
      "linkedIn":"linkedin.com/johndeo",
      "bio":"Software Engineer \nAngular Developer \nTraveler",
      "imgUrl":"https://image.flaticon.com/icons/svg/2919/2919600.svg"
    }
  }

  public saveUser(){
    console.log("Save user successfully!")
    this.user = this.bindingUser;
    this.showSuccessMsg = true;
    // call service method to save user data.
    // this.userService.save(user);
    this.disable();
    
  }

  // https://www.talkingdotnet.com/show-image-preview-before-uploading-using-angular-7/
  public changeProfilePhoto(file){
    console.log(file);
    if (file.length === 0)
      return;

    let reader:FileReader = new FileReader();
    // this.imagePath = file;
    console.log(file.files[0]);
    reader.readAsDataURL(file.files[0]); 
    reader.onload = (_event) => { 
      this.bindingUser.imgUrl = reader.result; 
    }
  }

  ngOnInit(): void {
  }

  public enable(){
    this.isInputEditable = false;
  }
  
  public disable(){
    this.isInputEditable = true;
  }
}
