import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignkeys: {
      fk_producto_factura_id_factura: {
        name: 'fk_producto_factura_id_factura',
        entity: 'Factura',
        entitykey: 'id',
        foreignkey: 'id_factura',
      }
    },
  },
})
export class ProductoFactura extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'number',
    required: true,
  })
  id_producto: number;

  @property({
    type: 'number',
  })
  id_factura?: number;

  constructor(data?: Partial<ProductoFactura>) {
    super(data);
  }
}

export interface ProductoFacturaRelations {
  // describe navigational properties here
}

export type ProductoFacturaWithRelations = ProductoFactura & ProductoFacturaRelations;
