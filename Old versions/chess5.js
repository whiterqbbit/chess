// GENESIS

//WHITE

let WRook1 = {
  color: 'W',
  type: 'rook',
  position: [0, 0],
  moves: [],
  alreadyMoved: false
};

let WRook2 = {
  color: 'W',
  type: 'rook',
  position: [7, 0],
  moves: [],
  alreadyMoved: false
};

let WKnight1 = {
  color: 'W',
  type: 'knight',
  position: [1, 0],
  moves: [],
};

let WKnight2 = {
  color: 'W',
  type: 'knight',
  position: [6, 0],
  moves: [],
};

let WBishop1 = {
  color: 'W',
  type: 'bishop',
  position: [2, 0],
  moves: [],
};

let WBishop2 = {
  color: 'W',
  type: 'bishop',
  position: [5, 0],
  moves: [],
};

let WQueen = {
  color: 'W',
  type: 'queen',
  position: [3, 0],
  moves: [],
};

let WKing = {
  color: 'W',
  type: 'king',
  position: [4, 0],
  moves: [],
  alreadyMoved: false
};

let WPawn1 = {
  color: 'W',
  type: 'pawn',
  position: [0, 1],
  moves: [],
  jump: 'never'
};

let WPawn2 = {
  color: 'W',
  type: 'pawn',
  position: [1, 1],
  moves: [],
  jump: 'never'
};

let WPawn3 = {
  color: 'W',
  type: 'pawn',
  position: [2, 1],
  moves: [],
  jump: 'never'
};

let WPawn4 = {
  color: 'W',
  type: 'pawn',
  position: [3, 1],
  moves: [],
  jump: 'never'
};

let WPawn5 = {
  color: 'W',
  type: 'pawn',
  position: [4, 1],
  moves: [],
  jump: 'never'
};

let WPawn6 = {
  color: 'W',
  type: 'pawn',
  position: [5, 1],
  moves: [],
  jump: 'never'
};

let WPawn7 = {
  color: 'W',
  type: 'pawn',
  position: [6, 1],
  moves: [],
  jump: 'never'
};

let WPawn8 = {
  color: 'W',
  type: 'pawn',
  position: [7, 1],
  moves: [],
  jump: 'never'
};

//BLACK

let BRook1 = {
  color: 'B',
  type: 'rook',
  position: [7, 7],
  moves: [],
  alreadyMoved: false
};

let BRook2 = {
  color: 'B',
  type: 'rook',
  position: [0, 7],
  moves: [],
  alreadyMoved: false
};

let BKnight1 = {
  color: 'B',
  type: 'knight',
  position: [6, 7],
  moves: [],
};

let BKnight2 = {
  color: 'B',
  type: 'knight',
  position: [1, 7],
  moves: [],
};

let BBishop1 = {
  color: 'B',
  type: 'bishop',
  position: [5, 7],
  moves: [],
};

let BBishop2 = {
  color: 'B',
  type: 'bishop',
  position: [2, 7],
  moves: [],
};

let BQueen = {
  color: 'B',
  type: 'queen',
  position: [3, 7],
  moves: [],
};

let BKing = {
  color: 'B',
  type: 'king',
  position: [4, 7],
  moves: [],
  alreadyMoved: false
};

let BPawn1 = {
  color: 'B',
  type: 'pawn',
  position: [7, 6],
  moves: [],
  jump: 'never'
};

let BPawn2 = {
  color: 'B',
  type: 'pawn',
  position: [6, 6],
  moves: [],
  jump: 'never'
};

let BPawn3 = {
  color: 'B',
  type: 'pawn',
  position: [5, 6],
  moves: [],
  jump: 'never'
};

let BPawn4 = {
  color: 'B',
  type: 'pawn',
  position: [4, 6],
  moves: [],
  jump: 'never'
};

let BPawn5 = {
  color: 'B',
  type: 'pawn',
  position: [3, 6],
  moves: [],
  jump: 'never'
};

let BPawn6 = {
  color: 'B',
  type: 'pawn',
  position: [2, 6],
  moves: [],
  jump: 'never'
};

let BPawn7 = {
  color: 'B',
  type: 'pawn',
  position: [1, 6],
  moves: [],
  jump: 'never'
};

let BPawn8 = {
  color: 'B',
  type: 'pawn',
  position: [0, 6],
  moves: [],
  jump: 'never'
};

