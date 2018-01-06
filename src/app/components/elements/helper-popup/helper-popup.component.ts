import {Component, OnInit, HostBinding} from '@angular/core';
import {AppStatusService} from "../../../services/app-status.service";

@Component({
    selector: 'app-helper-popup',
    templateUrl: './helper-popup.component.html',
    styleUrls: ['./helper-popup.component.scss']
})
export class HelperPopupComponent implements OnInit {

    constructor(public appStatus: AppStatusService) {
    }

    ngOnInit() {
    }

}
