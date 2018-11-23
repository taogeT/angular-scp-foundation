import { MockRequest } from '@delon/mock';
// TIPS: mockjs 一些优化细节见：https://ng-alain.com/docs/mock
import * as Mock from 'mockjs';

const list = [
  ...Mock.mock({
    'articles|10': [{
      'serialNumber|+1': 1,
      'title': '@word(5, 12)',
      'content': '@paragraph(3, 8)',
      'area': 'main',
      'name': function () {
        return 'SCP-' + this.serialNumber.toString().padStart(3, '0');
      }
    }]
  })['articles'],
  ...Mock.mock({
    'articles|10': [{
      'serialNumber|+1': 1,
      'title': '@cword(5, 12)',
      'content': '@cparagraph(3, 8)',
      'area': 'cn',
      'name': function () {
        return 'SCP-CN-' + this.serialNumber.toString().padStart(3, '0');
      }
    }]
  })['articles']
];

function genData(name: string) {
  return [...list].find(data => data.name === name);
}

export const ARTICLE = {
  // 支持值为 Object 和 Array
  // GET 可省略
  'GET /article/:name': (req: MockRequest) => genData(req.params.name),
};
