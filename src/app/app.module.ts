import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/general/header/header.component';
import { BeastsPanelComponent } from './comps/panels/beasts-panel/beasts-panel.component';
import { BeastCardComponent } from './comps/cards/beast-card/beast-card.component';
import { BirdCardComponent } from './comps/cards/bird-card/bird-card.component';
import { WildCardComponent } from './comps/cards/wild-card/wild-card.component';
import { FooterComponent } from './comps/general/footer/footer.component';
import { NavComponent } from './comps/general/navigation/navigation.component';
import { BirdsPanelComponent } from './comps/panels/birds-panel/birds-panel.component';
import { WildsPanelComponent } from './comps/panels/wilds-panel/wilds-panel.component';
import { PaginatorComponent } from './comps/general/paginator/paginator.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeastsPanelComponent,
    BeastCardComponent,
    BirdCardComponent,
    WildCardComponent,
    FooterComponent,
    NavComponent,
    BirdsPanelComponent,
    WildsPanelComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
