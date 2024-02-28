export function sort(width: number, height: number, length: number, mass: number): string {
    if (width <= 0 || height <= 0 || length <= 0 || mass <= 0) {
        throw new Error("Invalid dimensions or mass");
    }

    const volume = width * height * length;

    const isBulky = volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;
    const isHeavy = mass >= 20;

    if (!isBulky) {
        return isHeavy ? "SPECIAL" : "STANDARD";
    } else {
        return isHeavy ? "REJECTED" : "SPECIAL";
    }
}
