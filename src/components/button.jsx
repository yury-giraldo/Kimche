const Button = (props) => {

    

    const { name } = props;

    return(
        <>
            <button type=' submit' className="bg-primary px-5 py-2 text-white">{name}</button>
        </>
    )

}

export default Button;