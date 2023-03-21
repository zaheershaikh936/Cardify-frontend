import react from 'react';

type ListType = {
    ul_className: string,
    li_className: string,
    data: string[]
}

const List = (props: ListType) => {
    console.log(props.data);

    return (
        <>
            <ul className={props.ul_className}>
                {props.data.map((menu) => {
                    return (
                        <li className={props.li_className}>{menu}</li>
                    )
                })}
            </ul>
        </>
    );
}

export default List;


