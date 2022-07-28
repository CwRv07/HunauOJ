// import { MODULE_URL } from '.';
import OLPRequest from '../request';

interface SubmitProblemParams {
  code: string;
  contestId: number;
  language: string;
  problemId: number;
}

const submitProblem = (data: SubmitProblemParams) => {
  return OLPRequest({
    url: '/judge/test',
    method: 'POST',
    data,
  });
};

export default submitProblem;
