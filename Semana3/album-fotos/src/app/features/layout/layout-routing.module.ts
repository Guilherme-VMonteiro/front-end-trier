import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component: BaseLayoutComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
