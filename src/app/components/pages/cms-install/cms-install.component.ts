import {Component, HostBinding, OnInit} from '@angular/core';
import {slideHorizontal} from "../../../animation/router.animations";
import {AppStatusService, MenuStatus} from "../../../services/app-status.service";

@Component({
    selector: 'app-cms-install',
    templateUrl: './cms-install.component.html',
    styleUrls: ['./cms-install.component.scss'],
    animations: [slideHorizontal()]
})
export class CmsInstallComponent implements OnInit {

    @HostBinding('@slideHorizontal') slideHorizontal = 'fromRight';
    @HostBinding('class') classes = 'page-content-wrapper';

    constructor(public appStatus: AppStatusService) {
        this.appStatus.menu_status.next(new MenuStatus('cms-install', 'cms-install'));
        this.appStatus.logo_title.next('solutions');
    }

    ngOnInit() {
        this.appStatus.setRightAnimationPageStatus();
    }

}