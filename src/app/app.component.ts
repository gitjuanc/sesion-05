import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title="actividad";
  vericorreo:string="";
  verificacion:string="";

  veritexto:string="";
  validaciontex:string="";



  verificacioncorreo(correo:string){
    this.vericorreo=correo

    if(/\w+\@\w+\.\w+/.test(correo)){
      this.verificacion="correo valido"
    }else{
      this.verificacion="correo invalido"
    }

    console.log("El correo es: ",this.vericorreo);
  }

  validacion(textov:string){
    this.veritexto=textov

    if(/\@\d{5}\@\d{6}\@\w{7}\@/.test(textov)){
      this.validaciontex="texto valido"
    }else{
      this.validaciontex="texto invalido"
    }

    console.log("El correo es: ",this.veritexto);
  }

}
