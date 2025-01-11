const file = document.querySelector('.file');
const fileSelect = document.querySelector('.pro-img .edit');
const profileImg = document.querySelector('.pro-img');
const homeImg = document.querySelector('.home-img img');
const options = document.querySelector('select#options');
const optionsS = document.querySelectorAll('select#options option');
const garde1 = document.querySelector('.grade1');
const garde1s = document.querySelectorAll('.grade1');
const innerGrade = document.querySelector('.inner-grade');
const grade1H2 = document.querySelector('.grade1 h2');
const resultBox = document.querySelector('.grade1 .result-box');
const courseTitle = document.querySelector('.result h4');
const courseCredit = document.querySelector('.result .p1');
const courseGrade = document.querySelector('.result .p2');
const editBox = document.querySelector('.edita .edit-box');
const courseInput = document.querySelector('.one .course-input');
const creditInput = document.querySelector('.one .credit-input');
const gradeInput = document.querySelector('.one .grade-input');
const trash = document.querySelector('.era-del .trash');
const add = document.querySelector('.era-del .add');
const editBtn = document.querySelector('.edit-btn');
const editee = document.querySelector('.editee input');
const percentage1 = document.querySelector('.textR .upn');
const percentage2 = document.querySelector('.textR .downn');
const range1 = document.querySelector('.range .up');
const range2 = document.querySelector('.range .down');
const GP = document.querySelector('.profile h3 span');
const cross = document.querySelector('.editee .cross');
const cros = document.querySelector('.warrning .cros');


// sign in dom

const waiting = document.querySelector('.waiting-section');
const waitingDiv = document.querySelector('.waiting-section div');
const homeName = document.querySelector('.home-img .text h4');
const homeDep = document.querySelector('.home-img .text h5');
const homeReg = document.querySelector('.home-img .text p');
const profileName = document.querySelector('.pro-text #one');
const profileDep = document.querySelector('.pro-text #two');
const profileReg = document.querySelector('.pro-text #three');
const registerLink = document.querySelector('.register a');
const remember = document.querySelector('.remember-forget #forgot');
const btnLogo = document.querySelector('.btnlogo');
const signInpage = document.querySelector('.sign-in');
const signOut = document.querySelector('.sign-out a');
const body = document.querySelector('.body');
const popup = document.querySelector('.popup');
const popupe = document.querySelector('.popupe');
const bodyInner = document.querySelector('.body-inner');
const wrapper = document.querySelector('.sign-in .wrapper');
const formHead = document.querySelector('.form-box h2');
const namea = document.querySelector('.name');
const password = document.querySelector('.password');
const department = document.querySelector('.department');
const regNo = document.querySelector('.reg-no');
const register = document.querySelector('.submit');
const registerOne = document.querySelector('.submit.one');
const confirme = document.querySelector('.submit.two');
const nameInput = document.querySelector('.name input');
const passwordInput = document.querySelector('.password input');
const departmentInput = document.querySelector('.department input');
const regNoInput = document.querySelector('.reg-no input');
const regNolabel = document.querySelector('.reg-no label');
const passwordlabel = document.querySelector('.password label');
const departmentlabel = document.querySelector('.department label');
const namelabel = document.querySelector('.name label');
const other = document.querySelector('.other-text');
const passwordDiv = document.querySelector('.password div');
const passwordImg = document.querySelector('.password img');
const warrning = document.querySelector('.warrning');
const warrningB = document.querySelector('.warrning h2 b');
const warrningBtn = document.querySelector('.warrning button');
const footer = document.querySelector('footer');
const  nav = document.querySelector('nav');
const  gradeEmpty = document.querySelector('.grade .empty')

const showInfBtn = document.querySelector('.show-inf-cross')
const showInf = document.querySelector('.show-inf')

// sign in page
let recorded = 0;
let cours = 'course';
let grad = 'grade';
let credite = 'credit';
let slow = 0;
  let point = 0;


// declearnig function
register.addEventListener('click', submit);
signOut.addEventListener('click', signout);
registerOne.addEventListener('click', login)
registerLink.addEventListener('click', reset)
passwordDiv.addEventListener('click', imge);
remember.addEventListener('click', rember);
confirme.addEventListener('click', createPassword);
innerGrade.addEventListener('click', innerG);
warrningBtn.addEventListener('click', warrningClear);

function wait(){

  setTimeout(() => {

    waiting.classList.add('clear')
    waitingDiv.classList.add('cleare')
  }, 3000);
  setTimeout(() => {
    signInpage.classList.add('active')
  
    }, 3300);
}

function signout(){
  body.classList.remove('active');
  bodyInner.classList.remove('active');
  signInpage.classList.add('active');
}

function createPassword(){
  let  score1 = JSON.parse(localStorage.getItem('appRegNo'));
  let  score3 = JSON.parse(localStorage.getItem('appPassword'));

  
  if(password.style.display == 'block' && !(passwordInput.value == '')){
     score3.splice(score3.indexOf(score3),1);

     localStorage.setItem('appPassword', JSON.stringify(score3));
     score3.push(passwordInput.value);
     localStorage.setItem('appPassword', JSON.stringify(score3));

    
     let pop = document.createElement('div');
     pop.classList.add('popupin')
     let p = document.createElement('p')
     p.innerHTML = 'password set successfuly';
     pop.appendChild(p)
     popup.appendChild(pop);
     


     setTimeout(() => {
  other.style.display = 'block';

      password.style.display = 'block';
      passwordInput.value = '';
      namea.style.display = 'block';
      registerOne.classList.add('active');
      confirme.classList.remove('active');
      formHead.innerHTML  =`login`;
    pop.remove()

     }, 3000);
  }else if(regNoInput.value == score1[0]){
  password.style.display = 'block';
  regNo.style.display = 'none';
  formHead.innerHTML  =`Create new Password`;
  nameInput.value = '';
  regNoInput.value = '';
  }else if(!(regNoInput.value == score1[0])){
     regNolabel.innerHTML = 'incorrect input';
     regNolabel.style.color = 'red';

     setTimeout(() => {
      regNolabel.innerHTML = 'Range No:';
     regNolabel.style.color = 'black';

     }, 2000);
  }
}


