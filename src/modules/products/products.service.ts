import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const productDocument = new this.productModel(createProductDto);

    return productDocument.save();
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(id: string) {
    return this.productModel.findById(id);
  }

  productUpdate(id: string, productUpdate: UpdateProductDto) {
    return this.productModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        ...productUpdate,
      },
      { new: true },
    );
  }
}
