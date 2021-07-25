import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { RealEstate } from './entities/real-estate.entity';
import { adminApiExtensions } from './api/api-extensions';
import { RealEstateService } from "./service/real-estate.service";
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import { RealEstateAdminResolver } from './api/admin-api-resolver';

import path from "path";
import {RealEstateSharedModule} from "./ui/real-estate-shared.module";



@VendurePlugin({
    imports: [ PluginCommonModule ],
    entities: [ RealEstate ],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [RealEstateAdminResolver],
    },
    providers: [
        RealEstateService,
        // By definiting the `PLUGIN_INIT_OPTIONS` symbol as a provider, we can then inject the
        // user-defined options into other classes, such as the {@link ExampleService}.
       // { provide: PLUGIN_INIT_OPTIONS, useFactory: () => FeedbackPlugin.options },
    ]
})

export class RealEstatePlugin {
    static uiExtensions: AdminUiExtension = {
        ngModules: [
            {
                type: 'lazy' as const,
                route: 'real-estate',
                ngModuleFileName: 'real-estate.module.ts',
                ngModuleName: 'RealEstateModule',
            },
            {
                type: 'shared',
                ngModuleFileName: 'real-estate-shared.module.ts',
                ngModuleName: 'RealEstateSharedModule',
            }
        ],
        extensionPath: path.join(__dirname, 'ui')
    }
}