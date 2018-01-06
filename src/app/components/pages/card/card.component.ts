import {Component, HostBinding, OnInit} from '@angular/core';
import {slideHorizontal} from "../../../animation/router.animations";
import {AppStatusService, MenuStatus} from "../../../services/app-status.service";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    animations: [slideHorizontal()]
})
export class CardComponent implements OnInit {
    @HostBinding('@slideHorizontal') slideHorizontal = 'fromLeft';
    @HostBinding('class') classes = 'page-content-wrapper';


    constructor(public appStatus: AppStatusService) {
        this.appStatus.menu_status.next(new MenuStatus('', ''));
        this.appStatus.logo_title.next('cart');
    }

    ngOnInit() {
        this.appStatus.setPricingPageStatus();
    }

}
