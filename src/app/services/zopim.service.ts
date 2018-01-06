import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AppStatusService} from './app-status.service'

declare var $zopim: any;

@Injectable()
export class ZopimService {

    public is_online: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public is_load: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private appStatus: AppStatusService) {
        if (this.appStatus.is_platform_browser) {
            setTimeout(_ => {
                $zopim(() => {
                    this.is_load.next(true);
                    $zopim.livechat.setOnStatus((status) => {
                        if (status == 'online') {
                            this.is_online.next(true);
                        } else {
                            this.is_online.next(false);
                        }
                    });
                });
            });
        }
    }

    public openChat() {
        if (this.appStatus.is_platform_browser) {
            $zopim(() => {
                $zopim.livechat.window.show();
            });
        }
    }

}
