import Ajax from './axios';
const BASE='/api'

//根据经纬度获取位置信息
export const getAddress=(latitude,longitude)=>Ajax(BASE+`/position/${latitude},${longitude}`);

//获取食品列表
export const getfootlist =()=>Ajax(BASE+'/index_category')

//根据经纬度获取商家列表
export const getshopLists=({longitude,latitude})=>Ajax(BASE+`/shops/`,{longitude,latitude});

//发送短信验证码
export const reqSms=(phone)=>Ajax(BASE+`/sendcode`,{phone});

//短信验证码登录
export const reqLoginSms=({phone,code})=>Ajax(BASE+'/login_sms',{phone,code},"POST");

//密码登录
export const reqLoginPS=({name,pwd,captcha})=>Ajax(BASE+'/login_pwd',{name,pwd,captcha},"POST");

//根据会话获取用户信息
export const reqUSER=()=>Ajax(BASE+'/userinfo');

//loginout
export const loginout=()=>Ajax(BASE+'/logout');
