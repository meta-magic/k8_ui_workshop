
import { OnInit, Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";


@Component({
    selector: 'product-catlog',
    templateUrl: './product.catlog.component.html'
})
export class ProductCatlogueComponent implements OnInit {
    
    data: any;
    notify : any[] = [];

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        this.fetchData();
    }

    fetchData() {
        const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8');
        let response: any;
        //assets/productcatlog.json
        this.http.get("productms/product/findall", { headers }).subscribe(
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

    productDetails(node:any){
        debugger;
        this.router.navigate(['product-details',node.productId]);
    }

    addToCart(node:any){
        this.notify.push('Product added to cart!');
    }
}