//BONUS PIECES
let WBonusQueen = { color: "W", type: 'queen', position: [0, 7], moves: [], alreadyMoved: true }     // pieces promues
let WBonusKnight = { color: "W", type: 'knight', position: [0, 7], moves: [], alreadyMoved: true }
let WBonusRook = { color: "W", type: 'rook', position: [0, 7], moves: [], alreadyMoved: true }
let WBonusBishop = { color: "W", type: 'bishop', position: [0, 7], moves: [], alreadyMoved: true }
let BBonusQueen = { color: "B", type: 'queen', position: [0, 0], moves: [], alreadyMoved: true }
let BBonusKnight = { color: "B", type: 'knight', position: [0, 0], moves: [], alreadyMoved: true }
let BBonusRook = { color: "B", type: 'rook', position: [0, 0], moves: [], alreadyMoved: true }
let BBonusBishop = { color: "B", type: 'bishop', position: [0, 0], moves: [], alreadyMoved: true }

//BOARD TEST PION ECHEC FRONTAL
let a = [WRook1, WPawn1, 'x', 'x', 'x', 'x', BPawn8, BRook2];
let b = [WKnight1, WPawn2, 'x', 'x', 'x', 'x', BPawn7, BKnight2];
let c = [WBishop1, WPawn3, 'x', 'x', 'x', 'x', BPawn6, 'x'];
let d = ['x', WPawn4, 'x', 'x', 'x', 'x', 'x', BQueen];
let e = [WKing, 'x', 'x', 'x', BPawn3, WPawn5, 'x', BKing];
let f = [WBishop2, WPawn6, 'x', 'x', 'x', BPawn2, 'x', BBishop1];
let g = [WKnight2, WPawn7, 'x', 'x', 'x', 'x', 'x', BKnight1];
let h = [WRook2, WPawn8, 'x', 'x', WQueen, 'x', BPawn1, BRook1];
let board = [a, b, c, d, e, f, g, h];

var turn = 'B';
var checkedKing = 'x';
var legalMoves = [];
let checkpoint = 0
let checkpoint2 = 0
let filteredLegalMoves = []
let finalMove = []


// KICKSTART
//updateGUI(); // Le board s'affiche
checkSquare();

// CHECKPROMO  // DONE, Manque l'input et l'incrementation des noms de variable
function choix(choice) {
  console.log('Vous avez choisi :')
  console.log(choice)
};

function checkPromo() {
  for (let i = 0; i < 8; i++) {


    function askPromotionW() {
      document.getElementById('choose').innerHTML = '<td class="choice" onClick="choix(this.id)"><div id="queen">Queen</div></td><td class="choice" onClick="choix(this.id)"><div id="Knight">Knight</div></td><td class="choice" onClick="choix(this.id)"><div id="rook">Rook</div></td><td class="choice" onClick="choix(this.id)"><div id="bishop">Bishop</div></td>';
    }



    if (board[i][7].type == 'pawn') {  // check White     
      askPromotionW();
    } else if (board[i][0].type == 'pawn') {
      askPromotionB();
    }
  };
};

// CHECKSQUARE  
function checkSquare() {
  legalMoves = [];
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (board[x][y] !== 'x') {
        for (let i = 0; i < dep3(dep1et2(x, y)).length; i++) {
          legalMoves.push(dep3(dep1et2(x, y))[i])
        }           //a reactiver
      }
    }
  }
  //console.log(legalMoves);
  //console.log('Preprune length : '+legalMoves.length)
  let legalMovesPruned = [];
  legalMoves.forEach(x => {
    //console.log(board[x[0]][x[1]].color)
    //console.log(legalMoves.indexOf(x))
    //console.log(x)
    //console.log(checkpoint2)
    if (board[x[0]][x[1]].color == turn) {
      checkpoint2++
      legalMovesPruned.push(x);
      //console.log('sperme')
    }
  })
  legalMoves = legalMovesPruned


  //console.log('Checkpoint2 : ' +checkpoint2)
  //console.log('\n\n' + 'checkSquare LEGALMOVES Pruned : ')
  //console.log(legalMovesPruned)
  //console.log('Legal Moves Pruned length : '+legalMovesPruned.length)
  //console.log(legalMoves.length)
  //checkMate();                                                   // call checkMate
};

console.log('\n' + '\n' + 'dep 1et2 : ' + '\n')     
console.log(dep1et2(4,7))

console.log('\n' + '\n' + 'dep 3 : ' + '\n')     
console.log(dep3(dep1et2(4,7)))

console.log('\n' + '\n' + '\n') 





