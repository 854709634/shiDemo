import fetch from '../config/fetch'

/**
 * 获取轮播图
 */

export const zhuanji = () => fetch('/zhuanji');



/**
 * 获取大家都在逛
 */

export const everyOne = () => fetch('/everyOne');



/**
 * 上传服务器
 */

export const sca = (username,age,id) => fetch('/addUser',{username,age,id});

/**
 * 分页器数据
 */

export const skip = (id) => fetch('/skip',{id},'POST');