function rember(){
  password.style.display = 'none';
  namea.style.display = 'none';
  regNo.style.display = 'block';
  other.style.display = 'none';
  registerOne.classList.remove('active');
  confirme.classList.add('active');
  formHead.innerHTML  =`Confirm your Name`;
}

function login(){



  let  score1 = JSON.parse(localStorage.getItem('appName'));
  let  score3 = JSON.parse(localStorage.getItem('appPassword'));


  if( passwordInput.value == score3[0] && nameInput.value == score1[0] ){
    passwordInput.value = '';
    nameInput.value = '';
   
    signInpage.classList.remove('active');

     body.classList.add('active');
     bodyInner.classList.add('active');
     
    }else if(!(nameInput.value == score1[0])){
      namelabel.innerHTML = 'incorrect Name';
      namelabel.style.color = 'red';

      setTimeout(() => {
        namelabel.innerHTML = 'Full Name';
      namelabel.style.color = 'black';
      }, 2000);
    }else if(!(passwordInput.value == score3[0])){
      passwordlabel.innerHTML = 'incorrect Password';
      passwordlabel.style.color = 'red';

      setTimeout(() => {
        passwordlabel.innerHTML = 'password';
     passwordlabel.style.color = 'black';
      }, 2000);
    }
}



function imge(){
  if(passwordImg.src == "http://127.0.0.1:5500/img/eyeclose.png"){

    passwordImg.src = "http://127.0.0.1:5500/img/eyeopen.png";
    passwordInput.type = 'text'
  }else{
    passwordImg.src = "http://127.0.0.1:5500/img/eyeclose.png"
    passwordInput.type = 'password'
     
  }
}

function submit(){



  if(nameInput.value == '' && departmentInput.value == '' && regNoInput.value == '' && passwordInput.value == ''){
     namelabel.innerHTML = 'input required';
     namelabel.style.color = 'red'
     passwordlabel.innerHTML = 'input required';
     passwordlabel.style.color = 'red'
     departmentlabel.innerHTML = 'input required';
     departmentlabel.style.color = 'red'
     regNolabel.innerHTML = 'input required';
     regNolabel.style.color = 'red'

     setTimeout(() => {
      namelabel.innerHTML = 'Full Name';
     namelabel.style.color = 'black'
     passwordlabel.innerHTML = 'password';
     passwordlabel.style.color = 'black'
     departmentlabel.innerHTML = 'Department';
     departmentlabel.style.color = 'black'
     regNolabel.innerHTML = 'Range No:';
     regNolabel.style.color = 'black'
     }, 2000);
  }else if(nameInput.value == ''){
     namelabel.innerHTML = 'input required';
     namelabel.style.color = 'red';

     setTimeout(() => {
      namelabel.innerHTML = 'Full Name';
     namelabel.style.color = 'black'
     }, 2000);
  } else if(passwordInput.value == ''){
    passwordlabel.innerHTML = 'input required';
     passwordlabel.style.color = 'red'

     setTimeout(() => {
      passwordlabel.innerHTML = 'password';
     passwordlabel.style.color = 'black'
     }, 2000);
  }else if(departmentInput.value == ''){
    departmentlabel.innerHTML = 'input required';
    departmentlabel.style.color = 'red'

    setTimeout(() => {
      departmentlabel.innerHTML = 'Department';
    departmentlabel.style.color = 'black'
    }, 2000);
 }else if( regNoInput.value == '' ){
     regNolabel.innerHTML = 'input required';
     regNolabel.style.color = 'red'

     setTimeout(() => {
      regNolabel.innerHTML = 'Range No:';
     regNolabel.style.color = 'black'
     }, 2000);
  } else {
    storageSign(nameInput.value,departmentInput.value,passwordInput.value,regNoInput.value);
    homeName.innerHTML = nameInput.value,
    homeDep.innerHTML = departmentInput.value,
    homeReg.innerHTML = regNoInput.value,
    profileName.innerHTML = nameInput.value,
    profileDep.innerHTML = departmentInput.value,
    profileReg.innerHTML =regNoInput.value,
    
    
    department.style.display = 'none';
    regNo.style.display = 'none';
    other.style.display = 'block';
    nameInput.value = '';
    regNoInput.value = '';
    departmentInput.value = '';
    passwordInput.value = '';
    register.innerHTML = 'login';
    formHead.innerHTML  = 'login';
    wrapper.style.height = '400px';
    register.style.display = 'none';
    registerOne.classList.add('active');
  }
  // e.preventDefault()

}


