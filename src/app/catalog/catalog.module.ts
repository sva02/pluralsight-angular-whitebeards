import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FilterClassesService } from './filter-classes.service';



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    RouterModule, SharedModule
  ],
  providers: [
    CatalogRepositoryService,
    FilterClassesService
  ]
})
export class CatalogModule { }
