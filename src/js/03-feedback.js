import throttle from 'lodash.throttle';
const THROTTLE_DELAY = 500
const formRef = document.querySelector(".feedback-form")
const LOCAL_STORAGE_KEY = '"feedback-form-state"'
const formData = {}

console.log(formRef)
innitPage()
function onFormInput(e) {
    const {name,value} = e.target;
    console.log('asd')
try {
    let saveData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saveData) {
        saveData = JSON.parse(saveData)        
    }
    else{
        saveData = { }
    }
    saveData[name] = value;
    const stringifyData = JSON.stringify(saveData)
    localStorage.setItem(LOCAL_STORAGE_KEY,stringifyData)
} catch (error) {
    
}
  
}
formRef.addEventListener('input',onFormInput);
const throttledonFormInput = throttle(onFormInput,THROTTLE_DELAY);
function innitPage() {
    const saveData = localStorage.getItem(LOCAL_STORAGE_KEY)
    
    if (saveData) {
        try {
            const parseData = JSON.parse(saveData);
            Object.entries(parseData).forEach(([name,value]) =>{
                console.log(name)
                console.log(value )
                formRef.elements[name].value = value

            })
            
        } catch (error) {
            console.error(error)
        }
    }
}

