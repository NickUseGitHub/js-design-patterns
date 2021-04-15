import singletonCreator from './singletonCreator';
import testSingletonFromAnotherFile from './testSingletonFromAnotherFile';

export default function main() {
  const singleAObj = singletonCreator.getInstance();
  const singleBObj = singletonCreator.getInstance();

  console.log('singleAObj === singleBObj', singleAObj === singleBObj);
  console.log('singleBObj', singleBObj.getX());
  console.log('singleAObj', singleAObj.getX());

  testSingletonFromAnotherFile();
}
