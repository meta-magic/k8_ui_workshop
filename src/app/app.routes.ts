import {Routes} from '@angular/router';
import { ProductCatlogueComponent } from './product-catlog/product.catlog.component';
import { ProductDetailsComponent } from './product-details/product.details.component';

export const APP_ROUTE: Routes = [
    {
        path: '', redirectTo: 'catlogue', pathMatch: 'full'
    },
    {
        path:'catlogue',component:ProductCatlogueComponent
    },
    {
        path:'product-details/:id', component: ProductDetailsComponent
    }
]