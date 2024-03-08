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
export default function Todo({ task, isDone }) {
  if (isDone) {
    return <li>Finish: {task}</li>;
  }
  return <li>Work one: {task}</li>;
}
