// const first_name = 'jack';
// const last_name = 'Barbaro';
//
// // console.log(first_name + ' ' + last_name); // es5
//
// console.log(`${first_name} ${last_name}`); // es6

// const getfullName = (user) => {
//     // return "First Name:" + user.first_name + " \n " + "Last Name:" + user.last_name;
//     return `first_name: ${user.first_name} \n last_name: ${user.last_name} `
// };
//
// const user = {
//     first_name: 'jack',
//     last_name: 'Barbaro'
// };
// console.log(getfullName(user));

// spread operator

// const mass = [1,2,3,4,5];
// const mass2 = [...mass];
// console.log(mass2);

// for (let i=0; i < mass.length; i++){
//     mass2.push(mass[i])
// }
// console.log(mass2)

// const  obj = {
//     username: 'jack',
//     age: 19,
//     last_name: 'Sparrow',
//     full_name: 'Jack Sparrow'
// };
//
// const obj2 = {
//     ...obj,
//     key: "value",
//     key2: 'value'
// }
// // const obj2 = [{...obj}];
// console.log(obj2);

//деструктуризация

// const props = {
//     onsubmit: () => {
//         console.log("submit")
//     },
//     data:[
//         {
//             key: 'value'
//         },
//         {
//             key: 'value'
//         },
//         {
//             key: 'value'
//         }
//     ]
// };
//
// const {data, onsubmit} = props;
// console.log(data);
// onsubmit();