// remember the profole reload data
function reload(){
  if(localStorage.getItem('appPassword') == '[]' || localStorage.getItem('appPassword') == null){
    //  reset()
  }else{
    let score = JSON.parse(localStorage.getItem('appName'))
    let score1 = JSON.parse(localStorage.getItem('appDepartment'))
    let score2 = JSON.parse(localStorage.getItem('appRegNo'))

    homeName.innerHTML = score,
    homeDep.innerHTML = score1,
    homeReg.innerHTML = score2,
    profileName.innerHTML = score,
    profileDep.innerHTML = score1,
    profileReg.innerHTML =score2,

    department.style.display = 'none';
    regNo.style.display = 'none';
    other.style.display = 'block';
    nameInput.value = '';
    passwordInput.value = '';
    register.style.display = 'none';
    registerOne.classList.add('active')
    formHead.innerHTML  =`Welcome back ${score}`;
    wrapper.style.height = '400px';

   const scor4 = JSON.parse(localStorage.getItem('img'))


    profileImg.style.background = `url(${scor4})`;
    profileImg.style.backgroundSize = 'cover';
    profileImg.style.backgroundPosition = 'center';
    homeImg.src = scor4;
      
    showInf.classList.add('activea')
    homePage.style.pointerEvents = 'none';
    nav.style.pointerEvents = 'none'
    footer.style.pointerEvents = 'none';
    
   let season;
   if(localStorage.getItem('season') == null){
    season = []
   }else{
    season = JSON.parse(localStorage.getItem('season'));
   }
   
    season.forEach(each => {
      let opt = document.createElement('option');
      opt.value = each;
      opt.innerHTML = each;
    
      options.appendChild(opt);



      let div1 = document.createElement('div');
      div1.classList.add('grade1');
    
      let div2 = document.createElement('div');
      div2.classList.add('h2');
    
      let h21 = document.createElement('h2');
      h21.classList.add('head')
      h21.innerHTML = each;
      div2.appendChild(h21);
    
      let btn = document.createElement('button')
      btn.classList.add('grade-trash');
    
      let img1  = document.createElement('img')
      img1.src = 'img/trash.png';
      img1.classList.add('img-trash');
    
      btn.appendChild(img1)
      div2.appendChild(btn);
    
      div1.appendChild(div2);
      
    
      let div3 = document.createElement('div');
      div3.classList.add('courses');

      let div6 = document.createElement('h3')
      div6.classList.add('gp')
      div6.innerHTML = 'your GPA is '
      let spa = document.createElement('span')
      spa.innerHTML = '';
      div6.appendChild(spa)
      div3.appendChild(div6)

    
      let head = document.createElement('header')
    
      let h22 = document.createElement('h2');
      h22.innerHTML = 'course'
      head.appendChild(h22)
    
      let h23 = document.createElement('h2');
      h23.innerHTML = 'credit';
      head.appendChild(h23);
    
      let h24 = document.createElement('h2');
      h24.innerHTML = 'grade';
      head.appendChild(h24);
    
      div3.appendChild(head)
    
      let div4 = document.createElement('div')
      div4.classList.add('result-box');
    
      div3.appendChild(div4)

      
      div1.appendChild(div3)

     
    
     innerGrade.appendChild(div1);

    })
updateGrade()

if(innerGrade.children.length == 1){
  gradeEmpty.style.display = 'flex';
  innerGrade.style.display = 'none';
}

  }

}


function updateGrade(){

  let set1 = JSON.parse(localStorage.getItem('season'))

set1.forEach(each => {

  for(let a = 0; a < innerGrade.children.length; a++ ){

    if(innerGrade.children[a].children[0].children[0].innerHTML == each){
     
      nexte(innerGrade.children[a].children[1].children[2],each,innerGrade.children[a].children[1].children[0].children[0])
    }
   
}


})

function nexte(next,each,spa){
  let slow = 0;
  let point = 0;

  let set2 = JSON.parse(localStorage.getItem(each))
  let set3 = JSON.parse(localStorage.getItem(set2[0]))
if(set3.length == 0){
  spa.innerHTM = '';
}else{


  for(let a = 0; a < set3.length; a++ ){

    let div = document.createElement('div')
    div.classList.add('result')
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');


  set2.forEach(get => {
    let set3 = JSON.parse(localStorage.getItem(get))
   
    if(set2[0] == get){
    let h4 = document.createElement('h4')
    div.appendChild(h4)
    h4.innerHTML =set3[a];
 
    }else if(set2[1] == get){

      p1.innerHTML =set3[a];

      div.appendChild(p1);
    }else if(set2[2] == get){


      p2.innerHTML = set3[a];
   div.appendChild(p2);
   
    }
    if(set3.length == 0){
      
      spa.innerHTML = '';
     }else{
   gpe(p1.innerHTML,p2.innerHTML)
     }

  })
  let btn = document.createElement('button');
  btn.classList.add('trash')
  
  btn.innerHTML = '|||';

  let div5 = document.createElement('div')
  div5.classList.add('next')
  
  div5.appendChild(div)
  div5.appendChild(btn)
next.appendChild(div5)
 }
 function gpe(credit,grad){
  const A = 5;
  const B = 4;
  const C = 3;
  const D = 2;
  const E = 1;
  const F = 0;
    
  if(grad == 'A'){ 
    slow +=credit * A;
    point +=Number(credit);
  }else if(grad == 'B'){
    slow +=credit* B;
    point += Number(credit);

  }else if(grad == 'C'){
    slow +=credit * C;
    point += Number(credit);
  }else if(grad == 'D'){
    slow +=credit * D;
    point += Number(credit);
  }else if(grad == 'E'){
    slow +=credit * E;
    point += Number(credit) ;
  }else if(grad == 'F'){
    slow +=credit * F;
    point +=Number(credit);
  }

}
let total =slow/point;
   
    let maths = Math.floor(total * 10);
   
   let gp = maths.toString()[0]+ '.' + maths.toString()[1];
  if(maths < 15){
      spa.style.color = 'red'
      spa.innerHTML = gp;


  }else if(maths < 25){
    spa.style.color = 'rgb(221, 221, 69)'
    spa.innerHTML = gp;
  }else{
    spa.style.color = 'green'
    spa.innerHTML = gp;

  }
}
}
}


