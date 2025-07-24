const Person = ({name,age,hobby}) => {
    return(
        <div>
            <h1>Hello! MY name is {name}</h1>
            <p>Age:{age}</p>
            <p>Hobby:{hobby}</p>
        </div>
    );
};

export default Person;