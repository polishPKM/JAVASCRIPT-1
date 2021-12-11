function canGiveBlood(donor,receive){
    accept = "Safe to Transfuse!"
    decline = "Too Dangerous if Allowed!"
    if(donor == "O+" && (receive == "A+"||"O+"||"B+"||"AB+")){
        console.log(accept)
    }
    else if(donor == "A+" && (receive == "A+"||"AB+")){
        console.log(accept)
    }
    else if(donor == "B+" && (receive == "B+"||"AB+")){
        console.log(accept)
    }
    else if(donor == "AB+" && (receive == "AB+")){
        console.log(accept)
    }
    else if(donor == "O-" && (receive == "A+"||"O+"||"B+"||"AB+"||"A-"||"O-"||"B-"||"AB-")){
        console.log(accept)
    }
    else if(donor == "A-" && (receive == "A-"||"A+"||"AB+"||"AB-")){
        console.log(accept)
    }
    else if(donor == "B-" && (receive == "B-"||"B+"||"AB+"||"AB-")){
        console.log(accept)
    }
    else if(donor == "AB-" && (receive == "AB-"||"AB+")){
        console.log(accept)
    }
    else{
        console.log(decline)
    }
};

canGiveBlood("O+", "AB+")