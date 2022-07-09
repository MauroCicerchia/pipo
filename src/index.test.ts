import _ from "lodash";
import pipo from "./index";
import { defaults } from "./config";
import InvalidText from "./exceptions/invalidText";
import InvalidIntensity from "./exceptions/invalidIntensity";

describe("Default format", () => {
    test("should format with the default Pipo case", () => {
        const text = "me quiero agarrar a piñas";
        const result = "Me quiero agarrar a piñas !!!!!";
        expect(pipo(text)).toBe(result);
    });

    test("should throw an error if the string is empty", () => {
        const text = "";
        expect(() => pipo(text)).toThrow(InvalidText);
    });
});

describe("Intensity", () => {
    test("should format with the default intensity", () => {
        const text = "me quiero agarrar a piñas";
        const result = "Me quiero agarrar a piñas !!!!!";
        expect(pipo(text)).toBe(result);
    });

    test("should format with a custom intensity", () => {
        const text = "me quiero agarrar a piñas";
        const result = "Me quiero agarrar a piñas !!!!!!";
        expect(pipo(text, { intensity: 6 })).toBe(result);
    });

    test("should throw an error if the intensity is invalid", () => {
        const text = "me quiero agarrar a piñas";
        expect(() => pipo(text, { intensity: -1 })).toThrow(InvalidIntensity);
    });
});

describe("Commas", () => {
    test("should remove the spaces after the commas", () => {
        const text = "me quiero agarrar a piñas, no aguanto más";
        const result = "Me quiero agarrar a piñas,no aguanto más !!!!!";
        expect(pipo(text)).toBe(result);
    });

    test("should not change the commas that don't have a space", () => {
        const text = "me quiero agarrar a piñas,no aguanto más";
        const result = "Me quiero agarrar a piñas,no aguanto más !!!!!";
        expect(pipo(text)).toBe(result);
    });
});
