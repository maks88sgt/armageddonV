export function AsteroidsHeader() {


    return (
        <>
            <div>
                <input type="checkbox"
                       className="styled-checkbox_input"
                       checked={false}
                       onChange={() => null}
                />
                Показать только опасные
            </div>
            <div>
                <p>Расстояние <span>в километрах</span>, <span>в дистанциях до луны</span></p>
            </div>
        </>
    );
}
