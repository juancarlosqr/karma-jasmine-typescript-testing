var Person = {};
Person = (function () {
  var name = null,
    setName = function (name) {
      this.name = name;
    },
    getName = function () {
      return this.name;
    };

  return {
    setName: setName,
    getName: getName
  };
}());