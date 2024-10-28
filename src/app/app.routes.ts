import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { OperacionesComponentComponent } from './operaciones-component/operaciones-component.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponentComponent
    },{
        path:"operaciones",
        component:OperacionesComponentComponent
    }
];
