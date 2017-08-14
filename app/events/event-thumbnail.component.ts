import { Component, Input, Output,  EventEmitter } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
    <h3>{{event.name}}</h3>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
    `
})
export class EventThumbnail {
    @Input() event: any
    @Output() eventClick = new EventEmitter();
}