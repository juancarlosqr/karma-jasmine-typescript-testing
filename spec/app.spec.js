/*global describe,expect,beforeEach,spyOn,it,Person,setName,getName*/
describe('Jasmine basic testing', function () {
  // custom spies
  describe("my own spies", function () {
    var name = 'Joe';

    beforeEach(function () {
      // spy setup
      spyOn(Person, 'setName').and.callThrough();
      // app call
      Person.setName(name);
    });

    it("should objects and methods be defined", function () {
      expect(Person).toBeDefined();
      expect(Person.name).toBeDefined();
      expect(Person.setName).toBeDefined();
      expect(Person.getName).toBeDefined();
    });

    it("should track that the spy was called with arguments", function () {
      expect(Person.setName).toHaveBeenCalledWith(name);
    });

    it("should track that return the expected name", function () {
      expect(Person.getName()).toEqual(name);
    });
  });
});