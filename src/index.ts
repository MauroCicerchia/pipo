import _ from "lodash";

type Options = {
    intensity?: number;
};

export default function pipo(originalText: string, options: Options = {}) {
    return _.upperFirst(originalText) + " " + exclamations(options.intensity);
}

export function exclamations(intensity: number = 5) {
    return _.repeat("!", intensity);
}