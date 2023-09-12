import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// templates imports
import { TemplateCatHomepageComponent } from './templates/template-cat-homepage/template-cat-homepage.component';
import { TemplateVoteComponent } from './templates/template-vote/template-vote.component';
import { TemplateTableComponent } from './templates/template-table/template-table.component';
// angular materiel imports
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    TemplateCatHomepageComponent,
    TemplateVoteComponent,
    TemplateTableComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
  ],
  exports: [
    TemplateCatHomepageComponent,
    TemplateVoteComponent,
    TemplateTableComponent]
})
export class SharedModule { }
