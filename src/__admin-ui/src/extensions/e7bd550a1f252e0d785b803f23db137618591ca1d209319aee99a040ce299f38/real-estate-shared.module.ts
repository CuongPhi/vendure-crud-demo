import { NgModule } from '@angular/core';
import { SharedModule, addNavMenuSection } from '@vendure/admin-ui/core';

@NgModule({
    imports: [SharedModule],
    providers: [
        addNavMenuSection({
            id: 'dashboard-nav',
            label: 'My Dashboard',
            items: [
                {
                    id: 'real-estate',
                    label: 'Real estate',
                    routerLink: ['/extensions/real-estate'],
                    icon: 'cursor-hand-open',
                },
            ],
        },
        // Add this section before the "settings" section
        'settings'),
    ]
})
export class RealEstateSharedModule {}