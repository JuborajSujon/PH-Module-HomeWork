// export default function Todo({ task, isDone }) {
//   return (
//     <div>
//       <ul>
//         <li>Task: {task}</li>
//       </ul>
//     </div>
//   );
// }

//conditional rendering option 1
// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finish: {task}</li>;
//   } else {
//     return <li>Work one: {task}</li>;
//   }
// }

//conditional rendering option 2
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finish: {task}</li>;
//   }
//   return <li>Work one: {task}</li>;
// }

//conditional rendering option 3 : tarnery operator
// export default function Todo({ task, isDone }) {
//   return <li>{isDone ? `Finish: ${task}` : `Work one: ${task}`}</li>;
// }

//conditional rendering option 4
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? `Finish:` : `Work one:`} : {task}
//     </li>
//   );
// }

// conditional rendering option 5 : &&
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task}
//       {isDone && ":Done"}
//     </li>
//   );
// }

// conditional rendering option 5 : ||
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task}
//       {isDone || ":Do it"}
//     </li>
//   );
// }

//conditional rendering option 6 : use variable
export default function Todo({ task, isDone }) {
  let listItem;
  if (isDone) {
    listItem = <li>Finish: {task}</li>;
  } else {
    listItem = <li>Work one: {task}</li>;
  }
  return listItem;
}
