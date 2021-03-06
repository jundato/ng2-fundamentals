import { Component , OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'events-list',
  template: `
    <div>
        <h2>Upcoming Angular 2 Events</h2>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
    events:any
    constructor(private eventService: EventService, private toastr:ToastrService, private route:ActivatedRoute){
        
    }
    ngOnInit() {
        this.events = this.route.snapshot.data['events']
    }
    handleThumbnailClick(){
        this.toastr.success('wwww')
    }   
}