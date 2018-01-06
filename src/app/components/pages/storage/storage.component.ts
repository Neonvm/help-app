import {Component, OnInit, HostBinding} from '@angular/core';
import {slideHorizontal} from '../../../animation/router.animations';
import {AppStatusService, MenuStatus} from "../../../services/app-status.service";

@Component({
    selector: 'app-storage',
    templateUrl: './storage.component.html',
    styleUrls: ['./storage.component.scss'],
    animations: [slideHorizontal()]
})
export class StorageComponent implements OnInit {

    @HostBinding('@slideHorizontal') slideHorizontal = 'fromRight';
    @HostBinding('class') classes = 'page-content-wrapper';

    constructor(public appStatus: AppStatusService) {
        this.appStatus.setRightAnimationPageStatus();
        this.appStatus.menu_status.next(new MenuStatus('storage', 'storage'));
        this.appStatus.logo_title.next('storage');
    }

    ngOnInit() {

    }

}