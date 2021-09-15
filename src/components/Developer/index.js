import "./style.css"

const Developer = ({name, age, country}) => {
    return (
        <div className="UserCards">
            <span>
                <label className="dev">Dev: {name}</label>
                <label className="age">Idade: {age}</label>
                <label className="country">País: {country}</label>
            </span>
        </div>
    )
}

export default Developer