function dep1et2(x, y) {
  let type = board[x][y].type
  let color = board[x][y].color
  let dep1 = []
  //DEP 1

  function rookcheck(a, b, c) {                                   //Rook movements
    for (let i = 1; i <= c; i++) {
      if (board[x + i * a][y + i * b] == 'x') {
        dep1.push([x + i * a, y + i * b, 0])
      } else if (board[x + i * a][y + i * b].color !== color) {
        dep1.push([x + i * a, y + i * b, 0])
        break
      } else {
        break
      }
    };
  }

  function knightcheck(a, b) {                                    //Knight movements
    if (board[x + a] == undefined || board[x + a][y + b] == undefined || board[x + a][y + b].color == color) { } else {
      dep1.push([x + a, y + b, 0])
    }
  }

  function bishopcheck(a, b, c) {                                 //Bishop movements
    for (let i = 1; i <= c; i++) {
      if (board[x + i * a][y + i * b] == 'x') {
        dep1.push([x + i * a, y + i * b, 0])
      } else if (board[x + i * a][y + i * b].color !== color) {
        dep1.push([x + i * a, y + i * b, 0])
        break
      } else {
        break
      }
    };
  }

  function kingcheck(a, b) {                                       //King movements
    if (board[x + 1 * a] == undefined || board[x + 1 * a][y + 1 * b] == undefined || board[x + 1 * a][y + 1 * b].color == color) { } else {
      dep1.push([x + 1 * a, y + 1 * b, 0])
    }
  }

  function pawncheck(a) {                                          //Pawn movements (color = W => a = 1, color = B => a = -1)
    if (board[x][y + 1 * a] == 'x') {
      dep1.push([x, y + 1 * a, 4])                                 //Mouvement simple avant
    };
    if (3.5 - 2.5 * a == y && board[x][y + 1 * a] == 'x' && board[x][y + 2 * a] == 'x') {
      dep1.push([x, y + 2 * a, 0])                                 //Mouvement double avant
    };

    for (let j = -1; j < 2; j++) {
      if (board[x + 1 * j] !== undefined && board[x + 1 * j][y + 1 * a] !== undefined && board[x + 1 * j][y + 1 * a] !== 'x' && board[x + 1 * j][y + 1 * a].color !== color) {
        dep1.push([x + 1 * j, y + 1 * a, 0])                         //Mange
      } else if (board[x + 1 * j] !== undefined && board[x + 1 * j][y] !== 'x' && board[x + 1 * j][y].jump == 'wow') {
        dep1.push([x + 1 * j, y + 1 * a, 1])                         //Prise en passant
      };
      j++
    }
  };

  if (type == 'rook') {

    rookcheck(0, 1, 7 - y)                                       //Haut
    rookcheck(0, -1, y)                                          //Bas
    rookcheck(1, 0, 7 - x)                                       //Droite
    rookcheck(-1, 0, x)                                          //Gauche

  } else if (type == 'knight') {

    knightcheck(2, 1);
    knightcheck(1, 2);
    knightcheck(-1, 2);
    knightcheck(-2, 1);
    knightcheck(1, -2);
    knightcheck(2, -1);
    knightcheck(-1, -2);
    knightcheck(-2, -1);

  } else if (type == 'bishop') {

    bishopcheck(1, 1, 7 - Math.max(x, y))
    bishopcheck(1, -1, 7 - Math.max(x, 7 - y))
    bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y))
    bishopcheck(-1, 1, 7 - Math.max(7 - x, y))

  } else if (type == 'queen') {

    rookcheck(0, 1, 7 - y)                                      //Rook part of Queen
    rookcheck(0, -1, y)
    rookcheck(1, 0, 7 - x)
    rookcheck(-1, 0, x)
    bishopcheck(1, 1, 7 - Math.max(x, y))                        //Bishop part of Queen
    bishopcheck(1, -1, 7 - Math.max(x, 7 - y))
    bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y))
    bishopcheck(-1, 1, 7 - Math.max(7 - x, y))

  } else if (type == 'king') {
    kingcheck(1, 1);
    kingcheck(1, 0);
    kingcheck(0, 1);
    kingcheck(-1, 1);
    kingcheck(-1, 0);
    kingcheck(-1, -1);
    kingcheck(1, -1);
    kingcheck(0, -1);

    if (board[x][y].color == 'W') { //White
      if (board[x][y].alreadyMoved == false && board[0][0].alreadyMoved == false && board[0][0] == WRook1
        && board[1][0] == 'x' && board[2][0] == 'x' && board[3][0] == 'x') { //Grand roc
        //Rajouter condition : ni roi ni cases entre non menacé
        dep1.push([x - 2, y, 3])
      };
      if (board[x][y].alreadyMoved == false && board[7][0].alreadyMoved == false && board[7][0] == WRook2
        && board[5][0] == 'x' && board[6][0] == 'x') { //Petit roc
        //Rajouter condition : ni roi ni cases entre non menacé
        dep1.push([x + 2, y, 2])
      }
    };
    if (board[x][y].color == 'B') { //Black
      if (board[x][y].alreadyMoved == false && board[0][7].alreadyMoved == false && board[0][7] == BRook2
        && board[1][7] == 'x' && board[2][7] == 'x' && board[3][7] == 'x') { //Grand roc
        //Rajouter condition : ni roi ni cases entre non menacé
        dep1.push([x - 2, y, 3])
      };
      if (board[x][y].alreadyMoved == false && board[7][7].alreadyMoved == false && board[7][7] == BRook1
        && board[5][7] == 'x' && board[6][7] == 'x') { //Petit roc
        //Rajouter condition : ni roi ni cases entre non menacé
        dep1.push([x + 2, y, 2])
      }
    };

  } else if (type == 'pawn') {

    if (board[x][y].color == 'W') {
      pawncheck(1);
    };
    if (board[x][y].color == 'B') {
      pawncheck(-1);
    };

  } else if (board[x][y] == 'x') {
    console.log('Ceci est un X !!!!!!!!!!')
    console.log(x, y)
    console.log(board[x][y])
  } else {
    console.log("Cette pièce a un type qui n'existe pas !")
  }
  //DEP 2
  // If any coordinate is less than 0 or greater than 7, KILL IT!
  for (i = 0; i < dep1.length; i++) {
    if (dep1[i][0] < 0 || dep1[i][0] > 7 || dep1[i][1] < 0 || dep1[i][1] > 7) {
      dep1.splice(i, 1);
      i--
    }
  };

  for (let i = 0; i < dep1.length; i++) {           //Rajoute x et y au début de chaque élément de dep1
    dep1[i].unshift(x, y)                         //ici, dep1 renvoi tous les déplacements possibles en pratique sans compter l'échec
  }

  //console.log(type)
  //console.log(dep1)
  //for (i = 0; i < dep1.length; i++) {
  //    console.log(dep1[i])
  //};
  // console.log(dep1)

  return dep1
};

