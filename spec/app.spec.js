/*global jasmine,describe,expect,beforeEach,spyOn,it,Person,setName,getName,window,setFixtures,getJSONFixture,sandbox,toBeInDOM*/
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

    xdescribe('json fixtures testing', function () {
      var data, expectedDataLength;
      beforeEach(function () {
        jasmine.getJSONFixtures().fixturesPath = '/spec/fixtures/json';
        expectedDataLength = 3;
      });
      it('should load points data from json fixtures', function () {
        data = getJSONFixture('points.json');
        expect(data.points.length).toBe(expectedDataLength);
      });
    });
  });
});