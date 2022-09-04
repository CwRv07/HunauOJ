import ListData from '../ListData';
import ProblemData from './ProblemData';

export default interface ProblemListData extends ListData<ProblemData> {
  records: ProblemData[];
}
