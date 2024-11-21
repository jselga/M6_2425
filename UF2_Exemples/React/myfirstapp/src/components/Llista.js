export function Llista(props) {
    let r = [];
    for(let item of props.data){
        r.push(
            <tr>
                <td>{item}</td>
            </tr>
        )
    }
    return <table>{r}</table>
}