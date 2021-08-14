export interface Weather {
    cityName: string;
    countryName: string;
    weather: Array<weatherInfo>; //Information on sky(clouds), icon
    moreInfo: Array<moreInfo>; // pressure, humidity
    temparature:Array<temparatureInfo>; //temparature, mintem, maxtem
    sunInfo:Array<sunDetails>; // sunrice time, sunset time
    visibility:string;
    wind:Array<windInfo>; //speed, angle
}

// export interface APIResponse<T>{
//     results: Array<T>;
// }

export interface weatherInfo{
    id:string;
    main:string;
    description:string;
    icon:string;
}

export interface moreInfo{
    pressure:string;
    humidity:string;
}

export interface temparatureInfo {
    temparature:string;
    min_temp:string;
    max_temp:string;
}

export interface sunDetails {
    sunrise:string;
    sunset:string;
}

export interface windInfo { 
    spped:string;
    deg:string;
}