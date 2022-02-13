// GENESIS

//WHITE


let WRook1 = {
    color: 'W',
    type: 'rook',
    position: [0, 0],
    moves: [],
    alreadyMoved : false
};

let WRook2 = {
    color: 'W',
    type: 'rook',
    position: [7, 0],
    moves: [],
    alreadyMoved : false
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
    alreadyMoved: true
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
    alreadyMoved : false
};

let BRook2 = {
    color: 'B',
    type: 'rook',
    position: [0, 7],
    moves: [],
    alreadyMoved : false
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
    alreadyMoved: true
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

//BOARD

let a = [WRook1, WPawn1, 'x', 'x', 'x', 'x', BPawn8, BRook2];
let b = [WKnight1, WPawn2, 'x', 'x', 'x', 'x', BPawn7, BKnight2];
let c = [WBishop1, WPawn3, 'x', 'x', 'x', 'x', BPawn6, BBishop2];
let d = [WQueen, WPawn4, 'x', 'x', 'x', 'x', BPawn5, BQueen];
let e = [WKing, WPawn5, 'x', 'x', 'x', 'x', BPawn4, BKing];
let f = [WBishop2, WPawn6, 'x', 'x', 'x', 'x', BPawn3, BBishop1];
let g = [WKnight2, WPawn7, 'x', 'x', 'x', 'x', BPawn2, BKnight1];
let h = [WRook2, WPawn8, 'x', 'x', 'x', 'x', BPawn1, BRook1];
let board = [a, b, c, d, e, f, g, h];

/*  ALT BOARD
let a = [WRook1, 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
let b = ['x', 'x', 'x', BBishop1, WBishop1, 'x', 'x', 'x'];
let c = ['x', 'x', 'x', 'x', 'x', BQueen, 'x', 'x'];
let d = ['x', WPawn1, 'x', 'x', 'x', 'x', 'x', BPawn2];
let e = [WKing, 'x', 'x', WKnight1, 'x', 'x', BPawn4, BKing];
let f = ['x', 'x', 'x', 'x', 'x', 'x', BPawn5, BPawn3];
let g = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
let h = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
let board = [a, b, c, d, e, f, g, h];
*/

var turn = 'W';
var checkedKing = 'x';
var legalMoves = [];
let checkpoint = 0
let checkpoint2 = 0 
let legalMovesPruned = []
let filteredLegalMoves = []
let finalMove = []

// KICKSTART
checkSquare();

// CHECKPROMO  // DONE, Manque l'input et l'incrementation des noms de variable
function checkPromo(){
    for (let i = 0; i < 8; i++) {
        let WBonusQueen = {color: "W", type: 'queen', position: [i, 7], moves: [], alreadyMoved : true}     // pieces promues
        let WBonusKnight = {color: "W", type: 'knight', position: [i, 7], moves: [], alreadyMoved : true}
        let WBonusRook = {color: "W", type: 'rook', position: [i, 7], moves: [], alreadyMoved : true}
        let WBonusBishop = {color: "W", type: 'bishop', position: [i, 7], moves: [], alreadyMoved : true}
        let BBonusQueen = {color: "B", type: 'queen', position: [i, 0], moves: [], alreadyMoved : true}
        let BBonusKnight = {color: "B", type: 'knight', position: [i, 0], moves: [], alreadyMoved : true}
        let BBonusRook = {color: "B", type: 'rook', position: [i, 0], moves: [], alreadyMoved : true}
        let BBonusBishop = {color: "B", type: 'bishop', position: [i, 0], moves: [], alreadyMoved : true}
        if(board[i][7].type == 'pawn'){                                                                     // check White
            function askPromotion(choice) {                                                                 // ici, besoin de l'input
                switch (choice){
                    case 'queen':
                        board[i].splice(7, 1, WBonusQueen);   
                    break;
                    case 'knight':
                        board[i].splice(7, 1, WBonusKnight);   
                    break;
                    case 'rook':
                        board[i].splice(7, 1, WBonusRook);   
                    break;
                    case 'bishop':
                        board[i].splice(7, 1, WBonusBishop);   
                    break;
                }
            }
        }else if(board[i][0].type == 'pawn'){                                                               // check Black
            function askPromotion(choice) {                                                                 // ici, besoin de l'input
                switch (choice){
                    case 'queen':
                        board[i].splice(0, 1, BBonusQueen);   
                    break;
                    case 'knight':
                        board[i].splice(0, 1, BBonusKnight);   
                    break;
                    case 'rook':
                        board[i].splice(0, 1, BBonusRook);   
                    break;
                    case 'bishop':
                        board[i].splice(0, 1, BBonusBishop);   
                    break;
        }
    }
}}};

// CHECKSQUARE  
function checkSquare(){
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
    legalMoves.forEach(x => {
        //console.log(board[x[0]][x[1]].color)
        //console.log(legalMoves.indexOf(x))
        //console.log(x)
        //console.log(checkpoint2)
        if(board[x[0]][x[1]].color !== turn){
            checkpoint2++
            legalMovesPruned.push(x);
            //console.log('sperme')
        }})
    let legalMoves = legalMovesPruned


    //console.log('Checkpoint2 : ' +checkpoint2)
    //console.log('\n\n' + 'checkSquare LEGALMOVES Pruned : ')
    //console.log(legalMovesPruned)
    //console.log('Legal Moves Pruned length : '+legalMovesPruned.length)
    checkMate();                                                   // call checkMate
};
 

//console.log('\n' + '\n' + 'dep 3 : ' + '\n')              //1oooooo1o1o1o1o1oo1o1opo2ipo1i23po1i23po1i23p12o3ip12o3i1po3i1op2p1o3i1p2o31p23i
//dep3(dep1et2(1,4))



function dep1et2(x, y){
    let type = board[x][y].type
    let color = board[x][y].color
    let dep1 = []
    //DEP 1

    function rookcheck(a, b, c) {                                   //Rook movements
        for (let i = 1; i <= c; i++) {
            if (board[x+i*a][y+i*b] == 'x'){
                dep1.push([x+i*a, y+i*b, 0])
            } else if (board[x+i*a][y+i*b].color !== color){
                dep1.push([x+i*a, y+i*b, 0])
                break
            } else {
                break
            }
        };
    }

    function knightcheck(a, b) {                                    //Knight movements
        if (board[x+a] == undefined || board[x+a][y+b] == undefined || board[x+a][y+b].color == color) {} else {
            dep1.push([x+a, y+b, 0])
        }
    }

    function bishopcheck(a, b, c) {                                 //Bishop movements
        for (let i = 1; i <= c; i++) {
            if (board[x+i*a][y+i*b] == 'x'){
                dep1.push([x+i*a, y+i*b, 0])
            } else if (board[x+i*a][y+i*b].color !== color){
                dep1.push([x+i*a, y+i*b, 0])
                break
            } else {
                break
            }
        };
    }

    function kingcheck(a, b) {                                       //King movements
        if (board[x+1*a] == undefined || board[x+1*a][y+1*b] == undefined || board[x+1*a][y+1*b].color == color) {} else {
            dep1.push([x+1*a, y+1*b, 0])
        }
    }

    function pawncheck(a) {                                          //Pawn movements (color = W => a = 1, color = B => a = -1)
        if (board[x][y+1*a] == 'x') {
            dep1.push([x, y+1*a, 0])                                 //Mouvement simple avant
        };
        if (3.5 - 2.5*a == y && board[x][y+1*a] == 'x' && board[x][y+2*a] == 'x') {
            dep1.push([x, y+2*a, 0])                                 //Mouvement double avant
        };
        
        for (let j = -1; j < 2; j++) {
            if (board[x+1*j] !== undefined && board[x+1*j][y+1*a] !== undefined && board[x+1*j][y+1*a] !== 'x' && board[x+1*j][y+1*a].color !== color) {
                dep1.push([x+1*j, y+1*a, 0])                         //Mange
            } else if (board[x+1*j] !== undefined && board[x+1*j][y] !== 'x' && board[x+1*j][y].jump == 'wow') {
                dep1.push([x+1*j, y+1*a, 1])                         //Prise en passant
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

        bishopcheck(1, 1, 7 - Math.max(x,y))
        bishopcheck(1, -1, 7 - Math.max(x,7 - y))
        bishopcheck(-1, -1, 7 - Math.max(7 - x,7- y))
        bishopcheck(-1, 1, 7 - Math.max(7 - x, y))

    } else if (type == 'queen') {

        rookcheck(0, 1, 7 - y)                                      //Rook part of Queen
        rookcheck(0, -1, y)
        rookcheck(1, 0, 7 - x)
        rookcheck(-1, 0, x)
        bishopcheck(1, 1, 7 - Math.max(x,y))                        //Bishop part of Queen
        bishopcheck(1, -1, 7 - Math.max(x,7 - y))
        bishopcheck(-1, -1, 7 - Math.max(7 - x,7- y))
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
                && board[1][0] == 'x' && board[2][0] == 'x' && board[3][0] == 'x' && depBigRock() == true) { //Grand roc
                //Rajouter condition : ni roi ni cases entre non menacé
                dep1.push([x-2, y, 3])
            };
            if (board[x][y].alreadyMoved == false && board[7][0].alreadyMoved == false && board[7][0] == WRook2
                && board[5][0] == 'x' && board[6][0] == 'x' && depSmolRock() == true) { //Petit roc
                //Rajouter condition : ni roi ni cases entre non menacé
                dep1.push([x+2, y, 2])
            }
        };
        if (board[x][y].color == 'B') { //Black
            if (board[x][y].alreadyMoved == false && board[0][7].alreadyMoved == false && board[0][7] == BRook2
                && board[1][7] == 'x' && board[2][7] == 'x' && board[3][7] == 'x' && depBigRock() == true) { //Grand roc
                //Rajouter condition : ni roi ni cases entre non menacé
                dep1.push([x-2, y, 3])
            };
            if (board[x][y].alreadyMoved == false && board[7][7].alreadyMoved == false && board[7][7] == BRook1
                && board[5][7] == 'x' && board[6][7] == 'x' && depSmolRock() == true) { //Petit roc
                //Rajouter condition : ni roi ni cases entre non menacé
                dep1.push([x+2, y, 2])
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

function dep3(dep1) {

	//console.log(dep1[16])
    let depOutput = JSON.parse(JSON.stringify(dep1));
    //console.log('depOutput avant vlume')
    //console.log(depOutput)
    let spliceCount = 0 
                                 					  //Attention, on part dans DEP3 !!!
    for (let w = 0; w < dep1.length; w++){            //Pour chaque array de dep1            

        let boardT = JSON.parse(JSON.stringify(board));
        let AKingPos = [];
        let EKingPos = [];
        let splicePos = w - spliceCount
        function updateT(x, y, x2, y2, z){
            boardT = JSON.parse(JSON.stringify(board));
            boardT[x2].splice(y2, 1, boardT[x][y]);                           // copie piece sur xy2
            boardT[x].splice(y, 1,'x');                                      // suppr piece sur xy
            //boardT[x2][y2].position = [x2, y2];                            // update de la propriete position

    		//console.log(boardT[x][y])
            if(z == 1){                                                     // Z en passant
                boardT[x2].splice(y, 1,'x');
            } else if(z == 2){
                boardT[5].splice(y, 1, boardT[7][y]);                         // Z petit roque copie tour
                boardT[7].splice(y, 1, 'x');                                 // Z petit roque suppr tour
            } else if(z == 3){
                boardT[3].splice(y, 1, boardT[0][y]);                         // Z grand roque copie tour
                boardT[0].splice(y, 1, 'x');                                 // Z grand roque suppr tour
            }
        };

		function KingPos(){                                           //checkKingPos prend le boardT et renvoie la position des rois
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
        function checkCube(w){             //checkCube calcule la pos des rois et teste si une pièce adverse peut l'atteindre

            KingPos();
            for (let o = 0; o < 8; o++) {                               //Premiere boucle pour splice et foutre checkKingT=0
                for (let p = 0; p < 8; p++) {
                	//console.log(o, p)
                    
                    if (boardT[o][p] !== 'x' && boardT[o][p].color !== turn) {                      //Pour chaque position du board qui contient une pièce adverse
                        let depT = dep1et2T(o, p);                               //depT est l'array de tous les moves que pourrait faire cette pièce
                        //console.log(depT)
                        for (k = 0; k < depT.length; k++) {                     //Pour tous les moves de cette pièce :
                            if (AKingPos[0] == depT[k][2] && AKingPos[1] == depT[k][3]) {          //Si la position du roi allié peut être atteinte
                                
                                depOutput.splice(splicePos, 1);                               //Splice le coup allié possible dans dep1
                                spliceCount++;
                                //console.log('MAXIFOUTRE')
                            } else if(depOutput[splicePos] !== undefined){
                                //console.log('MAXICHATTE');
                                //console.log(depOutput[splicePos]);
                                //console.log('splicecount :     ' +spliceCount)
                                //console.log('splicePos : ' +splicePos)
                                depOutput[splicePos][5] = '0';
                            }
                        }
                    }

                    
                }
            }
        if(depOutput[splicePos] !== undefined){    
            for (let o = 0; o < 8; o++) {                               //Deuxieme boucle pour checkKingT= B ou W
                for (let p = 0; p < 8; p++) {
                    //console.log(o, p)
                    
                    if (boardT[o][p] !== 'x' && boardT[o][p].color == turn) {                       //Pour chaque position du board qui contient une pièce alliée
                        let depT = dep1et2T(o, p);                            //depT est l'array de tous les moves que pourrait faire cette pièce
                        for (k = 0; k < depT.length; k++) {                 //Pour tous les moves de cette pièce :
                            if (EKingPos[0] == depT[k][2] && EKingPos[1] == depT[k][3]) {          //Si la position du roi adverse peut être atteinte
                                if (turn == 'W') {
                                    depOutput[splicePos][5] = 'B';
                                } else {
                                    depOutput[splicePos][5] = 'W';
                                    //console.log(splicePos)

                                }
                            }
                        }
                    }
                    
                }
            }
        }};

    function dep1et2T(x, y){
        let type = boardT[x][y].type
        let color = boardT[x][y].color
        let dep1T = []
        //DEP 1

        function rookcheck(a, b, c) {                                   //Rook movements
            for (let i = 1; i <= c; i++) {
                if (boardT[x+i*a][y+i*b] == 'x'){
                    dep1T.push([x+i*a, y+i*b, 0])
                } else if (boardT[x+i*a][y+i*b].color !== color){
                    dep1T.push([x+i*a, y+i*b, 0])
                    break
                } else {
                    break
                }
            };
        }

        function knightcheck(a, b) {                                    //Knight movements
            if (boardT[x+a] == undefined || boardT[x+a][y+b] == undefined || boardT[x+a][y+b].color == color) {} else {
                dep1T.push([x+a, y+b, 0])
            }
        }

        function bishopcheck(a, b, c) {                                 //Bishop movements
            for (let i = 1; i <= c; i++) {
                if (boardT[x+i*a][y+i*b] == 'x'){
                    dep1T.push([x+i*a, y+i*b, 0])
                } else if (boardT[x+i*a][y+i*b].color !== color){
                    dep1T.push([x+i*a, y+i*b, 0])
                    break
                } else {
                    break
                }
            };
        }

        function kingcheck(a, b) {                                       //King movements
            if (boardT[x+1*a] == undefined || boardT[x+1*a][y+1*b] == undefined || boardT[x+1*a][y+1*b].color == color) {} else {
                dep1T.push([x+1*a, y+1*b, 0])
            }
        }

        function pawncheck(a) {                                          //Pawn movements (color = W => a = 1, color = B => a = -1)
            if (boardT[x][y+1*a] == 'x') {
                dep1T.push([x, y+1*a, 0])                                 //Mouvement simple avant
            };
            if (3.5 - 2.5*a == y && boardT[x][y+1*a] == 'x' && boardT[x][y+2*a] == 'x') {
                dep1T.push([x, y+2*a, 0])                                 //Mouvement double avant
            };
            
            for (let j = -1; j < 2; j++) {
                if (boardT[x+1*j] !== undefined && boardT[x+1*j][y+1*a] !== undefined && boardT[x+1*j][y+1*a] !== 'x' && boardT[x+1*j][y+1*a].color !== color) {
                    dep1T.push([x+1*j, y+1*a, 0])                         //Mange
                } else if (boardT[x+1*j] !== undefined && boardT[x+1*j][y] !== 'x' && boardT[x+1*j][y].jump == 'wow') {
                    dep1T.push([x+1*j, y+1*a, 1])                         //Prise en passant
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

            bishopcheck(1, 1, 7 - Math.max(x,y))
            bishopcheck(1, -1, 7 - Math.max(x,7 - y))
            bishopcheck(-1, -1, 7 - Math.max(7 - x,7- y))
            bishopcheck(-1, 1, 7 - Math.max(7 - x, y))

        } else if (type == 'queen') {

            rookcheck(0, 1, 7 - y)                                      //Rook part of Queen
            rookcheck(0, -1, y)
            rookcheck(1, 0, 7 - x)
            rookcheck(-1, 0, x)
            bishopcheck(1, 1, 7 - Math.max(x,y))                        //Bishop part of Queen
            bishopcheck(1, -1, 7 - Math.max(x,7 - y))
            bishopcheck(-1, -1, 7 - Math.max(7 - x,7- y))
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
                    && boardT[1][0] == 'x' && boardT[2][0] == 'x' && boardT[3][0] == 'x') { //Grand roc
                    //Rajouter condition : ni roi ni cases entre non menacé
                    dep1T.push([x-2, y, 3])
                };
                if (boardT[x][y].alreadyMoved == false && boardT[7][0].alreadyMoved == false && boardT[7][0] == WRook2
                    && boardT[5][0] == 'x' && boardT[6][0] == 'x') { //Petit roc
                    //Rajouter condition : ni roi ni cases entre non menacé
                    dep1T.push([x+2, y, 2])
                }
            };
            if (boardT[x][y].color == 'B') { //Black
                if (boardT[x][y].alreadyMoved == false && boardT[0][7].alreadyMoved == false && boardT[0][7] == BRook2
                    && boardT[1][7] == 'x' && boardT[2][7] == 'x' && boardT[3][7] == 'x') { //Grand roc
                    //Rajouter condition : ni roi ni cases entre non menacé
                    dep1T.push([x-2, y, 3])
                };
                if (boardT[x][y].alreadyMoved == false && boardT[7][7].alreadyMoved == false && boardT[7][7] == BRook1
                    && boardT[5][7] == 'x' && boardT[6][7] == 'x') { //Petit roc
                    //Rajouter condition : ni roi ni cases entre non menacé
                    dep1T.push([x+2, y, 2])
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
            console.log('Ceci est un X !!!!!!!!!!')
            console.log(x, y)
            console.log(boardT[x][y])
        } else {
            console.log("Cette pièce a un type qui n'existe pas !")
        }
        //DEP 2
        // If any coordinate is less than 0 or greater than 7, KILL IT!
        for (i = 0; i < dep1T.length; i++) {
            if (dep1T[i][0] < 0 || dep1T[i][0] > 7 || dep1T[i][1] < 0 || dep1T[i][1] > 7) {
                dep1T.splice(i, 1);
                i--
            }
        };

        for (let i = 0; i < dep1T.length; i++) {           //Rajoute x et y au début de chaque élément de dep1T
            dep1T[i].unshift(x, y)                         //ici, dep1T renvoi tous les déplacements possibles en pratique sans compter l'échec
        }
        
        //console.log(type)
        //console.log(dep1T)
        //for (i = 0; i < dep1T.length; i++) {
        //    console.log(dep1T[i])
        //};
        // console.log(dep1T)
        return dep1T
    };

    	updateT(dep1[w][0], dep1[w][1], dep1[w][2], dep1[w][3], dep1[w][4]);
        //console.log('autre move ' + w)
        checkCube(w);
  
    }
    //console.log('MOUVES LEGAUX')
    //console.log(depOutput)
    return depOutput
}

function depBigRock() {

    for (let w = 0; w < dep1.length; w++){            //Pour chaque array de dep1            

        let boardT = JSON.parse(JSON.stringify(board));
        let BigRokPos1 = [];
        let BigRokPos2 = [];
        let SmolRokPos1 = [];
        let SmolRokPos2 = [];
        if (turn == 'W'){
            BigRokPos1 = [0, 2];
            BigRokPos2 = [0, 3];
            SmolRokPos1 = [0, 5];
            SmolRokPos2 = [0, 6];
        } else if (turn == 'B'){
            BigRokPos1 = [7, 2];
            BigRokPos2 = [7, 3];
            SmolRokPos1 = [7, 5];
            SmolRokPos2 = [7, 6];
        }
        function updateT(x, y, x2, y2, z){
            boardT = JSON.parse(JSON.stringify(board));
            boardT[x2].splice(y2, 1, boardT[x][y]);                           // copie piece sur xy2
            boardT[x].splice(y, 1,'x');                                      // suppr piece sur xy
            //boardT[x2][y2].position = [x2, y2];                            // update de la propriete position

            //console.log(boardT[x][y])
            if(z == 1){                                                     // Z en passant
                boardT[x2].splice(y, 1,'x');
            } else if(z == 2){
                boardT[5].splice(y, 1, boardT[7][y]);                         // Z petit roque copie tour
                boardT[7].splice(y, 1, 'x');                                 // Z petit roque suppr tour
            } else if(z == 3){
                boardT[3].splice(y, 1, boardT[0][y]);                         // Z grand roque copie tour
                boardT[0].splice(y, 1, 'x');                                 // Z grand roque suppr tour
            }
        };


        };
        function checkCube(w){             //checkCube calcule la pos des rois et teste si une pièce adverse peut l'atteindre

            for (let o = 0; o < 8; o++) {                               //Premiere boucle pour splice et foutre checkKingT=0
                for (let p = 0; p < 8; p++) {            
                    if (boardT[o][p] !== 'x' && boardT[o][p].color !== turn) {                      //Pour chaque position du board qui contient une pièce adverse
                        let depT = dep1et2T(o, p);                               //depT est l'array de tous les moves que pourrait faire cette pièce
                        for (k = 0; k < depT.length; k++) {                     //Pour tous les moves de cette pièce :
                            if (BigRokPos1[0] == depT[k][2] && BigRokPos1[1] == depT[k][3]) {          //Si la position du roi allié peut être atteinte
                                return false
                            } else if(BigRokPos2[0] == depT[k][2] && BigRokPos2[1] == depT[k][3]){
                                return false
                            } else {
                                return true
                            }

                        
                            }
                        }
                    }

                    
                }
            }


    function dep1et2T(x, y){
        let type = boardT[x][y].type
        let color = boardT[x][y].color
        let dep1T = []
        //DEP 1

        function rookcheck(a, b, c) {                                   //Rook movements
            for (let i = 1; i <= c; i++) {
                if (boardT[x+i*a][y+i*b] == 'x'){
                    dep1T.push([x+i*a, y+i*b, 0])
                } else if (boardT[x+i*a][y+i*b].color !== color){
                    dep1T.push([x+i*a, y+i*b, 0])
                    break
                } else {
                    break
                }
            };
        }

        function knightcheck(a, b) {                                    //Knight movements
            if (boardT[x+a] == undefined || boardT[x+a][y+b] == undefined || boardT[x+a][y+b].color == color) {} else {
                dep1T.push([x+a, y+b, 0])
            }
        }

        function bishopcheck(a, b, c) {                                 //Bishop movements
            for (let i = 1; i <= c; i++) {
                if (boardT[x+i*a][y+i*b] == 'x'){
                    dep1T.push([x+i*a, y+i*b, 0])
                } else if (boardT[x+i*a][y+i*b].color !== color){
                    dep1T.push([x+i*a, y+i*b, 0])
                    break
                } else {
                    break
                }
            };
        }

        function kingcheck(a, b) {                                       //King movements
            if (boardT[x+1*a] == undefined || boardT[x+1*a][y+1*b] == undefined || boardT[x+1*a][y+1*b].color == color) {} else {
                dep1T.push([x+1*a, y+1*b, 0])
            }
        }

        function pawncheck(a) {                                          //Pawn movements (color = W => a = 1, color = B => a = -1)
            if (boardT[x][y+1*a] == 'x') {
                dep1T.push([x, y+1*a, 0])                                 //Mouvement simple avant
            };
            if (3.5 - 2.5*a == y && boardT[x][y+1*a] == 'x' && boardT[x][y+2*a] == 'x') {
                dep1T.push([x, y+2*a, 0])                                 //Mouvement double avant
            };
            
            for (let j = -1; j < 2; j++) {
                if (boardT[x+1*j] !== undefined && boardT[x+1*j][y+1*a] !== undefined && boardT[x+1*j][y+1*a] !== 'x' && boardT[x+1*j][y+1*a].color !== color) {
                    dep1T.push([x+1*j, y+1*a, 0])                         //Mange
                } else if (boardT[x+1*j] !== undefined && boardT[x+1*j][y] !== 'x' && boardT[x+1*j][y].jump == 'wow') {
                    dep1T.push([x+1*j, y+1*a, 1])                         //Prise en passant
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

            bishopcheck(1, 1, 7 - Math.max(x,y))
            bishopcheck(1, -1, 7 - Math.max(x,7 - y))
            bishopcheck(-1, -1, 7 - Math.max(7 - x,7- y))
            bishopcheck(-1, 1, 7 - Math.max(7 - x, y))

        } else if (type == 'queen') {

            rookcheck(0, 1, 7 - y)                                      //Rook part of Queen
            rookcheck(0, -1, y)
            rookcheck(1, 0, 7 - x)
            rookcheck(-1, 0, x)
            bishopcheck(1, 1, 7 - Math.max(x,y))                        //Bishop part of Queen
            bishopcheck(1, -1, 7 - Math.max(x,7 - y))
            bishopcheck(-1, -1, 7 - Math.max(7 - x,7- y))
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
                    && boardT[1][0] == 'x' && boardT[2][0] == 'x' && boardT[3][0] == 'x') { //Grand roc
                    //Rajouter condition : ni roi ni cases entre non menacé
                    dep1T.push([x-2, y, 3])
                };
                if (boardT[x][y].alreadyMoved == false && boardT[7][0].alreadyMoved == false && boardT[7][0] == WRook2
                    && boardT[5][0] == 'x' && boardT[6][0] == 'x') { //Petit roc
                    //Rajouter condition : ni roi ni cases entre non menacé
                    dep1T.push([x+2, y, 2])
                }
            };
            if (boardT[x][y].color == 'B') { //Black
                if (boardT[x][y].alreadyMoved == false && boardT[0][7].alreadyMoved == false && boardT[0][7] == BRook2
                    && boardT[1][7] == 'x' && boardT[2][7] == 'x' && boardT[3][7] == 'x') { //Grand roc
                    //Rajouter condition : ni roi ni cases entre non menacé
                    dep1T.push([x-2, y, 3])
                };
                if (boardT[x][y].alreadyMoved == false && boardT[7][7].alreadyMoved == false && boardT[7][7] == BRook1
                    && boardT[5][7] == 'x' && boardT[6][7] == 'x') { //Petit roc
                    //Rajouter condition : ni roi ni cases entre non menacé
                    dep1T.push([x+2, y, 2])
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
            console.log('Ceci est un X !!!!!!!!!!')
            console.log(x, y)
            console.log(boardT[x][y])
        } else {
            console.log("Cette pièce a un type qui n'existe pas !")
        }
        //DEP 2
        // If any coordinate is less than 0 or greater than 7, KILL IT!
        for (i = 0; i < dep1T.length; i++) {
            if (dep1T[i][0] < 0 || dep1T[i][0] > 7 || dep1T[i][1] < 0 || dep1T[i][1] > 7) {
                dep1T.splice(i, 1);
                i--
            }
        };

        for (let i = 0; i < dep1T.length; i++) {           //Rajoute x et y au début de chaque élément de dep1T
            dep1T[i].unshift(x, y)                         //ici, dep1T renvoi tous les déplacements possibles en pratique sans compter l'échec
        }
        
        //console.log(type)
        //console.log(dep1T)
        //for (i = 0; i < dep1T.length; i++) {
        //    console.log(dep1T[i])
        //};
        // console.log(dep1T)
        return dep1T
    };

        //console.log('autre move ' + w)
        checkCube(w);
}

function depSmolRock() {



        let boardT = JSON.parse(JSON.stringify(board));
        let BigRokPos1 = [];
        let BigRokPos2 = [];
        let SmolRokPos1 = [];
        let SmolRokPos2 = [];
        if (turn == 'W'){
            BigRokPos1 = [0, 2];
            BigRokPos2 = [0, 3];
            SmolRokPos1 = [0, 5];
            SmolRokPos2 = [0, 6];
        } else if (turn == 'B'){
            BigRokPos1 = [7, 2];
            BigRokPos2 = [7, 3];
            SmolRokPos1 = [7, 5];
            SmolRokPos2 = [7, 6];
        }
        function updateT(x, y, x2, y2, z){
            boardT = JSON.parse(JSON.stringify(board));
            boardT[x2].splice(y2, 1, boardT[x][y]);                           // copie piece sur xy2
            boardT[x].splice(y, 1,'x');                                      // suppr piece sur xy
            //boardT[x2][y2].position = [x2, y2];                            // update de la propriete position

            //console.log(boardT[x][y])
            if(z == 1){                                                     // Z en passant
                boardT[x2].splice(y, 1,'x');
            } else if(z == 2){
                boardT[5].splice(y, 1, boardT[7][y]);                         // Z petit roque copie tour
                boardT[7].splice(y, 1, 'x');                                 // Z petit roque suppr tour
            } else if(z == 3){
                boardT[3].splice(y, 1, boardT[0][y]);                         // Z grand roque copie tour
                boardT[0].splice(y, 1, 'x');                                 // Z grand roque suppr tour
            }
        };


        };
        function checkCube(w){             //checkCube calcule la pos des rois et teste si une pièce adverse peut l'atteindre

            for (let o = 0; o < 8; o++) {                               //Premiere boucle pour splice et foutre checkKingT=0
                for (let p = 0; p < 8; p++) {            
                    if (boardT[o][p] !== 'x' && boardT[o][p].color !== turn) {                      //Pour chaque position du board qui contient une pièce adverse
                        let depT = dep1et2T(o, p);                               //depT est l'array de tous les moves que pourrait faire cette pièce
                        for (k = 0; k < depT.length; k++) {                     //Pour tous les moves de cette pièce :
                            if (SmolRokPos1[0] == depT[k][2] && SmolRokPos1[1] == depT[k][3]) {          //Si la position du roi allié peut être atteinte
                                return false
                            } else if(SmolRokPos2[0] == depT[k][2] && SmolRokPos2[1] == depT[k][3]){
                                return false
                            } else {
                                return true
                            }

                        
                            }
                        }
                    }

                    
                }
            }


    function dep1et2T(x, y){
        let type = boardT[x][y].type
        let color = boardT[x][y].color
        let dep1T = []
        //DEP 1

        function rookcheck(a, b, c) {                                   //Rook movements
            for (let i = 1; i <= c; i++) {
                if (boardT[x+i*a][y+i*b] == 'x'){
                    dep1T.push([x+i*a, y+i*b, 0])
                } else if (boardT[x+i*a][y+i*b].color !== color){
                    dep1T.push([x+i*a, y+i*b, 0])
                    break
                } else {
                    break
                }
            };
        }

        function knightcheck(a, b) {                                    //Knight movements
            if (boardT[x+a] == undefined || boardT[x+a][y+b] == undefined || boardT[x+a][y+b].color == color) {} else {
                dep1T.push([x+a, y+b, 0])
            }
        }

        function bishopcheck(a, b, c) {                                 //Bishop movements
            for (let i = 1; i <= c; i++) {
                if (boardT[x+i*a][y+i*b] == 'x'){
                    dep1T.push([x+i*a, y+i*b, 0])
                } else if (boardT[x+i*a][y+i*b].color !== color){
                    dep1T.push([x+i*a, y+i*b, 0])
                    break
                } else {
                    break
                }
            };
        }

        function kingcheck(a, b) {                                       //King movements
            if (boardT[x+1*a] == undefined || boardT[x+1*a][y+1*b] == undefined || boardT[x+1*a][y+1*b].color == color) {} else {
                dep1T.push([x+1*a, y+1*b, 0])
            }
        }

        function pawncheck(a) {                                          //Pawn movements (color = W => a = 1, color = B => a = -1)
            if (boardT[x][y+1*a] == 'x') {
                dep1T.push([x, y+1*a, 0])                                 //Mouvement simple avant
            };
            if (3.5 - 2.5*a == y && boardT[x][y+1*a] == 'x' && boardT[x][y+2*a] == 'x') {
                dep1T.push([x, y+2*a, 0])                                 //Mouvement double avant
            };
            
            for (let j = -1; j < 2; j++) {
                if (boardT[x+1*j] !== undefined && boardT[x+1*j][y+1*a] !== undefined && boardT[x+1*j][y+1*a] !== 'x' && boardT[x+1*j][y+1*a].color !== color) {
                    dep1T.push([x+1*j, y+1*a, 0])                         //Mange
                } else if (boardT[x+1*j] !== undefined && boardT[x+1*j][y] !== 'x' && boardT[x+1*j][y].jump == 'wow') {
                    dep1T.push([x+1*j, y+1*a, 1])                         //Prise en passant
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

            bishopcheck(1, 1, 7 - Math.max(x,y))
            bishopcheck(1, -1, 7 - Math.max(x,7 - y))
            bishopcheck(-1, -1, 7 - Math.max(7 - x,7- y))
            bishopcheck(-1, 1, 7 - Math.max(7 - x, y))

        } else if (type == 'queen') {

            rookcheck(0, 1, 7 - y)                                      //Rook part of Queen
            rookcheck(0, -1, y)
            rookcheck(1, 0, 7 - x)
            rookcheck(-1, 0, x)
            bishopcheck(1, 1, 7 - Math.max(x,y))                        //Bishop part of Queen
            bishopcheck(1, -1, 7 - Math.max(x,7 - y))
            bishopcheck(-1, -1, 7 - Math.max(7 - x,7- y))
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
                    && boardT[1][0] == 'x' && boardT[2][0] == 'x' && boardT[3][0] == 'x') { //Grand roc
                    //Rajouter condition : ni roi ni cases entre non menacé
                    dep1T.push([x-2, y, 3])
                };
                if (boardT[x][y].alreadyMoved == false && boardT[7][0].alreadyMoved == false && boardT[7][0] == WRook2
                    && boardT[5][0] == 'x' && boardT[6][0] == 'x') { //Petit roc
                    //Rajouter condition : ni roi ni cases entre non menacé
                    dep1T.push([x+2, y, 2])
                }
            };
            if (boardT[x][y].color == 'B') { //Black
                if (boardT[x][y].alreadyMoved == false && boardT[0][7].alreadyMoved == false && boardT[0][7] == BRook2
                    && boardT[1][7] == 'x' && boardT[2][7] == 'x' && boardT[3][7] == 'x') { //Grand roc
                    //Rajouter condition : ni roi ni cases entre non menacé
                    dep1T.push([x-2, y, 3])
                };
                if (boardT[x][y].alreadyMoved == false && boardT[7][7].alreadyMoved == false && boardT[7][7] == BRook1
                    && boardT[5][7] == 'x' && boardT[6][7] == 'x') { //Petit roc
                    //Rajouter condition : ni roi ni cases entre non menacé
                    dep1T.push([x+2, y, 2])
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
            console.log('Ceci est un X !!!!!!!!!!')
            console.log(x, y)
            console.log(boardT[x][y])
        } else {
            console.log("Cette pièce a un type qui n'existe pas !")
        }
        //DEP 2
        // If any coordinate is less than 0 or greater than 7, KILL IT!
        for (i = 0; i < dep1T.length; i++) {
            if (dep1T[i][0] < 0 || dep1T[i][0] > 7 || dep1T[i][1] < 0 || dep1T[i][1] > 7) {
                dep1T.splice(i, 1);
                i--
            }
        };

        for (let i = 0; i < dep1T.length; i++) {           //Rajoute x et y au début de chaque élément de dep1T
            dep1T[i].unshift(x, y)                         //ici, dep1T renvoi tous les déplacements possibles en pratique sans compter l'échec
        }
        
        //console.log(type)
        //console.log(dep1T)
        //for (i = 0; i < dep1T.length; i++) {
        //    console.log(dep1T[i])
        //};
        // console.log(dep1T)
        return dep1T

        checkCube(w);
    };





// CHECKMATE                    // changer les console.log en GUI
function checkMate(){
    filteredLegalMoves = [];
    finalMove = [];
    console.log('CHECKMATE CHECKPOINT')
    checkpoint++;
    console.log(checkpoint);
    if(legalMoves == undefined){
        if(checkedKing == 'W'){
            console.log('Black wins !');
        }else if(checkedKing == 'B'){
            console.log('White wins !');
        }else{
            console.log('Pat !');
        }
    //}else if(legalMoves !== false){
        //play();
    }
}

function reply_click () {
  //alert(event.srcElement.id);
  let click = event.srcElement.id;
  play(click)}

// PLAY                                         // a faire
function play(click) {
// document.getElementById('element').onclick = function() {alert('click');}
    if(turn == 'W'){
        console.log('White to play')}
    if(turn == 'B'){
        console.log('Black to play')};
    console.log('LEGALMOVES : ');
    console.log(legalMoves);
    console.log('LENGTH : ' +legalMoves.length);
    

    let x = click[0]
    let y = click[1]
    let x2 = click[0]
    let y2 = click[1]
    let input = [x, y, x2, y2]

    if(filteredLegalMoves == true){
        filteredLegalMoves.forEach(move => {
        if (move[2] == input[2] && move[3] == input[3]){
            finalMove.push(move)
            update(finalMove)
        } else {
            filteredLegalMoves = [];
        }
    })}else{

    legalMoves.forEach(move => {
        if (move[0] == input[0] && move[1] == input[1]){
            filteredLegalMoves.push(move)
        } else {
            filteredLegalMoves = [];
        }
    })}
    console.log('filteredLegalMoves : ')
    console.log(filteredLegalMoves)
    console.log('finalMove : ')
    console.log(finalMove)
    update(finalMove);     
};

    

/*

    function compare(input, set){
        if (input[set] == x && x[1] == 1){
            console.log(x[2]) 
    }
    }
    // comparaison legalite

    for (let i = 0; i < legalMoves.length; i++) {
        filteredLegalMoves = [];
        if(legalMoves[i][set] == x && legalMoves[i][set] == y){                            // if x y légaux
            //console.log('highlight les positions legales');
            filteredLegalMoves.push();

    }


    
    if(legalMoves == true){                    // if x2 y2 légaux
        update(legalMoves[i][0], legalMoves[i][1], legalMoves[i][2], legalMoves[i][3], legalMoves[i][4],legalMoves[i][5]);
    } else {
        // play()
    }
*/

                                     // a supprimer une fois la fonction cree



function update(finalMove) {

    x = finalMove[0][0]                               // supprimer ces 5 lignes plus tard
    y = finalMove[0][1]       
    x2 = finalMove[0][2]    
    y2 = finalMove[0][3]    
    z = finalMove[0][4]   
    checkedKingT = finalMove[0][5]
    //console.log(x, y, x2, y2, z, checkedKingT)  


            function jumpingJacks(y, y2){                           // teste si pion jump
                if (y-y2 == 2 || y-y2 == -2){
                    return true;}}

    board[x2].splice(y2, 1, board[x][y]);                           // copie piece sur xy2
    board[x].splice(y, 1,'x');                                      // suppr piece sur xy

    checkedKing = checkedKingT;                                      // update checkedKing
    
    if(z == 1){                                                     // Z en passant
        board[x2].splice(y, 1,'x');
    }else if(z == 2){
        board[5].splice(y, 1, board[7][y]);                         // Z petit roque copie tour
        board[7].splice(y, 1, 'x');                                 // Z petit roque suppr tour
    }else if(z == 3){
        board[3].splice(y, 1, board[0][y]);                         // Z grand roque copie tour
        board[0].splice(y, 1, 'x');                                 // Z grand roque suppr tour
    }

    if(board[x2][y2].type == 'rook' || board[x2][y2].type == 'king'){      // update de la propriété roque
        board[x2][y2].alreadyMoved = true;
    }else if(board[x2][y2].type == 'pawn' && jumpingJacks(y, y2) == true){ // update jump de never en wow
        board[x2][y2].jump = 'wow';
    }else if(board[x2][y2].type == 'pawn' && board[x2][y2].jump == 'wow'){ // update jump de wow en jumped
        board[x2][y2].jump = 'jumped';
    }
    board[x2][y2].position = [x2, y2];                                     // update de la propriete position
    // console.log(board[0])
    if (turn == 'W') {                                                     // turn switcher
        turn = 'B'
    } else {
        turn = 'W'
    };
checkSquare();                                                                  // a reactiver plus tard pour boucler

};


//console.log(WPawn1.position);
//console.log(board[7][7].type);
