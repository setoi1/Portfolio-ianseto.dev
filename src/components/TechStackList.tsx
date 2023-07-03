import TechStackItem from './TechStackItem';

export default function TechStackList(props: any) {

  const techStack = props.techStack;

  return (
    <>
      <ul className="tech-stack-list">
        {techStack.map((tech: string) => (
          <li key={props.id} className="tech-stack-list-item">
            <TechStackItem text={tech}/>
          </li>
        ))}
      </ul>
    </>
  );
};
