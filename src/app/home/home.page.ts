import { Component } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl:NavController, private alertController:AlertController) {

  }
  openTodoAlert(){
    let addTodoAlert = this.alertController.create({
      title:"Add A todo",
      message:"Enter your todo",
      inputs:[
        {
          type:"text",
        name:"addTodoInput"
        }
      ]
      buttons:[
        {
          text:"cancel"
        },
        {
          text:"Add Todo"
        }
      ]


    })
  }
}
