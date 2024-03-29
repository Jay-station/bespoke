"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animation_1 = require("./animation");
describe("createAnimation", function () {
    it("should return name with suffix if passed in", function () {
        var name = (0, animation_1.createAnimation)("TestLoader", "0% {left: -35%;right: 100%} 60% {left: 100%;right: -90%} 100% {left: 100%;right: -90%}", "my-suffix");
        expect(name).toEqual("react-spinners-TestLoader-my-suffix");
    });
});
