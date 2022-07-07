/*
 * @Author: Rv_Jiang
 * @Date: 2022-07-07 12:35:40
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-07-07 13:39:17
 * @Description: OlpTableGroup 类别文件
 * @Email: Rv_Jiang@outlook.com
 */

/* 表格属性 */

export type tablePropsItemType = {
  // 数据对应字段名
  prop: string;
  // 列标签展示名
  label: string;
  // 字段宽度
  width: string | number;
  // 对齐方式
  align?: 'left' | 'right' | 'center';
  // 是否支持固定
  fixed?: boolean | 'left' | 'right';
  // 是否支持省略
  overflow?: boolean;
  // 数据格式整理
  formatter?: (row: any, column: any, cellValue: any, index: any) => any;
};

export type tablePropsType = tablePropsItemType[];

/* /表格属性 */

/* 表格数据 */

export type tableDataType = {
  [key: string]: any;
}[];

/* /表格数据 */
