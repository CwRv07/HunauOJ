import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

interface UpdateContestParams {
  // 比赛id
  cId: number;
  // 名称
  cName: string;
  // 密码
  cPassword: string;
  // 比赛描述
  cDescription: string;
  // 是否私有（1为私有
  cAuth: 0 | 1;
  // 是否为实时榜单
  cIsLiveList: number;
  // 比赛开始时间
  cStart: bigint;
  // 比赛结束时间
  cEnd: bigint;
  // 比赛模式（AMC or OI）
  cType: number;
}

const updateContest = (data: UpdateContestParams) => {
  return OLPRequest({
    url: MODULE_URL + '/contest',
    method: 'PUT',
    data,
  });
};

export default updateContest;
