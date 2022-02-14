const ListInusrances = ({ list }) => {
    return (
        <>
            {
                list.length > 0 ?
                    list.map((item) => {
                        console.log(item.materia_asegurada);
                        return (
                            <>
                                <p>{item.materia_asegurada}</p>
                                <p>N° de póliza: {item.num_poliza}</p>
                            </>
                        );
                    })
                    :
                    <p>No tiene seguros contratados en esta categoría, contrate acá</p>

            }
        </>
    );
}

export default ListInusrances;