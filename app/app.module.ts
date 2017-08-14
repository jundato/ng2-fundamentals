import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnail } from './events/event-thumbnail.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [EventsAppComponent, EventsListComponent, EventThumbnail],
  bootstrap: [EventsAppComponent]
})
export class AppModule{}