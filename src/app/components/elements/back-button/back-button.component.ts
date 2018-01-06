import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppStatusService} from "../../../services/app-status.service";

@Component({
    selector: 'app-back-button',
    templateUrl: 'back-button.component.html',
    styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {

    @HostListener('click', ['$event.target']) goBack(btn) {
        this.appStatus.page_animation_type.next('toLeft');
        setTimeout(_ => {
            this.router.navigate(['./vps'])
        });
    }

    constructor(public appStatus: AppStatusService, public router: Router) {
    }

    ngOnInit() {
    }


}
