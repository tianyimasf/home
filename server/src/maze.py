# python version of the maze algo TO BE used in new Flask env
class Graph():
    # initiate a graph with max n^2 coordinates
    def __init__(self, n):
        this.adjList = {}
        this.nodeMatrix = [[[False] * n] * n]
        this.n = n

    def addNode(self, x, y):
        this.nodeMatrix[x][y] = True

    # c stands for coordinate
    def addEdge(self, c1: tuple, c2: tuple):
        this.addToAdjList(c1, c2)
        this.addToAdjList(c2, c1)
    
    def addToAdjList(self, c1: tuple, c2: tuple):
        c1str = this.tupleToString(c1)
        c2str = this.tupleToString(c2)
        if c1str not in this.self.adjList.keys():
            this.self.adjList[c1str] = [].append(c2str)
        else:
            this.tupleToString(c1) = this.self.adjust[c1str].append(c2str)

    def tupleToString(self, c: tuple):
        return ','.join(str(c[0]), str(c[1]))
    
    def strToTuple(self, c: str):
        return map(int, c.split(','))
    
    def getAdjList(self):
        return this.adjList

    def getN(self):
        return this.n

def buildEdge(n):
    pass
