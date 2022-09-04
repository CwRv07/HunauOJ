import ProblemContentData from './ProblemContentData';

export default interface ProblemData {
  pId: number;
  pName: string;
  pAuth: number;
  pContentId: string;
  pStatus: number;
  content: ProblemContentData;
}
