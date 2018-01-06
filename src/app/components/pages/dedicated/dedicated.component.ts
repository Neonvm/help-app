import {Component, HostBinding, OnInit} from '@angular/core';
import {slideHorizontal} from "../../../animation/router.animations";
import {AppStatusService, MenuStatus} from "../../../services/app-status.service";

@Component({
    selector: 'app-dedicated',
    templateUrl: './dedicated.component.html',
    styleUrls: ['./dedicated.component.scss'],
    animations: [slideHorizontal()]
})
export class DedicatedComponent implements OnInit {

    @HostBinding('@slideHorizontal') slideHorizontal = 'fromRight';
    @HostBinding('class') classes = 'page-content-wrapper';

    constructor(public appStatus: AppStatusService) {
        this.appStatus.menu_status.next(new MenuStatus('dedicated', 'vps'));
        this.appStatus.logo_title.next('dedicated');
    }

    ngOnInit() {
        this.appStatus.setRightAnimationPageStatus();
    }

}