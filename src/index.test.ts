import pipo from "./index";

test("should format with the default Pipo case", () => {
    const text = "me quiero agarrar a piñas";
    const result = "Me quiero agarrar a piñas !!!!!";
    expect(pipo(text)).toBe(result);
});

test("should format with a custom intensity", () => {
    const text = "me quiero agarrar a piñas";
    const result = "Me quiero agarrar a piñas !!!!!!";
    expect(pipo(text, { intensity: 6 })).toBe(result);
})