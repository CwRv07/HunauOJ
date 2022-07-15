import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

interface listContestParams {
  // 页码
  pageNum: number;
  // 每页数量
  pageSize: number;
  // 是否私有（1为私有
  cAuth: 0 | 1;
  // 比赛描述
  cDescription: string;
  // 比赛结束时间
  cEnd: bigint;
  // 比赛id
  cId: number;
  // 是否为实时榜当
  cIsLiveList: number;
  // 比赛名称
  cName: string;
  // 比赛密码
  cPassword: string;
  // 比赛开始时间
  cStart: bigint;
  // 比赛模式（ACM or OI）
  cType: number;
}

const deleteContest = (data: listContestParams) => {
  return OLPRequest({
    url: MODULE_URL + '/contests',
    method: 'GET',
    data,
  });
};

export default deleteContest;
