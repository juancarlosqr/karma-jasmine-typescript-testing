/*global jasmine,describe,xdescribe,expect,beforeEach,afterEach,spyOn,it,Person,
setName,getName,window,setFixtures,getJSONFixture,sandbox,toBeInDOM*/

/// <reference path="../src/app.ts"/>

describe('Jasmine basic testing', () => {
  // by default the '$' (jQuery) doesnt exist, so must be definied. jQuery does exist
  var $ = jQuery;
  // custom spies
  describe("my own spies", () => {
    var name: string = 'Joe', person: Person;

    beforeEach(() => {
      person = new Person();
      // spy setup
      spyOn(person, 'setName').and.callThrough();
      // app call
      person.setName(name);
    });

    it("should objects and methods be defined", () => {
      expect(Person).toBeDefined();
      expect(person).toBeDefined();
      expect(person.name).toBeDefined();
      expect(person.setName).toBeDefined();
      expect(person.getName).toBeDefined();
    });

    it("should track that the spy was called with arguments", () => {
      expect(person.setName).toHaveBeenCalledWith(name);
    });

    it("should track that return the expected name", () => {
      expect(person.getName()).toEqual(name);
    });
  });

  describe('jasmine-jquery testing', () => {
    describe('dom testing', () => {
      beforeEach(() => {
        setFixtures(sandbox());
      });
      it('should find sandbox elem in DOM', () => {
        expect($('#sandbox')).toBeInDOM();
      });
    });

    describe('json fixtures testing', () => {
      var data: any, expectedDataLength: number;
      beforeEach(() => {
        // jasmine.getFixtures().fixturesPath didnt work
        jasmine.getJSONFixtures().fixturesPath =  'base/spec/fixtures/json';
        expectedDataLength = 3;
      });
      it('should load points data from json fixtures', () => {
        data = getJSONFixture('points.json');
        expect(data.points.length).toBe(expectedDataLength);
      });
    });
  });
});