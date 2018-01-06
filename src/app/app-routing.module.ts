import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from "./components/home/home.component";
import {VpsComponent} from "./components/pages/vps/vps.component";
import {ResellingComponent} from "./components/pages/reselling/reselling.component";
import {CmsInstallComponent} from "./components/pages/cms-install/cms-install.component";
import {StorageComponent} from "./components/pages/storage/storage.component";
import {CompanyComponent} from "./components/pages/company/company.component";
import {BlogComponent} from "./components/pages/blog/blog.component";
import {SupportComponent} from "./components/pages/support/support.component";
import {DedicatedComponent} from "./components/pages/dedicated/dedicated.component";
import {PricingComponent} from "./components/pages/pricing/pricing.component";
import {IndexComponent} from "./components/pages/index/index.component";
import {CardComponent} from "./components/pages/card/card.component";


const itemRoutes: Routes = [

    {
        path: '',
        component: IndexComponent,
        data: {
            alias: ''
        }
    },
    {
        path: 'reselling',
        component: ResellingComponent,
        data: {
            alias: 'reselling'
        }
    },
    {
        path: 'cms-install',
        component: CmsInstallComponent,
        data: {
            alias: 'cms-install'
        }
    },
    {
        path: 'storage',
        component: StorageComponent,
        data: {
            alias: 'storage'
        }
    },
    {
        path: 'company',
        component: CompanyComponent,
        data: {
            alias: 'company'
        }
    },
    {
        path: 'blog',
        component: BlogComponent,
        data: {
            alias: 'blog'
        }
    },
    {
        path: 'support',
        component: SupportComponent,
        data: {
            alias: 'support'
        }
    },
    {
        path: 'vps',
        component: VpsComponent,
        data: {
            alias: 'vps'
        }
    },
    {
        path: 'dedicated',
        component: DedicatedComponent,
        data: {
            alias: 'dedicated'
        }
    },
    {
        path: 'pricing',
        component: PricingComponent,
        data: {
            alias: 'pricing'
        }
    },
    {
        path: 'card',
        component: CardComponent,
        data: {
            alias: 'card'
        }
    }


];


const appRoutes: Routes = [
    {path: '', component: HomeComponent, children: itemRoutes},
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false}
        )
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule {

}