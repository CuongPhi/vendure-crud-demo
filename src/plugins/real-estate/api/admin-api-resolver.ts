import { Args, Parent, Query, Resolver, Mutation } from '@nestjs/graphql';
import { RealEstateService } from '../service/real-estate.service';
import { RequestContext, Ctx, Allow, Permission, Transaction  } from '@vendure/core';

@Resolver()
export class RealEstateAdminResolver {
    constructor(private RealEstateService: RealEstateService) {
    }

    @Query()
    @Allow(Permission.SuperAdmin)
    RealEstate(@Ctx() ctx: RequestContext, @Args() args: any) {
        const {id} = args;
        return this.RealEstateService.getRealEstateById(ctx,id);
    }

    @Transaction()
    @Mutation()
    @Allow(Permission.SuperAdmin)
    addRealEstate(@Ctx() ctx: RequestContext, @Args() args: any){
        const {input} = args;
        console.log(input);
        return this.RealEstateService.addSingleRealEstate(ctx,input);
    }

    @Transaction()
    @Mutation()
    @Allow(Permission.SuperAdmin)
    updateRealEstate(@Ctx() ctx: RequestContext, @Args() args: any){
        const {input} = args;
        return this.RealEstateService.updateSingleRealEstate(ctx,input);
    }
}