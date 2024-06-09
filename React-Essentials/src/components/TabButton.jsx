export default function TabButton({ children, onClick1 }) {
  return (
    <li>
      <button onClick={onClick1}>{children}</button>
      {/*children prop set by react content between tags component composition */}
    </li>
  );
}

/* export default function TabButton({ children, onClick1 }) 
onClick1 - Can be anyname just start with convention "on.", Used onclick to give value to custom component tag, it is just to handle as variable, watch 023 React essentials - passing functions as value to props */
