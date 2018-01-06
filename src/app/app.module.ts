import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule }    from '@angular/forms';
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FeaturesTopComponent} from './components/elements/features-top/features-top.component';
import {FeaturesBlockComponent} from './components/elements/features-block/features-block.component';
import {FeaturesListComponent} from './components/elements/features-list/features-list.component';
import {FeaturesShortComponent} from './components/elements/features-short/features-short.component';
import {BackButtonComponent} from './components/elements/back-button/back-button.component';
import {CommentsComponent} from './components/elements/comments/comments.component';
import {HelpAndContactsComponent} from './components/elements/help-and-contacts/help-and-contacts.component';
import {VpsComponent} from "./components/pages/vps/vps.component";
import {ResellingComponent} from "./components/pages/reselling/reselling.component";
import {CmsInstallComponent} from "./components/pages/cms-install/cms-install.component";
import {StorageComponent} from "./components/pages/storage/storage.component";
import {CompanyComponent} from "./components/pages/company/company.component";
import {BlogComponent} from "./components/pages/blog/blog.component";
import {SupportComponent} from "./components/pages/support/support.component";
import {DedicatedComponent} from "./components/pages/dedicated/dedicated.component";
import {PricingComponent} from "./components/pages/pricing/pricing.component";
import {MainTopLineComponent} from './components/elements/main-top-line/main-top-line.component';
import {MainIndexContentComponent} from './components/elements/main-index-content/main-index-content.component';
import {MainMenuComponent} from './components/elements/main-menu/main-menu.component';
import {MainTopMenuComponent} from './components/elements/main-top-menu/main-top-menu.component';
import {MainFooterComponent} from './components/elements/main-footer/main-footer.component';
import {IndexComponent} from './components/pages/index/index.component';
import {AppStatusService} from './services/app-status.service';
import {CardComponent} from './components/pages/card/card.component';
import {HelperPopupComponent} from './components/elements/helper-popup/helper-popup.component';
import { ZopimService } from './services/zopim.service';
import { StaticBoxComponent } from './components/elements/pricing-elements/static-box/static-box.component';
import { SelectBoxComponent } from './components/elements/pricing-elements/select-box/select-box.component';
import { CollapseItemComponent } from './components/elements/collapse-item/collapse-item.component';
import { CollapseBoxComponent } from './components/elements/collapse-box/collapse-box.component';
import { PricingBoxComponent } from './components/elements/pricing-elements/pricing-box/pricing-box.component';
import { RangeSliderComponent } from './components/elements/range-slider/range-slider.component';
import { ComboSelectSliderComponent } from './components/elements/pricing-elements/combo-select-slider/combo-select-slider.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FeaturesTopComponent,
        FeaturesBlockComponent,
        FeaturesListComponent,
        FeaturesShortComponent,
        BackButtonComponent,
        CommentsComponent,
        HelpAndContactsComponent,
        VpsComponent,
        ResellingComponent,
        CmsInstallComponent,
        StorageComponent,
        CompanyComponent,
        BlogComponent,
        SupportComponent,
        DedicatedComponent,
        PricingComponent,
        MainTopLineComponent,
        MainIndexContentComponent,
        MainMenuComponent,
        MainTopMenuComponent,
        MainFooterComponent,
        IndexComponent,
        CardComponent,
        HelperPopupComponent,
        StaticBoxComponent,
        SelectBoxComponent,
        CollapseItemComponent,
        CollapseBoxComponent,
        PricingBoxComponent,
        RangeSliderComponent,
        ComboSelectSliderComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule.withServerTransition({appId: 'inferno-app'}),
        AppRoutingModule,
        FormsModule

    ],
    providers: [AppStatusService, ZopimService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
