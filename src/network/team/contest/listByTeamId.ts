import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';
import { ContestListData } from '@/utils/type/data';
import { ContestListByTeamIdParam } from '@/utils/type/param';
import { ElMessage } from 'element-plus';

export default function listByTeamId(params: ContestListByTeamIdParam) {
  return new Promise<ContestListData>(resolve => {
    OLPRequest({
      url: MODULE_URL + `/teamContests/${params.teamId}`,
      method: 'GET',
      data: {
        ...params,
      },
    })
      .then(({ data }: { data: ContestListData }) => resolve(data))
      .catch(err => {
        ElMessage.error(err);
      });
  });
}
