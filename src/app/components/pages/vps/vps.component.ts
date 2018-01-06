import {HostBinding, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {slideHorizontal} from "../../../animation/router.animations";
import {AppStatusService, MenuStatus} from "../../../services/app-status.service";
import {Subscription} from 'rxjs/Subscription';


@Component({
    selector: 'app-vps',
    templateUrl: './vps.component.html',
    styleUrls: ['./vps.component.scss'],
    animations: [slideHorizontal()]
})
export class VpsComponent implements OnInit {
    private subscriptions: Subscription[] = [];

    @HostBinding('@slideHorizontal') slideHorizontal = 'fromRight';
    @HostBinding('class') classes = 'page-content-wrapper';

    constructor(public appStatus: AppStatusService, public router: Router) {
        this.subscriptions.push(
            this.appStatus.page_animation_type.subscribe(data => {
                this.slideHorizontal = data
            })
        );
        this.appStatus.menu_status.next(new MenuStatus('vps', 'vps'));
        this.appStatus.logo_title.next('hosting');
    }

    ngAfterViewInit() {
        this.appStatus.setRightAnimationPageStatus();
        //this.appStatus.page_animation_type.next('fromRight');
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.subscriptions
            .forEach(s => s.unsubscribe());
    }


    public goToPricing(event) {
        event.stopPropagation();
        this.appStatus.page_animation_type.next('fromLeft');
        setTimeout(_ => {
            this.router.navigate(['./pricing'])
        });

    }
}
