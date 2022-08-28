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

implementationally, need to store the branches as lists of coordinates to generate branches, and also a sorted matrix, which 
programmatically is a n x n boolean matrix where each coordinates for branches is true, otherwise false, to check blockers/rectangles. 

notes: need to grow branches from branches, and need to set the rate properly
*/

/* TODO: model the branches using coordinates and connections == graphs
 *       model the paths using graph too
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
    isEdge: boolean,
}

interface Path {
    path: Coordinate[],
}

const buildEmptyMaze = (n: number) => {
    const maze: boolean[][] = [];
    for (let i = 0; i < n; i++){
        maze.push(new Array(n).fill(false));
    }
    return maze;
}

// R4SU UQU9 53W9 NEM5 LL85

// Base Branch
const buildEdges = (n: number, maze: boolean[][]) => {
    const edges: Branch[] = [];
    let edge: Branch = { branch: [], isEdge: true};
    for (let i = 0; i < n; i++){
        edge.branch.push({x: i, y: 0, direction: Direction.Horizonatal});
        maze[i][0] = true;
    }
    edges.push(edge);
    edge = { branch: [], isEdge: true};
    for (let i = 0; i < n; i++){
        edge.branch.push({x: n-1, y: i, direction: Direction.Vertical});
        maze[n-1][i] = true;
    }
    edges.push(edge);
    edge = { branch: [], isEdge: true};
    for (let i = 0; i < n; i++){
        edge.branch.push({x: i, y: n-1, direction: Direction.Horizonatal});
        maze[i][n-1] = true;
    }
    edges.push(edge);
    edge = { branch: [], isEdge: true};
    for (let i = 0; i < n; i++){
        edge.branch.push({x: 0, y: i, direction: Direction.Vertical});
        maze[0][i] = true;
    }
    edges.push(edge);
    return edges;
}

const buildLockedMaze = (edges: Branch, n: number, alpha: number) => {
    const lockedMaze = [ edges ];
    const queue = lockedMaze;
    // TODO: Build branches using BFS
    while (queue) {
        const branch = queue.pop();
    }
}

const growBranch = (branch: Branch, n: number, alpha: number, beta: number, maze: boolean[][]) => {
    const newBranches: Branch[] = [];
    for (let i = 0; i < branch.branch.length; i++) {
        // if is edge, try grow branch if it's not endpoints
        const coordinate = branch.branch[i];
        if (i != 0 && i != branch.branch.length - 1){
            const newBranch = maybeGrowABranch(alpha, beta, n, coordinate, true, maze);
            if (newBranch){ // if a new branch is grown
                newBranches.push(newBranch)
            }
        } else if (!branch.isEdge && i == branch.branch.length -1){
            const newCoordinate = growEndOfBranch(coordinate);
            if (isConnectingBranch(newCoordinate, maze)){
                const connectBranch = maybeConnectBranch(beta);
                if (connectBranch) {
                    updateMaze(newCoordinate, maze);
                    branch.branch.push(newCoordinate);
                }
            }
        }
    }
}

const maybeGrowABranch = (alpha: number, beta: number, n: number, coordinate: Coordinate, isEdge: boolean, maze: boolean[][]) => {
    const p = Math.random();
    if (p > alpha){
        return;
    }
    if (coordinate.direction == Direction.Vertical){
        const p = Math.random();
        let x = coordinate.x;
        if (isEdge && coordinate.x == 0) {
            x += 1;
        } else if (isEdge && coordinate.x == n-1) {
            x -= 1;
        } else if (p > 0.5) {
            x += 1;
        } else {
            x -= 1;
        }
        const newCoordinate = {x, y: coordinate.y, direction: Direction.Horizonatal};
        const newBranch = {branch: [newCoordinate], isEdge: false};
        if (isConnectingBranch(newCoordinate, maze) && maybeConnectBranch(beta)) {
            updateMaze(newCoordinate, maze);
            return newBranch;
        }
    } else {
        const p = Math.random();
        let y = coordinate.y;
        if (isEdge && coordinate.y == 0) {
            y += 1;
        } else if (isEdge && coordinate.y == n-1) {
            y -= 1;
        } else if (p > 0.5) {
            y += 1;
        } else {
            y -= 1;
        }
        const newCoordinate = {x: coordinate.x, y, direction: Direction.Vertical};
        const newBranch = {branch: [newCoordinate], isEdge: false};
        if (isConnectingBranch(newCoordinate, maze) && maybeConnectBranch(beta)) {
            updateMaze(newCoordinate, maze);
            return newBranch;
        }
    }
}

const growEndOfBranch = (coordinate: Coordinate): Coordinate => {
    let x = coordinate.x;
    let y = coordinate.y;
    const p = Math.random();
    if (coordinate.direction == Direction.Horizonatal){
        if (p > 2/3) {
            y += 1;
            return {x, y, direction: Direction.Vertical};
        } else if (p > 1/3) {
            y -= 1;
            return {x, y, direction: Direction.Vertical};
        } else {
            x += 1;
            return {x, y, direction: Direction.Horizonatal};
        }
    } else {
        if (p > 2/3) {
            x += 1;
            return {x, y, direction: Direction.Horizonatal};
        } else if (p > 1/3) {
            x -= 1;
            return {x, y, direction: Direction.Horizonatal};
        } else {
            y += 1;
            return {x, y, direction: Direction.Vertical};
        }
    }
}

const updateMaze = (newCoordinate: Coordinate, maze: boolean[][]) => {
    const x = newCoordinate.x;
    const y = newCoordinate.y;
    maze[x][y] = true;
}

const isConnectingBranch = (newCoordinate: Coordinate, maze: boolean[][]): boolean => {
    const x = newCoordinate.x;
    const y = newCoordinate.y;
    return maze[x][y];
}

const maybeConnectBranch = (beta: number): boolean => {
    // TODO: check if connecting to the other branch will block a path
    //       using variable path and a BFS.
    //       if not, roll a die to decide if going to connect
    const p = Math.random()
    if (p < beta) { 
        return true;
    } else {
        return false;
    }
}

const buildMaze = (n: number, alpha: number) => {
    const maze: boolean[][] = buildEmptyMaze(n); // keep track of the maze from a general pov
    const edges: Branch[] = buildEdges(n, maze);

}