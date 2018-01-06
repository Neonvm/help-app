import {Component, OnInit, HostBinding} from '@angular/core';
import {slideHorizontal} from '../../../animation/router.animations';
import {AppStatusService, MenuStatus} from "../../../services/app-status.service";

@Component({
    selector: 'app-reselling',
    templateUrl: './reselling.component.html',
    styleUrls: ['./reselling.component.scss'],
    animations: [slideHorizontal()]
})
export class ResellingComponent implements OnInit {

    @HostBinding('@slideHorizontal') slideHorizontal = 'fromRight';
    @HostBinding('class') classes = 'page-content-wrapper';

    constructor(public appStatus: AppStatusService) {
        this.appStatus.menu_status.next(new MenuStatus('reselling', 'vps'));
        this.appStatus.logo_title.next('reselling');
    }

    ngOnInit() {
        this.appStatus.setRightAnimationPageStatus();
    }

}