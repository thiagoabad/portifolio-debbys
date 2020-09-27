import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';

import { NotFoundComponent } from './errors/not-found/not-found.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
