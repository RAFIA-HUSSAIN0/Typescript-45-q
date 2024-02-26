//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.

import { toASCII } from "punycode";

let guest_list :string[] = ['imran khan', 'nawaz sharif', 'asif ali zardari'];

const message :string = ' \n\nit is our pleasure to invite you in our party.\n\n thank you!'

for(let i=0; i<guest_list.length; i++){

console.log('Dear Mr. ' + guest_list[i]  +  message  )
}
let absent_guest :string = 'imran khan';

let new_guest :string = 'kamran khan tessori';

guest_list[0] = new_guest;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i]  +  message  )
    }
    console.log(`Mr. ${absent_guest} is not coming in party.`)
