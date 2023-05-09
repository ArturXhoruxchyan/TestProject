import "./hompage.css";
import React, { useState } from "react";

export default function Home() {
    const [taison, setTaison] = useState(false)
    const [roy, setRoy] = useState(false)
    const [maivezer, setMaivezer] = useState(false)

    return (
        <div>
            <div className="box">
                <div>
                    <div className="match" onClick={() => setTaison((e) => !e)}></div>
                    {taison && <div className="round"><a className="secunds" href="https://www.youtube.com/watch?v=Jnsm0r4YC8c">Taison</a></div>}
                </div>
                <div>
                    <div className="sparing" onClick={() => setRoy((e) => !e)}></div>
                    {roy && <div className="round"><a className="secunds" href="https://www.youtube.com/watch?v=pkMAf0ZHO_k">Roy Jons</a></div>}
                </div>
                <div>
                    <div className="revansh" onClick={() => setMaivezer((e) => !e)}></div>
                    {maivezer && <div className="round"><a className="secunds" href="https://www.youtube.com/watch?v=KxF3T1JNxss">Maivezer</a></div>}
                </div>
            </div>
        </div>
    )
}

