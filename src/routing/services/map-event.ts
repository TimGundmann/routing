export enum MapEventType {
  SELECT_VEHICLE = 'SELECT_VEHICLE',
  UPDATE_MAP = 'UPDATE_MAP',
}

export interface MapEvent {
  type: MapEventType;
  payload?: any;
}
