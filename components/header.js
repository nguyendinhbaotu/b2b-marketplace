import { Button } from 'primereact/button';

export default function Header() {
    return (
        <header>
            <div className="flex align-items-center">
                <div className="inline-block">
                    <img src={`logo_updated.png`} width="100px"/>
                </div>
                {/* <div className="inline-block"><Button label="HOT SERVICES" className="p-button-text" /></div> */}
                {/* <div className="inline-block"><Button label="REQUEST QUOTES" className="p-button-text" /></div> */}
                {/* <div className="inline-block"><Button label="LOGISTICS COMPANIES" className="p-button-text" /></div> */}
                {/* <div className="inline-block"><Button label="LOGISTICS MARKET" className="p-button-text" /></div> */}
                <div className="ml-auto">
                    <Button label="REGISTER" className="p-button-outlined" />
                    <Button label="SIGN IN" className="ml-1 p-button-rounded" />
                </div>
            </div>
        </header>
    )
}