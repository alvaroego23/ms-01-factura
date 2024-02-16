import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySQlDataSource} from '../datasources';
import {ProductoFactura, ProductoFacturaRelations} from '../models';

export class ProductoFacturaRepository extends DefaultCrudRepository<
  ProductoFactura,
  typeof ProductoFactura.prototype.id,
  ProductoFacturaRelations
> {
  constructor(
    @inject('datasources.MySQl') dataSource: MySQlDataSource,
  ) {
    super(ProductoFactura, dataSource);
  }
}
