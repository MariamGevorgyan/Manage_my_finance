export default function App(props) {
    return (
        <div className="cart">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <image href={props.icon} height="30" width="30" />
            </svg>
            <div className="card_type_money">
                <span className="card_type">{props.type}</span>
                <span className="card_money">{props.money}</span>
            </div>
        </div>
    )
}
