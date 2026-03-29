function validmoves(pos) {
    const moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
    const valid = [];
    for (const [dx, dy] of moves) {
        const [x, y] = pos;
        if (x + dx >= 0 && x + dx < 8 && y + dy >= 0 && y + dy < 8) {
            valid.push([x + dx, y + dy]);
        }
    }
    return valid;
}

function knightTravails(start, end) {
    const queue = [[start, [start]]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        const [currentPos, path] = queue.shift();

        if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
            return path;
        }

        const nextMoves = validmoves(currentPos);
        for (const nextPos of nextMoves) {
            const posString = nextPos.toString();
            if (!visited.has(posString)) {
                visited.add(posString);
                queue.push([nextPos, [...path, nextPos]]);
            }
        }
    }
    return null;
}

export default { knightTravails, validmoves };