function storageSign(name,dep,pass,reg){
  let score1;
  let score2;
  let score3;
  let score4;

  if(localStorage.getItem('appName') == null){
    score1 = []
  }else{
    score1 = JSON.parse(localStorage.getItem('appName'))
  }
  score1.push(name);
  localStorage.setItem('appName', JSON.stringify(score1))


  if(localStorage.getItem('appDepartment') == null){
    score2 = [];
  }else{
    score2 = JSON.parse(localStorage.getItem('appDepartment'))
  }
  score2.push(dep);
  localStorage.setItem('appDepartment', JSON.stringify(score2))


  if(localStorage.getItem('appPassword') == null){
    score3 = []
  }else{
    score3 = JSON.parse(localStorage.getItem('appPassword'))
  }
  score3.push(pass);
  localStorage.setItem('appPassword', JSON.stringify(score3))

  if(localStorage.getItem('appRegNo') == null){
    score4 = []
  }else{
    score4 = JSON.parse(localStorage.getItem('appRegNo'))
  }
  score4.push(reg);
  localStorage.setItem('appRegNo', JSON.stringify(score4))
}


// App page
window.addEventListener('DOMContentLoaded' , restore);
window.addEventListener('DOMContentLoaded' , range);
window.addEventListener('DOMContentLoaded' , reload);
window.addEventListener('DOMContentLoaded' , wait);


// improting file for profile
fileSelect.addEventListener('click', () => file.click() );
file.onchange = function(){

  if(!(localStorage.getItem('img') == null)){

    let score1 = JSON.parse(localStorage.getItem('img'));
    score1.splice(score1.indexOf(score1), 1);
    localStorage.setItem('img', JSON.stringify(score1))

    const store =  URL.createObjectURL(file.files[0]);

  profileImg.style.background = `url(${store})`;
  profileImg.style.backgroundSize = 'cover';
  profileImg.style.backgroundPosition = 'center';
  homeImg.src = store;

  
  score1.push(store)
  localStorage.setItem('img', JSON.stringify(score1))

  }else{


const store =  URL.createObjectURL(file.files[0]);
  profileImg.style.background = `url(${store})`;
  profileImg.style.backgroundSize = 'cover';
  profileImg.style.backgroundPosition = 'center';
  homeImg.src = store;

  let score5;

  if(localStorage.getItem('img') == null){
     score5 = []
  }else{
    score5 = JSON.parse(localStorage.getItem('img'))

  };


  score5.push(store);

  localStorage.setItem('img', JSON.stringify(score5))
}
}

// editing courses
editBtn.addEventListener('click', () => {

  if(editee.classList == 'activea'){
    let done = document.createElement('p');

   for(let a = 0; a < innerGrade.children.length; a++ ){
    if(innerGrade.children[a].children[0].children[0].innerHTML == editee.value){
      let pop = document.createElement('div');
      pop.classList.add('popupin')
      pop.style.background = 'lightcoral'
      let p = document.createElement('p')
      p.innerHTML = 'season alreade exist';
      pop.appendChild(p)
      popupe.appendChild(pop);

       done.data = editee.value;
      setTimeout(() => {
      
     pop.remove()
 
      }, 3000);
      
    }
    
  }
  if(done.data == editee.value){
    done.data ='';
  }else{
      gradeEmpty.style.display = 'none';
      innerGrade.style.display = 'block';
    newSeason();

  }

  cross.classList.remove('activea')
  editee.classList.remove('activea')
editee.value = '';
  }else if(options.data){
        updateData(options.data)
       
  }else{
    let pop = document.createElement('div');
    pop.classList.add('popupin')
    pop.style.background = 'lightcoral'
    let p = document.createElement('p')
    p.innerHTML = "No season selected Yet";
    pop.appendChild(p)
    popupe.appendChild(pop);

    setTimeout(() => {
    
   pop.remove()

    }, 3000);
  }
  cross.classList.remove('activea');
  range()
})


