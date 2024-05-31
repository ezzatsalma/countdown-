#! /usr/bin/env node

import inquirer from "inquirer"

import{differenceInSeconds} from "date-fns"
const responce= await inquirer.prompt(
    {
        name:'responce',
        type:'number',
        message:'input time in second',
      validate:(input)=>{
        if(isNaN(input) ){
          return 'invalid input (press ctrl+c)';
        }else if(input>60){
          return 'input number within 60 (press ctrl+c)'
        }
        else
        {return   true;}
        
        
      }
    }
);
let ans:number=responce.responce;

function timer(val:number){
  const timeInit=new Date().setSeconds(new Date().getSeconds()+val);
  const intervalTime=new Date(timeInit);
setInterval((()=>{

  const currtime=new Date()
  const timediff= differenceInSeconds(intervalTime,currtime);

  if (timediff<=0){
      console.log("timer expired");
      process.exit()
  }

  const min=Math.floor(timediff%(3600*24)/3600)
  const sec=Math.floor(timediff%(60))
  console.log(`${min.toString().padStart(2,"0")}: ${sec.toString().padStart(2,"0")}`);
  
  
  
  }),1000)}

  timer(ans)

// import inquirer from "inquirer";
// import { differenceInSeconds } from "date-fns";

// const response = await inquirer.prompt([
//   {
//     name: 'response',
//     type: 'number',
//     message: 'Input time in seconds'
//   }
// ]);

// let ans = response.response;

// function timing(val: number) {
//   const interval = setInterval(() => {
//     const timeInit = new Date().getTime() + val * 1000;
//     const currTime = new Date().getTime();
//     const timediff = timeInit - currTime;
//     const seconds = Math.floor(timediff / 1000);
    
//     if (seconds <= 0) {
//       console.log("Timer expired");
      
//       process.exit();
//     }
    
//     const min = Math.floor(seconds / 60);
//     const sec = seconds % 60;
//     console.log(`${min}:${sec}`);
//   }, 1000);
// }

// timing(ans);