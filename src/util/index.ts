import { prop } from 'ramda';
const propDataValues = prop('dataValues');
const propId = prop('id');

/**
 * 剩余里程计算
 * @param {*} battery
 */
function getItineraryRest(restBattery: number) {
  let itineraryRest = restBattery * 2 / 3 - 20 / 3;
  itineraryRest = Math.round(itineraryRest);
  if (itineraryRest < 0) itineraryRest = 0;
  return itineraryRest;
}

/**
 * 计算电池剩余电量百分比
 * @param {*} battery 电池电压，单位：毫伏
 */
function getBatteryRest(battery: number) {
  if (!battery || battery === NaN) {
    return 0;
  }
  let restBattery = 100 * (battery - 3366 * 13) / (839 * 13);

  if (restBattery > 100) {
    restBattery = 100;
  } else if (restBattery < 0) {
    restBattery = 0;
  }

  return restBattery.toFixed();
}
export {
  propDataValues,
  propId,
  getItineraryRest,
  getBatteryRest
}