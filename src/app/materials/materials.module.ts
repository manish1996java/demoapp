import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
// import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatMenuModule, MatMenuContent } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatNativeDateModule } from '@angular/material/core';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTreeModule} from '@angular/material/tree';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatCheckboxModule} from '@angular/material/checkbox';


const meterial  = [
  MatBadgeModule,
  MatSelectModule,
  MatButtonModule,
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  // MatLineModule,
  MatCardModule,
  MatRadioModule,
  MatInputModule,
  MatDividerModule,
  MatDialogModule,
  MatTableModule,
  MatDialogModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  // FlexLayoutModule,
  MatSidenavModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  OverlayModule,
  MatTabsModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatStepperModule,
  MatGridListModule,
  MatProgressBarModule,
  MatTreeModule,
  CdkTreeModule,
  MatCheckboxModule,
  MatButtonToggleModule
];

@NgModule({
  imports: meterial,
  exports: meterial,
})
export class MaterialsModule { }
