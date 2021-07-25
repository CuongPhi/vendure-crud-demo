import { Injectable, Inject } from '@nestjs/common';
import { RequestContext, TransactionalConnection} from '@vendure/core';
import {DeepPartial} from 'typeorm';
import {RealEstate} from '../entities/real-estate.entity';

@Injectable()
export class RealEstateService {

    constructor(private connection: TransactionalConnection) {
    }

    async getRealEstateById(ctx: RequestContext, data: any) {
        return this.connection.getEntityOrThrow(ctx, RealEstate, data);
    }

    async addSingleRealEstate(ctx: RequestContext, data: DeepPartial<RealEstate>[]){
        const createdVariant = await this.connection.getRepository(ctx,RealEstate).create(data);
        const savedVariant = await this.connection.getRepository(ctx,RealEstate).save(createdVariant);
        return savedVariant;
    }

    async updateSingleRealEstate(ctx: RequestContext,data: any){
        const createdVariant = await this.connection.getRepository(ctx,RealEstate).update(data.id,{
            projectName: data.projectName || "None",
            descriptions: data.descriptions || "None",
            price: data.price || 0,
            address: data.address || 'None'
        });
        return this.connection.getEntityOrThrow(ctx, RealEstate, data.id);
    }

}