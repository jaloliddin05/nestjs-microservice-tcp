import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationDocument, Notification } from './notification.schema';


@Injectable()
export class NotificationService {
  constructor(
    @InjectModel('Notification')
    private readonly countryModel: Model<NotificationDocument>,
  ) {}

  async create(data): Promise<Notification> {
    const country = new this.countryModel(data);
    await country.save();
    return country;
  }

  async getAll(): Promise<any> {
    return await this.countryModel.find({});
  }

  async getOne(id: string): Promise<Notification> {
    return await this.countryModel.findById(id);
  }

  async update(id: string, updateData) {
    delete updateData.id;
    await this.countryModel.updateOne({ _id: id }, updateData);
    const country = await this.getOne(id);
    return country;
  }

  async delete(id: string): Promise<Notification> {
    return await this.countryModel.findByIdAndDelete(id);
  }
}