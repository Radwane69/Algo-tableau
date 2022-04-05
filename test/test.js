import assert from "assert";

var assert = require("assert");
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

import { minimum } from "../js/app.js";
describe("Array", function () {
  describe("minimum()", function () {
    it("should return -8", function () {
      assert.equal(minimum([-4, -8, -3, -1]), -8);
    });
    it("should return 1", function () {
      assert.equal(minimum([2, 8, 3, 1]), 1);
    });
    it("should return 3", function () {
      assert.equal(minimum([3]), 3);
    });
    it("should return undefined", function () {
      assert.equal(minimum([]), undefined);
    });
  });
});

import { moyenne } from "../js/app.js";
describe("Array", function () {
  describe("moyenne()", function () {
    it("should return -19,4", function () {
      assert.equal(moyenne([-5, -10, -4, -2]), -19, 4);
    });
    it("should return 23,4", function () {
      assert.equal(moyenne([5, 10, 4, -3, 6, 7]), 23, 4);
    });
    it("should return -3,6", function () {
      assert.equal(moyenne([-6, 12]), -3, 6);
    });
    it("sould return undifined", function () {
      assert.equal(moyenne([]), undifined);
    });
  });
});
