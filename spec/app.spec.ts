/*global jasmine,describe,xdescribe,expect,beforeEach,afterEach,spyOn,it,Person,
setName,getName,window,setFixtures,getJSONFixture,sandbox,toBeInDOM, $j*/
describe('Jasmine basic testing', function () {
  // custom spies
  describe("my own spies", function () {
    var name = 'Joe', person;

    beforeEach(function () {
      person = new Person();
      // spy setup
      spyOn(person, 'setName').and.callThrough();
      // app call
      person.setName(name);
    });

    it("should objects and methods be defined", function () {
      expect(Person).toBeDefined();
      expect(person).toBeDefined();
      expect(person.name).toBeDefined();
      expect(person.setName).toBeDefined();
      expect(person.getName).toBeDefined();
    });

    it("should track that the spy was called with arguments", function () {
      expect(person.setName).toHaveBeenCalledWith(name);
    });

    it("should track that return the expected name", function () {
      expect(person.getName()).toEqual(name);
    });
  });

  describe('jasmine-jquery testing', function () {
    var $ = null;
    beforeEach(function () {
      $ = $j;
    });
    afterEach(function () {
      $ = null;
    });
    describe('dom testing', function () {
      beforeEach(function () {
        setFixtures(sandbox());
      });
      it('should find sandbox elem in DOM', function () {
        expect($('#sandbox')).toBeInDOM();
      });
    });

    describe('json fixtures testing', function () {
      var data, expectedDataLength;
      beforeEach(function () {
        // jasmine.getFixtures().fixturesPath didnt work
        jasmine.getJSONFixtures().fixturesPath =  'base/spec/fixtures/json';
        expectedDataLength = 3;
      });
      it('should load points data from json fixtures', function () {
        data = getJSONFixture('points.json');
        expect(data.points.length).toBe(expectedDataLength);
      });
    });
  });
});