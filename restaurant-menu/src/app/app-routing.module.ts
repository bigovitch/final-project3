
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./screens/detail/detail.module').then( m => m.DetailPageModule),
    canActivate:[AuthGuard]
  },
 
  {
    path: 'listing',
    loadChildren: () => import('./screens/listing/listing.module').then( m => m.ListingPageModule),
    canActivate:[AuthGuard]
  },
  
  {
    path: 'cart',
    loadChildren: () => import('./screens/cart/cart.module').then( m => m.CartPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'home/dash-board',
    loadChildren: () => import('./screens/dash-board/dash-board.module').then( m => m.DashBoardPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./screens/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./screens/checkout/checkout.module').then( m => m.CheckoutPageModule),
    canActivate:[AuthGuard]
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

