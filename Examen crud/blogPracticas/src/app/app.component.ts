import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogPracticas';
  name = 'Diana Galeano';
  age = 19;
  imagen = "../assets/capibara.jpg";
  btnDisabe = true;

  //objeto
  person = {
    name : 'Diana Galeano',
    age : 19,
  }

  //metodo
  toggleButton(){
    this.btnDisabe = !this.btnDisabe;
  }
  increaseAge(){
    this.age = this.age +1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changename(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
