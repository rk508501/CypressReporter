
import './commands';

before(()=>{
    cy.log("Before all")
})

export function generateUUID() {
    let hex = [];
    for (let i = 0; i < 36; i++) {
      let random = Math.floor(Math.random() * 16);
      hex.push(random.toString(16));
    }
  
    // Set the version number to 4
    hex[8] = hex[8] & 0x3 | 0x8;
  
    // Set the variant to 10
    hex[13] = hex[13] & 0xF | 0x4;
  
    return hex.join('');
  }