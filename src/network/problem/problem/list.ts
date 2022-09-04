import { MODULE_URL } from './index';
import OLPRequest from '../../request';
import { ProblemListParam } from '@/utils/type/param';
import { ProblemListData } from '@/utils/type/data';
import { ElMessage } from 'element-plus';

const list = (params: ProblemListParam) => {
  params.pageSize ??= 10;
  return new Promise<ProblemListData>(resolve => {
    OLPRequest({
      url: MODULE_URL + `/problems`,
      method: 'GET',
      data: {
        ...params,
      },
    })
      .then(({ data }: { data: ProblemListData }) => resolve(data))
      .catch(err => {
        ElMessage.error(err);
      });
  });
};

export default list;
