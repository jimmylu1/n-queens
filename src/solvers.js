/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  
  let board = new Board({'n': n }); 
  

  for (let r = 0; r < n; r++) {
    
    for (let c = 0; c < n; c++) {
      
      if (r === c) {
        //togglePiece: function(rowIndex, colIndex)
        board.togglePiece(r, c);
    
      }
      
    }
      
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 
  

  let board = new Board({'n': n }); 

  //position = row * n + col;
  //var row = Math.floor(startPosition/n);
  //var col = startPosition % n;
  
  if (n === 1) {
    return 1;
  }
  
  if (n === 2) {
    return 2;
  }
  var currentRow = 0;
  
  

  var recursion = function (currentRow, board) {
    //base case reach end and have viable solution
    if (currentRow === n) {
      solutionCount++;
      return;
        
    }
  
    //ptut one rook on every first position
    for (var col = 0; col < n; col++) {
      board.togglePiece(currentRow, col);
          
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(currentRow, col);
      } else {
        recursion(currentRow + 1, board);
        // check next position
        board.togglePiece(currentRow, col);
      }
         
    }
 
  };
  
  recursion(currentRow, board);

    
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  
  let board = new Board({'n': n }); 
  let currentRow = 0;
  var solution;
  if (n === 1) {
    return [1];
  }
  
  
  if (n === 0 || n === 2 || n === 3) {
    solution = 0;
  }
  var recursion = function (currentRow, board ) {
    //base case reach end and have viable solution
    if (currentRow === n ) {
    
       
      solution = board.rows();
          
    }
    
  
    for (var col = 0; col < n; col++) {
      board.togglePiece(currentRow, col);
    
       
      if (!board.hasAnyQueensConflicts()) {
        recursion(currentRow + 1, board);
        
      }

      board.togglePiece(currentRow, col);
    
    }
  
    
  };
      
  

  
  
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; 
  
  let board = new Board({'n': n }); 
  
  var currentRow = 0;
  
  // if (n === 0 || n === 1) {
  //   return 1;
  // }
  
  // if (n === 2 || n === 3) {
  //   return 0;
  // }
  

  var recursion = function (currentRow, board ) {
    //base case reach end and have viable solution
    if (currentRow === n ) {
      
      solutionCount++;
      
      return;
          
    }
    
    
    for (var col = 0; col < n; col++) {
      board.togglePiece(currentRow, col);
    
       
      if (!board.hasAnyQueensConflicts()) {
        recursion(currentRow + 1, board);
        
      }

      board.togglePiece(currentRow, col);
    
    }
  
    
  };
  
  recursion(currentRow, board);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
