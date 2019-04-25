import Ajax from './axios';
const BASE='/api'

//根据经纬度获取位置信息
export const getAddress=(latitude,longitude)=>Ajax(BASE+`/position/${latitude},${longitude}`);
//获取食品列表
export const getfootlist =()=>Ajax(BASE+'/index_category')
//根据经纬度获取商家列表
export const getshopLists=({longitude,latitude})=>Ajax(BASE+`/shops/`,{longitude,latitude});