function updateData(e){
  let slow = 0;
  let point = 0;
   for(let a = 0; a < innerGrade.children.length; a++ ){

    if(innerGrade.children[a].children[0].children[0].innerHTML == e){
      let count = editBox.children[0].children[0].value;
      let index = editBox.children[0].children[1].value;
      let score = editBox.children[0].children[2].value;
    
    
        if(count == '' || index == '' || score == ''){
            let pop = document.createElement('div');
            pop.classList.add('popupin')
            pop.style.background = 'lightcoral'
            let p = document.createElement('p')
            p.innerHTML = 'put in your courses';
            pop.appendChild(p)
            popupe.appendChild(pop);
            setTimeout(() => {
            
           pop.remove()
        
            }, 3000);
        }else if(count == '' && index == '' && score == ''){
          let pop = document.createElement('div');
          pop.classList.add('popupin')
          pop.style.background = 'lightcoral'
          let p = document.createElement('p')
          p.innerHTML = 'put in your courses';
          pop.appendChild(p)
          popupe.appendChild(pop);
      
          setTimeout(() => {
          
         pop.remove()
      
          }, 3000);
        }else{
    
       for(let i =0; i < editBox.children.length ; i++){

          if(!(editBox.children[i].children[0].value == '') || !(editBox.children[i].children[1].value == '') || !(editBox.children[i].children[2].value == '')){
        let div = document.createElement('div')
        div.classList.add('result')
    
        let h4 = document.createElement('h4')
        div.appendChild(h4)
        h4.innerHTML = editBox.children[i].children[0].value;
    
    
        let p1 = document.createElement('p');
        p1.innerHTML = editBox.children[i].children[1].value;
        div.appendChild(p1);
    
        let p2 = document.createElement('p');
        p2.innerHTML = editBox.children[i].children[2].value;
        div.appendChild(p2);
    
        let btn = document.createElement('button');
        btn.classList.add('trash')
        btn.innerHTML = '|||'

        let div5 = document.createElement('div')
        div5.classList.add('next')
        div5.appendChild(div)
        div5.appendChild(btn)
    
    innerGrade.children[a].children[1].children[2].appendChild(div5)

   

      let count = editBox.children[i].children[0].value;
      let index = editBox.children[i].children[1].value;
      let score = editBox.children[i].children[2].value;
      storage(count,index,score,e)
    
      editBox.children[i].children[0].value = '';
       editBox.children[i].children[1].value = '';
      editBox.children[i].children[2].value = '';
       }


       function storage(course,credit,grade, e){


        let come = JSON.parse(localStorage.getItem(e))
      
        let store1;
        let store2;
        let store3;


      //   // storage for course
        if(localStorage.getItem(come[0]) == null){
            store1 = []
        }else{
            store1 = JSON.parse(localStorage.getItem(come[0]))
        }
        store1.push(course)
        localStorage.setItem(come[0], JSON.stringify(store1))
    
    
    
      //   // storage for credit
        if(localStorage.getItem(come[1]) == null){
            store2 = []
        }else{
            store2 = JSON.parse(localStorage.getItem(come[1]))
        }
    
        store2.push(credit)
        localStorage.setItem(come[1], JSON.stringify(store2))
    
        
    
      //   // storage for grade
        if(localStorage.getItem(come[2]) == null){
            store3 = []
        }else{
            store3 = JSON.parse(localStorage.getItem(come[2]))
        }
    
        store3.push(grade)
        localStorage.setItem(come[2], JSON.stringify(store3))
       }
      range()
       }
    }

    
    let heat  = innerGrade.children[a].children[1].children[2].children;
    for(let i = 0; i < heat.length; i++){

     let cre = heat[i].children[0].children[1].innerHTML;
     let gra = heat[i].children[0].children[2].innerHTML;
     gpe(cre,gra)
    }


     function gpe(credit,grad){
       const A = 5;
       const B = 4;
       const C = 3;
       const D = 2;
       const E = 1;
       const F = 0;
         
       if(grad == 'A'){ 
         slow +=credit * A;
         point +=Number(credit);
       }else if(grad == 'B'){
         slow +=credit* B;
         point += Number(credit);
     
       }else if(grad == 'C'){
         slow +=credit * C;
         point += Number(credit);
       }else if(grad == 'D'){
         slow +=credit * D;
         point += Number(credit);
       }else if(grad == 'E'){
         slow +=credit * E;
         point += Number(credit) ;
       }else if(grad == 'F'){
         slow +=credit * F;
         point +=Number(credit);
       }
     
     }
     let total =slow/point;
        
         let maths = Math.floor(total * 10);
        
        let gp = maths.toString()[0]+ '.' + maths.toString()[1];
     let spa = innerGrade.children[a].children[1].children[0].children[0];
       console.log(spa)
     if(maths < 15){
           spa.style.color = 'red'
           spa.innerHTML = gp;
     
     
       }else if(maths < 25){
         spa.style.color = 'rgb(221, 221, 69)';
         spa.innerHTML = gp;
       }else{
         spa.style.color = 'green'
         spa.innerHTML = gp;
     
       }
    }  
    }
  }



// restore data
function restore(){

    let store1;
    let store2;
    let store3;
   
    if(localStorage.getItem('course') == null){
        store1 = []
    }else{
        store1 = JSON.parse(localStorage.getItem('course'))
    }


    if(localStorage.getItem('credit') == null){
        store2 = []
    }else{
        store2 = JSON.parse(localStorage.getItem('credit'))
    }


    if(localStorage.getItem('grade') == null){
        store3 = []
    }else{
        store3 = JSON.parse(localStorage.getItem('grade'))
    }

    for(let i = 0; i < store1.length; i++){
     let div = document.createElement('div')
    div.classList.add('result')

    let h4 = document.createElement('h4')
    div.appendChild(h4)
    h4.innerHTML = store1[i];


    let p1 = document.createElement('p');
    p1.innerHTML = store2[i];
    div.appendChild(p1);

    let p2 = document.createElement('p');
    p2.innerHTML = store3[i];
    div.appendChild(p2);

    let btn = document.createElement('button');
    btn.classList.add('trash')
    btn.innerHTML = '|||'
    div.appendChild(btn)


  resultBox.appendChild(div)
    }

}


// trash
add.addEventListener('click',() => {
  

    if(editBox.children.length == 9){

    }else{

    
    let div = document.createElement('div')
    div.classList.add('input')

    let inputCourse = document.createElement('input');
    inputCourse.placeholder = 'course';
    inputCourse.classList.add('course-input')
    div.appendChild(inputCourse)

    let inputCredit = document.createElement('input')
    inputCredit.placeholder = 'credit'
    inputCredit.setAttribute('type', 'number');

    inputCredit.classList.add('credit-input')
    div.appendChild(inputCredit)

    let inputGrade = document.createElement('input')
    inputGrade.placeholder = 'grade';
    inputGrade.classList.add('grade-input')
    div.appendChild(inputGrade)

    editBox.appendChild(div)
    }
})


// removing of empty input
trash.addEventListener('click', () => {

    let count = editBox.lastChild;

    count.remove();
})

