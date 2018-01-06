import {Component, OnInit} from '@angular/core';
import {AppStatusService, MenuStatus} from '../../../services/app-status.service';

@Component({
    selector: 'app-index',
    template: ``,
    styles: []
})
export class IndexComponent implements OnInit {

    constructor(public appStatus: AppStatusService) {
        this.appStatus.menu_status.next(new MenuStatus('', ''));
        this.appStatus.logo_title.next('');
    }

    ngOnInit() {
        this.appStatus.is_main_page.next(true);
        this.appStatus.is_pricing.next(false);
    }

}
