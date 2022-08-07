/*
maybe cs theory/game theory/complicated puzzles/graph theory puzzles is cool
pseudocode for generating a maze:
Forming an initial maze:
first, form an n x n square. for i in n, generate a branch at a rate of alpha ~= 0.5, then the branch can uniformly choose one of each:
they continue straight, or turn right, or turn left. If they reach a point where moving to that direction would have "touched" 
another branch, they choose at a rate of beta = 0.5 whether they ar going to proceed moving and "block" the pathway or not, and 
will do that if it won't cause a rectangle formed by the branches of any shape to appear. then they stop growing. edges are 
considered branches. this step stops when no branch is still growing.
Search for path:
pick an entrance. from that entrance, perform BFS. For the first search path that reached an edge and both side of the pathway
is blocked by branches of at least length 1, open the edge in front of the path. if one entrance doesn't work, try randomly 
another one

implementationally, need to store the branches as lists of coordinates. so that we can check rectangles more easily

notes: need to grow branches from branches, and need to set the rate properly
*/

enum Direction {
    Vertical = 'vertical',
    Horizonatal = 'horizontal',
}

interface Coordinate {
    x: number,
    y: number,
    direction: Direction,
}

interface Branch {
    branch: Coordinate[],
}

interface Path {
    path: Coordinate[],
}

// Base Branch
// TODO: optimize order of coordinates so that it's easier to find rectangle
const buildEdges = (n: number) => {
    const edges: Branch = { branch: [] };
    for (let i = 0; i < n; i++){
        edges.branch.push({x: i, y: 0, direction: Direction.Horizonatal})
    }
    for (let i = 0; i < n; i++){
        edges.branch.push({x: n-1, y: i, direction: Direction.Vertical})
    }
    for (let i = 0; i < n; i++){
        edges.branch.push({x: i, y: n-1, direction: Direction.Horizonatal})
    }
    for (let i = 1; i < n; i++){
        edges.branch.push({x: 0, y: i, direction: Direction.Vertical})
    }
    return edges;
}

const buildLockedMaze = (edges: Branch, n: number, alpha: number) => {
    const lockedMaze = [ edges ];
    const queue = lockedMaze;
    // Build branches using BFS
    while (queue) {
        const branch = queue.pop();
    }
}

const generateBranches = (branch: Branch, alpha: number, isEdge = false ) => {
    const branches: Branch[] = [];
    for (const coordinate of branch.branch) {
        // roll to add branch
        const p = Math.random();
        if (p > alpha){
            continue;
        }
        if (coordinate.direction == Direction.Horizonatal){
            // TODO: check if edges and if forms deadend
            const p = Math.random();
            let x = coordinate.x;
            if (p > 0.5) {
                x += 1;
            } else {
                x -= 1;
            }
            const newBranch = {branch: [{x, y: coordinate.y, direction: Direction.Vertical}]};
            branches.push(newBranch);
        } else {

        }
    }
    
}

const buildMaze = (n: number, alpha: number) => {
    const edges: Branch = buildEdges(n);

}