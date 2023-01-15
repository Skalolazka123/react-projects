function Person(props) {
    const { firstName, lastName, email, img } = props
    return (
        <div className="card">
            <img src={img} alt=""></img>
            <div className="card__text">
                <h3>
                    {firstName} {lastName}
                </h3>
                <h4>{email}</h4>
            </div>
        </div>
    )
}

export default Person
