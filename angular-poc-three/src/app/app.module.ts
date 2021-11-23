import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyGenericComponent } from './my-generic/my-generic.component';
import { ButtonComponent } from './components/button/button.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { componentHostDirective } from './directive/componentHost.directive';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGenericComponent,
    ButtonComponent,
    TextboxComponent,
    componentHostDirective,
    HeaderComponent,
    TableComponent,
    FooterComponent,
    CardComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
