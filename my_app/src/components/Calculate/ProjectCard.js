
const ProjectCard = (props) => {

    return (
        <div className="d-flex text-muted pt-3">
            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                xmlns={props.avatar} role="img" aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#e83e8c" /><text x="50%" y="50%" fill="#e83e8c"
                    dy=".3em">32x32</text>
            </svg>
            <p className=" mb-0 small lh-sm border-bottom vw-100">
                <strong className="d-block text-gray-dark">{props.name}</strong>
                {props.description}
            </p>
        </div>
    )
}

export default ProjectCard;