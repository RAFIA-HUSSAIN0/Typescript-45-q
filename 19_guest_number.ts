//Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
let guest_list :string[] = ['imran khan', 'nawaz sharif', 'asif ali zardari'];
const message :string = ' \n\nit is our pleasure to invite you in our party.\n\n thank you!'
//for(let i=0; i<guest_list.length; i++){
// console.log('Dear Mr. ' + guest_list[i]  +  message  )
   // }
let absent_guest :string = 'imran khan';
let new_guest :string = 'kamran khan tessori';
guest_list[0] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i]  +  message  )
    }
    console.log(`Mr. ${absent_guest} is not coming in party.`);
    console.log('Good news! we find a big table so we are inviting 3 more guests.') 
    guest_list.unshift('sir zia');
    guest_list.splice(2 , 0 , 'maryam nawaz');
    guest_list.push('bilawal bhutto zardari');
    for(let i=0; i<guest_list.length; i++){
        console.log('Dear Mr. ' + guest_list[i]  +  message  )
        }
//Add a new line that prints a message saying that you can invite only two people for dinner.
console.log('sorry we can not find big table only 2 person will be invited ');
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while(guest_list.length>2){
    let Remove_guest =guest_list.pop();
    console.log('Sorry MR.  ${remove_guest}, you are not invited for dinner.')
}
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i]  + '\nyou are still invited. \nThank you!' )
    }

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your //program.
guest_list.splice(0 , 2);
 console.log(guest_list);

//print a message indicating the number of people you are inviting to dinner.
console.log(`total number of guest: ${guest_list.length}`)
