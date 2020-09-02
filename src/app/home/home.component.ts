import { Component, OnInit, Input } from "@angular/core";
import { Productos2Service } from "../servicios/productos2.service";
import { ItemsService } from '../servicios/items.service';



@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  
  
 items: any[] = [];
 productos: any[] = [];

  constructor( public productos2Service: Productos2Service, public itemsService:ItemsService ) {
    itemsService.getProductos()    
    .subscribe((data: any) => {
      this.items = data;     
     this.items =  this.items.slice(0,4);
     console.log(this.items);
    });
  }

  

  ngOnInit() {
    this.productos = this.productos2Service.getProductos();
  }
 
}
