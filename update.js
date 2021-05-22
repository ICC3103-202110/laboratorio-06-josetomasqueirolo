function C_F(temperature){
    return (temperature*9/5)+32
}

function C_K(temperature){
    return temperature+273.15
}

function F_C(temperature){
    return (temperature-32)*5/9
}

function F_K(temperature){
    return (temperature-32)*5/9+273.15
}

function K_C(temperature){
    return temperature-273.15
}

function K_F(temperature){
    return (temperature-273.15)*9/5+32
}

function update(input1, input2, input3, input4, model){
    if(input1=="y"){
        const newLeftValue= input2
        const newLeftUnit= input3
        const newRightUnit= input4

        if(input3== "Celcius"){
            if(input4=="Fahrenheit"){
                const newRightValue = C_F(input2)
            } 
            if(input4=="Kelvin"){
                const newRightValue = C_K(input2)
            } 
            if(input4=="Celcius"){
                const newRightValue = input2
            } 
        }
        if(input3== "Fahrenheit"){
            if(input4=="Fahrenheit"){
                const newRightValue = input2
            } 
            if(input4=="Kelvin"){
                const newRightValue = F_K(input2)
            } 
            if(input4=="Celcius"){
                const newRightValue = F_C(input2)
            } 
        }
        if(input3== "Kelvin"){
            if(input4=="Fahrenheit"){
                const newRightValue = K_F(input2)
            } 
            if(input4=="Kelvin"){
                const newRightValue = input2
            } 
            if(input4=="Celcius"){
                const newRightValue = K_C(input2)
            } 
        }
    }
    else{
        const {newRightValue}= input2
        const {newRightUnit}= input3
        const {newLefttUnit}= input4

        if(input3== "Celcius"){
            if(input4=="Fahrenheit"){
                const newLeftValue = C_F(input2)
            } 
            if(input4=="Kelvin"){
                const newLeftValue = C_K(input2)
            } 
            if(input4=="Celcius"){
                const newLeftValue = input2
            } 
        }
        if(input3== "Fahrenheit"){
            if(input4=="Fahrenheit"){
                const newLeftValue = input2
            } 
            if(input4=="Kelvin"){
                const newLeftValue = F_K(input2)
            } 
            if(input4=="Celcius"){
                const newLeftValue = F_C(input2)
            } 
        }
        if(input3== "Kelvin"){
            if(input4=="Fahrenheit"){
                const newLeftValue = K_F(input2)
            } 
            if(input4=="Kelvin"){
                const newLeftValue = input2
            } 
            if(input4=="Celcius"){
                const newLeftValue = K_C(input2)
            } 
        }
    }
    
    return {
        ...model,
        leftValue: newLeftValue,
        leftUnit: newLeftUnit,
        rightValue: newRightValue,
        rightUnit: newRightUnit
    }

}
module.exports = {
    update
}