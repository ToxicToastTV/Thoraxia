import { BadRequestException } from '@nestjs/common';

export function TitleValidation(title: string): void {
  const minLength = 3;
  const trimmedTitle = title.trim();
  //
  if (trimmedTitle === '') {
    throw new BadRequestException('Title is empty');
  }
  if (trimmedTitle.length <= minLength) {
    throw new BadRequestException('Title is too short');
  }
}
