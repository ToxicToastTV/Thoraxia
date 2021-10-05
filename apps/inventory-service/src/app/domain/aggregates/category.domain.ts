import { AggregateRoot } from '@nestjs/cqrs';
import { BaseDomain, Nullable } from '@thoraxia/shared';
import { CategoryModel } from '../models/category.model';
import { BadRequestException, HttpStatus } from '@nestjs/common';
import { TitleValidation } from '../validations/title.validation';
import { SlugValidation } from '../validations/slug.validation';

export class CategoryDomain extends AggregateRoot implements BaseDomain<CategoryModel> {

  constructor(
    private readonly id: string,
    private title: string,
    private slug: string,
    private active: boolean,
    private readonly created_at: Date,
    private updated_at: Nullable<Date>,
    private deleted_at: Nullable<Date>,
  ) {
    super();
  }

  public isUpdated(): boolean {
    return !!this.updated_at;
  }

  public isDeleted(): boolean {
    return !!this.deleted_at;
  }

  public toAnemic(): CategoryModel {
    return {
      id: this.id,
      title: this.title,
      slug: this.slug,
      active: this.active,
      created_at: this.created_at,
      updated_at: this.updated_at,
      deleted_at: this.deleted_at,
      isUpdated: this.isUpdated(),
      isDeleted: this.isDeleted(),
    }
  }

  public createCategory(): void {
    try {
      TitleValidation(this.title);
      SlugValidation(this.slug);
      // Apply Create Event
    } catch (e) {
      // Apply Error Event
    }
  }

  public updateTitle(title: string): void {
    try {
      TitleValidation(title);
      this.title = title;
      this.updated_at = new Date();
      // Apply Update Event
    } catch (e) {
      // Apply Error Event
    }

  }

  public updateSlug(slug: string): void {
    try {
      SlugValidation(slug);
      this.slug = slug;
      this.updated_at = new Date();
      // Apply Update Event
    } catch (e) {
      // Apply Error Event
    }

  }

  public updateActive(active: boolean): void {
    this.active = active;
    this.updated_at = new Date();
    // Apply Update Event
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

}