function innerTrash(tag) {


  let clean = tag.parentElement.parentElement.parentElement.parentElement.children[0].children[0].innerHTML;
  let score4 = JSON.parse(localStorage.getItem(clean));
let score5 = JSON.parse(localStorage.getItem(score4[0]));

let score6 = JSON.parse(localStorage.getItem(score4[1]));

let score7 = JSON.parse(localStorage.getItem(score4[2]));


    let count1 = tag.parentElement.children[0].children[0].innerHTML;
   
    for(let i = 0; i < score5.length ; i++){
      if(score5[i] == count1){

        score5.splice(score5.indexOf(score5[i]),1)
        localStorage.setItem(score4[0] , JSON.stringify(score5))
    
        score6.splice(score6.indexOf(score6[i]),1)
        localStorage.setItem(score4[1], JSON.stringify(score6))
    
        score7.splice(score7.indexOf(score7[i]),1)
        localStorage.setItem(score4[2] , JSON.stringify(score7))
      }

    }

    let one =tag.parentElement.parentElement.parentElement;
    let spa = one.children[0].children[0] ;

   if(one.children[2].children.length == 1){
   
    spa.innerHTML = '';
   }else{

      let slow = 0;
      let point = 0;
      for(let i = 0; i < one.children[2].children.length; i++){
    
       let cre = one.children[2].children[i].children[0].children[1].innerHTML;
       let crea = one.children[2].children[i].children[0].children[0].innerHTML;
       let gra = one.children[2].children[i].children[0].children[2].innerHTML;
    if(tag.parentElement.children[0].children[0].innerHTML == crea && tag.parentElement.children[0].children[2].innerHTML == gra && tag.parentElement.children[0].children[1].innerHTML == cre){
    }else{
       gpe(cre,gra)
    }
      }
    
    
       function gpe(credit,grad){
         const A = 5;
         const B = 4;
         const C = 3;
         const D = 2;
         const E = 1;
         const F = 0;
           
         if(grad == 'A'){ 
           slow +=credit * A;
           point +=Number(credit);
         }else if(grad == 'B'){
           slow +=credit* B;
           point += Number(credit);
       
         }else if(grad == 'C'){
           slow +=credit * C;
           point += Number(credit);
         }else if(grad == 'D'){
           slow +=credit * D;
           point += Number(credit);
         }else if(grad == 'E'){
           slow +=credit * E;
           point += Number(credit) ;
         }else if(grad == 'F'){
           slow +=credit * F;
           point +=Number(credit);
         }
       
       }
       let total =slow/point;
          
           let maths = Math.floor(total * 10);
          
          let gp = maths.toString()[0]+ '.' + maths.toString()[1];
       if(maths < 15){
             spa.style.color = 'red'
             spa.innerHTML = gp;
       
       
         }else if(maths < 25){
           spa.style.color = 'rgb(221, 221, 69)'
           spa.innerHTML = gp;
         }else{
           spa.style.color = 'green'
           spa.innerHTML = gp;
       
         }
    }
    tag.parentElement.remove()

}

function range(){

  if(innerGrade.style.display == 'none' || innerGrade.children.length ==1 ){
    
  }else{

  const A = 5;
  const B = 4;
  const C = 3;
  const D = 2;
  const E = 1;
  const F = 0;
  let score4 = JSON.parse(localStorage.getItem('season'));

  let score = 0;
  let down = 0;
  let slow = 0;
  let outlet1 =0;
  let outlet2 = 0;
  let point = 0;

  for(let i = 0; i < score4.length; i++){
  let score3 = JSON.parse(localStorage.getItem(score4[i]));

  let score2 = JSON.parse(localStorage.getItem(score3[1]));
  let score1 = JSON.parse(localStorage.getItem(score3[2]));
   calc(score1,score2)
    
  }

  // performance calculation

  function calc(e,b){
    for(let i = 0; i < e.length; i++){
      if(e[i] == 'A'){ 
        score += A;
      }else if(e[i] == 'B'){
        score += B;
      }else if(e[i] == 'C'){
        score += C;
      }else if(e[i] == 'D'){
        down += D;
      }else if(e[i] == 'E'){
        down += E;
      }else if(e[i] == 'F'){
        down += F;
      }
    }


    for(let a = 0; a < e.length;a++){
      if(e[a] == 'A'){ 
        slow += b[a] * A;
        point +=Number(b[a]);
      }else if(e[a] == 'B'){
        slow +=b[a]* B;
        point += Number(b[a]);

      }else if(e[a] == 'C'){
        slow +=b[a] * C;
        point += Number(b[a]);
      }else if(e[a] == 'D'){
        slow +=b[a] * D;
        point += Number(b[a]);
      }else if(e[a] == 'E'){
        slow +=b[a] * E;
        point += Number(b[a]) ;
      }else if(e[a] == 'F'){
        slow +=b[a] * F;
        point +=Number(b[a]);
      }
    }
   
  }

 
  let count = score + down;
  outlet1 += (score / count) * 100;
  outlet2 += (down / count) * 100;


 percentage1.innerHTML = `${Math.round(outlet1)}%`
 percentage2.innerHTML = `${Math.round(outlet2)}%`

 range1.style.width = `${outlet1}%`
 range2.style.width = `${outlet2}%`

 
  
//  gp calculation

 

  // calculation of GP

    let total =slow/point;
   
    let maths = Math.floor(total * 10);
   
   let gp = maths.toString()[0]+ '.' + maths.toString()[1];
  if(maths < 15){
      GP.style.color = 'red'
      GP.innerHTML = gp;

  }else if(maths < 25){
      GP.style.color = 'yellow'
      GP.innerHTML = gp;

  }else{
      GP.style.color = 'green'
      GP.innerHTML = gp;

  }
}
}



