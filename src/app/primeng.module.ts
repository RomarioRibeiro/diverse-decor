import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import {CheckboxModule } from 'primeng/checkbox';
import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {InputTextModule } from 'primeng/inputtext';
import {CardModule } from 'primeng/card';
import {ButtonModule } from 'primeng/button';
import {TableModule } from 'primeng/table';
import {DropdownModule } from 'primeng/dropdown';
import {CalendarModule } from 'primeng/calendar';
import {MultiSelectModule } from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
import {InputMaskModule } from 'primeng/inputmask';
import {TooltipModule} from 'primeng/tooltip';
import {PasswordModule} from 'primeng/password';
import {InputSwitchModule} from 'primeng/inputswitch';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KeyFilterModule} from 'primeng/keyfilter';
import {SelectButtonModule} from 'primeng/selectbutton';
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import {FileUploadModule} from 'primeng/fileupload';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {AccordionModule} from 'primeng/accordion';
import {TreeModule} from 'primeng/tree';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputNumberModule} from 'primeng/inputnumber';
import {SidebarModule} from 'primeng/sidebar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { TagModule } from 'primeng/tag';
import {DividerModule} from 'primeng/divider';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import {ScrollTopModule} from 'primeng/scrolltop';
import {MegaMenuModule} from 'primeng/megamenu';
import {CarouselModule} from 'primeng/carousel';
// import {HotkeyModule} from 'angular2-hotkeys';


@NgModule({

  // imports: [HotkeyModule.forRoot()],


  exports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    MultiSelectModule,
    DialogModule,
    InputMaskModule,
    CheckboxModule,
    TooltipModule,
    ReactiveFormsModule,
    PasswordModule,
    InputSwitchModule,
    RadioButtonModule,
    InputTextareaModule,
    KeyFilterModule,
    SelectButtonModule,
    TabViewModule,
    PanelModule,
    FileUploadModule,
    ProgressSpinnerModule,
    OverlayPanelModule,
    AccordionModule,
    TreeModule,
    ProgressBarModule,
    InputNumberModule,
    SidebarModule,
    AutoCompleteModule,
    TagModule,
    DividerModule,
    StepsModule,
    ScrollTopModule,
    MegaMenuModule,
    CarouselModule
  ]
})
export class PrimengModule { }
