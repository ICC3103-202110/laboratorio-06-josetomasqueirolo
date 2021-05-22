
// FUNCIONES DE TRANSFORMACIÓN DE TEMPERATURAS
function C_F(temperature){
    return parseFloat(temperature*9/5) + parseFloat(32)
}

function C_K(temperature){
    return parseFloat(temperature) + parseFloat(273.15)
}

function F_C(temperature){
    return parseFloat((temperature-32)*5/9)
}

function F_K(temperature){
    return parseFloat((temperature-32)*5/9) + parseFloat(273.15)
}

function K_C(temperature){
    return parseFloat(temperature) - parseFloat(273.15)
}

function K_F(temperature){
    return parseFloat((temperature-273.15)*9/5) + parseFloat(32)
}

// FUNCIÓN PARA ACTUALIZAR LADO DERECHO DE LA TABLA
async function update1(input2, input3, input4, model){
    const newLeftValue= input2
    const newLeftUnit= input3
    const newRightUnit= input4

    if(input3== "Celcius"){
        if(input4=="Fahrenheit"){
            newRightValue = C_F(input2)
        } 
        else if(input4=="Kelvin"){
            newRightValue = C_K(input2)
        } 
        else if(input4=="Celcius"){
            newRightValue = input2
        } 
    }
    else if(input3== "Fahrenheit"){
        if(input4=="Fahrenheit"){
            newRightValue = input2
        } 
        else if(input4=="Kelvin"){
            newRightValue = F_K(input2)
        } 
        else if(input4=="Celcius"){
            newRightValue = F_C(input2)
        } 
    }
    else if(input3== "Kelvin"){
        if(input4=="Fahrenheit"){
            newRightValue = K_F(input2)
        } 
        else if(input4=="Kelvin"){
            newRightValue = input2
        } 
        else if(input4=="Celcius"){
            newRightValue = K_C(input2)
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

// FUNCIÓN PARA ACTUALIZAR LADO DERECHO DE LA TABLA
async function update2(input2, input3, input4, model){
    const newRightValue= input2
    const newRightUnit= input3
    const newLeftUnit= input4

    if(input3== "Celcius"){
        if(input4=="Fahrenheit"){
            newLeftValue = C_F(input2)
        } 
        else if(input4=="Kelvin"){
            newLeftValue = C_K(input2)
        } 
        else if(input4=="Celcius"){
            newLeftValue = input2
        } 
    }
    else if(input3== "Fahrenheit"){
        if(input4=="Fahrenheit"){
            newLeftValue = input2
        } 
        else if(input4=="Kelvin"){
            newLeftValue = F_K(input2)
        } 
        else if(input4=="Celcius"){
            newLeftValue = F_C(input2)
        } 
    }
    else if(input3== "Kelvin"){
        if(input4=="Fahrenheit"){
            newLeftValue = K_F(input2)
        } 
        else if(input4=="Kelvin"){
            newLeftValue = input2
        } 
        else if(input4=="Celcius"){
            newLeftValue = K_C(input2)
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
    update1,
    update2
}
