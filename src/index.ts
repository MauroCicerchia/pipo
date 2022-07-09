import _ from "lodash";
import { defaults } from "./config";
import InvalidText from "./exceptions/invalidText";
import InvalidIntensity from "./exceptions/invalidIntensity";

type Options = {
    intensity?: number;
};

export default function pipo(originalText: string, options: Options = {}) {
    if (_.isEmpty(originalText)) {
        throw new InvalidText();
    }

    if (options.intensity && (options.intensity < 1 || options.intensity > 10)) {
        throw new InvalidIntensity();
    }

    return transformations(options).reduce((text, transformation) => transformation(text), originalText);
}

const transformations = (options: Options) => [
    _.upperFirst,
    (text: string) => text.replace(/,\s/g, ","),
    (text: string) => text + exclamations(options.intensity ?? defaults.intensity),
];

export function exclamations(intensity: number) {
    if (intensity === 0) return ".";
    return " " + _.repeat("!", intensity);
}
