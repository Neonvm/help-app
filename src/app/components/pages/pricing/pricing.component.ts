import {Component, OnInit, HostBinding} from '@angular/core';
import {slideHorizontal} from "../../../animation/router.animations";
import {AppStatusService, MenuStatus} from "../../../services/app-status.service";
import {Subscription} from 'rxjs/Subscription';
import {SelectBoxComponent} from '../../elements/pricing-elements/select-box/select-box.component'
import {StaticBoxComponent} from '../../elements/pricing-elements/static-box/static-box.component'


@Component({
    selector: 'app-pricing',
    templateUrl: 'pricing.component.html',
    styleUrls: ['./pricing.component.scss'],
    animations: [slideHorizontal()]
})
export class PricingComponent implements OnInit {
    private subscriptions: Subscription[] = [];
    
    @HostBinding('@slideHorizontal') slideHorizontal = 'fromLeft';
    @HostBinding('class') classes = 'page-content-wrapper';

    constructor(public appStatus: AppStatusService) {
        this.subscriptions.push(
            this.appStatus.page_animation_type.subscribe(data => {
                this.slideHorizontal = data;
            })
        );
        this.appStatus.menu_status.next(new MenuStatus('', ''));
        this.appStatus.logo_title.next('hosting');

    }

    ngOnInit() {
        this.appStatus.setPricingPageStatus();
    }

    ngOnDestroy() {
        this.subscriptions
            .forEach(s => s.unsubscribe());
    }
}