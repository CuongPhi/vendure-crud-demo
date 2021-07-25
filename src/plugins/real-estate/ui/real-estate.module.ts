import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule, createResolveData  } from '@vendure/admin-ui/core';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DetailComponent } from "./components/detail/detail.component";
import RealEstateDetailResolver from './provider/routing/detail/detail-resolver';
import { ListComponent } from "./components/list/list.component";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: ListComponent,
                data: {
                    breadcrumb: [
                        {
                            label: 'Real Estate list',
                            link: ['/extensions', 'real-estate'],
                        },
                    ]
                }
            },
            {
                path: ':id',
                component: DetailComponent,
                data: { breadcrumb: 'Real estate detail breadcrumb' },
                resolve: createResolveData(RealEstateDetailResolver),
            },
            {
                path: 'create',
                component: DetailComponent,
                data: { breadcrumb: 'Real estate detail breadcrumb' },
            },
        ])
    ],
    declarations: [
        DashboardComponent,
        ListComponent,
        DetailComponent
    ],
    providers:[RealEstateDetailResolver],
})
export class RealEstateModule {}
