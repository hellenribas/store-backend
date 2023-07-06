import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersModule } from './users.module';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto) {
    const password = await hash(createUserDto.password, 10);

    const userDocument = new this.userModel({
      ...createUserDto,
      password,
    });
    return userDocument.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOneByEmail(email: string) {
    return this.userModel.findOne({
      email,
    });
  }
}
