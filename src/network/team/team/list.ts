import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';
import { TeamListParam } from '@/utils/type/param';
import { TeamListData } from '@/utils/type/data';
import { ElMessage } from 'element-plus';

const list = (params: TeamListParam) => {
  params.pageSize ??= 10;
  params.teamName ??= '';
  return new Promise<TeamListData>(resolve => {
    OLPRequest({
      url: MODULE_URL + '/teams/like',
      method: 'GET',
      data: {
        ...params,
      },
    })
      .then(({ data }: { data: TeamListData }) => resolve(data))
      .catch(err => {
        ElMessage.error(err);
      });
  });
};

export default list;
