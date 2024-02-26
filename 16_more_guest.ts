//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list


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

    console.log('Good news! we find a big table so we are inviting 3 more guests.');

    guest_list.unshift('sir zia');
    guest_list.splice(2 , 0 , 'maryam nawaz');
    guest_list.push('bilawal bhutto zardari');

    for(let i=0; i<guest_list.length; i++){

        console.log('Dear Mr. ' + guest_list[i]  +  message  )
        }