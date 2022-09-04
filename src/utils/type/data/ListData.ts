export default interface ListData<T> {
  // 数据数组
  records: Array<T>;
  // 数据总数
  total: number;
  // 每页数量
  size: number;
  // 当前页码
  current: number;
  orders?: [];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  countId?: any;
  maxLimit?: any;
  // 总数页码
  pages: number;
}
