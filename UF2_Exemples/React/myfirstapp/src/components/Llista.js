export function Llista(props) {
    return <table>
        <tbody>
            {props.data.map(item => (
                <tr key={item}>
                    <td >{item}</td>
                </tr>
            ))}
        </tbody>
    </table>
}