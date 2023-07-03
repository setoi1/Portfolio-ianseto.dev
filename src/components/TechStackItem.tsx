import './styles/TechStack.css';

export default function TechStackItem(props: any) {
  return (
    <>
      <div className='tech-stack-item'>
        {props.text}
      </div>
    </>
  );
};
