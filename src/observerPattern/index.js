class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers = this.observers.concat(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(function getOnlyNotTargetObserver(
      ob
    ) {
      return ob.name !== observer.name;
    });
  }

  notify(data) {
    this.observers.forEach(function notifyEachObserver(observer) {
      observer.notify(data);
    });
  }
}

class Observer {
  constructor({ name }) {
    this.name = name;
    this.data = {};
  }

  setData(data) {
    this.data = { ...this.data, ...data };
  }

  notify(data) {
    this.setData(data);

    console.log(`[${this.name}]notify -- `, this.data);
  }
}

export default function main() {
  const subject = new Subject();

  const ob1 = new Observer({
    name: 'Observer 1',
  });
  const ob2 = new Observer({
    name: 'Observer 2',
  });
  const ob3 = new Observer({
    name: 'Observer 3',
  });

  subject.addObserver(ob1);
  subject.addObserver(ob2);
  subject.addObserver(ob3);

  subject.notify({
    hello: 'world from message1',
  });

  subject.removeObserver(ob3);

  subject.notify({
    hello: 'world againnnn',
  });

  console.log('this is Observer Patterns');
}
