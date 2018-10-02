
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'product-details',
    templateUrl: './product.details.component.html'
})

export class ProductDetailsComponent implements OnInit {
    
    data : any;

    constructor(private http: HttpClient,private activatedRoute: ActivatedRoute) { 

    }

    ngOnInit() { 
        debugger;
        this.activatedRoute.params.subscribe((param: Params) => {
            this.fetchdata(param.id);
        });
    }

    private fetchdata(id:string): void{
        const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8');
        let response: any;
        this.http.get("productms/product/catalogue/"+id, { headers }).subscribe(
            resp => {
                response = resp;
            },
            error => {
             
            },
            () => {
               this.data = response;
            }
        );
    }
}
