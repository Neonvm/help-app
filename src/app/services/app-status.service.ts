import {Injectable, PLATFORM_ID, Inject} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {isPlatformBrowser} from '@angular/common';

export class MenuStatus {
    constructor(public item: string, public block: string, public hide_menu: boolean = false) {
    }
}


@Injectable()
export class AppStatusService {
    public is_main_page: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    public is_pricing: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public page_animation_type: BehaviorSubject<string> = new BehaviorSubject<string>('fromRight');
    public menu_status: BehaviorSubject<MenuStatus> = new BehaviorSubject<MenuStatus>(new MenuStatus('', ''));
    public logo_title: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public helper_is_open: boolean = false;
    public is_platform_browser: boolean = false;

    constructor(@Inject(PLATFORM_ID) platformId: string) {
        if (isPlatformBrowser(platformId)) {
            this.is_platform_browser = true;
        }
    }

    public onOpenHelper() {
        this.helper_is_open = true;
    }

    public onCloseHelper() {
        this.helper_is_open = false;
    }

    public setIndexPageStatus() {
        this.is_main_page.next(true);
        this.is_pricing.next(false);
    }

    public setRightAnimationPageStatus() {
        this.is_main_page.next(false);
        this.is_pricing.next(false);
    }

    public setPricingPageStatus() {
        this.is_main_page.next(false);
        this.is_pricing.next(true);
    }


}
