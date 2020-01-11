import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@base/material.module';

import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    HeaderComponent,
    // FooterComponent
  ],
  exports: [
    HeaderComponent,
    // FooterComponent
  ],
})
export class CoreModule {}
