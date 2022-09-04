export default interface ProblemListParam {
  // 当前页码
  pageNum: number;
  pageSize?: number;
  // 题目名称
  pName?: string;
  // 题目难度
  pDifficulty?: number;
}
