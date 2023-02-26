import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceMasterComponent } from 'src/component/invoice-master/invoice-master.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceMasterComponent,
  },
  {
    path: 'invoice',
    component: InvoiceMasterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
