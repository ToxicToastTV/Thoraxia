import { BadRequestException } from '@nestjs/common';

export function SlugValidation(slug: string): void {
  const minLength = 3;
  const trimmedSlug = slug.trim();
  //
  if (trimmedSlug === '') {
    throw new BadRequestException('Slug is empty');
  }
  if (trimmedSlug.length <= minLength) {
    throw new BadRequestException('Slug is too short');
  }
}
