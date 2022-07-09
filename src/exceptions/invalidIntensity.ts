export default class InvalidText extends Error {
    constructor() {
        super("The intensity must be a number between 1 and 10");
    }
}
