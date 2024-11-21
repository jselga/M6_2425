export function Llista(props) {
    return <table>
        <tbody>
            {props.data.map(item => (
                <tr>
                    <td>{item}</td>
                </tr>
            ))}
        </tbody>
    </table>
}