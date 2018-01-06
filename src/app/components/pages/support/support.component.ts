import {Component, HostBinding, OnInit} from '@angular/core';
import {slideHorizontal} from "../../../animation/router.animations";
import {AppStatusService, MenuStatus} from "../../../services/app-status.service";

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.scss'],
    animations: [slideHorizontal()]
})
export class SupportComponent implements OnInit {

    @HostBinding('@slideHorizontal') slideHorizontal = 'fromRight';
    @HostBinding('class') classes = 'page-content-wrapper';

    constructor(public appStatus: AppStatusService) {
        this.appStatus.menu_status.next(new MenuStatus('', '', true));
        this.appStatus.logo_title.next('support');
    }

    ngOnInit() {
        this.appStatus.setRightAnimationPageStatus();
    }

}