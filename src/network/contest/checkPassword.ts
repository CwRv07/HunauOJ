import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

interface CheckPasswordParams {
  // 比赛ID
  contestId: number;
  // 比赛密码
  password: string;
}

const checkPassword = (data: CheckPasswordParams) => {
  return OLPRequest({
    url: MODULE_URL + `/contest/${data.contestId}/${data.password}`,
    method: 'GET',
  });
};

export default checkPassword;
