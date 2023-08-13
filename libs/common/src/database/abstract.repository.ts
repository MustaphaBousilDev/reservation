import { FilterQuery, Model, Types, UpdateQuery } from 'mongoose';
import { AbstractDocument } from './abstract.schema';
import { Logger } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  //logger is using for logging and in other words, we can say that it is used for debugging
  protected abstract readonly logger: Logger;
  constructor(protected readonly model: Model<TDocument>) {}

  async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
    //creating a new document with the help of model
    //this.model is used to create a new document
    //'this' is for accessing the class properties
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });
    //toJSON() is used to convert the document into JSON format
    //as unknown as TDocument is used to convert the document into TDocument type
    //returning the created document
    return (await createdDocument.save()).toJSON() as unknown as TDocument;
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    //finding the document with the help of model
    //lean: true is used to convert the document into JSON format
    const document = await this.model.findOne(filterQuery, {}, { lean: true });
    if (!document) {
      this.logger.warn('Document not found with filterQuery', filterQuery);
      throw new NotFoundException('Document not found');
    }
    return document;
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
  ) {
    const document = await this.model.findOneAndUpdate(filterQuery, update, {
      new: true,
      lean: true,
    });

    if (!document) {
      this.logger.warn('Document not found with filterQuery', filterQuery);
      throw new NotFoundException('Document not found.');
    }
    return document;
  }

  async find(filterQuery: FilterQuery<TDocument>) {
    return this.model.find(filterQuery, {}, { lean: true });
  }

  async findOneAndDelete(filterQuery: FilterQuery<TDocument>) {
    return this.model.findOneAndDelete(filterQuery, { lean: true });
  }
}