function dep3(input) {

  let dep3_output = JSON.parse(JSON.stringify(input));
  let dep3_push = []
  let splice_count = 0
  let index_move = 0
  let splice_pos = index_move  - splice_count

  for (let j = 0; j < index_move.length; j++) {           
    
    let boardT = JSON.parse(JSON.stringify(board));
    let AKingPos = [];
    let EKingPos = [];
    

    updateT(input[index_move][0], input[index_move][1], input[index_move][2], input[index_move][3], input[index_move][4]);
    checkCube(index_move);

    function updateT(x, y, x2, y2, z) {
      boardT = JSON.parse(JSON.stringify(board));
      boardT[x2].splice(y2, 1, boardT[x][y]);                           // copie piece sur xy2
      boardT[x].splice(y, 1, 'x');                                      // suppr piece sur xy
      //boardT[x2][y2].position = [x2, y2];                            // update de la propriete position

      if (z == 1) {                                                     // Z en passant
        boardT[x2].splice(y, 1, 'x');
      } else if (z == 2) {
        boardT[5].splice(y, 1, boardT[7][y]);                         // Z petit roque copie tour
        boardT[7].splice(y, 1, 'x');                                 // Z petit roque suppr tour
      } else if (z == 3) {
        boardT[3].splice(y, 1, boardT[0][y]);                         // Z grand roque copie tour
        boardT[0].splice(y, 1, 'x');                                 // Z grand roque suppr tour
      }
    };

    function KingPos() {                                           //checkKingPos prend le boardT et renvoie la position des rois
      for (let KingPosx = 0; KingPosx < 8; KingPosx++) {
        for (let KingPosy = 0; KingPosy < 8; KingPosy++) {
          if (boardT[KingPosx][KingPosy] !== 'x' && boardT[KingPosx][KingPosy].type == 'king') {
            if (boardT[KingPosx][KingPosy].color == turn) {
              AKingPos.push(KingPosx, KingPosy)
            } else {
              EKingPos.push(KingPosx, KingPosy)
            }
          }
        }
      }
    };

    function checkCube(index_move) {             //checkCube calcule la pos des rois et teste si une pièce adverse peut l'atteindre
      for (let o = 0; o < 8; o++) {                               //Premiere boucle pour splice et foutre checkKingT=0
        for (let p = 0; p < 8; p++) {
          if (boardT[o][p] !== 'x' && boardT[o][p].color !== turn) {                      //Pour chaque position du board qui contient une pièce adverse
            let depT = dep12T(o, p);                               //depT est l'array de tous les moves que pourrait faire cette pièce
            KingPos();
            for (k = 0; k < depT.length; k++) {                     //Pour tous les moves de cette pièce :
              if (AKingPos[0] == depT[k][2] && AKingPos[1] == depT[k][3]) {          //Si la position du roi allié peut être atteinte
                console.log('move splicé : '+ dep3_output[splice_pos])
                dep3_output.splice(splice_pos, 1);
                splice_count++;
                console.log('splice_count : '+  splice_count)
              } else if (dep3_output[splice_pos] !== undefined) {
                dep3_output[splice_pos][5] = '0';
              }
                        }
          }


        }
      }
      if (dep3_output[splice_pos] !== undefined) {
        for (let o = 0; o < 8; o++) {                               //Deuxieme boucle pour checkKingT= B ou index_move
          for (let p = 0; p < 8; p++) {
            //console.log(o, p)

            if (boardT[o][p] !== 'x' && boardT[o][p].color == turn) {                       //Pour chaque position du board qui contient une pièce alliée
              let depT = dep12T(o, p);                            //depT est l'array de tous les moves que pourrait faire cette pièce
              for (k = 0; k < depT.length; k++) {                 //Pour tous les moves de cette pièce :
                if (EKingPos[0] == depT[k][2] && EKingPos[1] == depT[k][3]) {          //Si la position du roi adverse peut être atteinte
                  if (turn == 'W') {
                    dep3_output[splice_pos][5] = 'B';
                  } else {
                    dep3_output[splice_pos][5] = 'W';
                    //console.log(splice_pos)

                  }
                }
              }
            }

          }
        }
      }
    };

    function dep12T(x, y) {
      let type = boardT[x][y].type
      let color = boardT[x][y].color
      let dep12T_output = []

      //DEP 1
      function rookcheck(a, b, c) {                                   //Rook movements
        for (let i = 1; i <= c; i++) {
          if (boardT[x + i * a][y + i * b] == 'x') {
            dep12T_output.push([x + i * a, y + i * b, 0])
          } else if (boardT[x + i * a][y + i * b].color !== color) {
            dep12T_output.push([x + i * a, y + i * b, 0])
            break
          } else {
            break
          }
        };
      }
      function knightcheck(a, b) {                                    //Knight movements
        if (boardT[x + a] == undefined || boardT[x + a][y + b] == undefined || boardT[x + a][y + b].color == color) { } else {
          dep12T_output.push([x + a, y + b, 0])
        }
      }
      function bishopcheck(a, b, c) {                                 //Bishop movements
        for (let i = 1; i <= c; i++) {
          if (boardT[x + i * a][y + i * b] == 'x') {
            dep12T_output.push([x + i * a, y + i * b, 0])
          } else if (boardT[x + i * a][y + i * b].color !== color) {
            dep12T_output.push([x + i * a, y + i * b, 0])
            break
          } else {
            break
          }
        };
      }
      function kingcheck(a, b) {                                       //King movements
        if (boardT[x + 1 * a] == undefined || boardT[x + 1 * a][y + 1 * b] == undefined || boardT[x + 1 * a][y + 1 * b].color == color) { } else {
          dep12T_output.push([x + 1 * a, y + 1 * b, 0])
        }
      }
      function pawncheck(a) {                                          //Pawn movements (color = W => a = 1, color = B => a = -1)
        if (boardT[x][y + 1 * a] == 'x') {
          dep12T_output.push([x, y + 1 * a, 4])                                 //Mouvement simple avant
        };
        if (3.5 - 2.5 * a == y && boardT[x][y + 1 * a] == 'x' && boardT[x][y + 2 * a] == 'x') {
          dep12T_output.push([x, y + 2 * a, 0])                                 //Mouvement double avant
        };

        for (let j = -1; j < 2; j++) {
          if (boardT[x + 1 * j] !== undefined && boardT[x + 1 * j][y + 1 * a] !== undefined && boardT[x + 1 * j][y + 1 * a] !== 'x' && boardT[x + 1 * j][y + 1 * a].color !== color) {
            dep12T_output.push([x + 1 * j, y + 1 * a, 0])                         //Mange
          } else if (boardT[x + 1 * j] !== undefined && boardT[x + 1 * j][y] !== 'x' && boardT[x + 1 * j][y].jump == 'wow') {
            dep12T_output.push([x + 1 * j, y + 1 * a, 1])                         //Prise en passant
          };
          j++
        }
      };

      if (type == 'rook') {

        rookcheck(0, 1, 7 - y)                                       //Haut
        rookcheck(0, -1, y)                                          //Bas
        rookcheck(1, 0, 7 - x)                                       //Droite
        rookcheck(-1, 0, x)                                          //Gauche
      } else if (type == 'knight') {

        knightcheck(2, 1);
        knightcheck(1, 2);
        knightcheck(-1, 2);
        knightcheck(-2, 1);
        knightcheck(1, -2);
        knightcheck(2, -1);
        knightcheck(-1, -2);
        knightcheck(-2, -1);
      } else if (type == 'bishop') {

        bishopcheck(1, 1, 7 - Math.max(x, y))
        bishopcheck(1, -1, 7 - Math.max(x, 7 - y))
        bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y))
        bishopcheck(-1, 1, 7 - Math.max(7 - x, y))
      } else if (type == 'queen') {

        rookcheck(0, 1, 7 - y)                                      //Rook part of Queen
        rookcheck(0, -1, y)
        rookcheck(1, 0, 7 - x)
        rookcheck(-1, 0, x)
        bishopcheck(1, 1, 7 - Math.max(x, y))                        //Bishop part of Queen
        bishopcheck(1, -1, 7 - Math.max(x, 7 - y))
        bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y))
        bishopcheck(-1, 1, 7 - Math.max(7 - x, y))
      } else if (type == 'king') {
        kingcheck(1, 1);
        kingcheck(1, 0);
        kingcheck(0, 1);
        kingcheck(-1, 1);
        kingcheck(-1, 0);
        kingcheck(-1, -1);
        kingcheck(1, -1);
        kingcheck(0, -1);

        if (boardT[x][y].color == 'W') { //White
          if (boardT[x][y].alreadyMoved == false && boardT[0][0].alreadyMoved == false && boardT[0][0] == WRook1
              && boardT[1][0] == 'x' && boardT[2][0] == 'x' && boardT[3][0] == 'x' && depBigRock() == true) { //Grand roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep12T_output.push([x-2, y, 3])
          };
          if (boardT[x][y].alreadyMoved == false && boardT[7][0].alreadyMoved == false && boardT[7][0] == WRook2
              && boardT[5][0] == 'x' && boardT[6][0] == 'x' && depSmolRock() == true) { //Petit roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep12T_output.push([x+2, y, 2])
          }
        };
        if (boardT[x][y].color == 'B') { //Black
          if (boardT[x][y].alreadyMoved == false && boardT[0][7].alreadyMoved == false && boardT[0][7] == BRook2
              && boardT[1][7] == 'x' && boardT[2][7] == 'x' && boardT[3][7] == 'x' && depBigRock() == true) { //Grand roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep12T_output.push([x-2, y, 3])
          };
          if (boardT[x][y].alreadyMoved == false && boardT[7][7].alreadyMoved == false && boardT[7][7] == BRook1
              && boardT[5][7] == 'x' && boardT[6][7] == 'x' && depSmolRock() == true) { //Petit roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep12T_output.push([x+2, y, 2])
          }
        };
      } else if (type == 'pawn') {

        if (boardT[x][y].color == 'W') {
          pawncheck(1);
        };
        if (boardT[x][y].color == 'B') {
          pawncheck(-1);
        };
      } else if (boardT[x][y] == 'x') {
        console.log('Ceci est un XT !!!!!!!!!!')
        console.log(x, y)
      } else {console.log("Cette pièce a un type qui n'existe pas !")}
     
      //DEP 2
      // If any coordinate is less than 0 or greater than 7, KILL IT!
      for (i = 0; i < dep12T_output.length; i++) {
        if (dep12T_output[i][0] < 0 || dep12T_output[i][0] > 7 || dep12T_output[i][1] < 0 || dep12T_output[i][1] > 7) {
          dep12T_output.splice(i, 1);
          i--
        }
      };

      for (let i = 0; i < dep12T_output.length; i++) {           //Rajoute x et y au début de chaque élément de dep12T_output
        dep12T_output[i].unshift(x, y)                         //ici, dep12T_output renvoi tous les déplacements possibles en pratique sans compter l'échec
      }
      return dep12T_output
    };
  }

  return dep3_output
}


