import {Component, HostBinding, OnInit} from '@angular/core';
import {slideHorizontal} from "../../../animation/router.animations";
import {AppStatusService, MenuStatus} from "../../../services/app-status.service";

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss'],
    animations: [slideHorizontal()]
})
export class CompanyComponent implements OnInit {

    @HostBinding('@slideHorizontal') slideHorizontal = 'fromRight';
    @HostBinding('class') classes = 'page-content-wrapper';

    constructor(public appStatus: AppStatusService) {
        this.appStatus.menu_status.next(new MenuStatus('company', 'company'));
        this.appStatus.logo_title.next('company');
    }

    ngOnInit() {
        this.appStatus.setRightAnimationPageStatus();
    }

}