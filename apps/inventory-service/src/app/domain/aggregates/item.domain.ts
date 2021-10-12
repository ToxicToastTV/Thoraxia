import { AggregateRoot } from '@nestjs/cqrs';
import { BaseDomain, Nullable } from '@thoraxia/shared';
import { BadRequestException } from '@nestjs/common';
import { TitleValidation } from '../validations/title.validation';
import { SlugValidation } from '../validations/slug.validation';
import { ItemModel } from '../models/item.model';

export class ItemDomain extends AggregateRoot implements BaseDomain<any> {

  constructor(
    private readonly id: string,
    private category_id: Nullable<string>,
    private location_id: Nullable<string>,
    private company_id: Nullable<string>,
    private type_id: Nullable<string>,
    private size_id: Nullable<string>,
    private title: string,
    private slug: string,
    private quantity: Nullable<number>,
    private minSku: Nullable<number>,
    private maxSku: Nullable<number>,
    private active: boolean,
    private readonly created_at: Date,
    private updated_at: Date | null,
    private deleted_at: Date | null
  ) {
    super();
  }

  public isUpdated(): boolean {
    return !!this.updated_at;
  }

  public isDeleted(): boolean {
    return !!this.deleted_at;
  }

  public toAnemic(): ItemModel {
    return {
      id: this.id,
      title: this.title,
      slug: this.slug,
      category_id: this.category_id,
      location_id: this.location_id,
      company_id: this.company_id,
      type_id: this.type_id,
      size_id: this.size_id,
      quantity: this.quantity,
      minSku: this.minSku,
      maxSku: this.maxSku,
      active: this.active,
      created_at: this.created_at,
      updated_at: this.updated_at,
      deleted_at: this.deleted_at,
      isUpdated: this.isUpdated(),
      isDeleted: this.isDeleted(),
    }
  }

  public delete(): void {
    if (this.isDeleted()) {
      // Apply Error Event
      throw new BadRequestException('Entity is already deleted');
    } else {
      this.updated_at = new Date();
      this.deleted_at = new Date();
      // Apply Delete Event
    }
  }

  public restore(): void {
    if (!this.isDeleted()) {
      // Apply Error Event
      throw new BadRequestException('Entity is not deleted');
    } else {
      this.updated_at = new Date();
      this.deleted_at = null;
      // Apply Restore Event
    }
  }

  public createItem(): void {
    try {
      TitleValidation(this.title);
      SlugValidation(this.slug);
      // Apply Create Event
    } catch (e) {
      // Apply Error Event
    }
  }

}
