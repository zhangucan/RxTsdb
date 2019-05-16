import { Redis } from 'ioredis';
type unit = 'm' | 'km' | 'mi' | 'ft';
type order = 'asc' | 'desc';
 const geoAdd = async (
  xcRedis: Redis,
  locationSet: string,
  lng: number | string,
  lat: number | string,
  key: string
): Promise<number> => {
  return xcRedis.geoadd(locationSet, lng, lat, key);
};

const geoPos = async (xcRedis: Redis, locationSet: string, name: string | string[]): Promise<any[]> => {
  return xcRedis.geopos(locationSet, name);
};
const geoDist = async (
  xcRedis: Redis,
  locationSet: string,
  locationX: string,
  locationY: string, {
  unit = 'm'
}: {
  unit?: unit;
} = {}): Promise<number> => {
  return xcRedis.geodist(locationSet, locationX, locationY, unit);
};

const geoRadius = async (
  xcRedis: Redis,
  locationSet: string,
  lng: number | string,
  lat: number | string,
  radius: number, {
  unit = 'm',
  order = 'asc',
}: {
  unit?: unit;
  order?: order;
} = {}): Promise<any[]> => {
  return xcRedis.georadius(locationSet, lng, lat, radius, unit, 'WITHCOORD', 'WITHDIST', order);
};

const geoRadiusByMember = async (
  xcRedis: Redis,
  locationSet: string,
  loc: string,
  radius: number, {
  unit = 'm',
  order = 'asc',
}: {
  unit?: unit;
  order?: order;
} = {}): Promise<any[]>  => {
  return xcRedis.georadiusbymember(locationSet, loc, radius, unit, 'WITHCOORD', 'WITHDIST', order);
};


export {
  geoAdd,
  geoPos,
  geoDist,
  geoRadius,
  geoRadiusByMember
};
