import singletonCreator from './singletonCreator';

export default function testSingletonFromAnotherFile() {
  console.log(
    'x from testSingletonFromAnotherFile',
    singletonCreator.getInstance().getX()
  );
}
