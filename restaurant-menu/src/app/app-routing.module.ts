// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'listing',
//     pathMatch: 'full'
//   },
//   {
//     path: 'listing',
//     loadChildren: () => import('./screens/listing/listing.module').then( m => m.ListingPageModule)
//   },
//   {
//     path: 'cart',
//     loadChildren: () => import('./screens/cart/cart.module').then( m => m.CartPageModule)
//   },
//   {
//     path: 'detail',
//     loadChildren: () => import('./screens/detail/detail.module').then( m => m.DetailPageModule)
//   },
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./screens/detail/detail.module').then( m => m.DetailPageModule)
  },
 
  {
    path: 'listing',
    loadChildren: () => import('./screens/listing/listing.module').then( m => m.ListingPageModule)
  },
  
  {
    path: 'cart',
    loadChildren: () => import('./screens/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'home/dash-board',
    loadChildren: () => import('./screens/dash-board/dash-board.module').then( m => m.DashBoardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./screens/register/register.module').then( m => m.RegisterPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