function reset(){
department.style.display = 'block';
regNo.style.display = 'block';
other.style.display = 'none';
nameInput.value = '';
passwordInput.value = '';
departmentInput.value = '';
regNoInput.value = '';
register.style.display = 'block';
register.innerHTML = 'submit'
registerOne.classList.remove('active');
formHead.innerHTML  = 'Register';
wrapper.style.height = '550px';

localStorage.removeItem('appName')
localStorage.removeItem('appPassword')
localStorage.removeItem('appDepartment')
localStorage.removeItem('appRegNo')
localStorage.removeItem('img')
localStorage.removeItem('appName')
localStorage.removeItem('appName')

let clea;
if(localStorage.getItem('season') == null){
  clea = [];
}else{
  clea = JSON.parse(localStorage.getItem('season'))

}

clea.forEach(each => {
let  cleaa = JSON.parse(localStorage.getItem(each))
localStorage.removeItem(cleaa[0])
localStorage.removeItem(cleaa[1])
localStorage.removeItem(cleaa[2])
  
localStorage.removeItem(each)

})
localStorage.removeItem('season')
}

// targeting and doing something with it
function innerG(e){
   let tag = e.target;

   if(tag.classList == 'h2'){

    tag.parentElement.classList.toggle('height')

   }else if(tag.classList == 'grade-trash'){
       warrning.classList.add('war')
       nav.style.pointerEvents = 'none'
       footer.style.pointerEvents = 'none'
       let sect = tag.parentElement.children[0].innerHTML;
       let sect1 = tag.parentElement.parentElement
       warrningB.innerHTML = sect;
       sect1.data = sect;
       
       innerGrade.style.pointerEvents = 'none';
     cros.classList.add('activea')


    }else if(tag.classList[0] == 'trash'){
      innerTrash(tag);
  }
}
   
function newSeason(){
  
  let count = editBox.children[0].children[0].value;
 let index = editBox.children[0].children[1].value;
 let score = editBox.children[0].children[2].value;


  if(count == '' || index == '' || score == ''){
    let pop = document.createElement('div');
    pop.classList.add('popupin')
    pop.style.background = 'lightcoral'
    let p = document.createElement('p')
    p.innerHTML = 'put in your courses';
    pop.appendChild(p)
    popupe.appendChild(pop);

    setTimeout(() => {
    
   pop.remove()

    }, 3000);
   }else if(count == '' && index == '' && score == ''){
    let pop = document.createElement('div');
    pop.classList.add('popupin')
    pop.style.background = 'lightcoral'
    let p = document.createElement('p')
    p.innerHTML = 'put in your courses';
    pop.appendChild(p)
    popupe.appendChild(pop);

    setTimeout(() => {
    
   pop.remove()

    }, 3000);
   }else{

    


  let div1 = document.createElement('div');
  div1.classList.add('grade1');

  let div2 = document.createElement('div');
  div2.classList.add('h2');

  let h21 = document.createElement('h2');
  h21.classList.add('head')
  h21.innerHTML = editee.value;
  div2.appendChild(h21);

  let btn = document.createElement('button')
  btn.classList.add('grade-trash');

  let img1  = document.createElement('img')
  img1.src = 'img/trash.png';
  img1.classList.add('img-trash');

  btn.appendChild(img1)
  div2.appendChild(btn);

  div1.appendChild(div2);
  

  let div3 = document.createElement('div');
  div3.classList.add('courses');
  let div6 = document.createElement('h3')
  div6.classList.add('gp')
  div6.innerHTML = 'your GPA is '
  let spa = document.createElement('span')
  
  div6.appendChild(spa)
  div3.appendChild(div6)

  let head = document.createElement('header')

  let h22 = document.createElement('h2');
  h22.innerHTML = 'course'
  head.appendChild(h22)

  let h23 = document.createElement('h2');
  h23.innerHTML = 'credit';
  head.appendChild(h23);

  let h24 = document.createElement('h2');
  h24.innerHTML = 'grade';
  head.appendChild(h24);

  div3.appendChild(head)

  let div4 = document.createElement('div')
  div4.classList.add('result-box');

  div3.appendChild(div4)

  div1.appendChild(div3)

 innerGrade.appendChild(div1);
  let slow = 0;
  let point = 0;
  for(let i =0; i < editBox.children.length ; i++){
    if(!(editBox.children[i].children[0].value == '') || !(editBox.children[i].children[1].value == '') || !(editBox.children[i].children[2].value == '')){
  
   let div = document.createElement('div')
   div.classList.add('result')

   let h4 = document.createElement('h4')
   div.appendChild(h4)
   h4.innerHTML = editBox.children[i].children[0].value;


   let p1 = document.createElement('p');
   p1.innerHTML = editBox.children[i].children[1].value;
   div.appendChild(p1);

   let p2 = document.createElement('p');
   p2.innerHTML = editBox.children[i].children[2].value;
   div.appendChild(p2);

   let btn = document.createElement('button');
   btn.classList.add('trash')
   btn.innerHTML = '|||'

   let div5 = document.createElement('div')
  div5.classList.add('next')
   div5.appendChild(div)
   div5.appendChild(btn)
 div4.appendChild(div5)

  
 

 let cours = editBox.children[i].children[0].value;
 let credit = editBox.children[i].children[1].value;
 let grad = editBox.children[i].children[2].value;
 storeCourse(cours,credit,grad,editee.value)

 editBox.children[i].children[0].value = '';
  editBox.children[i].children[1].value = '';
 editBox.children[i].children[2].value = '';
 if(!(p1.innerHTML == '') || !(p2.innerHTML == '')){
  gpe(p1.innerHTML,p2.innerHTML) 

 }
}

  }
 

  function gpe(credit,grad){
    const A = 5;
    const B = 4;
    const C = 3;
    const D = 2;
    const E = 1;
    const F = 0;

    switch(grad){
      case 'A':
        slow += Number(credit * A);
        point +=Number(credit);
        break;
      case 'B':

        slow += Number(credit * B);
        point += Number(credit);

        break;
      case 'C':
        slow += Number(credit * C);
        point += Number(credit);
        break;
      case 'D':
        slow += Number(credit * D);
        point += Number(credit);
        break;
      case 'E':
        slow += Number(credit * E);
        point += Number(credit) ;
        break;
      case 'F':
        slow += Number(credit * F);
        point +=Number(credit);
        break;

    }

  }
  let total =slow/point;
   
    let maths = Math.floor(total * 10);
   
   let gp = maths.toString()[0]+ '.' + maths.toString()[1];
  if(maths < 15){
      spa.style.color = 'red'
      spa.innerHTML = gp;


  }else if(maths < 25){
    spa.style.color = 'yellow'
    spa.innerHTML = gp;
  }else{
    spa.style.color = 'rgb(221, 221, 69)'
    spa.innerHTML = gp;

  }
  let opt = document.createElement('option');
  opt.value = editee.value;
  opt.innerHTML = editee.value;

  options.appendChild(opt);


  let store5;

   if(localStorage.getItem(`${editee.value}`) == null){
     store5 = []
    }else{
     store5 = JSON.parse(localStorage.getItem(`${editee.value}`))
    }
 
    store5.push(`${cours}${editee.value}`,`${credite}${editee.value}`,`${grad}${editee.value}`)
    localStorage.setItem(`${editee.value}`, JSON.stringify(store5))


  let season;
  if(localStorage.getItem('season') == null){
    season = []
  }else{
    season = JSON.parse(localStorage.getItem('season'))
  }
  season.push(`${editee.value}`)
  localStorage.setItem('season', JSON.stringify(season))

 
}
}

