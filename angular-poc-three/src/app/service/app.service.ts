import { Injectable } from "@angular/core";
import { ComponentItem } from "../component-item";
import { ButtonComponent } from "../components/button/button.component";
import { CardComponent } from "../components/card/card.component";
import { FooterComponent } from "../components/footer/footer.component";
import { FormComponent } from "../components/form/form.component";
import { HeaderComponent } from "../components/header/header.component";
import { ListComponent } from "../components/list/list.component";
import { TableComponent } from "../components/table/table.component";
import { TextboxComponent } from "../components/textbox/textbox.component";
@Injectable({
  providedIn:'root'
})
export class AppService{
  getComponents(){
    return [

      new ComponentItem(
        ButtonComponent,
        { name : 'Button', description : "This is a button component"}
      ),
      new ComponentItem(
        TextboxComponent,
        { name : 'Textbox', description : "This is a Textbox component"}
      ),
      new ComponentItem(
        HeaderComponent,
        { name : 'Header', description : "This is a header component"}
      ),
      new ComponentItem(
        TableComponent,
        { name : 'Table', description : "This is a table component"}
      ),
      new ComponentItem(
        FooterComponent,
        { name : 'Footer', description : "This is a footer component"}
      ),
      new ComponentItem(
        CardComponent,
        { name : 'Card', description : "This is a card component"}
      ),
      new ComponentItem(
        FormComponent,
        { name : 'Form', description : "This is a form component"}
      ),
      new ComponentItem(
        ListComponent,
        { name : 'List', description : "This is a list component"}
      )
    ]
  }
}
