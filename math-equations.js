const mathQuestions = [
    // LOW DIFFICULTY (2 Variables)
    { id: 1, level: "low", eqs: ["A + 5 = 12", "B - A = 4"], ans: { A: 7, B: 11 } },
    { id: 2, level: "low", eqs: ["B / 3 = A", "B + A = 16"], ans: { A: 4, B: 12 } },
    { id: 3, level: "low", eqs: ["2 * A = 18", "B - 2 = A"], ans: { A: 9, B: 11 } },

    // MEDIUM DIFFICULTY (3 Variables)
    { id: 4, level: "medium", eqs: ["A = 6", "2 * C = B", "A + B = 14"], ans: { A: 6, B: 8, C: 4 } },
    { id: 5, level: "medium", eqs: ["20 - C = A", "B / 2 = C", "A = 10"], ans: { A: 10, B: 20, C: 10 } },
    { id: 6, level: "medium", eqs: ["3 * B = A", "A + C = 15", "B = 4"], ans: { A: 12, B: 4, C: 3 } },

    // HIGH DIFFICULTY (4 Variables)
    { id: 7, level: "high", eqs: ["A + B - C = D", "2 * B = C", "3 * B = A", "9 - B = D"], ans: { A: 9, B: 3, C: 6, D: 6 } },
    { id: 8, level: "high", eqs: ["C + D = A", "4 * C = D", "18 - C = A", "B + C = 10"], ans: { A: 15, B: 7, C: 3, D: 12 } },
    { id: 9, level: "high", eqs: ["A / 2 = B", "B + C = D", "C = 5", "D - 4 = 11"], ans: { A: 20, B: 10, C: 5, D: 15 } }
];