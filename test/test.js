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

import { sansChaine } from "../js/app.js";
describe("Array", function () {
  describe("sanslesstring()", function () {
    it("should return [-4, -5, -6, -10]", function () {
      assert.deepEqual(
        sansChaine([-4, -5, -6, -10, "Sa dit koi!!!"]),
        [-4, -5, -6, -10]
      );
    });
    it("should return [5, 8, 4, 7]", function () {
      assert.deepEqual(
        sansChaine(["bonjour", 5, 8, 4, "coucou", 7]),
        [5, 8, 4, 7]
      );
    });
    it("should return [33]", function () {
      assert.deepEqual(sansChaine(["okay", 33]), [33]);
    });
    it("should return []", function () {
      assert.deepEqual(sansChaine([]), []);
    });
  });
});

import { impairetPair } from "../js/app.js";
describe("Array", function () {
  describe("ImpairetPair()", function () {
    it("should return [7, 21], [12, 14]", function () {
      assert.deepEqual(impairetPair([7, 21, 11, 13], [[7, 9], [12, 14]]));
    });
    it("should return", function () {
      assert.deepEqual(impairetPair([10, 12, 14, 16, 18], [[]]))
    }
    )
  });
});
