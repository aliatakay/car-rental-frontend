import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';

const routes: Routes = [
  { path: 'brands', component: BrandComponent },
  { path: 'colors', component: ColorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