/*
    function checkCube(index_move) {             //checkCube calcule la pos des rois et teste si une pièce adverse peut l'atteindre
      for (let o = 0; o < 8; o++) {                               //Premiere boucle pour splice et foutre checkKingT=0
        for (let p = 0; p < 8; p++) {
          if (boardT[o][p] !== 'x' && boardT[o][p].color !== turn) {                      //Pour chaque position du board qui contient une pièce adverse
            let depT = dep12T(o, p);                               //depT est l'array de tous les moves que pourrait faire cette pièce
            KingPos();
            for (k = 0; k < depT.length; k++) {                     //Pour tous les moves de cette pièce :
              if (AKingPos[0] == depT[k][2] && AKingPos[1] == depT[k][3]) {          //Si la position du roi allié peut être atteinte
                console.log('move splicé : '+ dep3_output[splice_pos])
                dep3_output.splice(splice_pos, 1);
                splice_count++;
                console.log('splice_count : '+  splice_count)
              } else if (dep3_output[splice_pos] !== undefined) {
                dep3_output[splice_pos][5] = '0';
              }
                        }
          }


        }
      }
      if (dep3_output[splice_pos] !== undefined) {
        for (let o = 0; o < 8; o++) {                               //Deuxieme boucle pour checkKingT= B ou index_move
          for (let p = 0; p < 8; p++) {
            //console.log(o, p)

            if (boardT[o][p] !== 'x' && boardT[o][p].color == turn) {                       //Pour chaque position du board qui contient une pièce alliée
              let depT = dep12T(o, p);                            //depT est l'array de tous les moves que pourrait faire cette pièce
              for (k = 0; k < depT.length; k++) {                 //Pour tous les moves de cette pièce :
                if (EKingPos[0] == depT[k][2] && EKingPos[1] == depT[k][3]) {          //Si la position du roi adverse peut être atteinte
                  if (turn == 'W') {
                    dep3_output[splice_pos][5] = 'B';
                  } else {
                    dep3_output[splice_pos][5] = 'W';
                    //console.log(splice_pos)

                  }
                }
              }
            }

          }
        }
      }
    };

    function dep12T(x, y) {
      let type = boardT[x][y].type
      let color = boardT[x][y].color
      let dep12T_output = []

      //DEP 1
      function rookcheck(a, b, c) {                                   //Rook movements
        for (let i = 1; i <= c; i++) {
          if (boardT[x + i * a][y + i * b] == 'x') {
            dep12T_output.push([x + i * a, y + i * b, 0])
          } else if (boardT[x + i * a][y + i * b].color !== color) {
            dep12T_output.push([x + i * a, y + i * b, 0])
            break
          } else {
            break
          }
        };
      }
      function knightcheck(a, b) {                                    //Knight movements
        if (boardT[x + a] == undefined || boardT[x + a][y + b] == undefined || boardT[x + a][y + b].color == color) { } else {
          dep12T_output.push([x + a, y + b, 0])
        }
      }
      function bishopcheck(a, b, c) {                                 //Bishop movements
        for (let i = 1; i <= c; i++) {
          if (boardT[x + i * a][y + i * b] == 'x') {
            dep12T_output.push([x + i * a, y + i * b, 0])
          } else if (boardT[x + i * a][y + i * b].color !== color) {
            dep12T_output.push([x + i * a, y + i * b, 0])
            break
          } else {
            break
          }
        };
      }
      function kingcheck(a, b) {                                       //King movements
        if (boardT[x + 1 * a] == undefined || boardT[x + 1 * a][y + 1 * b] == undefined || boardT[x + 1 * a][y + 1 * b].color == color) { } else {
          dep12T_output.push([x + 1 * a, y + 1 * b, 0])
        }
      }
      function pawncheck(a) {                                          //Pawn movements (color = W => a = 1, color = B => a = -1)
        if (boardT[x][y + 1 * a] == 'x') {
          dep12T_output.push([x, y + 1 * a, 4])                                 //Mouvement simple avant
        };
        if (3.5 - 2.5 * a == y && boardT[x][y + 1 * a] == 'x' && boardT[x][y + 2 * a] == 'x') {
          dep12T_output.push([x, y + 2 * a, 0])                                 //Mouvement double avant
        };

        for (let j = -1; j < 2; j++) {
          if (boardT[x + 1 * j] !== undefined && boardT[x + 1 * j][y + 1 * a] !== undefined && boardT[x + 1 * j][y + 1 * a] !== 'x' && boardT[x + 1 * j][y + 1 * a].color !== color) {
            dep12T_output.push([x + 1 * j, y + 1 * a, 0])                         //Mange
          } else if (boardT[x + 1 * j] !== undefined && boardT[x + 1 * j][y] !== 'x' && boardT[x + 1 * j][y].jump == 'wow') {
            dep12T_output.push([x + 1 * j, y + 1 * a, 1])                         //Prise en passant
          };
          j++
        }
      };

      if (type == 'rook') {

        rookcheck(0, 1, 7 - y)                                       //Haut
        rookcheck(0, -1, y)                                          //Bas
        rookcheck(1, 0, 7 - x)                                       //Droite
        rookcheck(-1, 0, x)                                          //Gauche
      } else if (type == 'knight') {

        knightcheck(2, 1);
        knightcheck(1, 2);
        knightcheck(-1, 2);
        knightcheck(-2, 1);
        knightcheck(1, -2);
        knightcheck(2, -1);
        knightcheck(-1, -2);
        knightcheck(-2, -1);
      } else if (type == 'bishop') {

        bishopcheck(1, 1, 7 - Math.max(x, y))
        bishopcheck(1, -1, 7 - Math.max(x, 7 - y))
        bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y))
        bishopcheck(-1, 1, 7 - Math.max(7 - x, y))
      } else if (type == 'queen') {

        rookcheck(0, 1, 7 - y)                                      //Rook part of Queen
        rookcheck(0, -1, y)
        rookcheck(1, 0, 7 - x)
        rookcheck(-1, 0, x)
        bishopcheck(1, 1, 7 - Math.max(x, y))                        //Bishop part of Queen
        bishopcheck(1, -1, 7 - Math.max(x, 7 - y))
        bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y))
        bishopcheck(-1, 1, 7 - Math.max(7 - x, y))
      } else if (type == 'king') {
        kingcheck(1, 1);
        kingcheck(1, 0);
        kingcheck(0, 1);
        kingcheck(-1, 1);
        kingcheck(-1, 0);
        kingcheck(-1, -1);
        kingcheck(1, -1);
        kingcheck(0, -1);

        if (boardT[x][y].color == 'W') { //White
          if (boardT[x][y].alreadyMoved == false && boardT[0][0].alreadyMoved == false && boardT[0][0] == WRook1
              && boardT[1][0] == 'x' && boardT[2][0] == 'x' && boardT[3][0] == 'x' && depBigRock() == true) { //Grand roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep12T_output.push([x-2, y, 3])
          };
          if (boardT[x][y].alreadyMoved == false && boardT[7][0].alreadyMoved == false && boardT[7][0] == WRook2
              && boardT[5][0] == 'x' && boardT[6][0] == 'x' && depSmolRock() == true) { //Petit roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep12T_output.push([x+2, y, 2])
          }
        };
        if (boardT[x][y].color == 'B') { //Black
          if (boardT[x][y].alreadyMoved == false && boardT[0][7].alreadyMoved == false && boardT[0][7] == BRook2
              && boardT[1][7] == 'x' && boardT[2][7] == 'x' && boardT[3][7] == 'x' && depBigRock() == true) { //Grand roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep12T_output.push([x-2, y, 3])
          };
          if (boardT[x][y].alreadyMoved == false && boardT[7][7].alreadyMoved == false && boardT[7][7] == BRook1
              && boardT[5][7] == 'x' && boardT[6][7] == 'x' && depSmolRock() == true) { //Petit roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep12T_output.push([x+2, y, 2])
          }
        };
      } else if (type == 'pawn') {

        if (boardT[x][y].color == 'W') {
          pawncheck(1);
        };
        if (boardT[x][y].color == 'B') {
          pawncheck(-1);
        };
      } else if (boardT[x][y] == 'x') {
        console.log('Ceci est un XT !!!!!!!!!!')
        console.log(x, y)
      } else {console.log("Cette pièce a un type qui n'existe pas !")}
     
      //DEP 2
      // If any coordinate is less than 0 or greater than 7, KILL IT!
      for (i = 0; i < dep12T_output.length; i++) {
        if (dep12T_output[i][0] < 0 || dep12T_output[i][0] > 7 || dep12T_output[i][1] < 0 || dep12T_output[i][1] > 7) {
          dep12T_output.splice(i, 1);
          i--
        }
      };

      for (let i = 0; i < dep12T_output.length; i++) {           //Rajoute x et y au début de chaque élément de dep12T_output
        dep12T_output[i].unshift(x, y)                         //ici, dep12T_output renvoi tous les déplacements possibles en pratique sans compter l'échec
      }
      return dep12T_output
    };
  }

  return dep3_output
}


*/