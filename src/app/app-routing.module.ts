import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '', pathMatch: 'full', redirectTo: 'inicio'
    },
    {
      path: '**', pathMatch: 'full', redirectTo: 'inicio'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
