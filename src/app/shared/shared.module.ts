import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@base/material.module';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    PaginationComponent,
    FavoriteComponent,
  ],
  declarations: [
    PaginationComponent,
    FavoriteComponent,
  ]
})
export class SharedModule {}
