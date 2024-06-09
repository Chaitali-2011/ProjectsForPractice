// export default function Tabs({ children, buttons, Menucontainer }) {
//   return (
//     <>
//       <Menucontainer>{buttons}</Menucontainer>
//       {children}
//     </>
//   );
// }

export default function Tabs({ children, buttons, Menucontainer = "menu" }) {
  return (
    <>
      <Menucontainer>{buttons}</Menucontainer>
      {children}
    </>
  );
}
