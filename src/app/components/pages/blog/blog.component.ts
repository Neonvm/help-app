import {Component, HostBinding, OnInit} from '@angular/core';
import {slideHorizontal} from '../../../animation/router.animations';
import {AppStatusService, MenuStatus} from "../../../services/app-status.service";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    animations: [slideHorizontal()]
})
export class BlogComponent implements OnInit {

    @HostBinding('@slideHorizontal') slideHorizontal = 'fromRight';
    @HostBinding('class') classes = 'page-content-wrapper';

    constructor(public appStatus: AppStatusService) {
        this.appStatus.menu_status.next(new MenuStatus('blog', 'company'));
        this.appStatus.logo_title.next('blog');
    }

    ngOnInit() {
        this.appStatus.setRightAnimationPageStatus();
    }
}