import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  inmuebles = [];

  constructor(public navCtrl: NavController,
              public http: HttpClient) {

                this.http.get('/v1/pin-data?url=/s-renta-inmuebles/guadalajara-y-zona-metro/v1c1098l10567p1&geo=(21.10631012145462,-102.42214381725364),(20.21712862656199,-104.32387728274637)').subscribe(data=> { 
                  console.log(JSON.stringify(data));
                  if (data.hasOwnProperty("ads")){
            
                    this.inmuebles= data["ads"];
            
                  }
                },
            
                  error=>{
                      console.log(JSON.stringify(error));
                  }
                
                ) 



  }

}

/* 
El precio fue obtenido de la api de vivaanuncios especificamente en el atributo que se llama price el cual a su vez tiene otro atributo llamado 
formattedAmount. 

El precio fue obtenido de la api de vivaanuncios especificamente en el atributo que se llama geo el cual a su vez tiene otros dos atributos llamados 
name y display name, los cuales son la ciudad y la zona respectivamnte.
*/
