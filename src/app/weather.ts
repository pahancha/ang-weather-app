export interface Weather {
    coord:Array<lonlat>;
    sys:Array<GeoandSun>;
    weather:Array<WeatherInfo>;
    main:Array<MainInfo>;
    visibility:number;
    wind:Array<WindInfo>;
    clouds:Array<CloudInfo>;
    dt:number;
    id:number;
    name:string;
}

export interface APIResponse<T>{
    list:Array<T>;
}


interface lonlat{
    lon:number;
    lat:number;
}

interface GeoandSun{
    country:string;
    timezeon:string;
    sunrise:number;
    sunset:number;
}

interface WeatherInfo {
    id:number;
    main:string;
    description:string;
    icon:string;
}

interface MainInfo {
    temp:number;
    feels_like:number;
    temp_min:number;
    temp_max:number;
    pressure:number;
    humidity:number;
}
interface WindInfo {
    speed:number;
    deg:number;
}

interface CloudInfo {
    all:number;
}