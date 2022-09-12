import { MODULE_URL } from './index';
import OLPRequest from '../../request';
import { ProblemData } from '@/utils/type/data';
import { ElMessage } from 'element-plus';

const findById = (pid: number) => {
  return new Promise<ProblemData>(resolve => {
    OLPRequest({
      url: MODULE_URL + `/problem/${pid}`,
      method: 'GET',
    })
      .then(({ data }: { data: ProblemData }) => resolve(data))
      .catch(err => {
        ElMessage.error(err);
      });
  });
};

export default findById;
