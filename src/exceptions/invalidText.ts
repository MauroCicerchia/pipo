export default class InvalidText extends Error {
    constructor() {
        super("The text is invalid");
    }
}