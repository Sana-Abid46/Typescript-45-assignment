

let Guest_list :string[] = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];

for(let i=0; i<Guest_list.length; i++){

console.log('Dear Mr.' + Guest_list[i] + '\n\nIt is our Pleasure to invite you in our party. \n\nThankYou!\n\n')

}

let absent_Guest :string = 'Imran Khan' ;

let new_Guest :string = 'Kamran Tessori' ;

Guest_list[0] = new_Guest ;

for(let i=0; i<Guest_list.length; i++){

console.log('Dear Mr.' + Guest_list[i] + '\n\nIt is our Pleasure to invite you in our party. \n\nThankYou!\n\n')

}
console.log(`Mr. ${absent_Guest} is not coming to the party.`)

