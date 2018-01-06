import {Component, OnInit, NgZone} from '@angular/core';
import {AppStatusService} from "../../../services/app-status.service";
import {ZopimService} from "../../../services/zopim.service";


@Component({
    selector: 'app-main-footer',
    templateUrl: 'main-footer.component.html',
    styleUrls: ['./main-footer.component.scss'],
})
export class MainFooterComponent implements OnInit {

    public is_online_chat: boolean = false;
    public is_load_chat: boolean = false;

    constructor(public appStatus: AppStatusService,
                public zopim: ZopimService,
                public zone: NgZone) {

    }

    ngOnInit() {
        this.zopim.is_online.subscribe(data => {
            this.zone.run(() => {
                this.is_online_chat = data;
            });
        });
        this.zopim.is_load.subscribe(data => {
            this.zone.run(() => {
                this.is_load_chat = data;
            });
        });
    }
}
