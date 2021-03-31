import "./Jobs.css";

const Jobs = (props) => {
  console.log(props);
  return (
    <div className={`container ${props.data.featured && "featured"}`}>
      <div className="left">
        <img src={props.data.logo} />
        <div className="rows">
          <div className="first_row">
            <h5>{props.data.company}</h5>
            {props.data.new && <span>NEW</span>}
            {props.data.featured && <span>featured</span>}
          </div>
          <h3>{props.data.position}</h3>
          <ul>
            <li>{props.data.postedAt}</li>
            <li>.</li>
            <li>{props.data.contract}</li>
            <li>.</li>
            <li>{props.data.location}</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <ul>
          <li>{props.data.role}</li>
          <li>{props.data.level}</li>
          {props.data.languages.map((laguage) => (
            <li>{laguage}</li>
          ))}
          {props.data.tools.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Jobs;
