import {Component, OnInit} from '@angular/core';
import {logoAnimate} from "../../../animation/router.animations";
import {AppStatusService} from "../../../services/app-status.service";

@Component({
    selector: 'app-main-top-line',
    templateUrl: 'main-top-line.component.html',
    styleUrls: ['./main-top-line.component.scss'],
    animations: [logoAnimate()]
})
export class MainTopLineComponent implements OnInit {
    public stats: string = 's1';

    public logo_text: string = 'qqqqqqqq';

    constructor(public appStatus: AppStatusService) {
        this.appStatus.logo_title.subscribe(data => {
            this.stats = this.stats !== 's1'? 's1':'s2';
            this.logo_text = data;
        });
    }

    ngOnInit() {
    }


}
