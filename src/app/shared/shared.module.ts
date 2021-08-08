import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
 * Material modules
 */
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faEdit,
  faEllipsisV,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const fontAwesomeIcons = [faBars, faEllipsisV, faEdit, faTrash];

const materialModule = [
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTableModule,
  MatSortModule,
  FlexLayoutModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatPaginatorModule,
  MatDialogModule,
];

/*
 * Other modules
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    /* Material modules */
    ...materialModule,
    FontAwesomeModule,
  ],
  providers: [],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    /* Material modules */
    ...materialModule,
    FontAwesomeModule,
  ],
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    fontAwesomeIcons.forEach((icon) => faIconLibrary.addIcons(icon));
  }
}
