let a=[] ;
let order;
let I = [];
let U =[];
let L = [];
let D = [];
let U_desh =[];

function order1() {
    order = parseFloat(document.getElementById("order").value) ;
    alert("save");
}
function show(id,showmat) {
    mat_str = "";
    for (let i=0 ;i<order ; i++ ){
        mat_str += "| ";
        for (j=0 ; j<order ; j++){
            mat_str += `${showmat[i][j]} `;
        }
        mat_str += "|" + `<br>`;
    }
    return mat_str;
}

function matrix1(id) {
    alert("Start giving input for matrix")
    for (let i=0;i<order; i++) {
        a[i] = [];
        for (let j=0 ; j<order ; j++) {
            let x = parseFloat(prompt(`enter a${i+1}${j+1}`));
            a[i][j] = x;
        }
    }
    alert("done");
    document.getElementById(id).innerHTML += show(id, a);
}

function identity() {
    let I = [[1,0,0],[0,1,0],[0,0,1]];
    return I;
}
function multiply(mat1,mat2) {
    let pro=[];
    for (let i=0 ;i<order ; i++ ) {
        for (let j=0;j<order;j++){

            v=mat1[i]*mat2[j]
        }
        pro.push(v)
}
}
function elimination( num, r, c) {
    let Eli = [];
    Eli=identity();
    Eli[r][c]=num ;
    return Eli ;
}
let multi_E;
function umatrix(id) {
    U=a.map(row => [...row]);
    multi_E = identity();
    // this funtion use for finding u matrix
}
    

function Lmatrix(id) {
    L = identity();
    // this funtion for findind L matrix
   
}
    

function Dmatrix(id){
    D=U.map(row => [...row]);
    for (let i=0; i<order;i++){
        for (let j=0;j<order;j++){
            if (i!=j){
                D[i][j]=0;
            }
        }
        document.getElementById(id).innerHTML += show(id, D)+`<br>`;
    }
    
}
function U_deshmatrix(id) {
    U_desh=U.map(row => [...row]);
//    this funtion for finding u desh
}
function LDUmatrix(id){
    let ld= multiply(L,D)
    document.getElementById(id).innerHTML +=`Product of L and D <br>`+ show(id, ld)+`<br>`;
    let ldu=multiply(ld,U_desh)
    document.getElementById(id).innerHTML += `Product of LD and U_desh <br>`+ show(id, ldu);
}