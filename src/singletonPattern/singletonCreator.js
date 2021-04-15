function SingleTonBuilder() {
  let singletonObj = null;

  function Instance({ x }) {
    this.x = x;
  }

  Instance.prototype.getX = function () {
    return this.x;
  };

  return {
    getInstance() {
      if (singletonObj) {
        return singletonObj;
      }

      singletonObj = new Instance({ x: 20 });

      return singletonObj;
    },
  };
}

export default SingleTonBuilder();
