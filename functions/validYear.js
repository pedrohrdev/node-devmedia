function validYear(year) {
    if (!year) return false;

    const numYear = parseInt(year, 10);
    if (isNaN(numYear)) return false;

    return numYear >= 1920 && numYear <= 2025;
}

module.exports = { validYear };