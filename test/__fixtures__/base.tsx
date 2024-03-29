/// <reference types="eslint" />
import { join } from 'path';

export const obj = {
  /*start*/
  a: '',
  c: {},
  b() {
    return 'b';
  },
};
export const arr = [
  //start
  1,
  // 2,
  3,
];
switch ('') {
  case '':
    break;
  default:
    break;
}
let ovo = 'ovo';
var ouo = 'ouo';
const qwq = {
  name: `qwq`,
};
let owo = 'owo';
var { c, a, b } = obj;
'abc'.replace(/a(?<foo>b)c/, '$1');
//NOTE
class Foo {
  b = 'bar';
  d() {}
  z() {}
  c() {}
  constructor() {}
  static a() {}
}
/* REVIEW*/
interface ExampleObject {
  '0'?: any;
  z: number;
  a?: any;
  // b?: any;
  exampleNestedObject: ExampleNestedObject;
}
type ExampleNestedObject = {
  z?: any;
  a?: any;
};
const render = () => (
  <Foo
    // d=""
    z
    // test={{}}
    data-ignore=""
    bar={[]}
  />
);
export const getUser = async () => null;
const FC = () => <Foo />;
const Fragment = () => <></>;
const getCurrentUser = () => {
  return getUser();
};

const JsxNewline = () => {
  return (
    <>
      <FC />
      <Fragment />
      {1 === 1 && (
        <Fragment>
          {render()}
          {getUser()}
        </Fragment>
      )}
    </>
  );
};
