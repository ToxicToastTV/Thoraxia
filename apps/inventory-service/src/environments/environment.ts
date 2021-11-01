export const environment = {
  production: false,
  // KAFKA_URI: '192.168.178.4:9092',
  KAFKA_URI: 'localhost:29092',
  // DATABASE_URI: '192.168.178.4',
  DATABASE_URI: 'localhost',
  DATABASE_PORT: 3306,
  DATABASE_USERNAME: 'thoraxia',
  DATABASE_PASSWORD: 'ToxicToast_1990',
  DATABASE_NAME: 'thoraxia_inventory',
  DATABASE_WITH_DELETED: true,
  DATABASE_DEFAULT_SORTING: 'DESC' as 'ASC' | 'DESC'
};
