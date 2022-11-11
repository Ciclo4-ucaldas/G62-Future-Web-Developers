import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Auxiliar, AuxiliarRelations} from '../models';

export class AuxiliarRepository extends DefaultCrudRepository<
  Auxiliar,
  typeof Auxiliar.prototype.id,
  AuxiliarRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Auxiliar, dataSource);
  }
}
