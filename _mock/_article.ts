import { MockRequest } from '@delon/mock';
// TIPS: mockjs 一些优化细节见：https://ng-alain.com/docs/mock
import * as Mock from 'mockjs';

const list = [
  ...Mock.mock({
    'articles|10': [{
      'serialNumber|+1': 1,
      'title': '@cword(5, 12)',
      'content': '@cparagraph(3, 8)',
      'area': 'main'
    }]
  })['articles'],
  ...Mock.mock({
    'articles|10': [{
      'serialNumber|+1': 1,
      'title': '@cword(5, 12)',
      'content': '@cparagraph(3, 8)',
      'area': 'cn'
    }]
  })['articles']
];

function genData(area: string, code: number) {
  return [...list].find(data => {
    const isArea = !area || data.area === area;
    const isCode = !code || data.serialNumber === code;
    return isArea && isCode;
  });
}

export const ARTICLE = {
  // 支持值为 Object 和 Array
  // GET 可省略
  'GET /article/:area/:code': (req: MockRequest) => genData(req.params.area, +req.params.code),
};
