const latinSquares = [
    // LOW DIFFICULTY (Many clues provided)
    {
        id: 1, 
        level: "low",
        grid: [
            ['A', 'B', 'C', 'D', 'E'],
            ['B', 'C', 'D', 'E', 'A'],
            ['C', 'D', 'E', 'A', 'B'],
            ['D', 'E', 'A', 'B', 'C'],
            ['E', 'A', 'B', '?', 'D'] // '?' must be C
        ],
        ans: "C"
    },
    // MEDIUM DIFFICULTY (Fewer clues, requires indirect solving)
    {
        id: 2, 
        level: "medium",
        grid: [
            ['A', null, 'C', null, 'E'],
            [null, 'B', null, 'D', null],
            ['C', null, '?', null, 'A'], // '?' must be E
            [null, 'D', null, 'E', null],
            ['E', null, 'A', null, 'C']
        ],
        ans: "E"
    },
    // HIGH DIFFICULTY (Sparse grid, heavy deduction required)
    {
        id: 3, 
        level: "high",
        grid: [
            [null, 'A', null, 'B', null],
            ['B', null, 'C', null, 'D'],
            [null, 'D', null, '?', null], // '?' must be E
            ['D', null, 'E', null, 'A'],
            [null, 'C', null, 'A', null]
        ],
        ans: "E"
    }
];