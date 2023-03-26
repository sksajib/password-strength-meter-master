import React from "react";
import "./StrengthCriteria"
import StrengthCriteria from "./StrengthCriteria";

const GetStrength=(props)=>{
    let strength=0;
    let newLabel='';
    let newPassword=props.newPassword;
    let eligible=0;
    let specialChar=0;
    let num=0;
    let capital=0;
    if (newPassword.length<8 || newPassword===''){
        strength=0;
        newLabel='';
    }
    if(newPassword.length>=8){
        eligible=1;
        newLabel="Very Weak";
        strength=25;
    }
    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(newPassword) ) {
        specialChar=1;
    }
    if (/\d/.test(newPassword) ) {
        num=1;
    }
    if(/[A-Z]/.test(newPassword) ){
        capital=1;
    }
    if(eligible===1 && (capital===1 || num===1 || specialChar===1)){
        if(capital===1 && num===1 && specialChar===1){
            strength=100;
            newLabel="Very Strong";
        }
        else if((capital===1 && num===1)||(num===1 && specialChar===1)||(capital===1 && specialChar===1)){
            strength=75;
            newLabel="Strong"
        }
        else{
            strength=50;
            newLabel="Weak";
        }
    }
    
        let color;
        let ecolor,scolor,ncolor,ccolor="red"
      
        if (strength ===100) {
          color = "green";
        } else if (strength ===75) {
          color = "blue";
        } else if (strength === 50) {
          color = "yellow";
        } else if(strength===25){
          color = "red";
        }
        if(eligible===1){
            ecolor="green"
        }else{
            ecolor="red"
        }
        if(specialChar===1){
            scolor="green"
        }else{
            scolor="red"
        }
        if(num===1){
            ncolor="green"
        }else{
            ncolor="red"
        }
        if(capital===1){
            ccolor="green"
        }else{
            ccolor="red"
        }
    return(
        
        <div>
            <progress value={strength}  max='100' id="pg" >
                </progress>
            <label htmlFor="pg" style={{color:color}}>{newLabel}</label>
            <br/><div>Please follow Below criterias:</div>
            <label htmlFor="pg" style={{color:ecolor}}>Minimum 8 characters</label><br/>
            <label htmlFor="pg" style={{color:ccolor}}>Should contain at least one Capital Letter</label><br/>
            <label htmlFor="pg" style={{color:ncolor}}>Should contain at least one numeric</label><br/>
            <label htmlFor="pg" style={{color:scolor}}>Should contain at least one special character</label>
            {// <StrengthCriteria eligible={eligible} num={num} specialChar={specialChar} capital={capital}/>
            }
            
        </div>
    );
}
export default GetStrength;