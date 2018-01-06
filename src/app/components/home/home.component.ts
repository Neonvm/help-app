import {Component, OnInit, OnDestroy} from '@angular/core';
import {AppStatusService} from '../../services/app-status.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];

    public is_main_page: boolean = true;
    public is_pricing: boolean = false;

    constructor(private appStatus: AppStatusService) {
    }

    ngAfterViewInit() {
        this.subscriptions.push(this.appStatus.is_main_page.subscribe(
            data => {
                setTimeout(_ => {
                    this.is_main_page = data;
                });
            }
        ));
        this.subscriptions.push(this.appStatus.is_pricing.subscribe(
            data => {
                setTimeout(_ => {
                    this.is_pricing = data;
                });
            }
        ));
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.subscriptions
            .forEach(s => s.unsubscribe());
    }
}
