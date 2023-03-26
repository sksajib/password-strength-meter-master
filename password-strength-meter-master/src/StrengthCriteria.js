import React from "react";
class StrengthCriteria extends React.Component{
    constructor(props){
        super(props);
        this.state={
            eligible:props.eligible,
            num:props.num,
        specialChar:props.specialChar,
        capital:props.capital,
        ecolor:"red",
        ncolor:"red",
        scolor:"red",
        ccolor:"red"
        }
        this.etext="Minimum 8 characters"
        this.stext="Should contain at least one special character"
        this.ntext="Should contain at least one number"
        this.ctext="Should contain at least one Capital Letter"
    }
    render(){ 
        const {eligible,num,specialChar,capital,ecolor,ncolor,scolor,ccolor}  =this.state;
        if(eligible===1){
            ecolor="green"
            this.etext="Minimum 8 characters ok"
        }
        if(this.num===1){
            this.ncolor="green"
            this.ntext="Should contain at least one special character"
        }
        if(this.specialChar===1){
            this.scolor="green"
            this.stext="Should contain at least one number"
        }
        if(this.capital===1){
            this.ccolor="green"
            this.ctext="Should contain at least one Capital Letter"
        } 
        return(
            <div>
                <p>Please follow Below criterias:{eligible}</p>
                <p style={{color:ecolor}}>{this.etext}{ecolor}</p>
                <p style={{color:this.scolor}}>{this.stext}</p>
                <p style={{color:this.ncolor}}>{this.ntext}</p>
                <p style={{color:this.ccolor}}>{this.ctext}</p>
            </div>
        );
    };
}
export default StrengthCriteria;