function storeCourse(course,credit,grade,sean){
   let store1;
   let store2;
   let store3;
   
   if(localStorage.getItem(`${credite}${sean}`) == null){
    store1 = []
   }else{
    store1 = JSON.parse(localStorage.getItem(`${credite}${sean}`))
   }

   store1.push(credit)
   localStorage.setItem(`${credite}${sean}`, JSON.stringify(store1))


   if(localStorage.getItem(`${cours}${sean}`) == null){
    store2 = []
   }else{
    store2 = JSON.parse(localStorage.getItem(`${cours}${sean}`))
   }

   store2.push(course)
   localStorage.setItem(`${cours}${sean}`, JSON.stringify(store2))


   if(localStorage.getItem(`${grad}${sean}`) == null){
    store3 = []
   }else{
    store3 = JSON.parse(localStorage.getItem(`${grad}${sean}`))
   }

   store3.push(grade)
   localStorage.setItem(`${grad}${sean}`, JSON.stringify(store3))



   
}


// clearing section
function warrningClear(){
  warrning.classList.remove('war')
     nav.style.pointerEvents = 'all'
     footer.style.pointerEvents = 'all'
     innerGrade.style.pointerEvents = 'all';
  for(let i = 0; i < innerGrade.children.length; i++){
  
   if(innerGrade.children[i].data){
  let  season = JSON.parse(localStorage.getItem('season'))

    season.forEach( opt => {
   if(opt == innerGrade.children[i].data){
    
     let count6 = JSON.parse(localStorage.getItem(opt))

     localStorage.removeItem(count6[0])
     localStorage.removeItem(count6[1])
     localStorage.removeItem(count6[2])
 
    
     localStorage.removeItem(innerGrade.children[i].data)
   
  innerGrade.children[i].data = '';

   remopt(opt)
    season.splice(season.indexOf(opt),1)
     localStorage.setItem('season',JSON.stringify(season))


     

  }
      })
    innerGrade.children[i].remove()

   }
  }
}


function remopt(e){
  for(let a = 0; a < options.children.length; a++){
     if(options.children[a].value == e){

        options.children[a].remove();
        
     }
  }
}

  options.addEventListener('click', e => {
    let tag = e.target;
     if(tag.value == 'edit'){
        editee.classList.add('activea')
        cross.classList.add('activea')
     }else if(tag.value == 'section'){
      editee.classList.remove('activea')
  cross.classList.remove('activea')

     }else{
if(!(options.data == '')){
  options.data = '';
}
    let val = tag.value;

     tag.data = tag.value;
      editee.classList.remove('activea')
      cross.classList.remove('activea')
      
     }
    
});
  


cross.addEventListener('click', () => {
  editee.classList.remove('activea')
  cross.classList.remove('activea')
  editee.value = '';
})

cros.addEventListener('click', () => {
  cros.classList.remove('activea')
  warrning.classList.remove('war')
  nav.style.pointerEvents = 'all'
     footer.style.pointerEvents = 'all'
     innerGrade.style.pointerEvents = 'all';

  for(let i = 0; i < innerGrade.children.length; i++){
  
    if(innerGrade.children[i].data){
      innerGrade.children[i].data = '';
 
       }
   }
})

showInfBtn.addEventListener('click', () => {
  showInf.classList.remove('activea')
homePage.style.pointerEvents = 'all'; 
nav.style.pointerEvents = 'all'
footer.style.pointerEvents = 'all'
})
