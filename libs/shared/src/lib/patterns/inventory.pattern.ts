export enum CategoryPatterns {
  LIST = 'inventory.category.list',
  SINGLE = 'inventory.category.single',
  CREATE = 'inventory.category.create',
  HEALTH = 'inventory.category.health'
}

export enum ItemPatterns {
  LIST = 'inventory.item.list',
  SINGLE = 'inventory.item.single',
  HEALTH = 'inventory.item.health',
  CATEGORY = 'inventory.item.category',
  COMPANY = 'inventory.item.company',
  LOCATION = 'inventory.item.location',
  TYPE = 'inventory.item.type',
  SIZE = 'inventory.item.size',
}

export enum CompanyPatterns {
  LIST = 'inventory.company.list',
  SINGLE = 'inventory.company.single',
  CREATE = 'inventory.company.create',
  HEALTH = 'inventory.company.health'
}
