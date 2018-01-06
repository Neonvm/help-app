import {Component, OnInit} from '@angular/core';
import {AppStatusService} from "../../../services/app-status.service";
import {Router, ActivationEnd} from '@angular/router'

@Component({
    selector: 'app-main-menu',
    templateUrl: 'main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

    public cutent_item: string;
    public cutent_block: string;
    public hide_menu: boolean;

    constructor(public appStatus: AppStatusService, public router: Router) {
        appStatus.menu_status.subscribe(data => {
            setTimeout(_ => {
                this.cutent_item = data.item;
            });
            setTimeout(_ => {
                this.cutent_block = data.block;
            });
            setTimeout(_ => {
                this.hide_menu = data.hide_menu;
            });

        });
    }

    ngOnInit() {

    }

    public goTo(target: string, event) {
        event.preventDefault();
        this.appStatus.page_animation_type.next('fromRight');
        switch (target) {
            case 'vps': {
                setTimeout(_ => {
                    this.router.navigate(['/vps'])
                });
                break;
            }
            case 'dedicated': {
                setTimeout(_ => {
                    this.router.navigate(['/dedicated'])
                });
                break;
            }
            case 'reselling': {
                setTimeout(_ => {
                    this.router.navigate(['/reselling'])
                });
                break;
            }
            case 'cms-install': {
                setTimeout(_ => {
                    this.router.navigate(['/cms-install'])
                });
                break;
            }
            case 'web': {
                setTimeout(_ => {
                    this.router.navigate(['/web'])
                });
                break;
            }
            case 'task': {
                setTimeout(_ => {
                    this.router.navigate(['/task'])
                });
                break;
            }
            case 'comm': {
                setTimeout(_ => {
                    this.router.navigate(['/comm'])
                });
                break;
            }
            case 'company': {
                setTimeout(_ => {
                    this.router.navigate(['/company'])
                });
                break;
            }
            case 'blog': {
                setTimeout(_ => {
                    this.router.navigate(['/blog'])
                });
                break;
            }
            case 'support': {
                setTimeout(_ => {
                    this.router.navigate(['/support'])
                });
                break;
            }
            case 'storage': {
                setTimeout(_ => {
                    this.router.navigate(['/storage'])
                });
                break;
            }
        }

    }


}
