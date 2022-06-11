import { Controller, Get, Param } from '@nestjs/common';
import products, { Product } from 'src/products';

@Controller('product')
export class ProductController {
  constructor() {}

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Product> {
    return products.find((product) => product.id === parseInt(id));
  }
}
