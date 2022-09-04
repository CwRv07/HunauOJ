import { MODULE_URL } from './index';
import OLPRequest from '../../request';
import { ProblemLanguageData } from '@/utils/type/data';
import { ElMessage } from 'element-plus';

const findById = (problemId: number) => {
  return new Promise<ProblemLanguageData[]>(resolve => {
    OLPRequest({
      url: MODULE_URL + `/problemLanguage/${problemId}`,
      method: 'GET',
    })
      .then(({ data }: { data: ProblemLanguageData[] }) => resolve(data))
      .catch(err => {
        ElMessage.error(`${err}`);
      });
  });
};

export default findById;
